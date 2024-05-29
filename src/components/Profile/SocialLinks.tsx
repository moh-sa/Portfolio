import { Anchor, Icon } from "~/components";
import { type TLocales } from "~/locales/locales";

type TProps = {
  data: TLocales["profile"]["contact"]["links"];
};
export async function SocialLinks({ data }: TProps) {
  return (
    <ul className="space-y-2">
      {data.map((link, index) => {
        return (
          <li key={`${index}-${link.label}`}>
            <Anchor isExternal href={link.url}>
              <Icon icon={link.icon} />
              {link.label}
            </Anchor>
          </li>
        );
      })}
    </ul>
  );
}
