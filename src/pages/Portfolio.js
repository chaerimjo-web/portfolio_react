import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import PortfolioList from "../components/PortfolioList";

//주소에 포트폴리오 가 있으면 실행
const Portfolio = ({data})=>{
  return(
    <>
    <Header/>
      <main class="content">
      <div class="container latest_portfolio">            
          <div class="row list">
            <PortfolioList data={data}/>
          </div>
        </div>
      </main>
    <Footer/>
    </>
  )
}

export default Portfolio;