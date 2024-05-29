import { ArrowLeft } from "@phosphor-icons/react/dist/ssr";
import { Anchor, Icon } from "~/components";

export function BackToDashboard() {
  return (
    <Anchor href="/dashboard" variant="ghost" width="auto">
      <Icon icon={ArrowLeft} size={20} />
      Back to Dashboard
    </Anchor>
  );
}
