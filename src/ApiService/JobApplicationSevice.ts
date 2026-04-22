import JobApplicationApi from "@/api/jobApplicationApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import ApiQueryMutationKeys from "@/consts/ApiQueryMutationKeys";
import { ApiPaginationQuery } from "@/global";

const createJobApplicationServiceMutation = () => {
  return useMutation({
    mutationFn: JobApplicationApi.createJobApplication,
    mutationKey: ApiQueryMutationKeys.AuthQuryMutationKeys.createStudentMutationKeys
  });
}



const JobApplicationService = {
  createJobApplicationServiceMutation
}

export default JobApplicationService;