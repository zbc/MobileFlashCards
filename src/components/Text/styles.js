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
  },
  textIndex: {
    fontSize: 20,
    letterSpacing: 1,
    margin: 5,
    marginLeft: 20,
    color: "$darkGray"
  },
  labelContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  label: {
    fontSize: 25,
    fontWeight: "600"
  }
});
