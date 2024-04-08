import React, { useEffect } from "react";
import "../UserForm/UserForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ROUTES } from "../../constants/Routes";

const AddOfficial = () => {
  const [official, setOfficial] = useState({
    country: "",
    firstname: "",
    lastname: "",
    fullname: "",
    dob: "",
    gender: "",
  }); // Changed to name from continent
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    axios
      .get("/admin/country")
      .then((res) => {
        if (res.data.status === "Success") {
          // Set countries in state
          setCountries(res.data.data);
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  const navigate = useNavigate();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOfficial({
      ...official,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get("/admin/country")
      .then((res) => {
        if (res.data.status === "Success") {
          // Set countries in state
          setCountries(res.data.data);
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/admin/officials", {
        country: selectedCountry,
        firstname: official.firstname,
        lastname: official.lastname,
        fullname: official.fullname,
        dob: official.dob,
        gender: official.gender,
      })
      .then((res) => {
        console.log("Response:", res.data);
        const status =
          typeof res.data.status === "string"
            ? res.data.status.trim().toLowerCase()
            : "";
        console.log("Response status:", status);
        if (status === "success") {
          console.log("official data:", res.data.data);
          navigate(ROUTES.OFFICIALS);
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  };

  return (
    <div className="user-forms-Main-div">
      <div className="form-first-flex">
        <div className="Card-flex-add">
          <form onSubmit={handleSubmit}>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">First Name</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  name="firstname"
                  value={official.firstname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Last Name</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  name="lastname"
                  value={official.lastname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Full Name</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  name="fullname"
                  value={official.fullname}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Gender</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  name="gender"
                  value={official.gender}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Date of Birth</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="date"
                  class="form-control"
                  name="dob"
                  value={official.dob}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Country</span>
              <div class="col-sm-9 text-secondary">
                <select
                  className="form-control"
                  value={selectedCountry}
                  onChange={(e) => setSelectedCountry(e.target.value)}
                >
                  <option value="">Select Country</option>
                  {countries.map((country) => (
                    <option key={country.id} value={country.id}>
                      {country.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div class="row ">
              <div class="col-sm-3"></div>
              <div class="col-sm-9 text-secondary">
                <input
                  type="submit"
                  class="btn btn-primary px-4"
                  value="Add Official"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddOfficial;
