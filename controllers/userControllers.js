import { UserServices } from '../services/userServices.js'

const instanceUserServices = new UserServices()

export async function createUser(req, res) {
    const {name, age, job} = req.body
    await instanceUserServices.createUser(name, age, job)
    return res.status(200).json({message: 'Sucessfully'})
}

export async function getAllUsers(req, res) {
    await instanceUserServices.getAllUsers()
    return res.status(200).json({message: 'Sucessfully'})
}

export async function getUser(req, res) {
    const {id} = req.body
    await instanceUserServices.getUser(id)
    return res.status(200).json({message: 'Sucessfully'})
}

export async function updateJob(req, res) {
    const {id} = req.body
    await instanceUserServices.updateJob(id, newJob)
    return res.status(200).json({message: 'Sucessfully'})
}

export async function delUser(req, res) {
    const {id} = req.body
    await instanceUserServices.delUser(id)
    return res.status(200).json({message: 'Sucessfully'})
}