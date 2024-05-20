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
    <main className="container mx-auto flex flex-col md:my-4 md:rounded-md md:outline md:outline-4 md:outline-obsidian-500 md:drop-shadow-md lg:my-8 lg:flex lg:min-h-[calc(100dvh-64px)] lg:flex-row">
      <ProfileSection localeType={localeType} localeData={loc.profile} />

      <ProjectSection localeType={localeType} localeData={loc.projects} />
    </main>
  );
}
