import {
  ActivityIndicator,
  Dimensions,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
import CategorySLider from "../components/CategorySLider";
import Ionicons from "@expo/vector-icons/Ionicons";
import HeadlineSlider from "../components/HeadlineSlider";
import HeadlineList from "../components/HeadlineList";
import Api from "../services/Api";

export default function Home() {
  const [loading, setloading] = useState(true);
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

  const [newsList, setNewsList] = useState<Article[]>([]);

  useEffect(() => {
    // getHeadlines();
    getNewsCategory("latest");
  }, []);

  const getHeadlines = async () => {
    const result = (await Api.headLines).data as { articles: Article[] };
    setNewsList(result.articles);
  };

  const getNewsCategory = async (category: any) => {
    setloading(true);
    const result = await Api.getCategory(category);
    const data = result.data as { articles: Article[] };
    // console.log("DATA===>>>>", data);
    setNewsList(data.articles);
    setloading(false);
  };

  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={{ fontSize: 24, fontWeight: "bold", color: "purple" }}>
          Purple News
        </Text>
        <Ionicons name="notifications-outline" size={25} color="black" />
      </View>
      <CategorySLider
        selectNewsCategory={(category: string) => getNewsCategory(category)}
      />
      {loading ? (
        <ActivityIndicator
          style={{ marginTop: Dimensions.get("screen").height * 0.39 }}
          size={"large"}
        />
      ) : (
        ""
      )}
      <HeadlineSlider newsList={newsList} />
      <HeadlineList newsList={newsList} />
    </View>
  );
}

const styles = StyleSheet.create({});
