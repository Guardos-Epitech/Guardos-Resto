import React, { useEffect, useCallback, useState } from "react";
import { Text, View, Image, ScrollView } from "react-native";
import styles from "./AddPage.styles";
import Icon from "react-native-vector-icons/AntDesign";
import Trash from "react-native-vector-icons/FontAwesome";
import * as SplashScreen from "expo-splash-screen";
import axios from "axios";

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

interface Ingr {
  name: string;
}

const AddPage = ({ navigation }: { navigation: any }) => {
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
  const [IngrValue, setIngrValue] = useState<[Ingr]>();

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  function GoToQRCode() {
    navigation.navigate("QRCodeEngin");
  }

  async function getIngr() {
    try {
      const response = await axios({
        method: "get",
        url: "http://172.20.10.2:8082/get",
      });
      setIngrValue(response.data);
    } catch (err) {
      console.log(err);
    }
  }
  async function deleteIngr(body: string) {
    try {
      const response = await axios({
        method: "delete",
        url: "http://172.20.10.2:8082/delete",
        data: { name: body },
      });
      if (response.status == 200) console.log("DELETE");
    } catch (err) {
      console.log(err);
    }
  }

  getIngr();

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
      <ScrollView style={styles.test}>
        {IngrValue?.map((ingr) => (
          <View style={styles.RectIngr} key={ingr.name}>
            <Text style={styles.TitleIngrList}>{ingr.name}</Text>
            <Trash
              name="trash"
              size={20}
              color="#6D071A"
              onPress={() => {
                deleteIngr(ingr.name);
              }}
            />
          </View>
        ))}
      </ScrollView>
      <View style={styles.ViewIcon}>
        <View style={styles.ButtonBottom}>
          <Icon
            name="pluscircle"
            size={50}
            color="#6D071A"
            onPress={GoToQRCode}
          />
        </View>
        <Icon name="checkcircle" size={50} color="#6D071A" />
      </View>
    </View>
  );
};

export default AddPage;
