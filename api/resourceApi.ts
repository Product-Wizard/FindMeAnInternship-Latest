import { AxiosResponse } from "axios";
import api from "./api";
import { ResourceModelInterface } from "@/types/model/resource.model";
import moment from "moment";
import { ApiPaginationQuery, StandardServerResponse } from "@/global";

const getResources = async (paginationParams: ApiPaginationQuery) => {
  const keys = Object.keys(paginationParams);
  keys.map(key => !paginationParams[ key ] ? delete paginationParams[ key ] : null);
  const result = await api.get<any, AxiosResponse<StandardServerResponse<ResourceModelInterface[]>>>("/resource", {
    params: paginationParams
  });
  result.data.data.forEach(item => item.dateUploaded = moment(item.createdAt).fromNow());
  return result.data;
}

const getResource = async (resourceId: number) => {
  const result = await api.get<any, AxiosResponse<StandardServerResponse<ResourceModelInterface>>>(`/resource/${resourceId}`);
  result.data.data.dateUploaded = moment(result.data.data.createdAt).fromNow();
  return result.data;
}

const ResourceApi = {
  getResources,
  getResource,
}

export default ResourceApi;