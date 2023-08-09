import baseURL from "../config";

// cria a imagem do cliente
export const uploadImage = async (customerId, imageFile) => {
  const formData = new FormData();
  if (imageFile) {
    formData.append("file", imageFile);
  }
  await baseURL.post(`/image/${customerId}`, formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
};
