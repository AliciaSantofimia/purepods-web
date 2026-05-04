"use client";

import { useMemo, useState } from "react";
import {
  getNightFallsCalendarRows,
  type NightFallsCalendarRow,
} from "@/lib/experiencesData/nightFallsCalendar";

function Table({ rows }: { rows: NightFallsCalendarRow[] }) {
  return (
    <div className="moonTable">
      {rows.map((r) => (
        <div className="moonRow" key={r[0] + r[1]}>
          <div>{r[0]}</div>
          <div>{r[1]}</div>
          <div dangerouslySetInnerHTML={{ __html: r[2] }} />
          <div>
            <a
              className="moonBook"
              href="https://purepods.com/booking/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Book
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}

export function NightFallsMoonTabs() {
  const [tab, setTab] = useState<"dark" | "full" | "dust">("dark");
  const rows = useMemo(() => getNightFallsCalendarRows(), []);

  return (
    <section className="section" id="calendario">
      <div className="sectionHeader">
        <h2>Follow the Moon</h2>
        <p className="hint">Find the perfect moment</p>
      </div>

      <div className="moonBox">
        <div className="moonHead">
          <div>
            <h3>Night Falls Calendar</h3>
            <p>Explore the best dates for each stargazing experience.</p>
          </div>
        </div>

        <div
          className="moonTabs"
          role="tablist"
          aria-label="Night Falls calendar"
        >
          <button
            className={`moonTab${tab === "dark" ? " is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={tab === "dark"}
            onClick={() => setTab("dark")}
          >
            Dark sky
          </button>
          <button
            className={`moonTab${tab === "full" ? " is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={tab === "full"}
            onClick={() => setTab("full")}
          >
            Full moon
          </button>
          <button
            className={`moonTab${tab === "dust" ? " is-active" : ""}`}
            type="button"
            role="tab"
            aria-selected={tab === "dust"}
            onClick={() => setTab("dust")}
          >
            Meteor showers
          </button>
        </div>

        <div
          className={`moonPanel${tab === "dark" ? " is-active" : ""}`}
          role="tabpanel"
          id="tab-dark"
        >
          <h4>Deep-sky forecast (11 months)</h4>
          <p className="moonSub">
            When the moon disappears, the sky reaches peak darkness. This is the
            best time to observe the Milky Way and deep-sky objects.
          </p>
          <Table rows={rows.dark} />
        </div>

        <div
          className={`moonPanel${tab === "full" ? " is-active" : ""}`}
          role="tabpanel"
          id="tab-full"
        >
          <h4>Full moon forecast (11 months)</h4>
          <p className="moonSub">
            When the moon lights the landscape, the sky changes character.
            Fainter stars disappear, but the land glows in silver light.
          </p>
          <Table rows={rows.full} />
        </div>

        <div
          className={`moonPanel${tab === "dust" ? " is-active" : ""}`}
          role="tabpanel"
          id="tab-dust"
        >
          <h4>Meteor showers</h4>
          <p className="moonSub">
            Nights filled with brief flashes of light as meteors streak across
            the sky.
          </p>
          <Table rows={rows.dust} />
        </div>
      </div>
    </section>
  );
}
