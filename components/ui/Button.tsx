import { ReactNode } from "react";
import Link from "next/link";
import styles from "./Button.module.css";

type ButtonVariant = "primary" | "secondary";

interface BaseProps {
  children: ReactNode;
  variant?: ButtonVariant;
  className?: string;
}

interface ButtonAsButton extends BaseProps {
  href?: never;
  external?: never;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
}

interface ButtonAsLink extends BaseProps {
  href: string;
  external?: boolean;
  onClick?: () => void;
}

type ButtonProps = ButtonAsButton | ButtonAsLink;

function isLinkProps(props: ButtonProps): props is ButtonAsLink {
  return "href" in props && typeof props.href === "string";
}

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "" } = props;
  const classNames = `${styles.btn} ${styles[variant]} ${className}`.trim();

  if (isLinkProps(props)) {
    const { href, external } = props;
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className={classNames}
        >
          {children}
        </a>
      );
    }
    return <Link href={href} className={classNames}>{children}</Link>;
  }

  const { onClick, type = "button", disabled } = props;
  return (
    <button
      type={type}
      className={classNames}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}
