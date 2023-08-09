import database from '../../../../database/index.js';


export const del = (req, res) => {
  try {
    const { id_cliente, id_img } = req.params;
    const qDelete = "DELETE FROM imagens WHERE cliente_ID = ? AND ID = ?;";
    const values = [ id_cliente, id_img ];

    database.query(qDelete, values, (err, data) => {
      if (err) return res.json(err);

      return res.status(200).json({ error: false, msg: 'Imagem deletada com sucesso' });
    });

  } catch (error) {
    return res.status(400).json({ error: true, msg: 'Erro ao deletar imagem' });
  }
};
