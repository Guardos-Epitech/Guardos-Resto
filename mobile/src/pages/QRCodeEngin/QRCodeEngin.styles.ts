import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    height: 320,
    width: 290,
    justifyContent: "center",
    alignItem: "center",
  },
  DivTop: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  IconBack: {
    marginLeft: 0,
  },
  IconUser: {
    marginLeft: 320,
  },
  TitleIngr: {
    fontFamily: "Montserrat_500Medium",
    fontSize: 32,
    marginTop: 20,
  },
  ButtonNo: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "white",
    marginRight: 50,
    borderColor: "#6D071A",
    borderWidth: 1,
  },
  ButtonYes: {
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#6D071A",
  },
  DivButton: {
    backgroundColor: "#FFFFFF",
    width: 370,
    height: 170,
    borderRadius: 10,
    marginTop: 20,
    shadowColor: "#000000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.25,
    shadowRadius: 5,
  },
  TitleScan: {
    fontSize: 20,
    marginLeft: 20,
    marginRight: 20,
    marginTop: 20,
    marginBottom: 30,
    fontWeight: "bold",
  },
});

export default styles;
