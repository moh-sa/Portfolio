import { cva, type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { cn } from "~/utils";
import { AnchorEmptyState } from "./AnchorEmptyState";

const AnchorVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded capitalize transition-colors duration-500 ease-in hover:duration-150 hover:ease-out",
  {
    variants: {
      variant: {
        primary: "bg-pink-200 hover:bg-pink-100 text-indigo-950",
        secondary: "bg-navy-700 hover:bg-navy-500 text-stone-300",
        destructive: "bg-red-400 text-white hover:bg-red-300",
        ghost: "hover:bg-navy-700 bg-transparent text-stone-300",
      },
      width: {
        full: "w-full",
        auto: "w-auto",
      },
      size: {
        default: "h-9 px-4 py-2 text-lg",
        sm: "h-8 px-3 text-xs",
        lg: "h-10 px-8 text-xl",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
      width: "full",
    },
  },
);

interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof AnchorVariants> {
  isEmpty?: boolean;
  isExternal?: boolean;
  href: string;
  children: React.ReactNode;
}

export function Anchor({
  isEmpty,
  isExternal,
  className,
  variant,
  size,
  width,
  children,
  ...props
}: AnchorProps) {
  if (isEmpty) return <AnchorEmptyState>{children}</AnchorEmptyState>;

  const Element = isExternal ? "a" : Link;
  return (
    <Element
      className={cn(AnchorVariants({ variant, size, width, className }))}
      target={isExternal ? "_blank" : undefined}
      {...props}
    >
      {children}
    </Element>
  );
}
