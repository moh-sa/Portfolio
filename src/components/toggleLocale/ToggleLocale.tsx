'use client';
import { useRouter, usePathname } from 'next/navigation';
import styles from './ToggleLocale.module.css';

export default function Test() {
  const router = useRouter();
  const pathname = usePathname();
  const lang = pathname.replace('/', '');

  const ariaLabel =
    lang === 'ar'
      ? 'تغيير اللغة إلى الانجليزية'
      : 'Switch to Arabic language';

  function languageToggleHandler() {
    if (lang === 'ar') router.push('/en');
    if (lang === 'en') router.push('/ar');
  }

  return (
    <button
      className={styles.button}
      onClick={languageToggleHandler}
      aria-label={ariaLabel}
    >
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill='none'
        viewBox='0 0 24 24'
        strokeWidth='1.5'
        stroke='currentColor'
        aria-hidden='true'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C11.176 10.658 7.69 15.08 3 17.502m9.334-12.138c.896.061 1.785.147 2.666.257m-4.589 8.495a18.023 18.023 0 01-3.827-5.802'
        />
      </svg>
    </button>
  );
}
