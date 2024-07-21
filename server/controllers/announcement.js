const db = require("../utils/db");

const postAnnouncement = async (req, res) => {
  const { name, announcement, tags } = req.body;

  if (!name || !announcement) {
    return res
      .status(400)
      .json({ message: "Name and announcement are required." });
  }

  try {
    const newAnnouncement = await db.announcement.create({
      data: {
        name,
        announcement,
        tags,
      },
    });
    return res.status(201).json(newAnnouncement);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error creating announcement.", error: error.message });
  }
};

const deleteAnnouncement = async (req, res) => {
  const { id } = req.params;

  if (!id) {
    return res.status(400).json({ message: "Announcement ID is required." });
  }

  try {
    const deletedAnnouncement = await db.announcement.delete({
      where: { id: parseInt(id) },
    });
    return res.status(200).json(deletedAnnouncement);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error deleting announcement.", error: error.message });
  }
};

const updateAnnouncement = async (req, res) => {
  const { id } = req.params;
  const { name, announcement } = req.body;

  if (!id || !name || !announcement) {
    return res
      .status(400)
      .json({ message: "ID, name, and announcement are required." });
  }

  try {
    const updatedAnnouncement = await db.announcement.update({
      where: { id: parseInt(id) },
      data: {
        name,
        announcement,
      },
    });
    return res.status(200).json(updatedAnnouncement);
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error updating announcement.", error: error.message });
  }
};

const getAnnouncements = async (req, res) => {
  const { pageSize = 10 } = req.query;
  
  const pageSizeNumber = parseInt(pageSize, 10);

  if (isNaN(pageSizeNumber) || pageSizeNumber <= 0) {
    return res.status(400).json({ message: "Invalid pageSize parameter." });
  }

  try {
    const announcements = await db.announcement.findMany({
      orderBy: {
        date: "desc", 
      },
      take: pageSizeNumber,
    });

    return res.status(200).json({
      data: announcements,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error retrieving announcements.",
      error: error.message,
    });
  }
};

module.exports = {
  postAnnouncement,
  deleteAnnouncement,
  updateAnnouncement,
  getAnnouncements,
};
