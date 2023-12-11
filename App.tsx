import React, { useCallback } from 'react'
import { View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

import * as Font from 'expo-font'
import { DMSans_400Regular } from '@expo-google-fonts/dm-sans'
import { DMSerifDisplay_400Regular } from '@expo-google-fonts/dm-serif-display'
import { Poppins_300Light, Poppins_400Regular, Poppins_500Medium, Poppins_700Bold, Poppins_800ExtraBold_Italic } from '@expo-google-fonts/poppins'
import { Roboto_300Light, Roboto_400Regular, Roboto_500Medium, Roboto_700Bold } from '@expo-google-fonts/roboto'
import { Inter_900Black } from '@expo-google-fonts/inter'
import { ThemeProvider } from 'styled-components'
import { StatusBar } from 'expo-status-bar'

import Login from '@screens/login'
import theme from '@styles/theme'
import { GestureHandlerRootView } from 'react-native-gesture-handler'

void SplashScreen.preventAutoHideAsync()

const App: React.FC = () => {
  const [fontsLoaded] = Font.useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
    Inter_900Black,
    Poppins_300Light,
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_700Bold,
    Poppins_800ExtraBold_Italic,
    DMSans_400Regular,
    DMSerifDisplay_400Regular
  })

  const onLayout = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])
  if (!fontsLoaded) {
    return null
  }

    return (
      <GestureHandlerRootView style={{ flex: 1 }}>
        <ThemeProvider theme={theme}>
          <StatusBar style="dark" translucent backgroundColor="transparent" />
          <View style={{ flex: 1 }} onLayout={onLayout}>
            <Login />
          </View>
        </ThemeProvider>
      </GestureHandlerRootView>
    )
}
export default App
