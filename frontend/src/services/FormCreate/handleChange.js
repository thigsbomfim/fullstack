const handleChange = async (e, setFoto) => {
  const foto = e.target.files[0];
  const fotoURL = URL.createObjectURL(foto)
  setFoto(fotoURL);
};

export default handleChange;
