import { UserServices } from '../services/userServices.js'

const instanceUserServices = new UserServices()

export async function createUser(req, res) {
    const {name, age, job} = req.body
    const resultado = await instanceUserServices.createUser(name, age, job)
    return res.status(200).json({resultado})
}

export async function getAllUsers(req, res) {
    const resultado = await instanceUserServices.getAllUsers()
    return res.status(200).json({resultado})
}

export async function getUser(req, res) {
    const { id } = req.params
    try {
        const resultado = await instanceUserServices.getUser(id)
        if (resultado.user) {
            return res.status(200).json(resultado)
        } 
        
        else {
            return res.status(404).json({ message: 'User not found' })
        }
    } 
    
    catch (error) {
        console.error('Error in getUser controller:', error)
        return res.status(500).json({ message: 'Internal Server Error' })
    }
}


export async function updateJob(req, res) {
    const {id} = req.body
    await instanceUserServices.updateJob(id, newJob)
    return res.status(200).json({message: 'Sucessfully'})
}

export async function delUser(req, res) {
    const {id} = req.params
    await instanceUserServices.delUser(id)
    return res.status(200).json({message: 'Sucessfully'})
}