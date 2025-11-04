import React from "react";
import { Link } from "react-router-dom";

import "./NavLink.css"
type NavLinkProps ={
label:string;
link :string;
};
function NavLink ({label,link}: NavLinkProps){

return(
    <Link to={link} className="nav-link">
      {label}
    </Link>

);

}
export default NavLink;
