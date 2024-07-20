const { postAnnouncement, getAnnouncements, updateAnnouncement, deleteAnnouncement } = require("../controllers/announcement");

const router=require("express").Router();



router.post("/",postAnnouncement);
router.get("/",getAnnouncements);
router.put("/:id",updateAnnouncement);
router.delete("/:id",deleteAnnouncement);


module.exports= router;