import ItemList from "./ItemList";
const RestaruantCatogry=(item)=>{
    // console.log(item)
    return (
       <div className="bg-gray-100 p-4 w-6/12 m-auto shadow-lg my-4" onClick={()=>{
        console.log("hai")
       }}>
        <div className=" flex justify-between" >
             {/* // {accoridan header} */}
            <span className="font-bold">{item.item.title} ({item.item.itemCards.length})</span>
            <span >&#8628;</span>
             {/* {accoridan body} */}
            
        </div>
        <ItemList items={item.item.itemCards}/>
        </div>
    )
}

export default RestaruantCatogry;