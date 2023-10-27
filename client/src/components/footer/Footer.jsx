import React from "react";
import "./footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="fLists">
        <ul className="fList">
          <li className="fListItem">Countries</li>
          <li className="fListItem">Regions</li>
          <li className="fListItem">Cities</li>
          <li className="FListItem">Districts</li>
          <li className="fListItem">Airports</li>
          <li className="fListItem">Hotels</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Homes </li>
          <li className="fListItem">Apartments </li>
          <li className="fListItem">Resorts </li>
          <li className="fListItem">Villas</li>
          <li className="fListItem">Hostels</li>
          <li className="fListItem">Guest houses</li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Unique places</li>
          <li className="fListItem">Reviews</li>
          <li className="fListItem">Travel articles </li>
          <li className="fListItem">Travel communities </li>
          <li className="fListItem">S&h deals </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Car rental </li>
          <li className="fListItem">Flight</li>
          <li className="fListItem">Restaurant, </li>
          <li className="fListItem">Travel Agents </li>
        </ul>
        <ul className="fList">
          <li className="fListItem">Customer Service</li>
          <li className="fListItem">P Help</li>
          <li className="fListItem">Careers</li>
          <li className="fListItem">Sustainability</li>
          <li className="fListItem">Press center</li>
          {/* <li className="fListItem">Safety Resource Center</li> */}
          <li className="fListItem">Investor relations</li>
          {/* <li className="fListItem">Terms & conditions</li> */}
        </ul>
      </div>
      <div className="fText">
        Copyright © {new Date().getUTCFullYear()} Asmbooking.
      </div>
    </div>
  );
}

export default Footer;
