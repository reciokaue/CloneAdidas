import React from "react";

import { Container, Colmun } from "./styles";
import data from '../../Data/TabContent'

interface Props {
  number: number ;
}

const TabProduct: React.FC<Props> = (Props) => {
  const Data = data[Props.number];
  return (
    <Container>
      <Colmun>
      <h1>{Data[0].title}</h1>
        
        {Data[0].itens?.map((item) =>(
        item.img !== true ? (
          <a className={item.class} key={item.name}>
            {item.name} <br/>
          </a>
        ) :(
          <a key={item.name}>
            <div className="imageFake"></div>
          </a>
        )
      ))}
      </Colmun>
      <Colmun>
        <h1>{Data[1].title}</h1>
        
        {Data[1].itens?.map((item) =>(
        item.img !== true ? (
          <a className={item.class} key={item.name}>
            {item.name} <br/>
          </a>
        ) :(
          <a key={item.name}>
            <div className="imageFake"></div>
          </a>
        )
      ))}
      </Colmun>
      <Colmun>
        <h1>{Data[2].title}</h1>

        {Data[2].itens?.map((item) =>(
          item.img !== true ? (
            <a className={item.class} key={item.name}>
              {item.name} <br/>
            </a>
          ) :(
            <a key={item.name}>
              <div className="imageFake"></div>
            </a>
          )
        ))}
      </Colmun>
      <Colmun>
        <h1>{Data[3].title}</h1>
        
        {Data[3].itens?.map((item) =>(
          item.img !== true ? (
            <a className={item.class} key={item.name}>
              {item.name} <br/>
            </a>
          ) :(
            <a key={item.name}>
              <div className="imageFake"></div>
            </a>
          )
        ))}
      </Colmun>
      <Colmun>
        <h1>{Data[4].title}</h1>

        {Data[4].itens?.map((item) =>(
         item.img !== true ? (
          <a className={item.class} key={item.name}>
            {item.name} <br/>
          </a>
        ) :(
          <a key={item.name}>
            <div className="imageFake"></div>
          </a>
        )
        ))}
      </Colmun>
      <Colmun>
        <h1>{Data[5].title}</h1>

        {Data[5].itens?.map((item) =>(
         item.img !== true ? (
          <a className={item.class} key={item.name}>
            {item.name} <br/>
          </a>
        ) :(
          <a key={item.name}>
            <div className="imageFake"></div>
          </a>
        )
        ))}
      </Colmun>

    </Container>
  );
};

export default TabProduct;
