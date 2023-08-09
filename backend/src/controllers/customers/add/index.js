import database from '../../../database/index.js';

export const add = (req, res) => {
  try {
    const { nome, data_nascimento, genero, email, endereco, numero_telefone } = req.body;
    const values = [ nome, data_nascimento, genero, email, endereco, numero_telefone ];
    const qCliente = "INSERT INTO clientes(`nome`, `data_nascimento`, `genero`, `email`, `endereco`, `numero_telefone`) VALUES (?, ?, ?, ?, ?, ?);";

    database.query(qCliente, values, (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json({ error: false, msg: 'Cliente criado com sucesso', id: data.insertId });
    });
  } catch (erro) {
    res.status(400).json(erro.message);
  }
};
