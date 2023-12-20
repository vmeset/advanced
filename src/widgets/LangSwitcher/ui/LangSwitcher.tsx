import { classNames } from 'shared/lib/classNames/classNames'
import { useTranslation } from 'react-i18next'
import i18next from 'i18next'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface LangSwitcherProps {
  className?: string
  short?: boolean
}

export const LangSwitcher = memo(function LangSwitcher({
  className,
  short,
}: LangSwitcherProps): JSX.Element {
  const { t, i18n } = useTranslation('translation')

  const toggleLang = async () => {
    await i18next.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
  }
  return (
    <Button
      onClick={toggleLang}
      className={classNames('', {}, [className])}
      theme={ButtonTheme.CLEAR}
    >
      {short ? t('короткая версия') : t('язык')}
    </Button>
  )
})
