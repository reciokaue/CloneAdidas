import React, { useEffect, useState } from 'react';

import { Container, HamburgerIcon, DragContainer, Row, Utility, AdidasIcon, CloseIcon, CountryRow, BrazilIcon } from './styles';
import DropNavigator from '../DropNavigator';

const HamburgerMenu: React.FC = () => {
  const [ switchMenu, SetSwitch] = useState(false)

  return (
    <Container>
      <span onClick={() => SetSwitch(!switchMenu)} >
        <HamburgerIcon/>
      </span>
      <DragContainer className={switchMenu? 'open': 'closed'}>
        <Row>
          <span></span>
          <AdidasIcon/>
          <button onClick={() => SetSwitch(!switchMenu)}><CloseIcon/></button>
        </Row>
        <DropNavigator/>

        <Utility>
          <a>Minha conta</a>
          <a>Localizador de Lojas</a>
          <a>Ajuda</a>
          <a>Status do pedido</a>
          <a>
            <label>visite tambem</label>
            <span>Reebok</span>
          </a>
        </Utility>
        <CountryRow>
          <BrazilIcon/>
          Brazil
        </CountryRow>
      </DragContainer>
    </Container>
  );
};

export default HamburgerMenu;
