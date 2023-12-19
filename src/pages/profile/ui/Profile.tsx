import { useTranslation } from 'react-i18next'
import cls from './Profile.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'

interface ProfileProps {
  className?: string
}

const Profile = ({ className }: ProfileProps) => {
  const { t } = useTranslation('profile')
  return (
    <div className={classNames(cls.Profile, {}, [className])}>
      {t('Страница профиля')}
    </div>
  )
}

export default Profile
