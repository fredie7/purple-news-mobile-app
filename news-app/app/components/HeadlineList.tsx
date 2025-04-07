import { useNavigation } from "@react-navigation/native";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";

type Article = {
  title: string;
  description?: string;
  url?: string;
  urlToImage?: string;
  publishedAt?: string;
  [key: string]: any;
};

type HeadlineListrProps = {
  newsList: Article[];
};

function HeadlineList({ newsList }: HeadlineListrProps) {
  const navigation = useNavigation();

  return (
    <View>
      <FlatList
        data={newsList}
        renderItem={({ item }) => (
          <View>
            <View
              style={{ height: 1, backgroundColor: "lightgray", marginTop: 11 }}
            ></View>
            <TouchableOpacity
              onPress={() => navigation.navigate("newsDetails", { news: item })}
              style={{ marginTop: 20, display: "flex", flexDirection: "row" }}
            >
              <Image
                source={{ uri: item.urlToImage }}
                style={{ height: 125, width: 125, borderRadius: 10 }}
              />
              <View style={{ marginRight: 129, marginLeft: 11 }}>
                <Text
                  numberOfLines={4}
                  style={{ fontSize: 16, fontWeight: "bold" }}
                >
                  {item?.title}
                </Text>
                <Text style={{ color: "purple" }}>{item?.source?.name}</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

export default HeadlineList;
