import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({item, showitems,setexpanditem,dummy} ) => {


  return (
    <div
      className="bg-gray-100 p-4 w-6/12 m-auto shadow-lg my-4"
      onClick={() => {
        setexpanditem()
      }}
    >
      <div className="flex justify-between cursor-pointer">
        <span className="font-bold">
          {item.title} ({item.itemCards.length})
        </span>
        <span>&#8628;</span>
      </div>
      {showitems && <ItemList items={item.itemCards} dummy={dummy}/>}
    </div>
  );
};

export default RestaurantCategory;
