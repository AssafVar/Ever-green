import axios from "axios";

export const getPlants = async ({
  name, value,
}: {
    value: string;
    name: string;
}) => {
  try {
    const response = await axios.post("/api/plants", {
      name, value
    });
    return response;
  } catch (err) {
    return err;
  }
};
