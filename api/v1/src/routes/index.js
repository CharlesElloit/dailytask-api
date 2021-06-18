const router = require("express").Router();
const { catchErrors } = require("../handlers/apiErrorHandler");
const workspaceController = require("../controllers/workspace");

router.post("/workspace/add", catchErrors(workspaceController.createWorkspace));
router.get("/workspaces", catchErrors(workspaceController.getAllWorkspaces))
router.delete("/workspace/:id", catchErrors(workspaceController.deleteWorkspace));

module.exports = router;
