import { AxiosResponse } from "axios";
import api from "./api";
import { JobApplicationModelInterface, CreateJobApplicationType } from "@/types/model/jobApplication.model";
import moment from "moment";
import { ApiPaginationQuery, StandardServerResponse } from "@/global";

const createJobApplication = async (data: CreateJobApplicationType) => {
  const result = await api.post<typeof data, AxiosResponse<StandardServerResponse<JobApplicationModelInterface>>>("/job_application", data);
  // result.data.data.postedDate = moment(result.data.data.createdAt).fromNow();
  return result.data;
}

const JobApi = {
  createJobApplication
}

export default JobApi;