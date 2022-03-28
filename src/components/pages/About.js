import React from "react";
import {
  FaGithubSquare,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

export default function About() {
  return (
    <div>
      <div
        className="container d-flex justify-content-center align-items-center"
        style={{ height: "80vh", flexDirection: "column" }}
      >
        <div className="row">
          <div className="col">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4E03AQHHjtIH69PMFg/profile-displayphoto-shrink_200_200/0/1644074796091?e=1654128000&v=beta&t=TvuVVWytrU7P3DeK7rP4Xfzy7uVFVa-SfmMFajduzmM"
              style={{
                height: "100px",
                width: "100px",
                borderRadius: "50%",
              }}
              alt=""
            />
          </div>
        </div>
        <div className="row my-2">
          <h5>Satyajit Dutta</h5>
        </div>
        <div className="row my-2">
          <p
            className="text-muted"
            style={{ maxWidth: "400px", textAlign: "center" }}
          >
            hi, i am good in programming language c++ and java. i have some keen
            interest on front-end technology like{" "}
            <strong> HTML, CSS, javaScript, React JS </strong>. and also on{" "}
            <strong>ui/ux design</strong>.
          </p>
        </div>
        <div className="row h4 text-dark">
          <div className="col">
            <a href="https://github.com/Sdalpha" target="_">
              <FaGithubSquare />
            </a>
          </div>
          <div className="col">
            <a href="https://www.linkedin.com/in/satyajit-dutta-9a3b021b9/" target="_">
              <FaLinkedin />
            </a>
          </div>
          <div className="col">
            <a href="https://www.instagram.com/saajaru/?hl=en" target="_">
              <FaInstagram />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
