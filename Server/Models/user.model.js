const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
    trim: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [6, "Minimum password length is 6 characters"],
  },
  profilePicture: {
    type: String,
    default: "https://imgs.search.brave.com/GNIFWqfPKKf_ORRCV58z1gW89zw2_PdDxQod3tSF4lM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cG5naXRlbS5jb20v/cGltZ3MvbS80MDQt/NDA0MjcxMF9jaXJj/bGUtcHJvZmlsZS1w/aWN0dXJlLXBuZy10/cmFuc3BhcmVudC1w/bmcucG5n",
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
},{timestamps: true});

module.exports = mongoose.model("User_Blog", userSchema);


