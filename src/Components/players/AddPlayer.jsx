import React, { useEffect, useState } from "react";
import "../UserForm/UserForm.css";
import { useNavigate } from "react-router-dom";
import axios from "../../utils/axios";
import { ROUTES } from "../../constants/Routes";

const AddPlayer = () => {
  const navigate = useNavigate();
  const [player, setPlayer] = useState({});
  const [playerRoles, setPlayerRoles] = useState([]);
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState("");

  useEffect(() => {
    // Fetch player roles
    axios
      .get("/admin/player_role")
      .then((res) => {
        if (res.data.status === "Success") {
          // Set player roles in state
          setPlayerRoles(res.data.data);
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });

    // Fetch countries
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
      .post("/admin/player", {
        ...player,
        country: selectedCountry,
        roles: player.roles,
      })
      .then((res) => {
        if (res.data.status === "Success") {
          navigate(ROUTES.PLAYER);
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
              <div className="col-sm-9 text-secondary">
                <input
                  type="text"
                  className="form-control"
                  value={player.firstname}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      firstname: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form-control-flexable">
              <span className="Full_name_form_span">Last Name</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  value={player.lastname}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      lastname: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form-control-flexable">
              <span className="Full_name_form_span">Full Name</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  value={player.fullname}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      fullname: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Gender</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  value={player.gender}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      gender: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Date of Birth</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="date"
                  class="form-control"
                  value={player.dob}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      dob: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Batting Style</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  value={player.battingstyle}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      battingstyle: e.target.value,
                    })
                  }
                />
              </div>
            </div>
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Bowling Style</span>
              <div class="col-sm-9 text-secondary">
                <input
                  type="text"
                  class="form-control"
                  value={player.bowlingstyle}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      bowlingstyle: e.target.value,
                    })
                  }
                />
              </div>
            </div>

            <div className="form-control-flexable">
              <span className="Full_name_form_span">Country</span>
              <div className="col-sm-9 text-secondary">
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
            <div className="form-control-flexable">
              <span className="Full_name_form_span">Role</span>
              <div className="col-sm-9 text-secondary">
                <select
                  className="form-control"
                  value={player.role}
                  onChange={(e) =>
                    setPlayer({
                      ...player,
                      Role: e.target.value,
                    })
                  }
                >
                  <option value="">Select Role</option>
                  {playerRoles.map((role) => (
                    <option key={role.id} value={role.id}>
                      {role.roles}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-3"></div>
              <div className="col-sm-9 text-secondary">
                <input
                  type="submit"
                  className="btn btn-primary px-4"
                  value="Add Player"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddPlayer;
