export default function formatNascimento(dataNascimento) {
    const date = new Date(dataNascimento);
    const dateAtual = new Date();
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const year = date.getFullYear();
    return `${dateAtual.getFullYear()-year} anos (${day}/${month}/${year})`;
}

export function getNascFormated(dataNascimento) {
    const date = new Date(dataNascimento);
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}