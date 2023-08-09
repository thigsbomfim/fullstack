import database from "../../../../database/index.js";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const uploadsPath =  path.resolve(__dirname, '..', '..', '..', '..', '..', 'tmp', 'uploads');

export const profile = (req, res) => {
  try {
    const { id } = req.params;

    const qGetOne = "SELECT i.* FROM imagens i WHERE cliente_ID = ? ORDER BY i.ID DESC";
    const values = [id];

    database.query(qGetOne, values, (err, data) => {
      if (err) return res.json(err);

      const imagem = data[0];

      if (!imagem) {
        return res.status(404).json({ error: true, msg: 'Imagem não encontrada' });
      }
      const imgUrls = path.resolve(uploadsPath, imagem.name_hash)
      res.sendFile(imgUrls);
    });

  } catch (error) {
    return res.status(200).json({ error: false, msg: 'Erro ao tentar encontrar a imagem' });
  }
};
