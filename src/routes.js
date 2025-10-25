import express from "express";
import controller from "./controller.js";

const router = express.Router();

router.get("/", controller.home);
router.get("/kanjis/:literal", controller.kanji);
router.get("/search/:query", controller.search);
router.get("/my-list", controller.myList);
router.get("/other-lists", controller.otherLists);
router.get("/components", controller.components);

export default router;
