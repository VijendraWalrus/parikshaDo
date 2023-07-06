import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from "./sidebardata";
import SubMenu from "./submenu";
import { IconContext } from "react-icons/lib";
import Logo from '../../parikshalogo.png'

const Nav = styled.div`
  background: #15171c;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const NavIcon = styled(Link)`
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const SidebarNav = styled.nav`
  background: #15171c;
  width: ${({ sidebar }) => (sidebar ? "250px" : "80px")}; /* Adjust the width based on sidebar state */
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  transition: 350ms;
  z-index: 10;
`;

const SidebarWrap = styled.div`
  width: 100%;
`;

const Sidebar = () => {
  const [sidebar, setSidebar] = useState(true);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
       
        <SidebarNav sidebar={sidebar}>
          <SidebarWrap>
            <NavIcon to="#">
            <h4
  style={{ color: "white"   }}
>
  <img className="main_logo" src={Logo} />
</h4>
              {/* <AiIcons.AiOutlineClose onClick={showSidebar} /> */}
            </NavIcon>
            {SidebarData.map((item, index) => {
              console.log(item)
              return <SubMenu item={item} key={index} />;
            })}
          </SidebarWrap>
        </SidebarNav>
      </IconContext.Provider>
    </>
  );
};

export default Sidebar;
