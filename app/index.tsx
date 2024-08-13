import { SafeAreaView } from "react-native";
import AsyncCitiesList from "@/components/AsyncCitiesList";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <AsyncCitiesList />
    </SafeAreaView>
  );
}
