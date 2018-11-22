const router = require("express").Router();
const picController = require("../../controllers/picController");

// Matches with "/api/pic"
router.route("/")
  .get(picController.findAll)
//   .post(picController.create);

// Matches with "/api/pic/:id"
// router
//   .route("/:id")
//   .get(picController.findById)
//   .put(picController.update)
//   .delete(picController.remove);

module.exports = router;
