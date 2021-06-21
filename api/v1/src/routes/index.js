const router = require("express").Router();
const { catchErrors } = require("../handlers/apiErrorHandler");
const workspaceController = require("../controllers/workspace");

router.post("/workspaces/add", catchErrors(workspaceController.createWorkspace));
router.get("/workspaces", catchErrors(workspaceController.getAllWorkspaces));
router.put("/workspace/:id", catchErrors(workspaceController.updateWorkspace));
router.delete("/workspace/:id", catchErrors(workspaceController.deleteWorkspace));

module.exports = router;
