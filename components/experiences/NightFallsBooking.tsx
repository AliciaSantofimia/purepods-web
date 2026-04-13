"use client";

import { useState } from "react";

export function NightFallsBooking() {
  const [open, setOpen] = useState(false);

  return (
    <div className="booking">
      <div className="bookingTop">
        <strong>Want a PurePod that’s perfect for Night Falls?</strong>
        <button className="bookingBtn" type="button" onClick={() => setOpen((v) => !v)}>
          See available PurePods →
        </button>
      </div>
      <div className="bookingPanel" style={{ display: open ? "block" : "none" }}>
        <div className="fields">
          <div className="field">
            <label htmlFor="nf-checkin">Check-in</label>
            <input id="nf-checkin" type="date" />
          </div>
          <div className="field">
            <label htmlFor="nf-checkout">Check-out</label>
            <input id="nf-checkout" type="date" />
          </div>
        </div>
        <div className="bookingResults">
          <strong>Available PurePods for your dates:</strong>
          <br />
          Select check-in and check-out to see real-time availability.
          <br />
          <span style={{ color: "rgba(92,95,62,.72)", fontSize: 12.5 }}>
            (Demo) This will later connect to the Nesbook API to display live availability.
          </span>
        </div>
      </div>
    </div>
  );
}
