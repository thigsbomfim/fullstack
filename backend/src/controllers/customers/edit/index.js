import database from '../../../database/index.js';

export const edit = (req, res) => {
  try{
    const { id } = req.params;
    const { nome, data_nascimento, genero, email, endereco, numero_telefone } = req.body;
    const values = [ nome, data_nascimento, genero, email, endereco, numero_telefone, id ];
    const q =
    "UPDATE clientes SET `nome` = ?, `data_nascimento` = ?, `genero`= ?, `email` = ?, `endereco` = ?, `numero_telefone` = ? WHERE ID = ?;";

    database.query(q, values, (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json({ id, msg: 'Cliente atualizado com sucesso'});
    });
  } catch (error) {
      return res.json(error)
  }
};
