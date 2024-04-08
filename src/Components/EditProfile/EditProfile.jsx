import React, { useState, useEffect } from "react";
import "./EditProfile.css";
import camera from "../../assets/images/camera.png";
import ChangePassword from "../../Modals/ChangePassword/ChangePassword";
// import axios from "../Common/Api/index";
// import { Backdrop, CircularProgress } from "@mui/material";
// import { toast } from "react-toastify";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import Profile from "../../assets/images/profile.png";
import Whitelogo from "../../assets/images/Whitelogo.png";
import { LiaGreaterThanSolid } from "react-icons/lia";

const initialValues = {
  FullName: "",
  email: "",
};
const EditProfile = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [getdata, setGetdata] = useState("");
  const [open, setOpen] = useState(false);
  const token = JSON.parse(localStorage.getItem("login"));
  const [Image, setImage] = useState({ img: "" });
  const [imgfile, setimgfile] = useState();
  console.log(imgfile);
  console.log(Image);
  console.log(token);
  useEffect(() => {
    setImage({ img: getdata.user_image });
  }, [getdata]);
  // const onSubmit = async () => {
  //   setloading(true);
  //   console.log({
  //     user_image: imgfile,
  //     name: values.FullName,
  //     email: values.email,
  //   });
  //   const formdata = new FormData();
  //   formdata.append("user_image", imgfile);
  //   formdata.append("name", values.FullName);
  //   formdata.append("email", values.email);
  //   try {
  //     let config = {
  //       url: "update-admin-profile",
  //       method: "post",
  //       data: formdata,
  //       headers: {
  //         "Content-Type": "multipart/form-data",
  //         Authorization: `Bearer ${token.data.data.token}`,
  //       },
  //     };
  //     axios(config)
  //       .then((response) => {
  //         if (response.data.status == 0) {
  //           toast.error(response.data.message, {
  //             position: "top-right",
  //             // theme: "colored",
  //           });
  //         } else if (response.data.status == 1) {
  //           toast.success(response.data.message, {
  //             position: "top-right",
  //             // theme: "colored",
  //           });
  //           navigate("/Profile");
  //         }
  //         setloading(false);
  //         console.log(response);
  //         window.location.reload();
  //       })
  //       .catch((error) => {
  //         setloading(false);
  //         console.log(error);
  //       });
  //   } catch (error) {
  //     setloading(false);
  //     console.log(error);
  //   }
  // };

  // const GetProfile = async () => {
  //   setloading(true);
  //   try {
  //     const res = await axios.get("get-profile", {
  //       headers: {
  //         Authorization: `Bearer ${token.data.data.token}`,
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     setloading(false);
  //     setGetdata(res.data.data);
  //     console.log(res);
  //   } catch (error) {
  //     setloading(false);
  //     console.log(error);
  //   }
  // };
  // useEffect(() => {
  //   GetProfile();
  // }, []);
  useEffect(() => {
    setFieldValue("FullName", getdata.name);
    setFieldValue("email", getdata.email);
  }, [getdata]);

  const {
    values,
    handleBlur,
    handleChange,
    touched,
    handleSubmit,
    errors,
    setFieldValue,
  } = useFormik({
    initialValues: initialValues,
    // validationSchema: EditProfilSchemas,
    // onSubmit,
  });
  return (
    <>
      <ChangePassword show={open} onHide={() => setOpen(false)} />
      <div className="table_main_Divv">
        <div className="width-of-hr-tag">
          <div
            className="Category-product"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}>
            <div className="three-ones">
              <div className="Employee_search_divv">
                <span className="Order-history-span">Edit Profile</span>
                <hr className="hr-tag-dashboardes" />
                <div className="diffrent-css-icons">
                  <a href="/Admin/DashBoard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ color: "#008cff" }}>
                      <path
                        fill="currentColor"
                        d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59l7-7l7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
                      />
                    </svg>
                  </a>
                  <LiaGreaterThanSolid size={20} />
                  <a className="Bread_crumb_textt" href="/Admin/Profile">
                    Admin Profile
                  </a>
                  <LiaGreaterThanSolid size={20} />
                  <a className="Bread_crumb_textt" href="">
                    Edit Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          <hr className="hr-secound-all-page" />
        </div>
        <div className="Profile_main_divv mt-4">
          <form onSubmit={handleSubmit} className="second-div">
            <div className="all-input-areya">
              <div className="Email_span_divv_ppx">
                <span className="">Full Name</span>
              </div>
              <div className="full-name-bug-div">
                <div className="text-boxx-fullname mt-2">
                  <input
                    className="i-t-a-host-itm"
                    type="text"
                    placeholder="Full name"
                    name="FullName"
                    value={values.FullName}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="Email_span_divv_ppx mt-3">
                <span>Email</span>
              </div>

              <div className="full-name-bug-div">
                <div className="text-boxx-fullname mt-2">
                  <input
                    className="i-t-a-host-itm"
                    type="text"
                    placeholder="kenzi.lawson@example.com"
                    name="email"
                    value={values.email}
                    onBlur={handleBlur}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>
            <div className="mt-4">
              {/* <label className="" htmlFor="mal">
                <img src={Profile} />
                <div>
                  <img src={camera} />
                </div>
              </label> */}

              <input
                id="mal"
                type="file"
                onChange={(e) => {
                  setImage({ img: URL.createObjectURL(e.target.files[0]) });
                  setimgfile(e.target.files[0]);
                }}
                className="mt-3"
              />
              <img
                src={Image.img}
                width="100px"
                height="100px"
                className="Profile_main_imgg"
              />
            </div>
            <div className="mt-4">
              <button type="submit" className="Btn-Register-karo">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
      {!loading && <div></div>}
      {loading && (
        <div>
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
            // onClick={handleClose}
          >
            {/* <CircularProgress color="inherit" /> */}
            <img
              src={Whitelogo}
              alt="Loading..."
              style={{ animation: "spin 2s linear infinite" }}
              className="Circular_imgg"
            />
          </Backdrop>
        </div>
      )}
    </>
  );
};

export default EditProfile;
