import React from "react";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: "#222",
      color: "#fff",
      padding: "15px 10px",
      textAlign: "center",
      fontSize: "14px",
      borderTop: "2px solid #444",
    }}>
      <div style={{ marginBottom: "10px" }}>
        <p style={{ fontSize: "16px", fontWeight: "bold", marginBottom: "5px" }}>CrowdFund</p>
        <p style={{ marginBottom: "5px" }}>Empowering projects through community support</p>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <p style={{ fontWeight: "bold", marginBottom: "5px" }}>Follow us:</p>
        <a href="https://facebook.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#ddd", textDecoration: "none" }}>
          Facebook
        </a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#ddd", textDecoration: "none" }}>
          LinkedIn
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer" style={{ margin: "0 10px", color: "#ddd", textDecoration: "none" }}>
          Twitter
        </a>
      </div>

      <div style={{ marginBottom: "10px" }}>
        <p>Developed by <b>Your Team Name</b></p>
        <p>Contact us at <b>support@crowdfund.com</b></p>
      </div>

      <hr style={{ margin: "5px auto", width: "80%", borderColor: "#666" }} />
      <p style={{ marginTop: "5px", fontSize: "12px" }}>© {new Date().getFullYear()} CrowdFund. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;
