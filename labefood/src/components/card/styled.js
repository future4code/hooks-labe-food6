import styled from "@emotion/styled"

export const Container = styled.div`
width: 100vw;
display: flex;
justify-content: center;
align-items: center;
`
export const CardMeal = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 45.5vw;
  padding: 0 0 16px;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-bottom: 7px;

  img {
    width: 79.5vw;
    height: 29vw;
    border-radius: 8px 8px 0 0;
    object-fit: cover;
  }
  .Restaurante {
    width: 90%;
    margin: 2.7vw 4vw 1vw;
    font-family: Roboto;
    font-size: 3.9vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #5cb646;
  }
  .Tempo-de-entrega {
    width: 40%;
    margin: 1vw 2vw 0 4vw;
    font-family: Roboto;
    font-size: 3.9vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: #b8b8b8;
  }
  .Taxa-de-entrega {
    width: 43%;
    margin: 1vw 4vw 0 2vw;
    font-family: Roboto;
    font-size: 3.9vw;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    text-align: right;
    color: #b8b8b8;
  }
`;

export const Delivery = styled.div`
  display: flex;
`