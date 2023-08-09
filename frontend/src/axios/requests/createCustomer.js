import { toast } from "react-toastify";
import baseURL from "../config";

// cria um cliente
export const createCustomer = async (customerData) => {
  try{
    const response = await baseURL.post("/", customerData);
    toast.success(response.data.msg);
    return response;
  } catch(err) {
    toast.error(err)
  }
};
