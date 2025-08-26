import { Album } from "../models/album.model.js";
import { Song } from "../models/song.model.js";
import cloudinary from "../lib/cloudinary.js";
// helper functions for cloudinary uploads
const uploadToCloudinary = async (file) => {
  try {
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
    });
    return result.secure_url;
  } catch (error) {
    console.log("Error in uploadToCloudinary", error);
    throw new Error("Error uploading to cloudinary");
  }
};
export const createSong = async (req, res, next) => {
  try {
    if (!req.files || !req.files.audioFile || !req.files.imageFile) {
      return res.status(400).json({ message: "Please Upload all Files" });
    }
    const { title, artist, albumId, duration } = req.body;
    const audioFile = req.files.audioFile;
    const imageFile = req.files.imageFile;

    const audioUrl = await uploadToCloudinary(audioFile); // upload audio
    const imageUrl = await uploadToCloudinary(imageFile); // upload image
    const song = new Song({
      title,
      artist,
      audioUrl,
      imageUrl,
      duration,
      albumId: albumId || null,
    });
    await song.save();

    // if song belongs to album , update the album songs array
    if (albumId) {
      await Album.findByIdAndUpdate(albumId, {
        $push: {
          songs: song._id,
        },
      });
    }
    return res.status(201).json(song);
  } catch (error) {
    console.log("Error in createSong", error);
    next(error);
  }
};
export const deleteSong = async (req, res, next) => {
  try {
    const { id } = req.params;
  } catch (error) {}
};
