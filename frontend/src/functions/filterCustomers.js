const filterCustomers = (searchTerm, customers) => {
    const normalizedSearchTerm = searchTerm.toLowerCase();
    return customers.filter((customer) => {
      const normalizedNome = customer.nome.toLowerCase();
      const normalizedTelefone = customer.numero_telefone.replace(/\D/g, '');
      const normalizedEmail = customer.email.toLowerCase();
      const normalizedGenero = customer.genero.toLowerCase();

      return (
        normalizedNome.includes(normalizedSearchTerm) ||
        normalizedTelefone.includes(normalizedSearchTerm) ||
        normalizedEmail.includes(normalizedSearchTerm) ||
        normalizedGenero.includes(normalizedSearchTerm) 
      );
    });
};
export default filterCustomers;

