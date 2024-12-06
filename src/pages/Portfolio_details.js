import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import PortfolioSingle from "../components/PortfolioSingle";

//주소에 포트폴리오 가 있으면 실행
const Details = ({data})=>{
  return(
    <>
    <Header/>
    <PortfolioSingle data={data}/>
    <Footer/>
    </>
  )
}

export default Details;