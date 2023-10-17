import React from 'react'
import { useTranslation } from 'react-i18next'

export const NotFoundPage = () => {
  const { t } = useTranslation('not_found')
  return <div>{t('Страница не найдена')}</div>
}
