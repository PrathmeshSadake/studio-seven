import React, { useState } from "react";
import { Alert, Container } from "react-bootstrap";
const Announcement = () => {
  const [showInfo, setshowInfo] = useState(true);
  return (
    showInfo && (
      <Alert variant="info" className="py-2" style={{ textAlign: "center" }}>
        Cool styles for the season upto 60% off + Free shipping on orders above
        499 INR
        <span
          style={{ float: "right", cursor: "pointer" }}
          onClick={() => setshowInfo(false)}
        >
          <i class="far fa-times-circle"></i>
        </span>
      </Alert>
    )
  );
};

export default Announcement;
