import { Icon, LinkButton } from "~/components";
import { type TLocales } from "~/locales/locales";

type TProps = {
  data: TLocales["profile"]["contact"]["links"];
};
export async function SocialLinks({ data }: TProps) {
  return (
    <ul className="space-y-2">
      {data.map((link, index) => (
        <li key={`${index}-${link.label}`}>
          <LinkButton as="a" primary url={link.url}>
            <Icon icon={link.icon} />
            {link.label}
          </LinkButton>
        </li>
      ))}
    </ul>
  );
}
