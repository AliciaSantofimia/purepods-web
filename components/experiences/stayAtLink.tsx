"use client";

import Link from "next/link";
import type { ReactNode } from "react";

const PREFIX = "Stay at ";
const SUFFIX = " →";

function isInternalPath(href: string) {
  return href.startsWith("/") && !href.startsWith("//");
}

/** Renders "Stay at **Name** →" when label matches the HTML pattern. */
export function StayAtLink({
  href,
  label,
  className,
}: {
  href: string;
  label: string;
  className?: string;
}): ReactNode {
  const inner =
    label.startsWith(PREFIX) &&
    label.endsWith(SUFFIX) &&
    label.length > PREFIX.length + SUFFIX.length ? (
      <>
        {PREFIX}
        <strong className="journey-pod-name">
          {label.slice(PREFIX.length, -SUFFIX.length)}
        </strong>
        {SUFFIX}
      </>
    ) : (
      label
    );

  if (isInternalPath(href)) {
    return (
      <Link className={className} href={href}>
        {inner}
      </Link>
    );
  }

  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {inner}
    </a>
  );
}
