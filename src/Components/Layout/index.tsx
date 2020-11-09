import React from 'react';

import { Container } from './styles';
import Header from '../Header';
import Content from '../Content';
import Footer from '../Footer';

const Layout: React.FC = () => {
  return (
    <Container>
      <Header/>
      <Content/>
      <Footer/>
      {/* <NikeButton/> */}
    </Container>
  );
};

export default Layout;
