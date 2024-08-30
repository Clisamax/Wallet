import * as Font from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import { StatusBar } from 'expo-status-bar'
import React, { useCallback, useEffect, useState } from 'react'
import { View } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import {
  Poppins_300Light,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_700Bold,
  Poppins_800ExtraBold,
} from '@expo-google-fonts/poppins'
import {
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto'

import Login from '@screens/login/login'
import theme from '@styles/theme'
import { ThemeProvider } from 'styled-components'

SplashScreen.preventAutoHideAsync()

const Wallet: React.FC = () => {
  const [appIsReady, setAppIsReady] = useState(false)

  useEffect(() => {
    ;(async () => {
      try {
        await SplashScreen.preventAutoHideAsync()
        await Font.loadAsync({
          Poppins_300Light,
          Poppins_400Regular,
          Poppins_500Medium,
          Poppins_700Bold,
          Poppins_800ExtraBold,
          Roboto_300Light,
          Roboto_400Regular,
          Roboto_500Medium,
          Roboto_700Bold,
          DMSans_400Regular,
          DMSerifDisplay_400Regular,
        })
      } catch {
        // handle error
      } finally {
        setAppIsReady(true)
      }
    })()
  }, [])

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync()
    }
  }, [appIsReady])

  if (!appIsReady) {
    return null
  }

  return (
    <ThemeProvider theme={theme}>
      <GestureHandlerRootView>
        <StatusBar style="dark" translucent backgroundColor="transparent" />
        <View onLayout={onLayout}>
          <Login />
        </View>
      </GestureHandlerRootView>
    </ThemeProvider>
  )
}

export default Wallet
