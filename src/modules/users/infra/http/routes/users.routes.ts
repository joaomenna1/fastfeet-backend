import { Router } from "express";
import UsersController from '../controllers/UsersController';

const userRouters = Router();
const usersController = new UsersController();


userRouters.post('/', usersController.create);

export default userRouters;
