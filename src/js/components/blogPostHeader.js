import blogPostList from "../../data/blogPostList.js";
import { dateToString } from "../core/date.js";

const renderBlogPostHeader = () => {
  // Get blogpost details
  const blogPostElement = document.querySelector(".blogpost");
  const blogPostDetails = blogPostList.find(
    (blogpost) => blogpost.id === blogPostElement.dataset.id
  );

  // Select
  const blogPostHeader = document.querySelector(".blogpost__header");

  // Create elements
  const title = document.createElement("h1");
  const textDetailsContainer = document.createElement("div");
  const detailsContainer = document.createElement("div");
  const dateReadTimeContainer = document.createElement("div");
  const dateContainer = document.createElement("div");
  const dateIcon = document.createElement("img");
  const dateSpan = document.createElement("span");
  const readTimeContainer = document.createElement("div");
  const readTimeIcon = document.createElement("img");
  const readTimeSpan = document.createElement("span");
  const shareContainer = document.createElement("div");
  const shareButton = document.createElement("button");
  const shareIcon = document.createElement("img");

  // Assign classes
  title.className = "blogpost__title";
  textDetailsContainer.className = "blogpost__text-details-container";
  detailsContainer.className = "blogpost__details-container";
  dateReadTimeContainer.className = "blogpost__date-readtime-container";
  dateContainer.className = "blogpost__date_container";
  dateSpan.className = "publish-date";
  readTimeContainer.className = "blogpost__readtime-container";
  readTimeSpan.className = "read-time";
  shareContainer.className = "blogpost__share-container";
  shareButton.className = "blogpost__share-button";

  // Set attributes and content
  title.textContent = blogPostDetails.title;

  dateIcon.src = "/assets/icons/calendar.svg";
  dateIcon.alt = "Calendar icon";
  dateSpan.textContent = dateToString(blogPostDetails.publishdate);

  readTimeIcon.src = "/assets/icons/clock.svg";
  readTimeIcon.alt = "Clock icon";
  readTimeSpan.textContent = blogPostDetails.readlength;

  shareIcon.src = "/assets/icons/share.svg";
  shareIcon.alt = "Share icon";

  // Append elements
  dateContainer.append(dateIcon, dateSpan);
  readTimeContainer.append(readTimeIcon, readTimeSpan);
  dateReadTimeContainer.append(dateContainer, readTimeContainer);
  shareButton.append(shareIcon);
  shareContainer.append(shareButton);
  detailsContainer.append(dateReadTimeContainer, shareContainer);
  textDetailsContainer.append(detailsContainer);

  blogPostHeader.append(title, textDetailsContainer);
};

export default renderBlogPostHeader;
