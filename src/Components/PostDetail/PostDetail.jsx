import React from "react";
import "../PostDetail/PostDetail.css";
import UserForm from "../UserForm/UserForm";
import ProjectStatus from "../ProjectStatus/ProjectStatus";
import Website from "../../assets/images/Website.png";
import Git from "../../assets/images/github-sign.png";
import Twitter from "../../assets/images/twitter.png";
import instagram from "../../assets/images/instagram.png";
import Facebook from "../../assets/images/facebook.png";
const PostDetail = () => {
  const SocialData = [
    {
      img: Website,
      Name: "Website",
      Link: "https://codervent.com",
    },
    {
      img: Git,
      Name: "Github",
      Link: "codervent",
    },
    {
      img: Twitter,
      Name: "Twitter",
      Link: "@codervent",
    },
    {
      img: instagram,
      Name: "Instagram",
      Link: "codervent",
    },
    {
      img: Facebook,
      Name: "Facebook",
      Link: "codervent",
    },
  ];
  return (
    // <div className="postdetail-main-cards">
    //   <div className="background-imag-box">
    //     <div className="img-post-users-de">
    //       <img
    //         src="https://admin.africamarket.today/public/assets//images/avatars/avatar-2.png"
    //         alt=""
    //         className="post-users-img-heres"
    //       />
    //     </div>
    //   </div>
    //   <div className="Secound-background-imag-box">
    //     <div className="buton-between-flex-detail">
    //       <button>Connect</button>
    //       <button style={{ background: "#fb6340" }}>Delete</button>
    //     </div>
    //   </div>
    //   <div className="main-details-contents">
    //     <div className="detail-profile-heres-def">
    //       <div className="all-profile-perticular-file">
    //         <span className="name-spans">Name:</span>
    //         <span className="input-die-file-form">John Doe</span>
    //       </div>
    //       <hr style={{ width: "100%" }} />
    //     </div>
    //     <div className="detail-profile-heres-def">
    //       <div className="all-profile-perticular-file">
    //         <span className="name-spans">Email:</span>
    //         <span className="input-die-file-form">John@gmail.com </span>
    //       </div>
    //       <hr style={{ width: "100%" }} />
    //     </div>
    //   </div>
    // </div>

    <>
      <div className="Two-differnt-Parts">
        <div className="Profile-card">
          <div className="Name-follw-main">
            <img
              src="https://admin.africamarket.today/public/assets//images/avatars/avatar-2.png"
              alt=""
              className="radius-profile-pic"
            />
            <h4 className="Doe-John-Name">John Doe</h4>
            <span>
              Full Stack Developer <br /> Bay Area, San Francisco, CA
            </span>
            <div className="btn-main-components">
              <button className="btn-follow-Name">Follow</button>
              <button className="Message-folloe-btn">Message</button>
            </div>
          </div>
          <hr className="hr-tag" style={{marginTop: "1.5rem", width: "90%"}} />
          <div className="Main-link-user-profile">
            {SocialData.map((item, index) => {
              return (
                <>
                  <div className="all-link-gaping" key={index}>
                    <div className="title-and-Name">
                      <img src={item.img} alt="img" className="social-icons" />
                      <span className="span-item-Profile">{item.Name}</span>
                    </div>
                    <span className="span-item-Profile">{item.Link}</span>
                  </div>
                  <hr className="hr-tag" />
                </>
              );
            })}
          </div>
        </div>
        <div className="compilers-flex-data">
          <UserForm />
          <ProjectStatus />
        </div>
      </div>
    </>
  );
};

export default PostDetail;
