import { styles } from "@/constants/styles";
import { ActivityIndicator, View, Text } from "react-native";

export const ListLoader = () => {
  return (
    <View style={styles.listLoaderContainer}>
      <ActivityIndicator color="#aaa" />
      <Text>Gathering amazing stuff!</Text>
    </View>
  );
};
