"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function RomanticBookingClient() {
  const [panelOpen, setPanelOpen] = useState(false);
  const [searched, setSearched] = useState(false);

  return (
    <section className="cta" id="cta">
      <div className="wrap cta-inner">
        <div className="cta-panel">
          <div className="cta-icon" aria-hidden="true">
            ♥
          </div>
          <p className="cta-kicker">Ready to write your story?</p>
          <p className="cta-text">
            The perfect moment is waiting. A place where time stands still, where it&apos;s just the two of you — and
            nature does the rest.
          </p>
          <div className="cta-actions">
            <button className="btn btn-primary" type="button" onClick={() => setPanelOpen((v) => !v)}>
              See available PurePods →
            </button>
          </div>
          <p className="cta-note">Every moment counts. Don&apos;t wait to make yours.</p>

          <div className="booking-panel" style={{ display: panelOpen ? "block" : "none" }}>
            <div className="booking-fields">
              <div className="field">
                <label htmlFor="checkin">Check-in</label>
                <input id="checkin" type="date" defaultValue="2026-02-12" />
              </div>
              <div className="field">
                <label htmlFor="checkout">Check-out</label>
                <input id="checkout" type="date" defaultValue="2026-02-13" />
              </div>
              <button className="btn" type="button" onClick={() => setSearched(true)}>
                Check availability
              </button>
            </div>
            {searched ? (
              <div className="booking-results">
                <p>
                  <strong>PurePods available for your dates:</strong>
                </p>
                <div className="pods-cards">
                  <Link className="pod-card" href="https://purepods.com/booking/?force_site_id=3">
                    <div className="pod-thumb">
                      <Image
                        src="/assets/img/greystone/greystone-purepod-glass-cabin-exterior-waipara.jpg"
                        alt="Greystone PurePod in Central Otago"
                        width={184}
                        height={184}
                      />
                    </div>
                    <div className="pod-meta">
                      <p className="pod-location">Central Otago</p>
                      <p className="pod-name">Greystone</p>
                      <p className="pod-desc">Expansive views, long sunsets and a glass pod immersed in nature.</p>
                      <span className="pod-cta">Book now →</span>
                    </div>
                  </Link>
                  <Link className="pod-card" href="https://purepods.com/booking/?force_site_id=2">
                    <div className="pod-thumb">
                      <Image
                        src="/assets/img/manakau/kaikoura-river-valley-landscape.jpg"
                        alt="Manakau PurePod near Kaikōura"
                        width={184}
                        height={184}
                      />
                    </div>
                    <div className="pod-meta">
                      <p className="pod-location">Kaikōura</p>
                      <p className="pod-name">Manakau</p>
                      <p className="pod-desc">
                        A secluded glass cabin with sweeping countryside views and star-filled skies.
                      </p>
                      <span className="pod-cta">Book now →</span>
                    </div>
                  </Link>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
