export default function phoneMask(value) {
  const phoneNumber = value.replace(/\D/g, ''); // Remove todos os caracteres não numéricos
  const ddd = phoneNumber.slice(0, 2);
  const firstBlock = phoneNumber.slice(2, 7);
  const secondBlock = phoneNumber.slice(7, 11);

  if (phoneNumber.length === 0) {
    return '';
  } else if (phoneNumber.length <= 2) {
    return `(${ddd}`;
  } else if (phoneNumber.length <= 7) {
    return `(${ddd}) ${firstBlock}`;
  } else {
    return `(${ddd}) ${firstBlock}-${secondBlock}`;
  }
}
