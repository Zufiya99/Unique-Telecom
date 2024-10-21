import React from "react";
import "./ExploreItems.css";
import { item_list } from "../../../public/asset/assets";

const ExploreItems = ({ category, setCategory }) => {
  return (
    <div className="explore-items" id="explore-items">
      <h1>Explore the items</h1>
      <p className="explore-items-text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia,
        assumenda. Delectus laudantium voluptatibus animi magnam, ea quos
        dolorem in illum!
      </p>
      <div className="explore-items-list">
        {item_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory(category === item.item_name ? null : item.item_name)
              }
              key={index}
              className="explore-items-list-item"
            >
              <img
                className={category === item.item_name ? "active" : ""}
                src={item.item_image}
                alt="item"
              />
              <p>{item.item_name}</p>
            </div>
          );
        })}
      </div>
      <hr />
    </div>
  );
};

export default ExploreItems;
