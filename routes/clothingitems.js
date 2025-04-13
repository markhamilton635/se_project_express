const router = require("express").Router()
const { createItem, getItems, updateItem, deleteItem } = require('../controllers/clothingItems')

router.get("/", getItems);
router.post("/", createItem);
router.delete("/:itemId", deleteItem);
router.put("/:itemId/likes", () => console.log("PUT like"));
router.delete("/:itemId/likes", () => console.log("DELETE like"));



module.exports = router;