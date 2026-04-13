"use client";

import { useState } from "react";

type Row = [string, string, string];

const darkRows: Row[] = [
  ["February 2026", "17 Feb", "Perfect dark skies"],
  ["March 2026", "19 Mar", "<strong>Equinox (aurora peak period)</strong>"],
  ["April 2026", "18 Apr", "Milky Way core rising (autumn skies)"],
  ["May 2026", "17 May", "Crisp skies and winter constellations"],
  ["June 2026", "16 Jun", "Longest nights of the year"],
  ["July 2026", "15 Jul", "Deep winter clarity"],
  ["August 2026", "13 Aug", "<strong>Perseids meteor shower peak</strong>"],
  ["September 2026", "12 Sep", "<strong>Equinox (aurora peak period)</strong>"],
  ["October 2026", "11 Oct", "Spring constellations emerging"],
  ["November 2026", "10 Nov", "Early summer stars"],
  ["December 2026", "9 Dec", "<strong>Geminids meteor shower peak</strong>"],
  ["January 2027", "8 Jan", "Summer Milky Way visibility"],
];

const fullRows: Row[] = [
  ["February 2026", "2 Feb", "Snow Moon"],
  ["March 2026", "4 Mar", "<strong>Blood Moon (total eclipse)</strong>"],
  ["April 2026", "2 Apr", "Pink Moon"],
  ["May 2026", "1 & 31 May", "<strong>Blue Moon month</strong>"],
  ["June 2026", "29 Jun", "Strawberry Moon"],
  ["July 2026", "29 Jul", "Buck Moon"],
  ["August 2026", "28 Aug", "Sturgeon Moon"],
  ["September 2026", "27 Sep", "Harvest Moon"],
  ["October 2026", "26 Oct", "Hunter’s Moon"],
  ["November 2026", "24 Nov", "<strong>Beaver Supermoon</strong>"],
  ["December 2026", "24 Dec", "<strong>Christmas Eve Full Moon</strong>"],
  ["January 2027", "23 Jan", "Wolf Moon"],
];

const dustRows: Row[] = [
  ["Eta Aquariids", "5–6 May", "50–80 per hour"],
  ["Perseids", "12–13 Aug", "60–100 per hour"],
  ["Geminids", "14–15 Dec", "120–150 per hour"],
];

function Table({ rows }: { rows: Row[] }) {
  return (
    <div className="moonTable">
      {rows.map((r) => (
        <div className="moonRow" key={r[0] + r[1]}>
          <div>{r[0]}</div>
          <div>{r[1]}</div>
          <div dangerouslySetInnerHTML={{ __html: r[2] }} />
          <div>
            <a className="moonBook" href="https://purepods.com/booking/?cart=Checkout" target="_blank" rel="noopener noreferrer">
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

        <div className="moonTabs" role="tablist" aria-label="Night Falls calendar">
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

        <div className={`moonPanel${tab === "dark" ? " is-active" : ""}`} role="tabpanel" id="tab-dark">
          <h4>Deep-sky forecast (12 months)</h4>
          <p className="moonSub">
            When the moon disappears, the sky reaches peak darkness. This is the best time to observe the Milky Way and
            deep-sky objects.
          </p>
          <Table rows={darkRows} />
        </div>

        <div className={`moonPanel${tab === "full" ? " is-active" : ""}`} role="tabpanel" id="tab-full">
          <h4>Full moon forecast (12 months)</h4>
          <p className="moonSub">
            When the moon lights the landscape, the sky changes character. Fainter stars disappear, but the land glows in
            silver light.
          </p>
          <Table rows={fullRows} />
        </div>

        <div className={`moonPanel${tab === "dust" ? " is-active" : ""}`} role="tabpanel" id="tab-dust">
          <h4>Meteor showers</h4>
          <p className="moonSub">Nights filled with brief flashes of light as meteors streak across the sky.</p>
          <Table rows={dustRows} />
        </div>
      </div>
    </section>
  );
}
