import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native";

export const styles: {
  title: StyleProp<TextStyle>;
  description: StyleProp<TextStyle>;
  cityCardContainer: StyleProp<ViewStyle>;
  cityCardImage: StyleProp<ImageStyle>;
  cityCardInfoContainer: StyleProp<ViewStyle>;
  listLoaderContainer: StyleProp<ViewStyle>;
} = {
  title: {
    fontSize: 24,
    color: "#fff",
    fontWeight: "bold",
  },
  description: {
    color: "#fff",
  },
  cityCardContainer: {
    flexDirection: "column",
    width: "auto",
    margin: 8,
    justifyContent: "flex-end",
    alignItems: "flex-start",
    backgroundColor: "white",
    height: 300,
    borderRadius: 16,
    position: "relative",
    overflow: "hidden",
  },
  cityCardImage: {
    flex: 1,
    width: "100%",
    height: "100%",
    position: "absolute",
    top: 0,
    left: 0,
  },
  cityCardInfoContainer: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.7)",
    display: "flex",
    flexDirection: "column",
    width: "100%",
    position: "absolute",
    left: 0,
    bottom: 0,
    padding: 16,
  },
  listLoaderContainer: {
    marginVertical: 16,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
  },
};
