const express = require("express");
const router = express.Router();
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("../swagger");

router.use("/docs", swaggerUi.serve);
router.get("/docs", swaggerUi.setup(swaggerDocument));

router.get("/", (req, res) => {
  res.json({
    message: "GET USER SUKSES",
  });
});

router.post("/", (req, res) => {
  res.json({
    message: "POST USER SUKSES",
  });
});

// router.put("/", (req, res) => {
//   res.json({
//     message: "PUT USER SUKSES",
//   });
// });

// router.delete("/", (req, res) => {
//   res.json({
//     message: "DELETE USER SUKSES",
//   });
// });

module.exports = router;
