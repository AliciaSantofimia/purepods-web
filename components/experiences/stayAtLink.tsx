import type { ReactNode } from "react";

const PREFIX = "Stay at ";
const SUFFIX = " →";

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
  if (
    label.startsWith(PREFIX) &&
    label.endsWith(SUFFIX) &&
    label.length > PREFIX.length + SUFFIX.length
  ) {
    const pod = label.slice(PREFIX.length, -SUFFIX.length);
    return (
      <a className={className} href={href} target="_blank" rel="noopener noreferrer">
        {PREFIX}
        <strong className="journey-pod-name">{pod}</strong>
        {SUFFIX}
      </a>
    );
  }
  return (
    <a className={className} href={href} target="_blank" rel="noopener noreferrer">
      {label}
    </a>
  );
}
