import {
  createJobWithDelay,
  generateUniqueId,
  readJobsFromFile,
  saveJobsToFile,
} from "../utils/helper";

// Service for creating a new job
export const createJobService = async () => {
  const jobs = await readJobsFromFile();
  const jobId = generateUniqueId();

  jobs.push({ id: jobId, status: "pending" });

  createJobWithDelay(jobId);

  await saveJobsToFile(jobs);

  return jobId;
};

// Service for fetching all jobs
export const getJobsService = async () => {
  return await readJobsFromFile();
};

// Service for fetching a job by ID
export const getJobByIdService = async (id: string) => {
  const jobs = await readJobsFromFile();
  return jobs.find((job: any) => job.id === id);
};
