import CityCard from "@/components/CityCard";
import { City } from "@/hooks-api/@types/useCities";
import useCities from "@/hooks-api/useCities";
import { useCallback } from "react";
import { FlatList, SafeAreaView, Text } from "react-native";
import ListLoader from "@/components/ListLoader";
import NoMoreItems from "@/components/NoMoreItems";

type RenderPostItemType = {
  item: City;
  index: number;
};

const AsyncPostsList = () => {
  const { cities, loading, nextPage, page, emptyData, error } = useCities();
  const renderPostItem = useCallback(({ item, index }: RenderPostItemType) => {
    return <CityCard {...item} index={index} />;
  }, []);
  if (loading) return <ListLoader />;
  if (error)
    return (
      <Text style={{ textAlign: "center" }}>
        Error while retrieving data. Please contact support and try again in
        some minutes
      </Text>
    );
  return (
    <FlatList
      initialNumToRender={10}
      maxToRenderPerBatch={5}
      removeClippedSubviews
      windowSize={5}
      data={cities}
      renderItem={renderPostItem}
      ListFooterComponent={emptyData ? NoMoreItems : ListLoader}
      onEndReached={nextPage}
      onEndReachedThreshold={0.5}
      keyExtractor={(_, index) => "city-" + index}
      style={{ flex: 1, width: "100%" }}
    />
  );
};

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
      <AsyncPostsList />
    </SafeAreaView>
  );
}
