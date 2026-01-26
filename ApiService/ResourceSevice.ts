import ResourceApi from "@/api/resourceApi";
import { useQuery } from "@tanstack/react-query";
import ApiQueryMutationKeys from "@/consts/ApiQueryMutationKeys";
import { ApiPaginationQuery, ResourceQuery } from "@/global";

const fetchResourcesServiceQuery = (paginationQuery: ApiPaginationQuery & ResourceQuery) => {
  return useQuery({
    queryFn: () => ResourceApi.getResources(paginationQuery),
    queryKey: [ ...ApiQueryMutationKeys.ResourceQuryMutationKeys.getResourcesQueryKeys, paginationQuery.page ],
  });
}

const fetchResourceServiceQuery = (id: number) => {
  return useQuery({
    queryFn: () => ResourceApi.getResource(id),
    queryKey: [ ...ApiQueryMutationKeys.ResourceQuryMutationKeys.getResourceQueryKeys, id ]
  });
}


const ResourceService = {
  fetchResourcesServiceQuery,
  fetchResourceServiceQuery
}

export default ResourceService;