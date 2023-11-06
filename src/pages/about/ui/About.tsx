import { useTranslation } from 'react-i18next'

function About() {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('страница о нас')}
      <hr />
    </div>
  )
}

export default About
