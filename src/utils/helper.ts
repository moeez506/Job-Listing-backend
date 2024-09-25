import fs from "fs/promises";
import path from "path";
import { searchPhotos } from "./unsplash";

export const jobsFilePath = path.resolve(__dirname, "../../jobs.json");

export const readJobsFromFile = async () => {
  try {
    const data = await fs.readFile(jobsFilePath, "utf-8");
    return data ? JSON.parse(data) : [];
  } catch (error) {
    console.error("Error reading jobs from file:", error);
    return [];
  }
};

export const saveJobsToFile = async (jobs: any) => {
  await fs.writeFile(jobsFilePath, JSON.stringify(jobs, null, 2));
};

export const generateUniqueId = () => {
  const currentTimestamp = Date.now();
  return (currentTimestamp % 100000).toString();
};

export const createJobWithDelay = async (jobId: string) => {
  setTimeout(async () => {
    try {
      const imageUrl = await searchPhotos();
      const jobs = await readJobsFromFile();
      const jobIndex = jobs.findIndex((job: any) => job.id === jobId);
      if (jobIndex > -1) {
        jobs[jobIndex].status = "resolved";
        jobs[jobIndex].result = imageUrl;
      }

      await saveJobsToFile(jobs);
    } catch (error: any) {
      throw error;
    }
  }, 10000);
};
