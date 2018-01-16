import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 25,
    fontWeight: "bold",
    color: "$darkGray",
    marginBottom: 10
  },
  subTitle: {
    fontSize: 15,
    color: "$gray"
  }
});
