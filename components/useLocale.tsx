import React, { useEffect, useState } from 'react'
import { useLanguageQuery } from 'next-export-i18n';
import { LocaleType } from '@/api/post-api';

function useLocale() {
  const [query] = useLanguageQuery();
  const [locale, setLocale] = useState<LocaleType>('zh');

  useEffect(() => {
    setLocale(query?.lang === 'en' ? 'en' : 'zh');
  }, [query?.lang]);

  return locale
}

export default useLocale