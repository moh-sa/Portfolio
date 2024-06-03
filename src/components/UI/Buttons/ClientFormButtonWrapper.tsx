"use client";

import { CircleNotch } from "@phosphor-icons/react";
import { useFormStatus } from "react-dom";
import { Icon } from "../Icon";
import { Button, type ButtonProps } from "./Button";

export function FormStatusButtonWrapper({ children, ...props }: ButtonProps) {
  const { pending } = useFormStatus();
  return (
    <div>
      <Button type="submit" {...props}>
        {pending && (
          <>
            <Icon icon={CircleNotch} className="animate-spin" />
            Loading...
          </>
        )}
        {!pending && children}
      </Button>
    </div>
  );
}
