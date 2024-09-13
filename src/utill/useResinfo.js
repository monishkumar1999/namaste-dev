import { useState, useEffect } from "react";

const useResinfo = (resid) => {
  const [restinfo, setResinfo] = useState(null);

  useEffect(() => {
    fetchdata();
  }, []);

  const fetchdata = async () => {
    try {
      const restmenudata = await fetch(
        "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=13.0843007&lng=80.2704622&restaurantId=" +
          resid +
          "&catalog_qa=undefined&submitAction=ENTER"
      );

      const resmenu = await restmenudata.json();

      setResinfo(resmenu);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  console.log(restinfo);
  return restinfo;
};

export default useResinfo;
