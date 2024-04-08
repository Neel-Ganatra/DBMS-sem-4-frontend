import React, {useState} from "react";
import "../Login/Login.css";
import {Link} from "react-router-dom";
import {useFormik} from "formik";
import {LoginSchemas} from "../../Schemas";
import {useNavigate} from "react-router-dom";
import Whitelogo from "../../assets/images/Whitelogo.png";
const Login = () => {
  const initialvalues = {
    email: "",
    password: "",
  };

  const [close, setclose] = useState(true);
  const navigate = useNavigate();
  const eyeopen = (
    <svg
      className="clip-mar"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_26_1790)">
        <path
          d="M11.9987 3C17.3907 3 21.8767 6.88 22.8177 12C21.8777 17.12 17.3907 21 11.9987 21C6.60669 21 2.12069 17.12 1.17969 12C2.11969 6.88 6.60669 3 11.9987 3ZM11.9987 19C14.0382 18.9996 16.0171 18.3068 17.6115 17.0352C19.206 15.7635 20.3216 13.9883 20.7757 12C20.3199 10.0133 19.2036 8.24 17.6093 6.97003C16.015 5.70005 14.037 5.00853 11.9987 5.00853C9.96038 5.00853 7.98238 5.70005 6.38806 6.97003C4.79375 8.24 3.67745 10.0133 3.22169 12C3.67578 13.9883 4.79136 15.7635 6.38583 17.0352C7.9803 18.3068 9.95922 18.9996 11.9987 19ZM11.9987 16.5C10.8052 16.5 9.66062 16.0259 8.81671 15.182C7.97279 14.3381 7.49869 13.1935 7.49869 12C7.49869 10.8065 7.97279 9.66193 8.81671 8.81802C9.66062 7.97411 10.8052 7.5 11.9987 7.5C13.1922 7.5 14.3368 7.97411 15.1807 8.81802C16.0246 9.66193 16.4987 10.8065 16.4987 12C16.4987 13.1935 16.0246 14.3381 15.1807 15.182C14.3368 16.0259 13.1922 16.5 11.9987 16.5ZM11.9987 14.5C12.6617 14.5 13.2976 14.2366 13.7665 13.7678C14.2353 13.2989 14.4987 12.663 14.4987 12C14.4987 11.337 14.2353 10.7011 13.7665 10.2322C13.2976 9.76339 12.6617 9.5 11.9987 9.5C11.3356 9.5 10.6998 9.76339 10.2309 10.2322C9.76208 10.7011 9.49869 11.337 9.49869 12C9.49869 12.663 9.76208 13.2989 10.2309 13.7678C10.6998 14.2366 11.3356 14.5 11.9987 14.5Z"
          fill="#211B24"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_1790">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );

  const eyeclose = (
    <svg
      className="clip-mar"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_26_1797)">
        <path
          d="M9.34178 18.782L7.41078 18.264L8.19778 15.325C7.01975 14.8905 5.9249 14.2574 4.96078 13.453L2.80778 15.607L1.39278 14.192L3.54678 12.039C2.33086 10.5828 1.51387 8.83576 1.17578 6.969L3.14378 6.61C3.90278 10.812 7.57878 14 11.9998 14C16.4198 14 20.0968 10.812 20.8558 6.61L22.8238 6.968C22.4861 8.83502 21.6695 10.5824 20.4538 12.039L22.6068 14.192L21.1918 15.607L19.0388 13.453C18.0747 14.2574 16.9798 14.8905 15.8018 15.325L16.5888 18.265L14.6578 18.782L13.8698 15.842C12.6321 16.0541 11.3674 16.0541 10.1298 15.842L9.34178 18.782Z"
          fill="#211B24"
        />
      </g>
      <defs>
        <clipPath id="clip0_26_1797">
          <rect width="24" height="24" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
  const {values, errors, touched, handleChange, handleBlur, handleSubmit} =
    useFormik({
      validationSchema: LoginSchemas,
      initialValues: initialvalues,
    });
  return (
    <div className="Login-section-main-div">
      <form className="Login-section-parent-div">
        <div className="login-section-all-input-div">
          <div className="Logo_work_main_divv">
            <div className="Logo_sec_divv">
              <img className="Logo_main_imgg" src={Whitelogo} />
            </div>
          </div>
          <div className="submit-div-he">
            <div>
              <span className="login-span-first">Login</span>
            </div>
            <div>
              <div className="adjusted-div">
                <div className="email-logo-container">
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
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Email"
                  className="same-class-input-field"
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
            <div>
              <div className="Passowrd_svg_divvv mt-2 ">
                <div>
                  <svg
                    className="svg-margin"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_26_1789)">
                      <path
                        d="M6 8V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V8H20C20.2652 8 20.5196 8.10536 20.7071 8.29289C20.8946 8.48043 21 8.73478 21 9V21C21 21.2652 20.8946 21.5196 20.7071 21.7071C20.5196 21.8946 20.2652 22 20 22H4C3.73478 22 3.48043 21.8946 3.29289 21.7071C3.10536 21.5196 3 21.2652 3 21V9C3 8.73478 3.10536 8.48043 3.29289 8.29289C3.48043 8.10536 3.73478 8 4 8H6ZM19 10H5V20H19V10ZM11 15.732C10.6187 15.5119 10.3207 15.1721 10.1522 14.7653C9.98376 14.3586 9.9542 13.9076 10.0681 13.4823C10.1821 13.057 10.4332 12.6813 10.7825 12.4132C11.1318 12.1452 11.5597 11.9999 12 11.9999C12.4403 11.9999 12.8682 12.1452 13.2175 12.4132C13.5668 12.6813 13.8179 13.057 13.9319 13.4823C14.0458 13.9076 14.0162 14.3586 13.8478 14.7653C13.6793 15.1721 13.3813 15.5119 13 15.732V18H11V15.732ZM8 8H16V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V8Z"
                        fill="#101216"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_26_1789">
                        <rect width="24" height="24" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <input
                  className="pass-t-a"
                  type={close ? "password" : "text"}
                  placeholder="Password"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
                <span onClick={() => setclose(!close)}>
                  {close ? eyeclose : eyeopen}
                </span>
              </div>
              {errors.password && touched.password ? (
                <p className="mastu-to-eroor mt-2">{errors.password} </p>
              ) : null}
            </div>
          </div>
          <div>
            <span
              className="Forgot-Password-span"
              onClick={() => navigate("/ForgotPassword")}
            >
              Forgot Password?
            </span>
          </div>
          <div className="Login_link_divv">
            <div
              className="login-btn-single"
              onClick={() => navigate("/Dashboard")}
            >
              Login
            </div>
          </div>
          <div className="margin-111-div">
            {/* <div>
            <span className="OR-Login-With-span">OR Login With</span>
          </div> */}
            {/* <div className="main-div-off-social-media-div22">
          <div className="social-width-media-div">
            <img src={facebook} alt="" className="smae-logo-for" />
          </div>

          <img src={twitter} alt="" className="social-width-media-div" />

          <button
            type="button"
            className="google-width-media-div"
            onClick={() => SocialLogin("Google")}
          >
            <img src={google} alt="" className="smae-logo-for" />
          </button>
        </div> */}
            {/* <div className="dont-have-register-div">
          <span className="dont-have-register-span">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/Register")}
              className="only-register-span"
            >
              Register
            </span>
            .
          </span>
        </div> */}
          </div>
        </div>
      </form>
    </div>
  );
};

export default Login;
