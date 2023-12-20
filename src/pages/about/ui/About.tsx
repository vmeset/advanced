import { memo } from 'react'
import { useTranslation } from 'react-i18next'

const About = memo(function About() {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('страница о нас')}
      <hr />
    </div>
  )
})

export default About
