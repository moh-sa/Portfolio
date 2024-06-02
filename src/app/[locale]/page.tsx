import { ProfileSection, ProjectSection } from "~/components";
import { getLocaleFile } from "~/locales/locales";
import { type Locales } from "~/types";
export async function generateStaticParams() {
  return [{ locale: "en" }, { locale: "ar" }];
}

type params = {
  params: {
    locale: Locales;
  };
};

export default async function LocalePage({
  params: { locale: localeType },
}: params) {
  const loc = await getLocaleFile(localeType);

  return (
    <>
      <ProfileSection localeType={localeType} localeData={loc.profile} />
      <ProjectSection localeType={localeType} localeData={loc.projects} />
    </>
  );
}
