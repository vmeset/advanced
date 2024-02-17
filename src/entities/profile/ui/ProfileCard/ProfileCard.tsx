import { useTranslation } from 'react-i18next'
import cls from './ProfileCard.module.scss'
import { classNames } from 'shared/lib/classNames/classNames'
import { useSelector } from 'react-redux'
import { getProfileData } from '../../model/selectors/getProfileData/getProfileData'
import { getProfileError } from '../../model/selectors/getProfileError/getProfileError'
import { getProfileIsLoading } from '../../model/selectors/getProfileIsLoading/getProfileIsLoading'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { Text } from 'shared/ui/Text/Text'
import { Input } from 'shared/ui/Input/Input'
import { PageLoader } from 'widgets/PageLoader'

interface ProfileCardProps {
  className?: string
}

export const ProfileCard = ({ className }: ProfileCardProps) => {
  const { t } = useTranslation('profile')
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsLoading)

  if (isLoading) {
    return <PageLoader />
  }

  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      {error ? (
        <div>{error}</div>
      ) : (
        <>
          <div className={cls.header}>
            <Text text={`${data?.first} ${data?.lastname}`} />
            <Button theme={ButtonTheme.OUTLINE}>
              {t('Сохранить изменения')}
            </Button>
          </div>
          <div className={cls.body}>
            <Input value={data?.first} placeholder={t('Ваше имя')} />
            <Input value={data?.lastname} placeholder={t('Ваша фамилия')} />
          </div>
        </>
      )}
    </div>
  )
}
