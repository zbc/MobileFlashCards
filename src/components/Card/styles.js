import EStyleSheet from "react-native-extended-stylesheet";
import { Dimensions } from "react-native";

const { height } = Dimensions.get("window");

export default EStyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 0,
    borderRadius: 3,
    marginHorizontal: 20,
    padding: 20,
    height: height / 2.5,
    backgroundColor: "$lightlightGray",
    marginVertical: 20
  },
  text: {
    fontSize: 25,
    letterSpacing: 0
  },
  scoreContainer: {
    flex: 1,
    paddingVertical: 20
  }
});
