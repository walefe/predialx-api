import { Router } from "express";
import { CreateCollaboratorController } from "../controllers/collaborators/CreateCollaboratorController";
import { DeleteCollaboratorsController } from "../controllers/collaborators/DeleteCollaboratorsController";
import { ListCollaboratorsController } from "../controllers/collaborators/ListCollaboratorsController";
import { UpdateCollaboratorsController } from "../controllers/collaborators/UpdateCollaboratorController";

const collaboratorsRoutes = Router()

const createCollaboratorsController = new CreateCollaboratorController()
const listCollaboratorsController = new ListCollaboratorsController()
const updateCollaboratorsController = new UpdateCollaboratorsController()
const deleteCollaboratorsController = new DeleteCollaboratorsController()

collaboratorsRoutes.post('/', createCollaboratorsController.handle)
collaboratorsRoutes.get('/', listCollaboratorsController.handle)
collaboratorsRoutes.put('/:id', updateCollaboratorsController.handle)
collaboratorsRoutes.delete('/:id', deleteCollaboratorsController.handle)

export { collaboratorsRoutes }
