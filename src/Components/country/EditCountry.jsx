import React, { useEffect } from "react";
import "../UserForm/UserForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ROUTES } from "../../constants/Routes";
import { useParams } from "react-router-dom";

const EditCountry = () => {
  const [country, setCountry] = useState({
    name: "",
  }); // Changed to name from continent

  useEffect(() => {
    axios
      .get(`/admin/country/` + id)
      .then((res) => {
        setCountry({
          ...country,
          name: res.data.data[0].name,
        });
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    setCountry({
      ...country,
      name: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/admin/country/${id}`, {
        name: country.name, // Use name instead of continent
      })
      .then((res) => {
        console.log("Response:", res.data);
        const status =
          typeof res.data.status === "string"
            ? res.data.status.trim().toLowerCase()
            : "";
        console.log("Response status:", status);
        if (status === "success") {
          console.log("Continent data:", res.data.data);
          navigate(ROUTES.CONTINENT);
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
              <span className="Full_name_form_span">Country Name</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Country Name"
                  value={country.name}
                  onChange={handleChange} // Set name state
                />
              </div>
            </div>
            <div class="row ">
              <div class="col-sm-3"></div>
              <div class="col-sm-9 text-secondary">
                <input
                  type="submit"
                  class="btn btn-primary px-4"
                  value="Update Country"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditCountry;
