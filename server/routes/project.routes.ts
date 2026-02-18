import express from "express";
import { protect } from "../middleware/auth.js";
import { deleteProject, getProjectById, getProjectPreview, getPublishedProject, makeRevision, rollbackToVersion, saveProjectCode } from "../controllers/project.controller.js";

const projectRoute = express.Router();

projectRoute.post("/revision/:projectId",protect,makeRevision);
projectRoute.put("/save/:projectId",protect,saveProjectCode);
projectRoute.get("/rollback/:projectId/:versionId",protect,rollbackToVersion);
projectRoute.delete("/:projectId",protect,deleteProject);
projectRoute.get("/preview/:projectId",protect,getProjectPreview);
projectRoute.get("/published",getPublishedProject);
projectRoute.get("/published/:projectId",getProjectById);

export default projectRoute;