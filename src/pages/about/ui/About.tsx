import { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

function About () {
  const { t } = useTranslation('about')

  console.log('1')

  useEffect(() => {
    console.log('2')
  })

  return <div>{t('страница о нас')}</div>
}

export default About
