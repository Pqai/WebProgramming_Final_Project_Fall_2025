import express from 'express';
import { createUser } from '../models/userModel';

const router = express.Router();

router.get('', createUser)