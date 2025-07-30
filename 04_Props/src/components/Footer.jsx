import React from "react";

const Footer = (props) => {
  return (
    <div>
      <h2>Footer</h2>
      <p>Company Name: {props.companyInfo.name}</p>
      <p>Address: {props.companyInfo.address}</p>
      <p>Contact: {props.companyInfo.contact}</p>
    </div>
  );
};

export default Footer;
