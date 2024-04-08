import React, { useState } from "react";
import { Table } from "react-bootstrap";
import "./Continent.css";
import { FaAngleDown, FaArrowDown } from "react-icons/fa";
import Pagination from "react-bootstrap/Pagination";
import Profile from "../../assets/images/profile.png";
import Cutegirl from "../../assets/images/Cutegirl.png";
import PostDetail from "../PostDetail/PostDetail";
import { useNavigate } from "react-router-dom";
import DeletePopup from "../../Modals/DeletePopup/DeletePopup";
import { LiaGreaterThanSolid } from "react-icons/lia";
import edit from "../../assets/images/edit.svg";
import remove from "../../assets/images/delete.svg";
import view from "../../assets/images/View.svg";
import { useEffect } from "react";
import axios from "../../utils/axios";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants/Routes";

const Continents = () => {
  const navigate = useNavigate();
  const [show, setShow] = useState(false);
  const [continent, setContinent] = useState([]);

  const deleteContinent = (continentId) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this continent?"
    );
    if (!confirmDelete) {
      return;
    }
    axios
      .delete(`/admin/continent/${continentId}`) // Use proper string interpolation
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
          setContinent(res.data.data);
          window.location.reload();
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  };

  useEffect(() => {
    axios
      .get("/admin/continent")
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
          setContinent(res.data.data);
        } else {
          alert(res.data.Error || "Something went wrong");
        }
      })
      .catch((err) => {
        console.log("Error fetching data", err);
      });
  }, []);

  console.log("Continent data1:", continent);

  // const Lists = [
  //   {
  //     no: "1",
  //     name: "Sameed",
  //     date: "29-01-24",
  //     Image: Profile,
  //     email: "sameed@gmail.com",
  //   },
  //   {
  //     no: "2",
  //     name: "Ayan",
  //     date: "29-01-24",
  //     Image: Cutegirl,
  //     email: "sameed@gmail.com",
  //   },
  //   {
  //     no: "3",
  //     name: "Aatif",
  //     date: "29-01-24",
  //     Image: Profile,
  //     email: "sameed@gmail.com",
  //   },
  //   {
  //     no: "4",
  //     name: "Kaif",
  //     date: "29-01-24",
  //     Image: Cutegirl,
  //     email: "sameed@gmail.com",
  //   },
  //   {
  //     no: "5",
  //     name: "Anas",
  //     date: "29-01-24",
  //     Image: Profile,
  //     email: "sameed@gmail.com",
  //   },
  //   {
  //     no: "6",
  //     name: "Salman",
  //     date: "29-01-24",
  //     Image: Cutegirl,
  //     email: "sameed@gmail.com",
  //   },
  //   {
  //     no: "7",
  //     name: "Zaid",
  //     date: "29-01-24",
  //     Image: Profile,
  //     email: "sameed@gmail.com",
  //   },
  //   {
  //     no: "8",
  //     name: "Sakir",
  //     date: "29-01-24",
  //     Image: Cutegirl,
  //     email: "sameed@gmail.com",
  //   },
  // ];
  return (
    <>
      <DeletePopup show={show} onHide={() => setShow(false)} />
      <div className="table_main_Divv">
        <div className="width-of-hr-tag">
          <div
            className="Category-product"
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "100%",
            }}
          >
            <div className="three-ones">
              <div className="Employee_search_divv">
                <span className="Order-history-span">Continents</span>
                <hr className="hr-tag-dashboardes" />
                <div className="diffrent-css-icons">
                  <a href="/Admin/DashBoard">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      style={{ color: "#008cff" }}
                    >
                      <path
                        fill="currentColor"
                        d="M5 22h14a2 2 0 0 0 2-2v-9a1 1 0 0 0-.29-.71l-8-8a1 1 0 0 0-1.41 0l-8 8A1 1 0 0 0 3 11v9a2 2 0 0 0 2 2zm5-2v-5h4v5zm-5-8.59l7-7l7 7V20h-3v-5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v5H5z"
                      />
                    </svg>
                  </a>
                  <LiaGreaterThanSolid size={20} />
                  <a className="Bread_crumb_textt" href="">
                    Continent
                  </a>
                </div>
              </div>
              <div className="Span_and_Serch_main_divv">
                <div className="svg-p-div-search">
                  <div>
                    <svg
                      className="svg-margin"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g clipPath="url(#clip0_20_1236)">
                        <path
                          d="M18.031 16.617L22.314 20.899L20.899 22.314L16.617 18.031C15.0237 19.3082 13.042 20.0029 11 20C6.032 20 2 15.968 2 11C2 6.032 6.032 2 11 2C15.968 2 20 6.032 20 11C20.0029 13.042 19.3082 15.0237 18.031 16.617ZM16.025 15.875C17.2941 14.5699 18.0029 12.8204 18 11C18 7.132 14.867 4 11 4C7.132 4 4 7.132 4 11C4 14.867 7.132 18 11 18C12.8204 18.0029 14.5699 17.2941 15.875 16.025L16.025 15.875Z"
                          fill="#211B24"
                        />
                      </g>
                      <defs>
                        <clipPath id="clip0_20_1236">
                          <rect width="24" height="24" fill="white" />
                        </clipPath>
                      </defs>
                    </svg>
                  </div>
                  <input
                    className="i-t-a-search"
                    type="search"
                    id="gsearch"
                    name="gsearch"
                    // value={searchInput}
                    // onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search"
                  />
                </div>
              </div>
              <Link to={ROUTES.ADD_CONTINENT} className="btn btn-success">
                Add Continent
              </Link>
            </div>
          </div>
          <hr className="hr-secound-all-page" />
        </div>
        <div className="Table_sec_divv mt-3">
          {" "}
          <Table striped bordered hover responsive="xl">
            <thead>
              <tr className="table-dark rounded-tr">
                <th>ContinentId</th>
                <th>ContinentName</th>

                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {continent.map((item, index) => {
                return (
                  <tr className="darked">
                    {/* <td>{item.no}</td> */}
                    {/* <td>{item.date}</td>
                    <td>
                      <div className="Number_divv_sec_divv">
                        <img
                          className="table_imgg_profile"
                          src={item.Image}
                          alt=""
                        />
                      </div>
                    </td> */}
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>
                      <div className="d-flex gap-2 w-100">
                        {/*  <button
                          className="View_button"
                          onClick={() => handledetail(item)}  }
                        >
                          <img src={view} alt="" />
                        </button> */}
                        <button
                          className="Delete_button"
                          onClick={() => deleteContinent(item.id)}
                        >
                          <img src={remove} alt="" />
                        </button>
                        <button
                          className="Edit_button"
                          onClick={() =>
                            navigate(ROUTES.EDIT_CONTINENT + item.id)
                          }
                        >
                          <img src={edit} alt="" />
                        </button>
                      </div>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </div>

        <div className="Pagination_main_div mt-4">
          <Pagination>
            <Pagination.First />
            <Pagination.Item>{1}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{11}</Pagination.Item>
            <Pagination.Item active>{12}</Pagination.Item>
            <Pagination.Item>{13}</Pagination.Item>
            <Pagination.Ellipsis />
            <Pagination.Item>{20}</Pagination.Item>
            <Pagination.Next />
            <Pagination.Last />
          </Pagination>
        </div>
      </div>
    </>
  );
};

export default Continents;
