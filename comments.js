// Create web server
const express = require("express");
const app = express();

// Import the comment model
const Comment = require("../models/comment");

// Import the post model
const Post = require("../models/post");

// Import the user model
const User = require("../models/user");

// Import the middleware
const middleware = require("../middleware");

// Import the express error handler
const ExpressError = require("../utils/ExpressError");

// Import the catchAsync function
const catchAsync = require("../utils/catchAsync");

// Import the Express router
const router = express.Router({ mergeParams: true });

// Import the comments controller
const commentsController = require("../controllers/comments");

// Import the Joi schemas
const { commentSchema } = require("../schemas.js");

// Import the error handler
const { validateComment, isLoggedIn, isCommentAuthor } = middleware;

// Import the Express router
const { route } = require("./posts");

// Create a new comment
router.post(
  "/",
  isLoggedIn,
  validateComment,
  catchAsync(commentsController.createComment)
);

// Delete a comment
router.delete(
  "/:commentId",
  isLoggedIn,
  isCommentAuthor,
  catchAsync(commentsController.deleteComment)
);

// Export the router
module.exports = router;