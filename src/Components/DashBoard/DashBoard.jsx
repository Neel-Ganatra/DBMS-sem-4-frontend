import React from "react";
import "../DashBoard/DashBoard.css";
import { FaCalendarAlt } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

const DashBoard = () => {
  const navigate = useNavigate();

  const Data = [
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
    {
      link: /Users/,
      number: 120,
      name: "Registro de usuario",
      icon: <FaCalendarAlt color="#006ebd" size={45} />,
    },
  ];

  return (
    <div className="table_main_Divv">
      <div className="All_cards_main_divv">
        {Data.map((item, index) => {
          return (
            <NavLink key={index} to={item.link} className="Cards_section_divv">
              <div className="Cards_number_text_divv">
                <div className="card_number_divv">
                  <span className="card_number_divv">{item.number}</span>
                </div>
                <div className="card_text_divv">
                  <span className="card_text_divv">{item.name}</span>
                </div>
              </div>
              <div className="Card_img_divv">{item.icon}</div>
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};

export default DashBoard;
