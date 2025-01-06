import { FC } from "react";
import { useNavigate } from "react-router-dom";

import {
  DirectoryItemContainer,
  Body,
  BackgroundImage,
} from "./directory-item.styles";

import { Category } from "../../store/categories/category.types";
import { DirectoryCategory } from "../directory/directory.component";


export type CategoryProps = {
  category: DirectoryCategory
}

const DirectoryItem : FC<CategoryProps>= ({ category }) => {
  const { title, imageUrl, route } = category;

  const navigate = useNavigate();

  const onNavigateHandler = () => navigate(route);

  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl} />
      <Body>
        <h2>{title}</h2>
        <p>Shop Now</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
