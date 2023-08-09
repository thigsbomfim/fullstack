import { getCustomer } from "../../axios/requests/getCustomer";

export const handleSuccess = (setCustomers, closeModal) => {
  getCustomer(setCustomers);
  closeModal();
};
