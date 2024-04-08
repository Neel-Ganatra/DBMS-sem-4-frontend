import React from "react";
import "../UserForm/UserForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ROUTES } from "../../constants/Routes";
const AddPlayer_role = () => {
  const navigate = useNavigate();
  const [player_role, setPlayer_role] = useState({ roles: "" });

  const handleChange = (e) => {
    setPlayer_role({
      ...player_role,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/admin/player_role", {
        roles: player_role.roles,
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
          navigate(ROUTES.PLAYER_ROLE);
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
              <span className="Full_name_form_span">Player Role</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  name="roles"
                  value={player_role.roles}
                  onChange={handleChange}
                />
              </div>
            </div>
            <div class="row ">
              <div class="col-sm-3"></div>
              <div class="col-sm-9 text-secondary">
                <input
                  type="submit"
                  class="btn btn-primary px-4"
                  value="Add Player_role"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlayer_role;
