const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  profileImage: String,
  joinedDate: { type: Date, default: Date.now },
  following: [{ type: Schema.Types.ObjectId, ref: "user" }],
  followers: [{ type: Schema.Types.ObjectId, ref: "user" }],
  likedTweets: [{ type: Schema.Types.ObjectId, ref: "tweet" }],
  tweets: [{ type: Schema.Types.ObjectId, ref: "tweet" }],
  bookmarks: [{ type: Schema.Types.ObjectId, ref: "tweet" }],
});

var user = mongoose.model("user", userSchema);

module.exports = user;
