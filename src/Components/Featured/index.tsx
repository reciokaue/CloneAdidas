import React, { useEffect, useState } from 'react';

import { Container, Card, LeftArrowIcon, RightArrowIcon } from './styles';

const Featured: React.FC = () => {
  const [ range, setRange ] = useState(0)  
  const [ scroll, setScroll ] = useState(1024)
  const [ maxScroll, setMax ] = useState(3072)

  window.addEventListener('resize', () => SizeScreen() )  
  useEffect(()=>{SizeScreen()},[])

  function SizeScreen(){
    var windowWidth = window.outerWidth;
    if(windowWidth >= 1024){
      setScroll(1024)
      setMax(-3072)
    }else if(windowWidth >= 767){
      setScroll(768)
      setMax(-3328)
    }else{
      setScroll(256)
      setMax(-3840)
    }
  }

  useEffect(() =>{
  const Page = (document.getElementById("page") as HTMLElement);
  Page.style.marginLeft = range + "px"
    
  if(range > 0 || range > -200 ){
    setRange(0);
  }
  if(range < maxScroll){
    setRange(maxScroll);
  }
  },[range])

  function next(){
    if((range <= -3843 && scroll === 256) || (range <= -3072 && scroll === 1024)){}else{
      setRange(range - scroll) 
    }
  }
  function prev(){
    if(range >= -200){} else{
      setRange(range + scroll) 
    }
  }
  return (
    <Container>
      <h1>Em Destaque</h1>
     
      <div id="page">

        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>
        <Card>1</Card>

        <Card>2</Card>
        <Card>2</Card>
        <Card>2</Card>
        <Card>2</Card>
        
        <Card>3</Card>
        <Card>3</Card>
        <Card>3</Card>
        <Card>3</Card>
        
        <Card>4</Card>
        <Card>4</Card>
        <Card>4</Card>
        <Card>4</Card>

      </div>  
      <p>{range}px</p>
      <p>{maxScroll}</p>
      <section>
      <span className={'web tablet '+ (range === -0? 'on': '')} onClick={() => setRange(0)}/>
      <span className={range === -256? 'on': ''} onClick={() => setRange(-256)}/>
      <span className={range === -512? 'on': ''} onClick={() => setRange(-512)}/>
      <span className={'tablet ' + (range === -768? 'on': '')} onClick={() => setRange(-768)}/>

      <span className={'web '+ (range === -1024? 'on': '')} onClick={() => setRange(-1024)}/>
      <span className={range === -1280? 'on': ''} onClick={() => setRange(-1280)}/>
      <span className={'tablet ' + (range === -1536? 'on': '')} onClick={() => setRange(-1536)}/>
      <span className={range === -1792? 'on': ''} onClick={() => setRange(-1792)}/>

      <span className={'web '+ (range === -2048? 'on': '')} onClick={() => setRange(-2048)}/>
      <span className={'tablet ' + (range === -2304? 'on': '')} onClick={() => setRange(-2304)}/>
      <span className={range === -2560? 'on': ''} onClick={() => setRange(-2560)}/>
      <span className={range === -2816? 'on': ''} onClick={() => setRange(-2816)}/>

      <span className={'web tablet '+(range === -3072? 'on': '')} onClick={() => setRange(-3072)}/>
      <span className={'tablet' + (range === -3328? 'on': '')} onClick={() => setRange(-3328)}/>
      <span className={range === -3584? 'on': ''} onClick={() => setRange(-3584)}/>
      <span className={range === -3840? 'on': ''} onClick={() => setRange(-3840)}/>

        <button className={'left ' + (range === 0? 'none': '')} onClick={prev}>
          <LeftArrowIcon/>
        </button>
        <button className={'right '+ (range <= maxScroll? 'none': '')} onClick={next}>
          <RightArrowIcon/>
        </button>
      </section>
    </Container>
  );
};

export default Featured;
