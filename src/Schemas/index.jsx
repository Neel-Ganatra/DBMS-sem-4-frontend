import * as yup from "yup";

export const LoginSchemas = yup.object({
  email: yup
    .string()
    .email("Email Must Be Valid Email")
    .required("Email is Required"),

  password: yup.string().required("Password is Required "),
});

export const ForgotPasswordSchemas = yup.object({
  email: yup
    .string()
    .email("Email is must be valid")
    .required("Email is required"),
});

export const ChangePasswordSchemas = yup.object({
  CurrentPassword: yup
    .string()
    .min(4)
    .required("Please Enter  Current Password"),
  NewPassword: yup.string().min(4).required("Please Enter Your Password"),
  ConfirmNewPassword: yup
    .string()
    .required("Please confirm your password")
    .oneOf([yup.ref("NewPassword"), null], "Password Must Match"),
});
