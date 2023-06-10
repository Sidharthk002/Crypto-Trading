import React, { useState, useEffect } from "react";
import axios from "axios";
import { server } from "../index";
import {
  Container,
  HStack,
  Button,
  RadioGroup,Radio
} from "@chakra-ui/react";
import Loader from "./Loader";
import Error from "./Error";
import CoinCard from "./CoinCard";
const Coin = () => {

  const [coin, setCoin] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError]= useState(false)
  const [page,setPage] =useState(1);
  const [currency,setCurrency] = useState("inr")

  const currencySymbol = currency ==="inr"?"₹":currency==="eur"?"€" :"$";

  const changePage =(page)=>{
    setPage(page);
    setLoading(true);
  }

  const btns = new Array(132).fill(1)

  useEffect(() => {
    const fetchCoin = async () => {
      try {
        const { data } = await axios.get(`${server}/coins/markets?vs_currency=${currency}&page=${page}`);
        // console.log(data);
        setCoin(data);
        setLoading(false);
      } catch (error) {
        setError(true);
        setLoading(false)
      }
    };
    fetchCoin();
  }, [currency,page]);

  if(error){
    return <Error message={"Error while Fetching Coins"}/>
  }
  return (
    <Container maxW={"container.xl"}>
      {loading ? (
        <Loader />
      ) : (
        <>

        <RadioGroup value={currency} onChange={setCurrency}>
          <HStack spacing={'4'}>
            <Radio value={'inr'}>INR</Radio>
            <Radio value={'eur'}>EUR</Radio>
            <Radio value={'usd'}>USD</Radio>
          </HStack>
        </RadioGroup>

          <HStack wrap={"wrap"} justifyContent={'space-evenly'}>
            {coin.map((el) => (
              <CoinCard
                id={el.id}
                name={el.name}
                img={el.image}
                price={el.current_price}
                rank={el.trus_score_rank}
                url={el.url}
                symbol={el.symbol}
                currencySymbol={currencySymbol}
              />
            ))}
          </HStack>
          <HStack w={'full'} overflow={'auto'} p={'8'}>
            {btns.map((item,index)=>(
              <Button bgColor={"blackAlpha.900"} color={'white'} onClick={()=>changePage(index+1)} key={index}>{index+1}</Button>
            ))}
          </HStack>
        </>
      )}
    </Container>
  );
};



export default Coin
