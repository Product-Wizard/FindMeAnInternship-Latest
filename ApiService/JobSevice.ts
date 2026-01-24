import JobApi from "@/api/jobApi";
import { useMutation, useQuery } from "@tanstack/react-query";
import ApiQueryMutationKeys from "@/consts/ApiQueryMutationKeys";
import { ApiPaginationQuery, JobQuery } from "@/global";


const fetchJobsServiceQuery = (paginationQuery: ApiPaginationQuery & JobQuery) => {
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