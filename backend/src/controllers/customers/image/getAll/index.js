import database from "../../../../database/index.js";

export const getAll = (req, res) => {
  try {
    const { id } = req.params;
    const qGetAll = "SELECT i.*, CONCAT(i.url, '\\\\', i.name_hash) AS imageUrls FROM imagens i WHERE cliente_ID = ?";
    const values = [id];

    database.query(qGetAll, values, (err, images) => {
      if (err) return res.json(err);

    return res.status(200).json({ images });

    });

  } catch (error) {
    return res.status(200).json({ error: true, msg: 'Erro ao tentar encontrar as imagens' });
  }
};
