import express from 'express';
import { addCourses, createUser, deleteCourses, getAllCourses } from '../models/userModel';

const router = express.Router();

router.post('/users', createUser);
router.post('/courses', addCourses);
router.get('/courses', getAllCourses);
router.delete('/courses/:id', deleteCourses);