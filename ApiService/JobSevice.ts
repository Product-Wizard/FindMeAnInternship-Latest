import JobApi from "@/api/jobApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import ApiQueryMutationKeys from "@/consts/ApiQueryMutationKeys";
import { ApiPaginationQuery } from "@/global";
import { JobModelInterface } from "@/types/model/Job.model";


const fetchJobsServiceQuery = (paginationQuery: ApiPaginationQuery) => {
  return useQuery({
    queryFn: () => JobApi.getJobs(paginationQuery),
    queryKey: [ ...ApiQueryMutationKeys.JobQuryMutationKeys.getJobsQueryKeys, paginationQuery.page ],
  });
}

const fetchJobServiceQuery = (id: number) => {
  return useQuery({
    queryFn: () => JobApi.getJob(id),
    queryKey: [ ...ApiQueryMutationKeys.JobQuryMutationKeys.getJobQueryKeys, id ]
  });
}


const JobService = {
  fetchJobsServiceQuery,
  fetchJobServiceQuery
}

export default JobService;