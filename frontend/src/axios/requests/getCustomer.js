import baseURL from "../config";
import { toast } from 'react-toastify';

// busca os clientes
export const getCustomer = async (setCustomers) =>{
  try {
    const res = await baseURL.get("/");
    const { data } = res;
    setCustomers(data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
  }
  catch(err) {
      toast.error(err)
  }
};
