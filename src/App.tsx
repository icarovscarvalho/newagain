import { Navbar } from "./components/Navbar/Navbar";
import { Article } from "./components/Article/Article";

import "./styles/App.css";

import article1 from "./assets/images/dashboard.png";
import article2 from "./assets/images/vibrantePortrait.png";
import article3 from "./assets/images/malayalan.jpg";
import article4 from "./assets/images/lifeStyle.jpg";
import { useState } from "react";

export function App() {

  return (
    <>
      <Navbar />
      <main>
        <section className="articles2">
          <Article
            thumbnail={ article1 }
            title="Designing Dashboards"
            provider="NASA"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maiores rem eius odio itaque, modi beatae. Exercitationem ad, sint aliquam totam dolorem inventore laborum libero, consectetur, voluptates deserunt ab eum." />
        </section>
        <section className="articles">
          <Article 
            thumbnail={ article2 }
            title="Vibrant Portraits of 2020"
            provider="SpaceNews"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maiores rem eius odio itaque, modi beatae. Exercitationem ad, sint aliquam totam dolorem inventore laborum libero, consectetur, voluptates deserunt ab eum." />
            
        </section>
        <section className="articles2">
          <Article
            thumbnail={ article3 }
            title="36 days of Malayalam type"
            provider="Spaceflight Now"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maiores rem eius odio itaque, modi beatae. Exercitationem ad, sint aliquam totam dolorem inventore laborum libero, consectetur, voluptates deserunt ab eum." />
        </section>
        <section className="articles">
          <Article
            thumbnail={ article4 }
            title="lifestyle and travel tips for summer"
            provider="Mokey Plans Tips"
            description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sequi maiores rem eius odio itaque, modi beatae. Exercitationem ad, sint aliquam totam dolorem inventore laborum libero, consectetur, voluptates deserunt ab eum." />
        </section>
      </main>
    </>
  )
}
