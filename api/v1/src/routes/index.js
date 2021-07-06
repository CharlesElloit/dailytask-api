const router = require("express").Router();
const { catchErrors } = require("../handlers/apiErrorHandler");
const userController = require("../controllers/user");
const workspaceController = require("../controllers/workspace");
const projectController = require("../controllers/project");
const { auth } = require("../middlewares/auth");

// user routes
router.post("/signup", catchErrors(userController.signup));
router.post("/signin", catchErrors(userController.signin));
// workspace routes
router.post("/workspaces/add", auth, catchErrors(workspaceController.createWorkspace));
router.get("/workspaces", auth, catchErrors(workspaceController.getAllWorkspaces));
router.get("/workspace/:id", auth, catchErrors(workspaceController.getWorkspace));
router.put("/workspace/:id", auth, catchErrors(workspaceController.updateWorkspace));
router.delete("/workspace/:id", auth, catchErrors(workspaceController.deleteWorkspace));
router.get("/search", catchErrors(workspaceController.searchWorkspace));
// project routes
router.post("/projects/add", auth, catchErrors(projectController.createProject));
router.get("/projects/:workspaceId", auth, catchErrors(projectController.getAllProjects));

module.exports = router;
