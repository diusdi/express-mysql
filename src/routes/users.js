const express = require("express");
const router = express.Router();
const userController = require("../controllers/users");

const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger");

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(swaggerDocument));

router.get("/", userController.getAll);
router.post("/", userController.create);
router.put("/:id", userController.update);
router.delete("/:id", userController.destroy);

module.exports = router;
