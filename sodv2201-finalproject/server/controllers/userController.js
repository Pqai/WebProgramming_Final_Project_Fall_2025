import * as userModel from '../models/userModel.js';

export const createUser = async (req, res) => {
    try{
        const rowsAffected = await userModel.createUser(req.body);
        
        if (rowsAffected === 0){
            return res.status(400).json({ message: 'Failed to create user' });
        }
        res.status(201).json({ message: 'User created successfully' });
    } catch(error){
        res.status(500).json({})
    }
};