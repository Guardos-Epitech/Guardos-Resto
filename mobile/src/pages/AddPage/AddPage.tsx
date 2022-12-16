import React, { useEffect, useCallback, useState } from "react";
import { Text, View, Image } from "react-native";
import styles from "./AddPage.styles";
import Icon from "react-native-vector-icons/AntDesign";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync(); // Keep the splash screen visible while we fetch resources

import {
  useFonts,
  Montserrat_100Thin,
  Montserrat_100Thin_Italic,
  Montserrat_200ExtraLight,
  Montserrat_200ExtraLight_Italic,
  Montserrat_300Light,
  Montserrat_300Light_Italic,
  Montserrat_400Regular,
  Montserrat_400Regular_Italic,
  Montserrat_500Medium,
  Montserrat_500Medium_Italic,
  Montserrat_600SemiBold,
  Montserrat_600SemiBold_Italic,
  Montserrat_700Bold,
  Montserrat_700Bold_Italic,
  Montserrat_800ExtraBold,
  Montserrat_800ExtraBold_Italic,
  Montserrat_900Black,
  Montserrat_900Black_Italic,
} from "@expo-google-fonts/montserrat";

const AddPage = ({navigation}: {navigation: any}) => {
  let [fontsLoaded] = useFonts({
    Montserrat_100Thin,
    Montserrat_100Thin_Italic,
    Montserrat_200ExtraLight,
    Montserrat_200ExtraLight_Italic,
    Montserrat_300Light,
    Montserrat_300Light_Italic,
    Montserrat_400Regular,
    Montserrat_400Regular_Italic,
    Montserrat_500Medium,
    Montserrat_500Medium_Italic,
    Montserrat_600SemiBold,
    Montserrat_600SemiBold_Italic,
    Montserrat_700Bold,
    Montserrat_700Bold_Italic,
    Montserrat_800ExtraBold,
    Montserrat_800ExtraBold_Italic,
    Montserrat_900Black,
    Montserrat_900Black_Italic,
  });
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        await SplashScreen.preventAutoHideAsync();
        await fontsLoaded;
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  function GoToQRCode() {
    navigation.navigate('QRCodeEngin')
  }

  return (
    <View onLayout={onLayoutRootView}>
      <View style={styles.container}>
        <Image
          style={styles.ImgLogo}
          source={require("../../assets/logo.png")}
        />
      </View>
      <View style={styles.DivTitleIngr}>
        <Text style={styles.TitleIngr}>Ingredients</Text>
      </View>
      <View style={styles.ViewIcon}>
        <View style={styles.ButtonBottom}>
          <Icon name="pluscircle" size={50} color="#6D071A" onPress={GoToQRCode} />
        </View>
        <Icon name="checkcircle" size={50} color="#6D071A" />
      </View>
    </View>
  );
};

export default AddPage;
