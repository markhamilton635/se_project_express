const router = require("express").Router()

router.get("/", () => console.log("GET items"));
router.post("/", () => console.log("POST new item"));
router.delete("/:itemId", () => console.log("DELETE item by id"));

module.exports = router;