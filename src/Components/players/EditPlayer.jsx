import React, { useEffect } from "react";
import "../UserForm/UserForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ROUTES } from "../../constants/Routes";
import { useParams } from "react-router-dom";
const EditPlayer = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`/admin/player/` + id)
      .then((res) => {
        console.log(" Response:", res.data);
        console.log("Response:", res.data);
        const status =
          typeof res.data.status === "string"
            ? res.data.status.trim().toLowerCase()
            : "";
        console.log("Response status:", status);
        if (status === "success") {
          console.log("Continent data:", res.data.data);
          setPlayer(res.data.data);
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  const [player, setPlayer] = useState({
    name: "",
    role: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setPlayer({
      ...player,
      [name]: value,
    });
  };

  useEffect(() => {
    axios
      .get("/admin/player_role")
      .then((res) => {
        if (res.data.status === "Success") {
          // Set countries in state
          setRoles(res.data.data);
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
      .put(`/admin/player/${id}`, {
        ...player,
        name: player.name,
        role: player.role,
      })
      .then((res) => {
        console.log("Response:", res.data);
        const status =
          typeof res.data.status === "string"
            ? res.data.status.trim().toLowerCase()
            : "";
        console.log("Response status:", status);
        if (status === "success") {
          navigate(ROUTES.PLAYERS);
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  };

  const [roles, setRoles] = useState([]);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    axios
      .get("/admin/player_role")
      .then((res) => {
        if (res.data.status === "Success") {
          // Set countries in state
          setRoles(res.data.data);
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  const handleRole = (e) => {
    const { name, value } = e.target;
    setPlayer({
      ...player,
      [name]: value,
    });
  };

  return (
    <div className="user-form">
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={player.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="role" className="form-label">
            Role
          </label>
          <select
            className="form-select"
            id="role"
            name="role"
            value={player.role}
            onChange={handleRole}
          >
            <option value="">Select Role</option>
            {roles.map((role) => (
              <option key={role._id} value={role._id}>
                {role.role}
              </option>
            ))}
          </select>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default EditPlayer;
