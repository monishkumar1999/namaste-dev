import { CDN_URL } from "../utill/constant";
const ItemList = ({ items }) => {
  return (
    <div >
     
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="p-2 m-2 border-b-4 flex justify-between text-left"
        >
          {console.log(item.card.info)}
          <div className="w-9/12">
            <span className="font-bold"> {item.card.info.name}</span>
            <br></br>
            <span className="text-sm">
              {" "}
              ₹
              {item.card.info.price
                ? item.card.info.price / 100
                : item.card.info.defaultPrice / 100}
            </span>
            <span className="text-xs"> {item.card.info.description}</span>
          </div>

          <div className="w-3/12 h-auto">
          <div className="absolute">
          <button className="bg-white p-2 rounded shadow-md ">Add+</button>
          </div>
          
            <img src={CDN_URL + item.card.info.imageId}></img>
            
          </div>
         
        </div>
      ))}
    </div>
  );
};

export default ItemList;
