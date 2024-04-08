import React from "react";
import "../PostDetail/PostDetail.css";
const ProjectStatus = () => {
  return (
    <div className="user-forms-Main-div">
      <div className="rating-course-flex">
        <span className="rating-course-span">Project Status</span>
        <span className="add-course-span">Web Design</span>
        <div className="progress-main-def">
          <div
            className="perent-progress-bars"
            role="progressbar"
            aria-valuenow="80"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
        <span className="add-course-span">Website Markup</span>
        <div className="progress-main-def">
          <div
            className="perent-progress-bars"
            role="progressbar"
            aria-valuenow="72"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "72%", background: "red" }}
          ></div>
        </div>
        <span className="add-course-span">One Page</span>
        <div className="progress-main-def">
          <div
            className="perent-progress-bars"
            role="progressbar"
            aria-valuenow="89"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "89%", background: "#15ca20" }}
          ></div>
        </div>
        <span className="add-course-span">Mobile Template</span>
        <div className="progress-main-def">
          <div
            className="perent-progress-bars"
            role="progressbar"
            aria-valuenow="55"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "55%", background: "#ffc107" }}
          ></div>
        </div>
        <span className="add-course-span">Backend API</span>
        <div className="progress-main-def">
          <div
            className="perent-progress-bars"
            role="progressbar"
            aria-valuenow="66"
            aria-valuemin="0"
            aria-valuemax="100"
            style={{ width: "66%", background: "#0dcaf0" }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default ProjectStatus;
