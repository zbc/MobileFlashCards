import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    flex: 1,
    marginTop: 40
  },
  listItemContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderBottomWidth: 1,
    borderColor: "$black",
    height: 100
  },
  title: {
    fontSize: 23,
    fontWeight: "bold",
    color: "$darkGray"
  },
  subTitle: {
    fontSize: 15,
    color: "$gray"
  }
});
