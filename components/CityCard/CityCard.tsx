import React from "react";
import { Text, View, Image } from "react-native";
import { CityCardProps } from "./@types/cityCard";
import { styles } from "@/constants/styles";

export const CityCard = ({
  title,
  description,
  id,
  image,
  index,
}: CityCardProps) => {
  return (
    <View key={id} style={styles.cityCardContainer}>
      <Image
        source={{ uri: image + "?random=" + index }}
        style={styles.cityCardImage}
      />
      <View style={styles.cityCardInfoContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};
