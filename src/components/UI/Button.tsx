import { type VariantProps } from "class-variance-authority";
import { LinkNButtonVariants } from "~/styles/variants";
import { cn } from "~/utils";

interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof LinkNButtonVariants> {
  children: React.ReactNode;
}

export function Button({
  className,
  variant,
  size,
  width,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(LinkNButtonVariants({ variant, size, width, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
