const express = require("express");

const Blog = require("../models/blog");

const router = express.Router();

// POST
const createBlog = async (req, res) => {
  try {
    const blog = new Blog(req.body);

    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET all
const getBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find();

    res.status(200).json(blogs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// GET id
const getBlogID = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findById(id);

    if (!blog) return res.status(404).json({ message: "Not found" });

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// UPDATE
const updateBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await Blog.findByIdAndUpdate(id, req.body, { new: true });

    if (!blog) return res.status(404).json({ message: "Not found" });

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// DELETE
const deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;

    const blog = await Blog.findByIdAndDelete(id);

    res.status(200).json(blog);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createBlog, getBlogs, getBlogID, updateBlog, deleteBlog };
