import database from '../../../database/index.js';

export const del = (req, res) => {
  try {
    const q = "UPDATE clientes SET status = 'del' WHERE ID = ?;";
    const { id } = req.params;
    database.query(q, id, (err) => {
        if(err) return res.json(err);

        return res.status(200).json({ error: false, msg: 'Cliente deletado com sucesso' })
    })
  } catch(err) {
    res.status(400).json(err)
  }
}

