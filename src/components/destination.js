import { Component } from "react";
import Des1 from "../img/1.jpeg";
import Des2 from "../img/2.jpeg";
import Des3 from "../img/3.jpeg";
import Des4 from "../img/4.jpeg";
import Des5 from "../img/5.jpeg";
import Des6 from "../img/6.jpeg";
import "./destinatiion.css";
import DestinationData from "./distinationdtata";

const distination = () => {
  return (
    <div className="Distination">
      <h1>Popular Destination</h1>
      <p>Travelling gives us opportunity to discover</p>

      <DestinationData
        className="first-des"
        heading="Maasai Mara National Reserve"
        text="Maasai Mara National Reserve is an area of preserved savannah wilderness in southwestern Kenya, along the Tanzanian border. Its animals include lions, cheetahs, elephants, zebras and hippos. Wildebeest traverse its plains during their annual migration. The landscape has grassy plains and rolling hills, and is crossed by the Mara and Talek rivers. The area nearby is dotted with villages (enkangs) of Maasai people."
        img1={Des1}
        img2={Des2}
      />
      <DestinationData
        className="first-des-rev"
        heading="Swiss Alps – The Magical Mountains"
        text="The dramatic peaks of Dammastock and the snow-clad majestic summit of Matterhorn have always amazed and left hikers spellbound with its astonishing beauty. Matterhorn is 10th tallest amongst the several mountains of the world with a distinct feature of a well-defined pyramid shape. It is one of the most active fold mountains of the world and is featured on the world famous Toblerone Chocolate as its logo. The slopes of the Switzerland mountains are famous for the skiing and snowboarding activities. This is amongst the famous mountains in the world. "
        img1={Des3}
        img2={Des4}
      />
      <DestinationData
        className="first-des"
        heading="Paris, France"
        text="Paris, France's capital, is a major European city and a global center for art, fashion, gastronomy and culture. Its 19th-century cityscape is crisscrossed by wide boulevards and the River Seine. Beyond such landmarks as the Eiffel Tower and the 12th-century, Gothic Notre-Dame cathedral, the city is known for its cafe culture and designer boutiques along the Rue du Faubourg Saint-Honoré"
        img1={Des5}
        img2={Des6}
      />
    </div>
  );
};

export default distination;
