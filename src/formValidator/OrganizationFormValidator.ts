import { OrganizationModelInterface } from "@/types/model//organization.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";


const createOrganizationForm = () => {
  const defaultValues: Omit<OrganizationModelInterface, "id"> = {
    email: "",
    company_name: "",
    company_size: "",
    industry: ""
  }
  const OrganizationFormSchema = Yup.object({
    company_name: Yup.string().required().min(2),
    company_size: Yup.string().required(),
    email: Yup.string().email().required(),
    industry: Yup.string().required(),
  }).required();
  return useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(OrganizationFormSchema),
    reValidateMode: "onChange"
  });
}

const OrganizationFormValidators = {
  createOrganizationForm,
}

export default OrganizationFormValidators;