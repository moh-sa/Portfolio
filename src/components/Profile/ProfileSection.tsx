import { BadgeGroup, CategoryHeading, ToggleLocale } from "~/components";
import { type TLocales } from "~/locales/locales";
import { type Locales } from "~/types";
import { SocialLinks } from "./SocialLinks";

type TProps = {
  localeType: Locales;
  localeData: TLocales["profile"];
};
export async function ProfileSection({ localeType, localeData }: TProps) {
  return (
    <section className="bg-navy-800 rounded-se-md rounded-ss-md p-4 lg:basis-1/4 lg:rounded-es-md lg:rounded-se-none lg:px-6">
      <div className="mb-4 block lg:hidden">
        <ToggleLocale localeType={localeType} />
      </div>
      <div className="sticky top-4 flex flex-col gap-8">
        {/* ✨ Bio ✨ */}
        <hgroup>
          <h1 className="text-5xl font-semibold capitalize text-stone-300 rtl:mb-4">
            {localeData.bio.name}
          </h1>
          <p className="text-pretty border-b border-[#494979] pb-8 text-2xl text-[#b6bfec]">
            {localeData.bio.description}
          </p>
        </hgroup>

        {/* ✨ Skills ✨ */}
        <div>
          <CategoryHeading text={localeData.skills.heading} />
          <BadgeGroup isProfile techStack={localeData.skills.stack} />
        </div>

        {/* ✨ Social Links ✨ */}
        <div>
          <CategoryHeading text={localeData.contact.heading} />
          <SocialLinks data={localeData.contact.links} />
        </div>
      </div>
    </section>
  );
}
