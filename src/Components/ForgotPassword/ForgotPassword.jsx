import React, {useState} from "react";
import "./ForgotPassword.css";
import {useNavigate} from "react-router-dom";
import {useFormik} from "formik";
import {ForgotPasswordSchemas} from "../../Schemas/index";
import Whitelogo from "../../assets/images/Whitelogo.png";
// import {Images} from "../../Components/Constant/Image";
// import Navbar from "../../Components/UI/Navbar1/Navbar";
// import Footer from "../../Components/UI/Footer/Footer";
// import {motion} from "framer-motion";
// import axios from "../../Common/Api/index.js";
// import {toast} from "react-toastify";
// import {Backdrop, CircularProgress} from "@mui/material";

const initialValues = {
  email: "",
};
const ForgotPassword = () => {
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();

  // const onSubmit = async () => {
  //   setloading(true);
  //   try {
  //     const res = await axios.post(
  //       "users/forgetpassword",
  //       {
  //         email: values.email,
  //       },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     if (res.data.status == 0) {
  //       toast.error(res.data.message, {
  //         position: "top-right",
  //         theme: "colored",
  //       });
  //     } else if (res.data.status == 1) {
  //       toast.success(res.data.message, {
  //         position: "top-right",
  //         theme: "colored",
  //       });
  //     }
  //     setloading(false);
  //     console.log(res);
  //   } catch (error) {
  //     setloading(false);
  //     console.log(error);
  //   }
  // };
  const {values, handleBlur, handleChange, touched, handleSubmit, errors} =
    useFormik({
      initialValues: initialValues,
      validationSchema: ForgotPasswordSchemas,
      // onSubmit,
    });
  console.log(errors);
  return (
    <>
      <div className="Login-section-main-div">
        <form onSubmit={handleSubmit} className="Login-section-parent-div">
          <div className="width-percentage-div">
            <div className="Logo_work_main_divv">
              <div className="Logo_sec_divv">
                <img className="Logo_main_imgg" src={Whitelogo} />
              </div>
            </div>
            <div>
              <span className="Forgot-Password-span12">Forgot Password</span>
            </div>
            <div className="Forgot-Password-span1244-div">
              <span className="Forgot-Password-span1244">
                Please enter the email address you ‘d like to your password
                reset information sent to.
              </span>
            </div>
            <div>
              <div className="email-input-div">
                <div className="email-input-image-inner-div">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_3_765)">
                      <path
                        d="M3 3H21C21.2652 3 21.5196 3.10536 21.7071 3.29289C21.8946 3.48043 22 3.73478 22 4V20C22 20.2652 21.8946 20.5196 21.7071 20.7071C21.5196 20.8946 21.2652 21 21 21H3C2.73478 21 2.48043 20.8946 2.29289 20.7071C2.10536 20.5196 2 20.2652 2 20V4C2 3.73478 2.10536 3.48043 2.29289 3.29289C2.48043 3.10536 2.73478 3 3 3ZM20 7.238L12.072 14.338L4 7.216V19H20V7.238ZM4.511 5L12.061 11.662L19.502 5H4.511Z"
                        fill="#101216"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_3_765">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>{" "}
                </div>

                <input
                  type="text"
                  placeholder="Email"
                  className="forgot-input-feild"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </div>
              {errors.email && touched.email ? (
                <p className="mastu-to-eroor mt-2">{errors.email} </p>
              ) : null}
            </div>
            <div className="mb-5">
              <button className="forgot-button" type="submit">
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* {!loading && <div></div>}
      {loading && (
        <div>
          <Backdrop
            sx={{color: "#fd3e6c", zIndex: (theme) => theme.zIndex.drawer + 1}}
            open={true}
            // onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
        </div>
      )} */}
    </>
  );
};

export default ForgotPassword;
