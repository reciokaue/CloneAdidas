import React from 'react';
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
                <h2 className="lv1A">
                  {item.name}
                </h2>
              ))}
            </Dropdown>
            ):(
              <h2>
                {column.subtitle}
              </h2>
            )     
          ))}
        </Dropdown>
        </>
      ))}
    </Container>
  );
};

export default DropNavigator;
