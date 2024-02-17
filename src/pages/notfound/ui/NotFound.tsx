import React, { memo } from 'react'
import { useTranslation } from 'react-i18next'

export const NotFoundPage = memo(function NotFoundPage() {
  const { t } = useTranslation('not_found')
  return <div>{t('Страница не найдена')}</div>
})
