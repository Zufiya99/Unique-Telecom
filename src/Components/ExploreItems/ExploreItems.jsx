import React from "react";
import "./ExploreItems.css";
import { item_list } from "../../../public/asset/assets";

const ExploreItems = () => {
  return (
    <>
      <div className="explore-items" id="explore-items">
        <h1>Explore the item</h1>
        <p className="explore-items-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
          assumenda. Delectus laudantium voluptatibus animi magnam, ea quos
          dolorem in illum!
        </p>
        <div className="explore-items-list">
          {item_list.map((item, index) => {
            return (
              <div key={index} className="explore-items-list-item">
                <img src={item.item_image} alt="items image" />
                <p>{item.item_name}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ExploreItems;
