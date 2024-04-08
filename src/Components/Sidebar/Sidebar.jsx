import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "../Sidebar/Sidebar.css";
import {
  FaAngleDown,
  FaArrowDown,
  FaBars,
  FaHome,
  FaLongArrowAltRight,
  FaUser,
} from "react-icons/fa";
// import { MdMessage } from "react-icons/md";
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/Routes";
// import { BsCartCheck } from "react-icons/bs";
// import { AiFillHeart } from "react-icons/ai";
// import { CiUser } from "react-icons/ci";
// import { BiCog } from "react-icons/bi";
import Whitelogo from "../../assets/images/Whitelogo.png";
import Navbar from "../Navbar/Navbar";
import SidebarMenu from "./SidebarMenu";
const Sidebar = ({ children }) => {
  const [isOpen, setIsOpen] = useState(true);

  const toggle = () => setIsOpen(!isOpen);
  const routes = [
    {
      path: "/DashBoard",
      name: "DashBoard",
      icon: <FaHome size={22} />,
    },
    {
      path: ROUTES.BALL,
      name: "Balls",
      icon: <FaUser size={20} />,
      // subRoutes: [
      //   {
      //     path: "/Employee",
      //     name: "Employee",
      //     icon: <FaLongArrowAltRight />,
      //   },
      //   {
      //     path: "/social-user",
      //     name: "Owner",
      //     icon: <FaLongArrowAltRight />,
      //   },
      // ],
    },

    {
      path: ROUTES.CONTINENT,
      name: "Continent",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.COUNTRY,
      name: "Country",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.INNING_BATTING,
      name: "Inning Batting",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.INNING_BOWLING,
      name: "Inning Bowling",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.PLAYER,
      name: "Player",
      icon: <FaUser size={20} />,
      subRoutes: [
        {
          path: ROUTES.PLAYER,
          name: "Player",
          icon: <FaLongArrowAltRight />,
        },
        {
          path: ROUTES.PLAYER_ROLE,
          name: "Player Role",

          icon: <FaLongArrowAltRight />,
        },
        // {
        //   path: "/social-user",
        //   name: "Owner",
        //   icon: <FaLongArrowAltRight />,
        // },
      ],
    },
    {
      path: ROUTES.MATCH_PLAYER,
      name: "Match Player",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.MATCH_STATUS,
      name: "Match Status",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.OFFICIALS,
      name: "Officials",
      icon: <FaUser size={20} />,
    },

    {
      path: ROUTES.SCORCARD_DETAIL,
      name: "Scorcard Detail",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.SCORCARD_INNING,
      name: "Scorcard Innings",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.SCORE,
      name: "Score",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.SEASON_COMPETITOR,
      name: "Season Competitor",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.SEASON_COMPETITOR_PLAYER,
      name: "Season Competitor Player",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.STAGES,
      name: "Stages",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.TOURNAMENT_INFORMATION,
      name: "Tournament Information",
      icon: <FaUser size={20} />,
    },
    {
      path: ROUTES.TOURNAMENT_MATCH,
      name: "Tournament Match",
      icon: <FaUser size={20} />,
    },

    // {
    //   path: "/Message",
    //   name: "Message",
    //   icon: <MdMessage />,
    // },
    // {
    //   path: "/Order",
    //   name: "Order",
    //   icon: <BsCartCheck />,
    // },
    // {
    //   path: "/Saved",
    //   name: "Saved",
    //   icon: <AiFillHeart />,
    // },
    // {
    //   path: "/Setting",
    //   name: "Setting",
    //   icon: <BiCog />,
    //   // subRoutes: [
    //   //   {
    //   //     path: "/Setting/Profile",
    //   //     name: "Profile",
    //   //     icon: <CiUser />,
    //   //   },
    //   // ],
    // },
  ];

  const showAnimation = {
    hidden: {
      width: 0,
      opacity: 0,
      transition: {
        duration: 0.5,
      },
    },
    show: {
      width: "140px",
      opacity: 1,
      padding: "5px 15px",
      transition: {
        duration: 0.2,
      },
    },
  };
  return (
    <>
      <Navbar />
      <motion.div
        animate={{
          width: isOpen ? "310px" : "60px",
          transition: {
            duration: 0.5,
            type: "spring",
            damping: 11,
          },
        }}
        className="main-container"
      >
        <motion.div
          animate={{
            width: isOpen ? "250px" : "40px",
            transition: {
              duration: 0.5,
              type: "spring",
              damping: 11,
            },
          }}
          className="sidebar"
        >
          <div className="top_section">
            {isOpen && (
              <>
                <div className="Logo_img_name_divv">
                  <img className="Logo_Sound_biz" src={Whitelogo} alt="" />
                  {/* <div className="mt-2">
                    <h1 className="logo">Sound Biz</h1>
                  </div> */}
                </div>
              </>
            )}
            <div className="bars">
              <FaBars size={20} onClick={toggle} />
            </div>
          </div>

          <section className="routes">
            {routes.map((route, index) => {
              if (route.subRoutes) {
                return (
                  <SidebarMenu
                    setIsopen={setIsOpen}
                    showAnimation={showAnimation}
                    isOpen={isOpen}
                    route={route}
                    key={route.name}
                  />
                );
              }
              return (
                <NavLink
                  activeclassname="active"
                  to={route.path}
                  key={index}
                  className="links"
                >
                  <div className="icon">{route.icon}</div>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        variants={showAnimation}
                        initial="hidden"
                        animate="show"
                        exit="hidden"
                        className="link_text"
                      >
                        {route.name}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </NavLink>
              );
            })}
          </section>
        </motion.div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <main>{children}</main>
        </div>
      </motion.div>
    </>
  );
};

export default Sidebar;
