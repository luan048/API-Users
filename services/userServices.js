import { UserModel } from "../models/userModels.js";
import { database } from "../database/db.js";

export class UserServices{

    async createUser(name, age, job) {
        try{
            await database.sync()
            const newUser = await UserModel.create({name, age, job})
            return {
                statusValue: 200,
                message: 'Sucessfully Created',
                userId: newUser.id
            }
        }

        catch(error) {
            console.log(error)
        }
    }
}