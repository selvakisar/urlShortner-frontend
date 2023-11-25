import { useEffect, useState } from "react";
import {getAllUrl,  } from "../services/Url";
import { Topbar } from "./Topbar";
import {  Card, Container, Pagination } from "react-bootstrap";
import { Link } from "react-router-dom";

export function AllUrl() {
  const [data, setData] = useState([]);

  const [currentPage, setPage] = useState(1);
  // const [clicks,setClick] = useState(0);
  // const[count,setCount]= useState(0)
  // const handleClick=()=>{

  //     setClick(!clicks)
  //     setCount(count+1)

  //  }
  const token = localStorage.getItem("token");
  useEffect(() => {
    getAllUrl(token).then((data) => {
      if (data) {
        console.log(data);
        setData(data);
      } else {
        console.log("fetch error");
      }
    });
  }, []);

  return (
    <Container
      style={{
        maxWidth: 1080,
        flexFlow: "row",
        backgroundColor: "teal",
      }}
    >
      <div>
        <Topbar />
        <h1>Dashboard</h1>
        <Card.Title className="success">
          Total URL's Created:{data.length}
        </Card.Title>

        <div style={{ flexFlow: "row" }}>
          {data
            .slice(currentPage * 2 - 2, currentPage * 2)
            .map((item, index) => {
              return (
                <UrlCard
                  key={item._id}
                  origUrl={item.origUrl}
                  shortUrl={item.shortUrl}
                  urlId={item.urlId}
                  date={item.date.slice(4, 15)}
                  clicks={item.clicks}
                />
              );
            })}
        </div>
        <div style={{ paddingLeft: "320px", paddingTop: "20px" }}>
          <Pagination>
            <Pagination.Prev
              style={{ flexFlow: "row" }}
              onClick={() => (currentPage > 1 ? setPage(currentPage - 1) : "")}
            >
              previous page
            </Pagination.Prev>

            {[...Array(Math.ceil(data.length / 2))].map((_, index) => (
              <Pagination.Item
                onClick={() => (setPage(index + 1) ? "info" : "info")}
              >
                {index + 1}
              </Pagination.Item>
            ))}

            <Pagination.Next
              onClick={() =>
                currentPage < Math.ceil(data.length / 3)
                  ? setPage(currentPage + 2)
                  : ""
              }
            >
              Next page
            </Pagination.Next>
          </Pagination>
        </div>
      </div>
    </Container>
  );
}

function UrlCard(item) {
  
  return (
    <div>
      <Card
        className="allUrlCard"
        style={{
          paddingBottom: "20px",
          marginTop: "5px",
          backgroundColor: "lightcyan",
        }}
        key={item._id}
      >
        <Card.Link
          href={item.origUrl}
          target="_blank"
          rel="noreferrer noopener "
        >
          Short Url:{item.shortUrl}
        </Card.Link>
        <Link>Url Id: {item.urlId} </Link>
        <Card.Text>Created:{item.date}</Card.Text>
        <Card.Text>Clicks:{item.clicks}</Card.Text>
      </Card>
    </div>
  );
}
