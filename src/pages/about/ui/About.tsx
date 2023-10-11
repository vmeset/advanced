import { useTranslation } from 'react-i18next'
import { AppLink } from '../../../shared/ui/AppLink/AppLink'

function About() {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('страница о нас')}
      <hr />
      <AppLink to="">pr</AppLink>
      <hr />
      <AppLink to="">se</AppLink>
    </div>
  )
}

export default About
