import AuthApi from "@/api/authApi";
import { useMutation } from "@tanstack/react-query";
import ApiQueryMutationKeys from "@/consts/ApiQueryMutationKeys";

const createStudentServiceMutation = () => {
  return useMutation({
    mutationFn: AuthApi.createStudent,
    mutationKey: ApiQueryMutationKeys.AuthQuryMutationKeys.createStudentMutationKeys
  })
}

const createOrganizationServiceMutation = () => {
  return useMutation({
    mutationFn: AuthApi.createOrganization,
    mutationKey: ApiQueryMutationKeys.AuthQuryMutationKeys.createOrganizationMutationKeys
  })
}


const AuthService = {
  createOrganizationServiceMutation,
  createStudentServiceMutation,
}

export default AuthService;