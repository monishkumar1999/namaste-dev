import { useEffect, useState } from "react";

const useOnlinestatus = () => {
  const [onlineStatus, setOnlinestatus] = useState(true);
  useEffect(() => {
    window.addEventListener("offline", () => {
        setOnlinestatus(false);
    });

    window.addEventListener("online", () => {
        setOnlinestatus(true);
    });
  }, []);

  return onlineStatus;
};
export default useOnlinestatus;
