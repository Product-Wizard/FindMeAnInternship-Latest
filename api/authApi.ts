import { AxiosResponse } from "axios";
import { StudentModelInterface } from "@/types/model/student.type";
import { OrganizationModelInterface } from "@/types/model/organization.model";
import api from "./api";
import { StandardServerResponse } from "@/global";

const createStudent = async (data: Omit<StudentModelInterface, "id">) => {
  const result = await api.post<typeof data, AxiosResponse<StandardServerResponse<StudentModelInterface>>>("/auth/student/create", data);
  return result.data;
}

const createOrganization = async (data: Omit<OrganizationModelInterface, "id">) => {
  const result = await api.post<typeof data, AxiosResponse<StandardServerResponse<OrganizationModelInterface>>>("/auth/organization/create", data);
  return result.data;
}

const AuthApi = {
  createStudent,
  createOrganization
}

export default AuthApi;