import { CreateJobApplicationType } from "@/types/model/jobApplication.model";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";


const createJobApplicationForm = () => {
  const defaultValues: Omit<CreateJobApplicationType, "job_id"> = {
    email: "",
    fullname: "",
    phone: "",
  }
  const JobApplicationFormSchema = Yup.object({
    fullname: Yup.string().required().min(2),
    phone: Yup.string(),
    email: Yup.string().email().required(),
  }).required();
  return useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(JobApplicationFormSchema),
    reValidateMode: "onChange"
  });
}

const JobApplicationFormValidators = {
  createJobApplicationForm,
}

export default JobApplicationFormValidators;