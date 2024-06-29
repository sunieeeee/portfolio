import React, { memo, useState, useRef, useCallback, useEffect } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import * as colors from "../assets/style/colors";
import mq from "../components/MediaQuery";

const MenuContainer = styled.nav`
  z-index: 1;
  position: fixed;
  left: 30px;
  top: 30px;
  height: initial;

  ${mq.maxWidth("lg")`
    left: auto;
    right: 30px;
  `}

  > div {
    position: relative;
  }

  .menu_icon {
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4px;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #333;
    overflow: hidden;
    cursor: pointer;

    & > div {
      width: 16px;
      height: 2px;
      background-color: #fff;
      border-radius: 10px;
    }
    &::before,
    &::after {
      content: "";
      display: block;
      width: 16px;
      height: 2px;
      background-color: #fff;
      border-radius: 10px;
      transition: 0.3s transform;
    }

    &.menu_active > div {
      display: none;
    }
    &.menu_active::before {
      transform: translateY(4.2px) rotate(45deg);
    }
    &.menu_active::after {
      transform: translateY(-1.87px) rotate(-45deg);
    }

    &.menu_active + .menu_list {
      height: 270px;
    }
  }

  .menu_list {
    height: 0;
    transition: 0.2s all;

    z-index: -1;
    position: absolute;
    left: 0;
    top: 30px;
    width: 60px;
    background-color: #333;
    border-radius: 0 0 30px 30px;
  }

  ul {
    padding: 30px 0 20px;
    opacity: 0;

    li {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      height: 55px;

      &:hover {
        a {
          color: ${colors.ORANGE};
        }

        i:not(.active + i) {
          color: ${colors.ORANGE};
          opacity: 0.3;
        }
      }

      a {
        z-index: 3;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translate(-30px, -50%);
        padding-left: 120%;
        display: flex;
        align-items: center;
        min-width: 200%;
        height: 100%;
        color: ${colors.WHITE};
        text-align: left;
        text-transform: uppercase;
        font-family: var(--font-poppins);
        font-size: 16px;
        font-weight: 500;
        opacity: 0;
        transition: 0.2s all;

        ${mq.maxWidth("lg")`
          right: 0;
          left: auto;
          transform: translate(30px, -50%);
          padding: 0 120% 0 0;
          text-align: left;
        `}

        &.active {
          color: ${colors.ORANGE};

          &::after {
            position: absolute;
            left: 60px;
            top: 50%;
            transform: translateY(-50%);
            content: "";
            width: 3px;
            height: 16px;
            background-color: ${colors.ORANGE};
            opacity: 0;
            transition: 0.3s all;

            ${mq.maxWidth("lg")`
              right: 60px;
              left: auto;
            `}
          }

          & + i {
            color: ${colors.ORANGE};
          }
        }
      }

      i {
        display: block;
        width: 100%;
        height: 100%;
        color: ${colors.WHITE};
        text-align: center;
        line-height: 55px;
        transform: scale(0);
        transition: 0.4s transform;
      }

      &:nth-of-type(1) {
        a,
        i {
          transition-delay: 0.01s;
        }
      }
      &:nth-of-type(2) {
        a,
        i {
          transition-delay: 0.08s;
        }
      }
      &:nth-of-type(3) {
        a,
        i {
          transition-delay: 0.16s;
        }
      }
      &:nth-of-type(4) {
        a,
        i {
          transition-delay: 0.24s;
        }
      }
    }

    &.menu_active {
      opacity: 1;

      li {
        opacity: 1;
      }

      a {
        transform: translate(0, -50%) !important;
        opacity: 1;
        transition-delay: 0s;

        &.active {
          color: ${colors.ORANGE};

          &::after {
            left: 57px;
            opacity: 1;
            transition-delay: 0.3s;

            ${mq.maxWidth("lg")`
              right: 57px;
              left: auto;
            `}
          }

          & + i {
            color: ${colors.ORANGE};
          }
        }
      }

      i {
        transform: scale(1);
        transition-delay: 0s;
      }
    }
  }
`;

const MenuLink = memo(({ to, children }) => {
  const menuIcon = useRef();
  const navList = useRef();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = useCallback(() => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  }, []);

  useEffect(() => {
    if (isOpen) {
      menuIcon.current.classList.add("menu_active");
      navList.current.classList.add("menu_active");
    } else {
      menuIcon.current.classList.remove("menu_active");
      navList.current.classList.remove("menu_active");
    }
  }, [isOpen]);

  return (
    <MenuContainer>
      <div>
        <div ref={menuIcon} className="menu_icon" onClick={toggleMenu}>
          <div></div>
        </div>

        <div className="menu_list">
          <ul ref={navList}>
            <li>
              <NavLink to="/">Home</NavLink>
              <i className="fa-solid fa-house"></i>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
              <i className="fa-solid fa-user"></i>
            </li>
            <li>
              <NavLink to="/projects">Projects</NavLink>
              <i className="fa-solid fa-briefcase"></i>
            </li>
            <li>
              <NavLink to="https://github.com/sunieeeee" target="_blank">Github</NavLink>
              <i className="fa-brands fa-github"></i>
            </li>
          </ul>
        </div>
      </div>
    </MenuContainer>
  );
});

export default MenuLink;
