import React, { useEffect, useState } from 'react';

import { Container, Arrow, DropContainer  } from './styles';
import { useDrop } from './DropContext'

interface Props{
  title: string;
  lv?: number;
}

const Dropdown: React.FC<Props> = (Props) => {
  const [ down, setDown ] = useState(false)
  const { globalDrop, setglobal } = useDrop()
  const { globalDrop2, setglobal2 } = useDrop()

  function switchDrop(){
    if(!down && globalDrop === 0 && Props.lv === 0){
      setDown(!down)
      setglobal(1)
    }
    if(down && globalDrop === 1 && Props.lv === 0){
      setDown(!down)
      setglobal(0)
    }
    if(!down && globalDrop === 1 && Props.lv === 0){
      setDown(!down)
      setglobal(2)
      setTimeout(() => {
        setDown(true)
        setglobal(1)
      }, 5);
    }


    if(!down && globalDrop === 1 && globalDrop2 === 0 && Props.lv === 1  ){
      setDown(!down)
      setglobal(1)
      setglobal2(1)
    }
    if(down && globalDrop2 === 1 && Props.lv === 1 ){
      setDown(!down)
      setglobal(1)
      setglobal2(0)
    }
    if(!down && globalDrop2 === 1 && Props.lv === 1 ){
      setDown(!down)
      setglobal2(2)
      setTimeout(() => {
        setDown(true)
        setglobal2(1)
      }, 5);
    }
  }
  useEffect(() =>{
    if(globalDrop === 2){
      setDown(false)
      setglobal(0)
    }
    if(globalDrop2 === 2){
      if(Props.lv === 1){
        setDown(false)
      }
      setglobal2(0)
      setglobal(1)
    }
  },[globalDrop === 2, globalDrop2 === 2])

  return (
    <Container>
      <span onClick={switchDrop} className={down === true? 'droped': ''}>
        {Props.lv === 0?<h1>{Props.title}  <Arrow/></h1>: <span>{Props.title}  <Arrow/></span>}
      </span>  
        
      <DropContainer className={down? 'ContainerDroped': ''} id={Props.title}>
        {Props.children}
      </DropContainer>
    </Container>
  );
};

export default Dropdown;
