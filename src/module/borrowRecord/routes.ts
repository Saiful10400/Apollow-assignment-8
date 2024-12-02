import { Router } from "express";

const borrowRecordRoutes=Router()

// routes.

// 1. create borrowRecord.
borrowRecordRoutes.post("/")

// 2.get all borrowRecord.also for single borrowRecord with id.
borrowRecordRoutes.get("/")

// 3. update a borrowRecord.
borrowRecordRoutes.put("/:id")

// 4.delete a borrowRecord.
borrowRecordRoutes.delete("/:id")

export default borrowRecordRoutes