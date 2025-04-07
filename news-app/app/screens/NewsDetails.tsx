import {
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import Octicons from "@expo/vector-icons/Octicons";
import { Share } from "react-native";
import * as WebBrowser from "expo-web-browser";

export default function NewsDetails() {
  const news = useRoute().params.news;
  const navigation = useNavigation();
  useEffect(() => {
    console.log(news);
  }, []);

  const shareNewsInfo = () => {
    Share.share({
      message: news.title + "Read More" + news.description,
    });
  };

  return (
    <ScrollView style={{ backgroundColor: "white", flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ marginTop: 9, marginBottom: 9 }}
        >
          <MaterialIcons name="arrow-back" size={27} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => shareNewsInfo()}
          style={{ marginTop: 9, marginBottom: 9 }}
        >
          <Octicons name="share" size={27} color="black" />
        </TouchableOpacity>
      </View>
      <Image
        source={{ uri: news.urlToImage }}
        style={{ width: "100%", height: 300, borderRadius: 16 }}
      />
      <Text style={{ marginTop: 11, fontSize: 21, fontWeight: "bold" }}>
        {news.title}
      </Text>
      <Text style={{ marginTop: 11, color: "purple", fontSize: 15 }}>
        {news.source.name}
      </Text>
      <Text
        style={{ marginTop: 11, fontSize: 15, color: "gray", lineHeight: 28 }}
      >
        {news.description}
      </Text>
      <TouchableOpacity
        onPress={() => {
          WebBrowser.openBrowserAsync(news.url);
        }}
        style={{
          marginTop: 11,
          paddingVertical: 10,
          backgroundColor: "white",
          borderRadius: 5,
        }}
      >
        <Text style={{ fontSize: 15, fontWeight: "bold", color: "purple" }}>
          Read More
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({});
