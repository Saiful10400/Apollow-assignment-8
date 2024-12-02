import { Router } from "express";

const bookRoutes=Router()

// routes.

// 1. create book.
bookRoutes.post("/")

// 2.get all book.also for single book with id.
bookRoutes.get("/")

// 3. update a book.
bookRoutes.put("/:id")

// 4.delete a book.
bookRoutes.delete("/:id")

export default bookRoutes