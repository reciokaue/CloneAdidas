import React from "react";
import TabProduct from "../TabProduct";

import {
  Container,
  BrandRow,
  ItemRow,
  LogoContainer,
  AdidasIcon,
  Products,
  Search,
  SearchIcon,
  BasketIcon
} from "./styles";

const Header: React.FC = () => {
  return (
    <Container>
      <LogoContainer>
        <AdidasIcon />
      </LogoContainer>
      <BrandRow>
        <a>ajuda</a>
        <a>trocas e devoluções</a>
        <a>status do pedido</a>
        <a>cadastro da newsletter</a>
        <a>identifique-se</a>
      </BrandRow>
      <ItemRow>
        <Products>
          <a>homem<TabProduct number={0}/></a>
          <a>mulher<TabProduct  number={1}/></a>
          <a>kids<TabProduct number={2}/></a>
          <a>esportes<TabProduct number={3}/></a>
          <a>marcas<TabProduct number={4}/></a>
          <a>coleções<TabProduct number={5}/></a>
        </Products>
        <Search>
          <div>
            <input placeholder="Procurar" type="text" />
            <SearchIcon />
          </div>
          <BasketIcon />
        </Search>
      </ItemRow>
    </Container>
  );
};

export default Header;
