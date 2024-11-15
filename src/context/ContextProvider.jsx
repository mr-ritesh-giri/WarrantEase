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

  const handleAdd = async (newAppliance) => {
    try {
      const response = await axios.post(
        "http://localhost:5000/appliances",
        newAppliance
      );
      setData((prevData) => [response.data, ...prevData]);
    } catch (error) {
      console.log("Error adding appliance", error);
    }
  };

  // const handleEdit = (id) => {
  //   setData((prevData) => [ ...prevData,{id: , form}]);
  // };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/appliances/${id}`);

      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log("Error deleting appliance", error);
    }
  };

  return (
    <WarrantContext.Provider
      value={{ data, handleAdd, handleEdit, handleDelete }}
    >
      {children}
    </WarrantContext.Provider>
  );
}

export function useWarrant() {
  return useContext(WarrantContext);
}
