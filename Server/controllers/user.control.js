const bcrypt = require("bcryptjs");
const UserModel = require("../models/user.model");
const errorHandler = require("../utils/error");
const { S3Client, PutObjectCommand } = require("@aws-sdk/client-s3");
const AWS = require("aws-sdk");
require("aws-sdk/lib/maintenance_mode_message").suppress = true;

const bucketName = process.env.AWS_BUCKET_NAME;
const region = process.env.AWS_BUCKET_REGION;
const accessKeyId = process.env.AWS_ACCESS_KEY;
const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3Client = new S3Client({
  region,
  credentials: {
    accessKeyId,
    secretAccessKey,
  },
});

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_BUCKET_REGION,
});

exports.updateUser = async (req, res, next) => {
  // console.log(req.body);
  try {
    if (req.body.username) {
      if (req.body.username.length < 7 || req.body.username.length > 20) {
        return next(
          errorHandler(201, "Username must be between 7 and 20 characters")
        );
      }
    }
    if (!req.file) {
      console.log("No file in request");
      return next(errorHandler(400, "No file in request"));
    }

    const file = req.file.buffer;
    const uploadParams = {
      Bucket: bucketName,
      Body: file,
      Key: `${req.params.userId}.jpg`,
      ContentType: file.mimetype,
    };
    await s3Client.send(new PutObjectCommand(uploadParams));

    const getParams = {
      Bucket: bucketName,
      Key: `${req.params.userId}.jpg`,
      Expires: 60 * 60 * 24 * 30,
    };

    const url = s3.getSignedUrl("getObject", getParams);

    const updatedUser = await UserModel.findByIdAndUpdate(
      req.params.userId,
      {
        $set: {
          username: req.body.username,
          profilePicture: url,
        },
      },
      { new: true }
    );
    let userObject = updatedUser.toObject();
    delete userObject.password;
    res.status(201).json({
      user: updatedUser,
      message: "User Profile updated successfully",
      success: true,
    });
  } catch (error) {
    next(error);
  }
};

exports.test = async (req, res) => {
  try {
    res.status(201).json({ message: "Test API is working successfully...!" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

exports.deleteUser = async (req, res, next) => {
  try {
    await UserModel.findByIdAndDelete(req.params.id);

    const deleteParams = {
      Bucket: bucketName,
      Key: `${req.params.id}.jpg`, // use the user's ID as the filename
    };

    await s3.deleteObject(deleteParams, function (err, data) {
      if (err) console.log(err, err.stack);
      else res
      .status(201)
      .json({ message: "Account deleted successfully", alert: true });
    });
  } catch (error) {
    res.status(401).json({ message: error, alert: false });
    next(error);
  }
};

exports.updatePassword = async (req, res, next) => {
  try {
    const { oldPassword, newPassword } = req.body;
    const user = await UserModel.findById(req.params.id);

    const isMatch = await bcrypt.compare(oldPassword, user.password);
    if (!isMatch) {
      return res
        .status(201)
        .json({ message: "Old password is incorrect", alert: false });
    }

    const hashPassword = await bcrypt.hash(newPassword, 10);
    await UserModel.findByIdAndUpdate(req.params.id, {
      password: hashPassword,
    });
    res
      .status(201)
      .json({ message: "Password updated successfully", alert: true });
  } catch (error) {
    next(error);
  }
};
