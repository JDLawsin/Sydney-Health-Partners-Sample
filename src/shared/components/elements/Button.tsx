"use client";

import React from "react";

import { VariantProps, cva } from "class-variance-authority";
import clsx from "clsx";
import { forwardRef } from "react";
import { twMerge } from "tailwind-merge";

const variants = cva(
  [
    "inline-flex",
    "items-center",
    "justify-center",
    "relative",
    "cursor-pointer",
    "disabled:cursor-not-allowed",
    "tracking-wide",
    "transition",
    "rounded-full",
    "outline-none",
    "focus:scale-[0.98]",
  ],
  {
    variants: {
      variant: {
        primary: [
          "font-semibold",
          "bg-primary",
          "hover:bg-primary/90",
          "text-primary-foreground",
          "shadow",
          "hover:shadow-md",
          "disabled:bg-primary/50",
          "disabled:shadow",
          "ring-offset-2",
          "focus-visible:ring-2",
          "ring-primary/70",
        ],
        secondary: [
          "font-semibold",
          "bg-gradient-to-r",
          "from-secondary",
          "to-secondary/70",
          "hover:from-secondary/90",
          "hover:to-secondary/60",
          "disabled:from-secondary/50",
          "disabled:to-secondary/30",
          "text-secondary-foreground",
          "shadow",
          "hover:shadow-md",
          "ring-offset-2",
          "focus-visible:ring-2",
          "ring-secondary/70",
        ],
        destructive: [
          "font-semibold",
          "bg-destructive",
          "hover:bg-destructive/90",
          "text-destructive-foreground",
          "rounded-full",
          "shadow",
          "hover:shadow-md",
          "disabled:bg-destructive/50",
          "disabled:shadow",
          "ring-offset-2",
          "focus-visible:ring-2",
          "ring-destructive/70",
        ],
        ghost: [
          "font-light",
          "text-foreground",
          "hover:bg-muted",
          "hover:text-muted-foreground",
          "disabled:text-foreground/50",
          "ring-ring",
          "focus-visible:ring-1",
        ],
        link: [
          "font-light",
          "text-primary",
          "hover:text-primary/80",
          "disabled:text-primary/50",
          "disabled:no-underline",
          "hover:underline",
          "ring-primary/30",
          "focus-visible:ring-1",
        ],
      },
      size: {
        small: ["text-sm", "py-1", "px-4"],
        default: ["text-base", "py-2", "px-8"],
        large: ["text-lg", "py-3", "px-12"],
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

const loading = cva(["absolute", "inline-flex", "items-center"], {
  variants: {
    variant: {
      primary: ["border-primary-foreground"],
      secondary: ["border-secondary-foreground"],
      destructive: ["border-destructive-foreground"],
      ghost: ["border-foreground"],
      link: ["border-primary"],
    },
  },
});

const Loading = ({ variant }: VariantProps<typeof loading>) => (
  <div className={loading({ variant })}>
    <div className="w-4 h-4 rounded-full border-2 border-b-transparent animate-spin border-inherit" />
  </div>
);

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof variants> & {
    loading?: boolean;
    icon?: React.ReactNode;
    iconPosition?: "left" | "right";
  };

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      children,
      variant,
      size,
      loading,
      icon,
      iconPosition = "left",
      ...rest
    },
    ref,
  ) => (
    <button
      ref={ref}
      className={twMerge(clsx(variants({ variant, size, className })))}
      {...rest}
    >
      {loading && <Loading variant={variant} />}
      <span
        className={clsx("inline-flex items-center gap-2 transition", {
          "opacity-0": loading,
          "opacity-100": !loading,
          "flex-row-reverse": iconPosition === "right",
        })}
      >
        {icon && <span className="inline-flex shrink-0">{icon}</span>}
        {children}
      </span>
    </button>
  ),
);

Button.displayName = "Button";

export { Button };
export type { ButtonProps };
