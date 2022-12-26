import React, { useState, useEffect } from "react";
import { Text, View, StyleSheet, Button, Pressable } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import IconBack from "react-native-vector-icons/AntDesign";
import IconUser from "react-native-vector-icons/FontAwesome";
import styles from "./QRCodeEngin.styles";
import axios from "axios";

const QRCodeEngin = ({ navigation }: { navigation: any }) => {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === "granted");
    })();
  }, []);
  const handleBarCodeScanned = ({
    type,
    data,
  }: {
    type: string;
    data: string;
  }) => {
    setScanned(true);
    // alert(`Bar code with type ${type} and data ${data} has been scanned!`);
    setData(data);
  };
  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  function GoToAddPage() {
    navigation.navigate("AddPage");
  }
  async function LogInRoute(body: string) {
    try {
      const response = await axios({
        method: "post",
        url: "http://172.20.10.2:8082/post",
        data: { name: body },
      });
      if (response.status == 200) GoToAddPage();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <View style={{ marginTop: 60 }}>
      <View style={styles.DivTop}>
        <IconBack
          style={styles.IconBack}
          name="left"
          size={40}
          color="#6D071A"
          onPress={GoToAddPage}
        />
        <IconUser
          style={styles.IconUser}
          name="user"
          size={40}
          color="#6D071A"
        />
      </View>
      <View style={styles.DivTop}>
        <Text style={styles.TitleIngr}>Adding Ingredient</Text>
        <Text>Please scan the barcode of the product you wan’t to add</Text>
        <View style={styles.container}>
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        </View>
        {scanned && (
          <View>
            <Button title={"Scan Again"} onPress={() => setScanned(false)} />
            <View style={styles.DivButton}>
              <Text style={styles.TitleScan}>
                You just scan {data} do you want to add it to your list of
                ingredients ?
              </Text>
              <View style={styles.DivTop}>
                <Pressable
                  style={styles.ButtonNo}
                  onPress={() => {
                    setScanned(false);
                  }}
                >
                  <Text>NO</Text>
                </Pressable>
                <Pressable
                  style={styles.ButtonYes}
                  onPress={() => {
                    console.log("ONpressYES");
                    LogInRoute(data);
                  }}
                >
                  <Text style={{ color: "white" }}>YES</Text>
                </Pressable>
              </View>
            </View>
          </View>
        )}
      </View>
    </View>
  );
};

export default QRCodeEngin;
