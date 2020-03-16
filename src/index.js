import core from 'src/tokens/core'
import backgroundColor from 'src/tokens/backgroundColor'
import borderColor from 'src/tokens/borderColor'
import borderRadius from 'src/tokens/borderRadius'
import boxShadow from 'src/tokens/boxShadow'
import fontSize from 'src/tokens/fontSize'
import spacing from 'src/tokens/spacing'
import textColor from 'src/tokens/textColor'

export const buildTheme = (themeName, customColors={}) => {
  const customCore = {
    ...core,
    Color: {
      ...core.Color,
      ...customColors,
    },
  }

  return {
    ...customCore,
    BackgroundColor: backgroundColor[themeName](customCore),
    BorderColor: borderColor[themeName](customCore),
    BorderRadius: {
      ...core.BorderRadius,
      ...borderRadius[themeName](customCore),
    },
    BoxShadow: {
      ...core.BoxShadow,
      ...boxShadow[themeName](customCore),
    },
    FontSize: {
      ...core.FontSize,
      ...fontSize[themeName](customCore),
    },
    Spacing: {
      ...core.Spacing,
      ...spacing[themeName](customCore),
    },
    TextColor: textColor[themeName](customCore),
  }
}

export const light = buildTheme('light')

export const dark = buildTheme('dark')
