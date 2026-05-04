import { SearchMoonPhase } from "astronomy-engine";

export type MoonPhaseName = "new" | "firstQuarter" | "full" | "lastQuarter";

export type MoonPhaseEvent = {
  phase: MoonPhaseName;
  iso: string;
  nzDate: string;
};

export type MeteorShowerEvent = {
  name: string;
  peakStartIso: string;
  peakEndIso: string;
  peakStartNzDate: string;
  peakEndNzDate: string;
  rate: string;
};

export type NightFallsCalendarEvents = {
  newMoons: MoonPhaseEvent[];
  fullMoons: MoonPhaseEvent[];
  meteorShowers: MeteorShowerEvent[];
};

type MeteorShowerDefinition = {
  name: string;
  peakStart: { month: number; day: number };
  peakEnd: { month: number; day: number };
  rate: string;
};

const NZ_TIME_ZONE = "Pacific/Auckland";
const DAY_MS = 24 * 60 * 60 * 1000;

const MOON_PHASE_LONGITUDE: Record<MoonPhaseName, number> = {
  new: 0,
  firstQuarter: 90,
  full: 180,
  lastQuarter: 270,
};

const METEOR_SHOWERS: MeteorShowerDefinition[] = [
  {
    name: "Quadrantids",
    peakStart: { month: 1, day: 3 },
    peakEnd: { month: 1, day: 4 },
    rate: "60–120 per hour",
  },
  {
    name: "Lyrids",
    peakStart: { month: 4, day: 21 },
    peakEnd: { month: 4, day: 22 },
    rate: "10–20 per hour",
  },
  {
    name: "Eta Aquariids",
    peakStart: { month: 5, day: 5 },
    peakEnd: { month: 5, day: 6 },
    rate: "50–80 per hour",
  },
  {
    name: "Delta Aquariids",
    peakStart: { month: 7, day: 29 },
    peakEnd: { month: 7, day: 30 },
    rate: "15–25 per hour",
  },
  {
    name: "Perseids",
    peakStart: { month: 8, day: 12 },
    peakEnd: { month: 8, day: 13 },
    rate: "60–100 per hour",
  },
  {
    name: "Orionids",
    peakStart: { month: 10, day: 21 },
    peakEnd: { month: 10, day: 22 },
    rate: "15–20 per hour",
  },
  {
    name: "Leonids",
    peakStart: { month: 11, day: 17 },
    peakEnd: { month: 11, day: 18 },
    rate: "10–15 per hour",
  },
  {
    name: "Geminids",
    peakStart: { month: 12, day: 13 },
    peakEnd: { month: 12, day: 14 },
    rate: "120–150 per hour",
  },
  {
    name: "Ursids",
    peakStart: { month: 12, day: 21 },
    peakEnd: { month: 12, day: 22 },
    rate: "5–10 per hour",
  },
];

