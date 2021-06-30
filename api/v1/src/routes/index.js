const router = require("express").Router();
const { catchErrors } = require("../handlers/apiErrorHandler");
const userController = require("../controllers/user");
const workspaceController = require("../controllers/workspace");
const projectController = require("../controllers/project");

// user routes
router.post("/signup", catchErrors(userController.signup));
router.post("/signin", catchErrors(userController.signin));
// workspace routes
router.post("/workspaces/add", catchErrors(workspaceController.createWorkspace));
router.get("/workspaces", catchErrors(workspaceController.getAllWorkspaces));
router.put("/workspace/:id", catchErrors(workspaceController.updateWorkspace));
router.delete("/workspace/:id", catchErrors(workspaceController.deleteWorkspace));
router.get("/search", catchErrors(workspaceController.searchWorkspace));
router.post("/projects/add", catchErrors(projectController.createProject));

module.exports = router;
