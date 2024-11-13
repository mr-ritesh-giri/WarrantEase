import axios from "axios";

export const ApplianceData = async () => {
  try {
    const response = await axios.get("http://localhost:5000/appliances");
    return response.data;
  } catch (error) {
    console.log("Error in fetching data", error);
    return null;
  }
};
