import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { Link } from "react-router-dom";

const About = ()=>{
  return(
    <>
    <Header/>
      <main class="content">
        <div class="container about_content shadow">
          <h3 class="heading6">About Me</h3>
          <p class="narrow-p">I’m a web designer based in Romania. I create clean websites, love Apple products and I’m a big fan of trance music.
          </p>            
          <p class="narrow-p">
            Wanna get in touch? Do a quick scroll to the bottom of the page. It’s all there :
          </p>
          <hr class="double" />
          <h4 class="heading4 available">I’m currently available for freelance projects.</h4>        
          <h4 class="heading4 rate">Rates start at $50/hour.</h4>    
          <p class="portfolio_link">
          <Link to={`/portfolio`}  className="secondary-btn">See my portfolio</Link>
          </p>  
        </div>
      </main>
    <Footer/>
    </>
  )
}

export default About;