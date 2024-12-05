import React, { useContext } from "react";
import "./FoodDisplay.css";
import FoodItem from "../FoodItem/FoodItem";
import { StoreContext } from "../../Context/StoreContext";

const FoodDisplay = ({ category }) => {
    const { food_list } = useContext(StoreContext);

    console.log("Current food_list:", food_list);
    console.log("Selected category:", category);

    return (
        <div className="food-display" id="food-display">
            <h2>Top dishes near you</h2>
            <div className="food-display-list">
                {food_list?.length > 0 ? (
                    food_list.map((item) => {
                        if (category === "All" || category === item.category) {
                            return (
                                <FoodItem
                                    key={item._id}
                                    image={item.image}
                                    name={item.name}
                                    desc={item.description}
                                    price={item.price}
                                    id={item._id}
                                />
                            );
                        }
                        return null;
                    })
                ) : (
                    <p>No items available in this category.</p>
                )}
            </div>
        </div>
    );
};

export default FoodDisplay;

