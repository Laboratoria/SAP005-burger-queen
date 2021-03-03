import React from "react";
import { Container, CategoryImage } from "./styled";

export default ({ data, activeCategory, setActiveCategory, title, name }) => {
  const handleCategoryClick = () => {
    setActiveCategory(data.id);
  };
  return (
    <Container
      active={activeCategory}
      id={data.id}
      onClick={handleCategoryClick}
      name={data.name}
      title={data.title}
      data-tip={data.title}
      data-for="tip-top"
    >
      <CategoryImage src={data.image} />
    </Container>
  );
};
