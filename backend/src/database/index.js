import mysql from 'mysql2';
import 'dotenv/config';

const database = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "resonance_INK"
})

database.connect((error)=> {
    if (error) throw error;
    console.log(`Banco de Dados rodando: resonance_INK `)
})

export default database;
