import { useTranslation } from 'react-i18next'
import cls from './Profile.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { memo, useEffect } from 'react'
import {
  DynamicModuleLoader,
  ReducersList,
} from 'shared/lib/components/DynamicModuleLoader'
import { ProfileCard, fetchProfileData, profileReducer } from 'entities/profile'
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch'

interface ProfileProps {
  className?: string
}

const initialReducers: ReducersList = {
  profile: profileReducer,
}

const Profile = memo(function Profile({ className }: ProfileProps) {
  const { t } = useTranslation('profile')
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={initialReducers} removeAfterUnmount>
      <div className={classNames(cls.Profile, {}, [className])}>
        {t('Страница профиля')}
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
})

export default Profile
