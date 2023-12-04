import React from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui/Button/Button'
import cls from './PageError.module.scss'

export const PageError = () => {
  const { t } = useTranslation('translation')
  const reloadPage = () => {
    location.reload()
  }
  return (
    <div className={cls.pageError}>
      <div>{t('Что-то пошло не так...')}</div>
      <div>
        <Button onClick={reloadPage}>{t('Перезагрузить страницу')}</Button>
      </div>
    </div>
  )
}
