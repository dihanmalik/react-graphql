import React from 'react'
import Text from '@atom/Text'
import View from '@atom/View'
import { useTheme } from 'emotion-theming'

export default () => {
  const { palette } = useTheme()
  return (
    <View flex={1} align={'center'} justify={'center'}>
      <Text variant={'h1'} style={{ color: palette.primary.light }}>
        Hello GraphQL
      </Text>
    </View>
  )
}
