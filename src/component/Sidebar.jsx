import React from "react";
import { Link } from "react-router-dom";
import { linkSidebar } from "./util/data";
import { Accordion } from "react-bootstrap";

function Sidebar() {
  const fetchMenu = (link = linkSidebar) =>
    link.map((links) => {
      return links.hasOwnProperty("to") ? (
        fetchLink({ to: links.to, index: links.index, title: links.title })
      ) : (
        <Accordion>
          {console.log(links.index)}
          <Accordion.Toggle
            variant="link"
            className="list-group-item list-group-item-action bg-light"
            eventKey={links.index}
          >
            {links.title}
          </Accordion.Toggle>
          {typeof links.subContent !== "undefined" &&
            links.subContent.map((subcontent) => (
              <Accordion.Collapse eventKey={links.index}>
                {fetchLink({
                  to: subcontent.to,
                  index: subcontent.index,
                  title: subcontent.title,
                  subMenu: true,
                  icon: subcontent.icon,
                })}
              </Accordion.Collapse>
            ))}
        </Accordion>
      );
    });

  const fetchLink = ({ to, index, title, subMenu = false, icon }) => (
    <Link
      to={to}
      className={`list-group-item list-group-item-action bg-light ${
        subMenu ? "submenu" : ""
      }`}
      key={index}
    >
      <span className="d-flex align-items-center">
        {subMenu && icon} {title}
      </span>
    </Link>
  );
  return (
    <div className="bg-light" id="sidebar-wrapper">
      <div className="sidebar-heading">
        <h2>Movie</h2>
      </div>
      <div className="list-group">{fetchMenu()}</div>
    </div>
  );
}

export default Sidebar;
