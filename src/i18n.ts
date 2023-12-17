import { getRequestConfig } from 'next-intl/server';
import { redirect } from 'next/navigation';

export default getRequestConfig(async ({ locale }) => ({
  messages: (
    await (locale === 'en'
      ? import('../messages/en.json')
      : import(`../messages/${locale}.json`))
  ).default,
}));
