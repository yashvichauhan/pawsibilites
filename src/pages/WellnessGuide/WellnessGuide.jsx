
import React from "react";
import articleData from "./articleData";
import eventData from "./eventData";
import "./WellnessGuide.css";

function formatDate(dateString) {
  const options = { day: "numeric", month: "short" };
  const eventDate = new Date(dateString);
  return eventDate.toLocaleDateString("en-US", options).toUpperCase();
}

export const WellnessGuide = () => {
  return (
    <div className="maincontainer">
      <div className="container">
        <h1>Blogs.</h1>
        {articleData.map((article) => (
          <div key={article.id} className="Article1">
            <div className="artcleDetails">
              <div className="articlehead">
                <h2>{article.heading}</h2>
                <h3>
                  {article.author}, {article.place}
                </h3>
              </div>
              <div className="articletime">
                <h3 className="date">{article.date}</h3>
                <h3 className="time"> {article.time}</h3>
              </div>
            </div>
            <div className="article-content">
              <p>{article.content}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="events-container">
        <div className="event-head">
          <h2>📅 Upcoming events</h2>
        </div>
        <div className="event-contents">
          <ul>
            {eventData.map((event) => (
              <li key={event.id}>
                <div className="eventdate">
                  <h3>{formatDate(event.date)}</h3>
                </div>
                <div className="eventdetails">
                  <h3>{event.name}</h3>
                  <h4>{event.location}</h4>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default WellnessGuide;
