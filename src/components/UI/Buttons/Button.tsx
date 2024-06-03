import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "~/utils";

const ButtonVariants = cva(
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
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
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
      className={cn(ButtonVariants({ variant, size, width, className }))}
      {...props}
    >
      {children}
    </button>
  );
}
