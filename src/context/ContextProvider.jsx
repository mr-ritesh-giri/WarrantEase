import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WarrantContext = createContext();

export function WarrantProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ApplianceData = async () => {
      try {
        const response = await axios.get("http://localhost:5000/appliances");
        console.log(data);
        setData(response.data);
      } catch (error) {
        console.log("Error in fetching data", error);
        return null;
      }
    };
    ApplianceData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/appliances/${id}`);

      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Error deleting appliance", error);
    }
  };

  return (
    <WarrantContext.Provider value={{ data, handleDelete }}>
      {children}
    </WarrantContext.Provider>
  );
}

export function useWarrant() {
  return useContext(WarrantContext);
}
