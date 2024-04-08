import React, { useEffect } from "react";
import "../UserForm/UserForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ROUTES } from "../../constants/Routes";
import { useParams } from "react-router-dom";

const EditPlayer_role = () => {
  const [edit_role, setPlayer_role] = useState({
    roles: "",
  }); // Changed to name from player_role

  useEffect(() => {
    axios
      .get(`/admin/edit_role/` + id)
      .then((res) => {
        setPlayer_role({
          ...edit_role,
          roles: res.data.data[0].roles,
        });
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  const navigate = useNavigate();
  const { id } = useParams();
  const handleChange = (e) => {
    setPlayer_role({
      ...edit_role,
      roles: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .put(`/admin/edit_role/${id}`, {
        roles: edit_role.roles, // Use name instead of player_role
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
                  value={edit_role.roles}
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
                  value="Update Player Role"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditPlayer_role;
