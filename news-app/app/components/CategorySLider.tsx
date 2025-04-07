import React, { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
type CategorySLiderProps = {
  selectNewsCategory: (category: string) => void;
};
function CategorySLider({ selectNewsCategory }: CategorySLiderProps) {
  const [active, setActive] = useState<number>(1);

  const categoryList = [
    {
      id: 1,
      name: "Latest",
    },
    {
      id: 2,
      name: "World",
    },
    {
      id: 3,
      name: "Business",
    },
    {
      id: 4,
      name: "Sports",
    },
    {
      id: 5,
      name: "Life",
    },
    {
      id: 6,
      name: "Movies",
    },
  ];

  const clickCategory = (id: number) => {
    setActive(id);
  };

  return (
    <View style={{ marginTop: 11 }}>
      <FlatList
        data={categoryList}
        horizontal
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              clickCategory(item.id);
              selectNewsCategory(item.name);
            }}
          >
            <Text
              style={
                item.id == active ? styles.selectText : styles.unselectText
              }
            >
              {item.name}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

export default CategorySLider;

const styles = StyleSheet.create({
  unselectText: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "900",
    color: "gray",
  },
  selectText: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "900",
    color: "purple",
  },
});
