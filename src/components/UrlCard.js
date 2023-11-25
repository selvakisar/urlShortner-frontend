import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function UrlCard(item) {
  return (
    <div>
      <Card>
        <h3>{item.origUrl}</h3>
        <h3>{item.shortUrl}</h3>
        <h3>{item.urlId}</h3>
        <h3>{item.date}</h3>
        <h5>{item.clicks}</h5>
        <Link to={"/short"}>View/Add your URL's</Link>
      </Card>
    </div>
  );
}

export default UrlCard;

