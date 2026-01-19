import { StudentModelInterface } from "@/types/model/student.type";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import * as Yup from "yup";


const createStudentForm = () => {
  const defaultValues: Omit<StudentModelInterface, "id"> = {
    email: "",
    full_name: "",
    year_of_study: "",
    course_of_study: "",
  }
  const studentFormSchema = Yup.object({
    full_name: Yup.string().required().min(2),
    year_of_study: Yup.string().required(),
    course_of_study: Yup.string().required(),
    email: Yup.string().email().required(),
  }).required();
  return useForm({
    defaultValues: defaultValues,
    resolver: yupResolver(studentFormSchema),
    reValidateMode: "onChange"
  });
}

const StudentFormValidators = {
  createStudentForm,
}

export default StudentFormValidators;