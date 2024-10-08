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
            console.log('Error on Create Services: ' +error)
        }
    }

    async getAllUsers() {
        try {
            await database.sync()
            const users = await UserModel.findAll()
            return {
                statusValue: 200,
                message: 'Successfully',
                users: users
            }
        }

        catch(error) {
            console.log('Error on Get All Users' +error)
        }
    }

    async getUser(id) {
        try {
            const user = await UserModel.findByPk(id)
            if (user) {
                return {
                    statusValue: 200,
                    message: 'Successfully',
                    user: user
                }
            } 
            
            else {
                return {
                    statusValue: 404,
                    message: 'User not found'
                }
            }
        } 
        
        catch (error) {
            console.log('Error on Get Services:', error)
            return {
                statusValue: 500,
                message: 'Internal Server Error'
            }
        }
    }
    

    async updateJob(id, newJob) {
        try {
            await database.sync()
            const user = await UserModel.findByPk(id)
            user.update({job: newJob})
            return {
                statusValue: 200,
                message: 'Sucessfully'
            }
        }

        catch(error) {
            console.log('Error on Update Services: ' +error)
        }
    }

    async delUser(id) {
        try {
            await database.sync()
            const user = await UserModel.findByPk(id)
            user.destroy()
            return {
                statusValue: 200,
                message: 'Sucessfully'
            }
        }

        catch(error) {
            console.log('Error on Delete Services: ' +error)
        }
    }
}