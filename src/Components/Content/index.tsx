import React from "react";
import Featured from "../Featured";
import {
  Container,
  TeamRow,
  ProductRow,
  Wrapper,
  Card,
  BuyGenre,
  Button,
  ArrowIcon,
  Brand1,
  Brand2,
  Brand3,
  Brand4,
} from "./styles";
import DropNavigator from "../DropNavigator";

const Content: React.FC = () => {
  return (
    <Container>
      <img
        src="https://images.pexels.com/photos/3797/black-and-white-sport-fight-boxer.jpg?"
        alt=""
      />
      <DropNavigator/>
        
          {/* {Data.map((datta) =>(
            <Dropdown title={datta.title}>

                {datta.columns.map((mamada) =>(
                  <>
                  <h1> {mamada.subtitle} </h1>
                    {mamada.itens.map((maminhos) =>(
                      <>
                        <span>{maminhos.name}</span>
                      </>
                    ))}
                  </>
                ))}

            </Dropdown>
          ))} */}

     
      <TeamRow>
        <h2>Encontre seu time</h2>
        <div>
          <Brand1 />
          <Brand2 />
          <Brand3 />
          <Brand4 />
        </div>
      </TeamRow>
      <Wrapper>
        <ProductRow>
            <Card className="card1">
              <h1>Tênis</h1>
              <img src="https://images.unsplash.com/photo-1588754685964-853c9fabf7d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1051&q=80" alt=""/>
            </Card>
            <Card className="card2">
              <h1>Roupas</h1>
              <img src="https://images.unsplash.com/photo-1577212017184-80cc0da11082?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80" alt=""/>
            </Card>
            <Card className="card3">
              <h1>Acessorios</h1>
              <img src="https://images.unsplash.com/photo-1596982164345-bf1cf56b56a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </Card>
            <Card className="card4">
              <h1>Preçoes Irresistiveis</h1>
              <img src="https://images.unsplash.com/photo-1511746315387-c4a76990fdce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt=""/>
            </Card>

          <BuyGenre className="masc">
              <img src="https://images.unsplash.com/photo-1577982787983-e07c6730f2d3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=859&q=80" alt="" />
              <Button>
                Comprar Masculino
                <ArrowIcon />
              </Button>
          </BuyGenre>

          <BuyGenre className="fem">
              <img src="https://images.unsplash.com/photo-1555274175-6cbf6f3b137b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80" alt="" />
              <Button>
                Comprar Feminino
                <ArrowIcon />
              </Button>
          </BuyGenre>

        </ProductRow>
      </Wrapper>
      <Featured/>
    </Container>
  );
};

export default Content;
