import { type VariantProps } from "class-variance-authority";
import Link from "next/link";
import { LinkNButtonVariants } from "~/styles/variants";
import { cn } from "~/utils";

interface AnchorProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement>,
    VariantProps<typeof LinkNButtonVariants> {
  isExternal?: boolean;
  href: string;
  children: React.ReactNode;
}

export function Anchor({
  isExternal,
  className,
  variant,
  size,
  width,
  children,
  ...props
}: AnchorProps) {
  const Element = isExternal ? "a" : Link;
  return (
    <Element
      className={cn(LinkNButtonVariants({ variant, size, width, className }))}
      {...props}
    >
      {children}
    </Element>
  );
}
