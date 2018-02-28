import EStyleSheet from "react-native-extended-stylesheet";

export default EStyleSheet.create({
  container: {
    marginHorizontal: 50,
    marginBottom: 20
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "$buttonColor",
    borderRadius: 2,
    paddingVertical: 12
  },
  text: {
    color: "$white",
    letterSpacing: 0,
    fontSize: 20
  },
  simpleContainer: {
    marginHorizontal: 50,
    marginBottom: 20
  },
  simpleButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
    paddingVertical: 12
  },
  simpleText: {
    color: "$red",
    letterSpacing: 0,
    fontSize: 20,
    fontWeight: "bold"
  }
});
