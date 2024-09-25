import { Request, Response } from "express";
import {
  createJobService,
  getJobsService,
  getJobByIdService,
} from "../services/job.service";

// Create a new job
export const createJob = async (req: Request, res: Response) => {
  const jobId = await createJobService();
  res.status(201).json({ jobId });
};

// Get all jobs
export const getJobs = async (req: Request, res: Response) => {
  const jobs = await getJobsService();
  res.status(200).json(jobs);
};

// Get job by ID
export const getJobById = async (req: Request, res: Response) => {
  const job = await getJobByIdService(req.params.id);
  if (job) {
    res.status(200).json(job);
  } else {
    res.status(404).json({ message: "Job not found" });
  }
};
