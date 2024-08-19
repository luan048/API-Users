import {database} from '../database/db.js'
import { DataTypes, Sequelize } from 'sequelize'

export const UserModel = database.define("clients", {
    id: {
        type: DataTypes.UUID,
        unique: true,
        primaryKey: true,
        defaultValue: Sequelize.UUIDV4
    },

    name: {
        type: DataTypes.STRING(20),
        allowNull: false,
    },

    age: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },

    job: {
        type: DataTypes.STRING(20),
        allowNull: false,
    }
})