import React, { useEffect } from "react";
import "../UserForm/UserForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ROUTES } from "../../constants/Routes";

const AddCountry = () => {
  const [country, setCountry] = useState({});
  const [continent, setContinent] = useState([]);

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCountry({
      ...country,
      name: e.target.value,
      continent_id: e.target.value,
    });
  };

  useEffect(() => {
    axios
      .get("/admin/continent")
      .then((res) => {
        setContinent(res.data.data);
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post("/admin/country", {
        ...country,
        continent_id: country.continent_id,
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
          navigate(ROUTES.COUNTRY);
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
                  value={country.name}
                  onChange={(e) => handleChange(e)}
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Continents</span>
              <div className="col-sm-9 text-secondary">
                <select
                  className="form-control"
                  value={country.continent_id}
                  onChange={(e) =>
                    setCountry({
                      ...country,
                      continent_id: e.target.value,
                    })
                  }
                >
                  <option value="">Select Continent</option>
                  {continent.map((item) => (
                    <option key={item.id} value={item.id}>
                      {item.name}
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
                  value="Add Country"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCountry;
