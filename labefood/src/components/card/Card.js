import * as React from "react"
import axios from "axios"
import { useState } from "react"
import { useEffect, useContext } from "react"
import { GlobalContext } from '../../global/GlobalContext'
import { useNavigate } from "react-router-dom"
import { goToRestaurant } from "../../routes/coordinator"
import { Container, CardMeal, Delivery } from './styled'


export const CardImageF = () => {
  const [rest, setRest] = useState([]);
  const { states } = useContext(GlobalContext);
  const { filter } = states;
  const navigate = useNavigate();

  const getRest = () => {
    const token =
      window.sessionStorage.getItem('token');
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/restaurants",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setRest(res.data.restaurants);
      })
      .catch((err) => {

      });
  };

  useEffect(() => {
    getRest();
  }, []);

  const filteredList = filter ? rest.filter(({
    name
  }) => name.toUpperCase().includes(filter.toUpperCase())) : rest;


  const listRest = filteredList.map((res) => {
    return (
      <div key={res.id} onClick={() => goToRestaurant(navigate, res.id)}>
        <Container>
          <CardMeal>
            <div>
              <img src={res.logoUrl} alt="food" />
            </div>
            <div>
              <h4 className="Restaurante">{res.name}</h4>
            </div>
            <Delivery>
              <p className=" Tempo-de-entrega">{res.deliveryTime} Min</p>
              <p className="Taxa-de-entrega">Frete R${res.shipping},00</p>
            </Delivery>
          </CardMeal>
        </Container>
      </div>
    );
  });

  return <>{listRest}</>;
};

export const CardImageH = () => {
  const [rest, setRest] = useState([]);
  const { states } = useContext(GlobalContext);
  const { filter } = states;
  const navigate = useNavigate();

  const getRest = () => {
    const token = window.sessionStorage.getItem('token')
    axios
      .get(
        "https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/restaurants",
        {
          headers: {
            auth: token,
          },
        }
      )
      .then((res) => {
        setRest(res.data.restaurants);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    getRest();
  }, []);
  const filteredList = filter ? rest.filter(({
    category
  }) => category.toUpperCase().includes(filter.toUpperCase())) : rest;

  const listRest = filteredList.map((res) => {

    return (
      <div key={res.id} onClick={() => goToRestaurant(navigate, res.id)}>
        <Container >
          <CardMeal>
            <div>
              <img src={res.logoUrl} alt="food" />
            </div>
            <div>
              <h4 className="Restaurante">{res.name}</h4>
            </div>
            <Delivery>
              <p className=" Tempo-de-entrega">{res.deliveryTime} Min</p>
              <p className="Taxa-de-entrega">Frete R${res.shipping},00</p>
            </Delivery>
          </CardMeal>
        </Container>
      </div>
    );
  });

  return <>{listRest}</>;
};