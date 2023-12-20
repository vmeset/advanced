import { useTranslation } from 'react-i18next'
import cls from './Profile.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo } from 'react'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { profileReducer } from 'entities/profile'

interface ProfileProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
}

const Profile = memo(function Profile({ className }: ProfileProps) {
  const { t } = useTranslation('profile')
  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.Profile, {}, [className])}>
        {t('Страница профиля')}
      </div>
    </DynamicModuleLoader>
  )
})

export default Profile
