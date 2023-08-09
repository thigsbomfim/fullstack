import database from '../../../../database/index.js';
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import path from 'path';
const __dirname = dirname(fileURLToPath(import.meta.url));
const uploadsPath =  path.resolve(__dirname, '..', '..', '..', '..', '..', 'tmp', 'uploads');

export const add = (req, res) => {
  try {
    const { id } = req.params;

    if(req.file) {
      const { originalname, filename, size, destination } = req.file;
      const qAdd = "INSERT INTO imagens (`name`, `name_hash`, `size`, `url`, `cliente_id`) VALUES (?, ?, ?, ?, ?);";
      const values = [originalname, filename, size, destination, id];

      database.query(qAdd, values, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json({ error: false, msg: 'Imagem adicionada com sucesso' });
      });
    } else {
      const qUser = "INSERT INTO imagens (`name`, `name_hash`, `size`, `url`, `cliente_id`) VALUES (?, ?, ?, ?, ?);";
      const valuesUser = ['user.jpg', 'user.jpg', 0, uploadsPath, id];

      database.query(qUser, valuesUser, (err, data) => {
        if (err) return res.json(err);

        return res.status(200).json({ error: false, msg: 'Imagem adicionada com sucesso' });
      });
    }
  } catch (error) {
    return res.status(200).json({ error: true, msg: 'Erro ao adicionar imagem' });
  }
};
