import database from '../../../database/index.js';

export const get = (_, res) => {
  try {
    const q = `
    SELECT
      *
    FROM
      clientes
    WHERE
      status = 'on';
  `;

  database.query(q, (err, data) => {
    if (err) return res.json(err);

    return res.status(200).json(data);
  });

  } catch (err) {
    res.status(400).json(err);
  }
};
