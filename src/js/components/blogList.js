import { dateToString } from "../core/date";
import copyLinkToClipboard from "../logic/share";
import renderShareModal from "./shareModal";

// FUNCTIONS
const renderBlogList = (blogPostArray) => {
  const blogList = document.querySelector(".blog-list");
  blogList.textContent = "";

  blogPostArray.forEach((blogPost) => {
    // Create elements
    const blogItem = document.createElement("li");
    const blogLink = document.createElement("a");
    const textDetailsContainer = document.createElement("div");
    const titleDescriptionContainer = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const detailsContainer = document.createElement("div");
    const dateReadtimeContainer = document.createElement("div");
    const dateContainer = document.createElement("div");
    const dateIcon = document.createElement("img");
    const publishDate = document.createElement("span");
    const readtimeContainer = document.createElement("div");
    const clockIcon = document.createElement("img");
    const readTime = document.createElement("span");
    const shareContainer = document.createElement("div");
    const shareButton = document.createElement("button");
    const shareIcon = document.createElement("img");
    const imageContainer = document.createElement("div");
    const image = document.createElement("img");

    // Assign classes
    blogItem.className = "blog-item";
    blogLink.className = "blog-item__container";
    textDetailsContainer.className = "blog-item__text-details-container";
    titleDescriptionContainer.className = "blog-item__title-description-container";
    title.className = "blog-item__title";
    description.className = "blog-item__description";
    detailsContainer.className = "blog-item__details-container";
    dateReadtimeContainer.className = "blog-item__date-readtime-container";
    dateContainer.className = "blog-item__date_container";
    publishDate.className = "publish-date";
    readtimeContainer.className = "blog-item__readtime-container";
    readTime.className = "read-time";
    shareContainer.className = "blog-item__share-container";
    shareButton.className = "blog-item__share-button";
    imageContainer.className = "blog-item__image-container";
    image.className = "blog-item__image";

    // Set attributes and content
    blogLink.href = blogPost.path;
    title.textContent = blogPost.title;
    description.textContent = blogPost.description;
    dateIcon.src = "/assets/icons/calendar.svg";
    dateIcon.alt = "Calendar icon";
    publishDate.textContent = dateToString(blogPost.publishdate);
    clockIcon.src = "/assets/icons/clock.svg";
    clockIcon.alt = "Clock icon";
    readTime.textContent = blogPost.readlength;
    shareIcon.src = "/assets/icons/share.svg";
    shareIcon.alt = "Share icon";
    image.src = blogPost.thumbnail;
    image.alt = `Thumbnail of ${blogPost.title}`;

    // Append elements
    dateContainer.append(dateIcon, publishDate);
    readtimeContainer.append(clockIcon, readTime);
    dateReadtimeContainer.append(dateContainer, readtimeContainer);
    shareButton.append(shareIcon);
    shareContainer.append(shareButton);
    detailsContainer.append(dateReadtimeContainer, shareContainer);
    titleDescriptionContainer.append(title, description);
    textDetailsContainer.append(titleDescriptionContainer, detailsContainer);
    imageContainer.append(image);
    blogLink.append(textDetailsContainer, imageContainer);
    blogItem.append(blogLink);
    blogList.append(blogItem);

    // Event listeners
    shareButton.addEventListener("click", (e) => {
      e.preventDefault();
      e.stopPropagation();

      copyLinkToClipboard(blogPost.path);
      renderShareModal(e.currentTarget, blogPost.title);
    });
  });
};

export default renderBlogList;
