import express from "express";
const router = express.Router();
import partsController from "../controllers/partsController.js";

router.get("/", (req, res) => res.render("index")); // render index/forms page
router.get("/api/parts", partsController.getParts); // get all parts
router.get("/api/parts/:id", partsController.getPart); // get a single part
router.post("/api/parts", partsController.createPart); // create a part
router.put("/api/parts/:id", partsController.updatePart); // update a part
router.delete("/api/parts/:id", partsController.deletePart); // delete a part

export default router;
