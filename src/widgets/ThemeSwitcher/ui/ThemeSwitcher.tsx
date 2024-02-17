import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import Light from 'shared/assets/icons/theme-light.svg'
import Dark from 'shared/assets/icons/theme-dark.svg'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { memo } from 'react'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher = memo(function ThemeSwitcher({
  className,
}: ThemeSwitcherProps): JSX.Element {
  const { theme, toggleTheme } = useTheme()

  return (
    <Button
      className={classNames('', {}, [className])}
      onClick={toggleTheme}
      theme={ButtonTheme.CLEAR}
    >
      {theme === Theme.LIGHT ? <Light /> : <Dark />}
    </Button>
  )
})
