import { Router } from "express";
import { createUser, getAllUsers, getUser, updateJob, delUser } from "../controllers/userControllers.js";
import { UserValidator } from '../middleware/userValidator.js'

const routerUser = Router()
const instanceUserValidator = new UserValidator()

routerUser.post('/postUser', instanceUserValidator.createUserValidation, async (req, res) => {
    return await createUser(req, res)
})

routerUser.get('/', getAllUsers), async(req, res) => {
    return await getAllUsers(req, res)
}

routerUser.get('/getUsers/:id', instanceUserValidator.getUserValidation, async (req, res) => {
    return await getUser(req, res)
})


routerUser.put('/upJobsofUser/:id', instanceUserValidator.updateJobValidation, async (req, res) => {
    return await updateJob(req, res)
})

routerUser.delete('/delUsers/:id', instanceUserValidator.delJobValidation, async (req, res) => {
    return await delUser(req, res)
})

export {routerUser}