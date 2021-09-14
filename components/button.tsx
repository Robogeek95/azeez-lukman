import clsx from "clsx";
import * as React from "react";
import { AnchorOrLink } from "../utils/misc";

interface ButtonProps {
  variant?: "primary" | "secondary";
  size?: "medium" | "large";
  children: React.ReactNode | React.ReactNode[];
}

function getClassName({ className }: { className?: string }) {
  return clsx(
    "group relative inline-flex text-lg font-medium focus:outline-none opacity-100 disabled:opacity-50 transition",
    className
  );
}

function ButtonInner({
  children,
  variant,
  size,
}: Pick<ButtonProps, "children" | "variant" | "size">) {
  return (
    <>
      <div
        className={clsx(
          "focus-ring absolute inset-0 rounded-full opacity-100 disabled:opacity-50 transform transition",
          {
            "border-2 border-blue-400 bg-primary group-hover:border-transparent group-focus:border-transparent":
              variant === "secondary",
            "bg-black": variant === "primary",
            // "dark:bg-gray-600": variant === "primary",
          }
        )}
      />

      <div
        className={clsx(
          "relative flex items-center justify-center w-full h-full whitespace-nowrap dark:text-gray-300",
          {
            "text-primary-600": variant === "secondary",
            "text-white": variant === "primary",
            "px-11 py-6 space-x-5": size !== "medium",
            "px-8 py-4 space-x-3": size === "medium",
          }
        )}
      >
        {children}
      </div>
    </>
  );
}

function Button({
  children,
  variant = "primary",
  size = "large",
  className,
  ...buttonProps
}: ButtonProps & JSX.IntrinsicElements["button"]) {
  return (
    <button {...buttonProps} className={getClassName({ className })}>
      <ButtonInner variant={variant} size={size}>
        {children}
      </ButtonInner>
    </button>
  );
}

const ButtonLink = React.forwardRef<
  HTMLAnchorElement,
  ButtonProps & { to: string } & Pick<
    JSX.IntrinsicElements["a"],
    "onClick" | "className"
  >
>(function ButtonLink(
  { children, variant = "primary", className, to, onClick },
  ref
) {
  return (
    <AnchorOrLink
      ref={ref}
      href={to}
      onClick={onClick}
      className={getClassName({ className })}
    >
      <ButtonInner variant={variant}>{children}</ButtonInner>
    </AnchorOrLink>
  );
});

export { Button, ButtonLink };
