import React from "react";
import { FlatList } from "react-native";

import {
  Container,
  Header,
  Title,
  Category,
  Icon,
  Name,
  Separator,
  Footer,
} from "./styles";

import { Button } from "../../components/Forms/Button";

import { categories } from "../../utils/categories";

export interface Category {
  key: string;
  name: string;
  icon: string;
  color: string;
}

interface CategorySelectProps {
  category: Category;
  setCategory: (category: Category) => void;
  closeSelectCategory: () => void;
}

export const CategorySelect = ({
  category,
  setCategory,
  closeSelectCategory,
}: CategorySelectProps) => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>

      <FlatList
        data={categories}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            isActive={category.key === item.key}
            onPress={() => setCategory(item)}
          >
            <Icon name={item.icon} color={item.color} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
        style={{ flex: 1, width: "100%" }}
      />

      <Footer>
        <Button
          disabled={category.key === "category"}
          onPress={closeSelectCategory}
          title="Selecionar"
        />
      </Footer>
    </Container>
  );
};
