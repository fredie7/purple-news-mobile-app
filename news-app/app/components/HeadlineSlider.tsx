import React, { useEffect, useState } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import Api from "../services/Api";
import { useNavigation } from "@react-navigation/native";

type Article = {
  title: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  [key: string]: any;
};

type HeadlineSliderProps = {
  newsList: Article[];
};

function HeadlineSlider({ newsList }: HeadlineSliderProps) {
  const navigation = useNavigation();
  return (
    <View style={{ marginTop: 14 }}>
      <FlatList
        data={newsList}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("newsDetails", { news: item })}
            style={{
              width: Dimensions.get("screen").width * 0.8,
              marginRight: 15,
            }}
          >
            <Image
              source={{ uri: item?.urlToImage }}
              style={{
                height: Dimensions.get("screen").width * 0.77,
                borderRadius: 10,
              }}
            />
            <Text
              numberOfLines={3}
              style={{ marginTop: 10, fontSize: 18, fontWeight: "bold" }}
            >
              {item.title}
            </Text>
            <Text style={{ marginTop: 5, color: "purple" }}>
              {item?.source?.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default HeadlineSlider;
