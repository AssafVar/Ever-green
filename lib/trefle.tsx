import axios from "axios";

export const getPlants = async () => {
  try {
    const response = await axios.get("/api/plants")
    return response;
  } catch (err) {
    return err;
  }
};
