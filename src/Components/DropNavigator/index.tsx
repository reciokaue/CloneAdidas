import React, { useEffect, useState } from 'react';
import Dropdown from '../Dropdown';

import { Container} from './styles';
import data from '../../Data/LinksTab'
const DropNavigator: React.FC = () => {
  return (
    <Container>
      {data.map((sector) =>(
        <>
          <Dropdown lv={0} title={sector.title}>
            
          {sector.columns.map((column) =>(
            column.drop?(
              <Dropdown lv={1} title={column.subtitle}>
              {column.itens.map((item) =>(
                <a className="lv1A">
                  {item.name}
                </a>
              ))}
            </Dropdown>
            ):(
              <a>
                {column.subtitle}
              </a>
            )     
          ))}
        </Dropdown>
        </>
      ))}
    </Container>
  );
};

export default DropNavigator;