function nzDateParts(date: Date) {
  const parts = new Intl.DateTimeFormat("en-NZ", {
    timeZone: NZ_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).formatToParts(date);

  const value = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((part) => part.type === type)?.value ?? "";

  return {
    year: Number(value("year")),
    month: Number(value("month")),
    day: Number(value("day")),
  };
}

function nzDateKey(date: Date) {
  const { year, month, day } = nzDateParts(date);
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function dateKeyToNoonUtc(dateKey: string) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return new Date(Date.UTC(year, month - 1, day, 12));
}

function utcDateKey(date: Date) {
  return `${date.getUTCFullYear()}-${String(date.getUTCMonth() + 1).padStart(2, "0")}-${String(date.getUTCDate()).padStart(2, "0")}`;
}

function addDaysToDateKey(dateKey: string, days: number) {
  return utcDateKey(new Date(dateKeyToNoonUtc(dateKey).getTime() + days * DAY_MS));
}

function compareDateKeys(a: string, b: string) {
  return a.localeCompare(b);
}

function addMonthsToDateKey(dateKey: string, months: number) {
  const [year, month, day] = dateKey.split("-").map(Number);
  return utcDateKey(new Date(Date.UTC(year, month - 1 + months, day, 12)));
}

function phaseEvent(phase: MoonPhaseName, date: Date): MoonPhaseEvent {
  return {
    phase,
    iso: date.toISOString(),
    nzDate: nzDateKey(date),
  };
}

function upcomingMoonPhase(
  phase: MoonPhaseName,
  startDate: Date,
  endDate: Date,
) {
  const events: MoonPhaseEvent[] = [];
  let searchStart = new Date(startDate.getTime() - 2 * DAY_MS);

  while (searchStart.getTime() <= endDate.getTime()) {
    const found = SearchMoonPhase(
      MOON_PHASE_LONGITUDE[phase],
      searchStart,
      40,
    );
    if (!found) break;

    const foundDate = found.date;

    if (foundDate.getTime() > endDate.getTime()) break;
    if (foundDate.getTime() >= startDate.getTime()) {
      events.push(phaseEvent(phase, foundDate));
    }

    searchStart = new Date(foundDate.getTime() + DAY_MS);
  }

  return events;
}

function annualDateKey(year: number, month: number, day: number) {
  return `${year}-${String(month).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
}

function annualMeteorEvents(startKey: string, endKey: string): MeteorShowerEvent[] {
  const startYear = Number(startKey.slice(0, 4));
  const endYear = Number(endKey.slice(0, 4));
  const events: MeteorShowerEvent[] = [];

  for (let year = startYear; year <= endYear; year += 1) {
    METEOR_SHOWERS.forEach((shower) => {
      const peakStartNzDate = annualDateKey(
        year,
        shower.peakStart.month,
        shower.peakStart.day,
      );
      const peakEndNzDate = annualDateKey(year, shower.peakEnd.month, shower.peakEnd.day);

      if (
        compareDateKeys(peakEndNzDate, startKey) < 0 ||
        compareDateKeys(peakStartNzDate, endKey) > 0
      ) {
        return;
      }

      events.push({
        name: shower.name,
        peakStartIso: dateKeyToNoonUtc(peakStartNzDate).toISOString(),
        peakEndIso: dateKeyToNoonUtc(peakEndNzDate).toISOString(),
        peakStartNzDate,
        peakEndNzDate,
        rate: shower.rate,
      });
    });
  }

  return events.sort((a, b) =>
    a.peakStartNzDate.localeCompare(b.peakStartNzDate),
  );
}

export function getUpcomingFullMoons(startDate: Date, endDate: Date) {
  return upcomingMoonPhase("full", startDate, endDate);
}

export function getUpcomingNewMoons(startDate: Date, endDate: Date) {
  return upcomingMoonPhase("new", startDate, endDate);
}

export function getUpcomingFirstQuarterMoons(startDate: Date, endDate: Date) {
  return upcomingMoonPhase("firstQuarter", startDate, endDate);
}

export function getUpcomingLastQuarterMoons(startDate: Date, endDate: Date) {
  return upcomingMoonPhase("lastQuarter", startDate, endDate);
}

export function getNightFallsCalendarEvents(
  startDate = new Date(),
  monthsAhead = 11,
): NightFallsCalendarEvents {
  const startKey = nzDateKey(startDate);
  const endKey = addMonthsToDateKey(startKey, monthsAhead);
  const endDate = new Date(dateKeyToNoonUtc(endKey).getTime() + DAY_MS / 2);

  return {
    newMoons: getUpcomingNewMoons(startDate, endDate),
    fullMoons: getUpcomingFullMoons(startDate, endDate),
    meteorShowers: annualMeteorEvents(startKey, endKey),
  };
}

export const moonPhaseDateUtils = {
  addDaysToDateKey,
  dateKeyToNoonUtc,
  nzDateKey,
};
