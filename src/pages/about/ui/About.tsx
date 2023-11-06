import { useTranslation } from 'react-i18next'
import { Counter } from 'entities/counter/ui/Counter'

function About() {
  const { t } = useTranslation('about')

  return (
    <div>
      {t('страница о нас')}
      <hr />
      <Counter />
    </div>
  )
}

export default About
