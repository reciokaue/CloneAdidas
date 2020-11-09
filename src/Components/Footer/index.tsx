import React from "react";

import { ArrowIcon, Button } from "../Content/styles";
import {
  Container,
  History,
  NewsLetter,
  LinkMap,
  Columns,
  Payment,
  Bureaucratic,
  BrasilIcon,
  CreditCardIcon
} from "./styles";
import data from "../../Data/MapLinks";

const Footer: React.FC = () => {
  return (
    <Container>
      <History>
      <div>
          <div>
            <h1>ADIDAS: HISTÓRIA ESTILO E MATERIAL ESPORTIVO DESDE 1949</h1>
            <p>
              O esporte mantém o corpo e a mente em forma. E as pessoas mais
              próximas. Com o esporte, temos o poder de mudar vidas. Pode ser
              através de histórias emocionantes e atletas que te incentivam a
              levantar, fazer alguma coisa. Ou quem sabe uma simples tecnologia de
              performance em uma loja de material esportivo, na medida para
              melhorar o seu desempenho, quebrar seu recorde. Não é à toa que
              todos sentem-se em casa na adidas: corredores, jogadores de
              basquete, boleiros e qualquer um que goste de treinar. Tanto faz se
              você gosta de natureza e adrenalina, ou da paz interior, do yoga e
              da cidade. As três listras estão em tudo. Na cena musical, palcos,
              festivais. Mentalizando a vitória, antes do apito inicial. Na meio
              da corrida. Na linha de chegada. A gente tá sempre lá para quem
              cria. Para melhorar performances. Melhorar vidas e mudar o mundo.
            </p>
          </div>
          <div>
            

          <h1>SUA LOJA DE ESPORTES PARA TODAS AS HORAS</h1>
          <p>
            Design adidas para atletas de todos os tipos. Mentes criativas que
            amam mudar o jogo. Desafiar o bom senso. Quebrar as regras, escrever
            outras. Quebrar estas regras também. Somos a loja de esportes que
            fornece roupas pré-jogo para times e craques que precisam de foco
            total. Fabricamos produtos que cruzam a linha de chegada e vencem a
            partida com você. Somos a loja de artigos esportivos pensados para
            as mulheres, com tops e leggings perfeitos para o seu treino, seja
            ele de alto ou baixo impacto. Desenhamos, inovamos, recriamos.
            Testamos novas tecnologias em ação: em campo, nas pistas, nas
            quadras, nas piscinas. Nossas linhas de spostswear voltam no tempo e
            servem de base para o look street, com peças como o tênis NMD e os
            agasalhos Firebird. Ícones ganham vida de novo em sneakers como Stan
            Smith e Superstar, donos das ruas e dos palcos. Nós somos a loja
            esportiva das Três Listras. Nós somos a casa dos creators.
          </p>
        </div>
      </div>
      </History>
      <NewsLetter>
        <div>
          <div>
            CADASTRE-SE PARA RECEBER NOTÍCIAS, LANÇAMENTOS E GANHE 15% DE DESCONTO
          </div>
          <div>
            <Button>
              SUBSCREVA A NOSSA NEWSLETTER <ArrowIcon />
            </Button>
          </div>
        </div>
      </NewsLetter>
      <LinkMap>
        <div>
          {data.map((dataa) => (
            <Columns>
              {dataa.column.map((item) =>
                item.title === "space" ? (
                  <a></a>
                ) : (
                  <a key={item.title}>
                    {item.h1 ? (
                      <h1>{item.title}</h1>
                    ) : item.bold ? (
                      <a className="bold">{item.title}</a>
                    ) : (
                      <a>{item.title}</a>
                    )}
                  </a>
                )
              )}
            </Columns>
          ))}
        </div>
      </LinkMap>
      <Payment>
        <div>
          <h1>Formas de pagamento</h1>
         <div>
         <section>
           <CreditCardIcon/>
            <span>Credit Card</span>
          </section>
          <section>
           <CreditCardIcon/>
            <span>Credit Card</span>
          </section>
          <section>
           <CreditCardIcon/>
            <span>Credit Card</span>
          </section>
          <section>
           <CreditCardIcon/>
            <span>Credit Card</span>
          </section>
          <section>
           <CreditCardIcon/>
            <span>Credit Card</span>
          </section>
          <section>
           <CreditCardIcon/>
            <span>Credit Card</span>
          </section>
          <section>
           <CreditCardIcon/>
            <span>Credit Card</span>
          </section>
         </div>
        </div>
      </Payment>
      <Bureaucratic>
        <div>
          <h1>
            <BrasilIcon />
            Brasil
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, libero
            ratione sit ea a recusandae!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsa ad
            corporis provident magni, architecto esse dolor ullam quia accusamus,
            cum odio mollitia! Odio, excepturi!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione minus
            iusto culpa.
          </p>
        </div>
      </Bureaucratic>
    </Container>
  );
};

export default Footer;
