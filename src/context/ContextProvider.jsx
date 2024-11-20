import { createContext, useContext, useState, useEffect } from "react";
import axios from "axios";

const WarrantContext = createContext();

export function WarrantProvider({ children }) {
  const [data, setData] = useState(null);

  useEffect(() => {
    const ApplianceData = async () => {
      try {
        const response = await axios.get(
          "https://warrantease-json-server.onrender.com/appliances"
        );
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
        "https://warrantease-json-server.onrender.com/appliances",
        newAppliance
      );
      setData((prevData) => [response.data, ...prevData]);
      alert("Appliance Added Successfully.");
    } catch (error) {
      console.log("Error adding appliance", error);
    }
  };

  const handleEdit = async (id, updatedData) => {
    try {
      await axios.put(
        `https://warrantease-json-server.onrender.com/appliances/${id}`,
        updatedData
      );
      setData((prevData) => {
        return prevData.map((item) =>
          item.id === id ? { ...item, ...updatedData } : item
        );
      });
      alert("Appliance Edited Successfully.");
    } catch (error) {
      console.log("Error editing appliance", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://warrantease-json-server.onrender.com/appliances/${id}`
      );

      setData((prevData) => prevData.filter((item) => item.id !== id));
      alert("Appliance Deleted Successfully.");
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
