import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import courses from "../Clinical microbiology and immunology/CoursesObj";
import Card from "../../common/CoursesSection";
module.exports = function ToggleandTitle() {
  const [state, setState] = useState(
    [...courses].filter((item) => item.category == 1)
  );
  const [categories, setCategories] = useState([
    {
      id: 1,
      value: "MSC",
      active: true,
    },
    {
      id: 2,
      value: "MD",
      active: false,
    },
  ]);

  const categoryFilterMaster = (id) => {
    let newarr = courses.filter((item) => item.category === id);
    const cloneCat = categories.map((item) => {
      if (item.id === id) {
        item.active = true;
      } else {
        item.active = false;
      }
      return item;
    });
    setState(newarr);
    setCategories(cloneCat);
  };

  return (
    <TitleToggleStyle>
      <div className="vid--title">
        <video autoPlay loop muted>
          <source src="./assets/Vid1.mp4" type="video/mp4" />
        </video>
        <div className="back">
          <h1>Clinical Microbiology and Immunology</h1>
          <div className="toggle">
            {categories.map((item, index) => (
              <button
                key={index}
                value={item.value}
                className={`${item.active ? "active" : "disable"}`}
                onClick={() => {
                  categoryFilterMaster(item.id);
                }}
              >
                {item.value}
              </button>
            ))}
          </div>
        </div>
      </div>
      <div className="courses">
        <Card items={state} />
      </div>
    </TitleToggleStyle>
  );
};
const TitleToggleStyle = styled.div`
  .vid--title {
    width: 100%;
    max-height: 400px;
    position: relative;
    margin-bottom: 3rem;
    box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;
    box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
    box-shadow: rgba(67, 71, 85, 0.27) 0px 0px 0.25em,
      rgba(90, 125, 188, 0.05) 0px 0.25em 1em;
    box-shadow: rgba(33, 35, 38, 0.1) 0px 10px 10px -10px;
  }
  video {
    width: 100%;
    max-height: 400px;
    min-height: 200px;
    object-fit: cover;
  }
  .back {
    position: absolute;
    top: 0;
    background-color: rgba(0, 0, 0, 0.5);
    width: 100%;
    height: 100%;
  }
  .back h1 {
    color: white;
    max-width: 300px;
    font-size: 1.8rem;
    font-weight: 800;
    position: absolute;
    top: 3rem;
    left: 8rem;
    margin: 0;
  }
  .courses {
    margin-bottom: 2rem;
  }

  .toggle {
    min-width: 200px;
    display: flex;
    justify-content: space-around;
    position: absolute;
    bottom: 3rem;
    right: 8rem;
  }
  .toggle button {
    padding: 0.5em 1em;
    width: 50px;
    font-size: 0.95rem;
    font-weight: 500;
    background-color: transparent;
    color: white;
    box-sizing: content-box;
  }

  .active {
    border--bottom: 2px solid var(--main-btn-color);
    background-color: var(--main-btn-color) !important;
  }
  .disable {
    opacity: 0.8;
  }

  @media (max-width: 540px) {
    .back {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
    }

    .back h1,
    .back .toggle {
      position: initial;
    }
    @media (max-width: 400px) {
      .back h1 {
        max-width: 230px;
        font-size: 1.5rem;
      }
    }
  }
`;
