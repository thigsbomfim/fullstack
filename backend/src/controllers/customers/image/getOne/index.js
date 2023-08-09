import database from "../../../../database/index.js";

export const getOne = (req, res) => {
  try {
    const { id_cliente, id_img } = req.params;

    const qGetOne = "SELECT i.*, CONCAT(i.url, '\\\\', i.name_hash) AS imageUrl FROM imagens I WHERE cliente_ID = ? AND ID = ?;";
    const values = [ id_cliente, id_img ];

    database.query(qGetOne, values, (err, data) => {
      if (err) return res.json(err);

      const imagem = data[0];

      if (!imagem) {
        return res.status(404).json({ error: true, msg: 'Imagem não encontrada' });
      }

      return res.json({ image: data });
    });

  } catch (error) {
    return res.status(200).json({ error: false, msg: 'Erro ao tentar encontrar a imagem' });
  }
};
