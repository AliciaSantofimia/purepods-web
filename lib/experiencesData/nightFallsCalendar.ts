import {
  getNightFallsCalendarEvents,
  moonPhaseDateUtils,
  type MeteorShowerEvent,
  type MoonPhaseEvent,
} from "@/lib/astronomy/moonPhases";

export type NightFallsCalendarRow = [string, string, string];

type CalendarEvent = {
  dateKey: string;
  label: string;
  note: string;
};

const FULL_MOON_NAMES: Record<number, string> = {
  0: "Wolf Moon",
  1: "Snow Moon",
  2: "Worm Moon",
  3: "Pink Moon",
  4: "Flower Moon",
  5: "Strawberry Moon",
  6: "Buck Moon",
  7: "Sturgeon Moon",
  8: "Harvest Moon",
  9: "Hunter’s Moon",
  10: "Beaver Moon",
  11: "Cold Moon",
};

function dateKeyParts(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return { year, month, day };
}

function formatMonth(dateKey: string) {
  return new Intl.DateTimeFormat("en-NZ", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(moonPhaseDateUtils.dateKeyToNoonUtc(dateKey));
}

function formatDay(dateKey: string) {
  return new Intl.DateTimeFormat("en-NZ", {
    day: "numeric",
    month: "short",
    timeZone: "UTC",
  }).format(moonPhaseDateUtils.dateKeyToNoonUtc(dateKey));
}

function dateRangeLabel(startKey: string, endKey: string) {
  const start = dateKeyParts(startKey);
  const end = dateKeyParts(endKey);
  const sameMonth = start.year === end.year && start.month === end.month;

  if (!sameMonth) {
    return `${formatDay(startKey)}–${formatDay(endKey)}`;
  }

  return `${start.day}–${formatDay(endKey)}`;
}

function darkSkyNote(dateKey: string) {
  const { month } = dateKeyParts(dateKey);
  const monthIndex = month - 1;

  if (monthIndex === 2 || monthIndex === 8) {
    return "<strong>Equinox (aurora peak period)</strong>";
  }

  if (monthIndex === 5) return "Longest nights of the year";
  if (monthIndex === 6) return "Deep winter clarity";
  if (monthIndex === 7) return "Winter Milky Way visibility";
  if (monthIndex === 10) return "Early summer stars";
  if (monthIndex === 11) return "Summer Milky Way visibility";

  return "Perfect dark skies";
}

function fullMoonNote(dateKey: string, hasSecondFullMoonInMonth: boolean) {
  if (hasSecondFullMoonInMonth) return "<strong>Blue Moon month</strong>";
  return FULL_MOON_NAMES[dateKeyParts(dateKey).month - 1] ?? "Full Moon";
}

function groupEventsByMonth(events: CalendarEvent[]): NightFallsCalendarRow[] {
  const rows = new Map<string, CalendarEvent[]>();

  events.forEach((event) => {
    const { year, month } = dateKeyParts(event.dateKey);
    const key = `${year}-${month}`;
    const monthEvents = rows.get(key) ?? [];
    monthEvents.push(event);
    rows.set(key, monthEvents);
  });

  return Array.from(rows.values()).map((monthEvents) => {
    const sorted = monthEvents.sort((a, b) => a.dateKey.localeCompare(b.dateKey));
    return [
      formatMonth(sorted[0].dateKey),
      sorted.map((event) => event.label).join(" & "),
      sorted.map((event) => event.note).join("<br />"),
    ];
  });
}

function buildDarkSkyRows(newMoons: MoonPhaseEvent[]): NightFallsCalendarRow[] {
  return groupEventsByMonth(
    newMoons.map((event) => {
      const startKey = moonPhaseDateUtils.addDaysToDateKey(event.nzDate, -2);
      const endKey = moonPhaseDateUtils.addDaysToDateKey(event.nzDate, 2);

      return {
        dateKey: event.nzDate,
        label: dateRangeLabel(startKey, endKey),
        note: darkSkyNote(event.nzDate),
      };
    }),
  );
}

function buildFullMoonRows(fullMoons: MoonPhaseEvent[]): NightFallsCalendarRow[] {
  const monthCounts = fullMoons.reduce<Record<string, number>>((counts, event) => {
    const { year, month } = dateKeyParts(event.nzDate);
    const key = `${year}-${month}`;
    counts[key] = (counts[key] ?? 0) + 1;
    return counts;
  }, {});

  return groupEventsByMonth(
    fullMoons.map((event) => {
      const { year, month } = dateKeyParts(event.nzDate);
      const key = `${year}-${month}`;
      return {
        dateKey: event.nzDate,
        label: formatDay(event.nzDate),
        note: fullMoonNote(event.nzDate, monthCounts[key] > 1),
      };
    }),
  );
}

function buildMeteorRows(events: MeteorShowerEvent[]): NightFallsCalendarRow[] {
  return groupEventsByMonth(
    events.map((event) => ({
      dateKey: event.peakStartNzDate,
      label: dateRangeLabel(event.peakStartNzDate, event.peakEndNzDate),
      note: `${event.name}<br />${event.rate}`,
    })),
  );
}

export function getNightFallsCalendarRows(now = new Date()) {
  const events = getNightFallsCalendarEvents(now, 11);

  return {
    dark: buildDarkSkyRows(events.newMoons),
    full: buildFullMoonRows(events.fullMoons),
    dust: buildMeteorRows(events.meteorShowers),
  };
}
