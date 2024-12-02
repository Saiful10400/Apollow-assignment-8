import { Router } from "express";

const memberRoutes=Router()

// routes.

// 1. create member.
memberRoutes.post("/")

// 2.get all member.also for single member with id.
memberRoutes.get("/")

// 3. update a member.
memberRoutes.put("/:id")

// 4.delete a member.
memberRoutes.delete("/:id")

export default memberRoutes