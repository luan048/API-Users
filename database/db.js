import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'

dotenv.config()

const database = new Sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        dialect: process.env.DB_DIALECT
    }
)


//Serve para fazer a conexão do Models, do banco de dados, com o MySql
export async function tryToConnect(){
    try{
        database.sync({alter: true}) //Alter aprenas para alteração/atualização, do DB, na primeira criação, force
        await database.authenticate()
        console.log("Connection Established")
    }catch (error){
        console.log("Error trying to establish connection", error)
    }
}

export {database}