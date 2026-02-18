import express from 'express';
import { createUserProject, getUserCredits, getUserProject, getUsersProjects, purshaseCredits, togglePublish } from '../controllers/user.controllers.js';
import { protect } from '../middleware/auth.js';

const userRoutes = express.Router();

userRoutes.get("/credits",protect, getUserCredits);
userRoutes.post("/project",protect,createUserProject);
userRoutes.get("/project/:projectId",protect,getUserProject);
userRoutes.get("/projects",protect,getUsersProjects);
userRoutes.get("/publish-toggle/:projectId",protect,togglePublish);
userRoutes.post("/purchase-credits",protect,purshaseCredits);

export default userRoutes;

