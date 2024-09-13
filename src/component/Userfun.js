import { useState } from "react";

const Userfun =({name})=>{
 const [count]=useState(0);
    return <div className="border border-box m-2">
        <h1>{name}</h1>
        <h1>count {count}</h1>
    </div>
}

export default Userfun;