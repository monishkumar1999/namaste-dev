import { useState } from "react";
import ItemList from "./ItemList";
const RestaruantCatogry = (item) => {
  const [showitem, setShowitem] = useState(false);
  return (
    <div
      className="bg-gray-100 p-4 w-6/12 m-auto shadow-lg my-4"
      onClick={() => {
        // console.log(item.item.title)
        showitem == false ? setShowitem(true) : setShowitem(false);
      }}
    >
      <div className=" flex justify-between cursor-pointer">
        {/* // {accoridan header} */}
        <span className="font-bold">
          {item.item.title} ({item.item.itemCards.length})
        </span>
        <span>&#8628;</span>
        {/* {accoridan body} */}
      </div>
      {showitem && <ItemList items={item.item.itemCards} />}
    </div>
  );
};

export default RestaruantCatogry;
