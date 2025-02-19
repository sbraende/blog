import blogPostList from "../../data/blogPostList.js";

// SELECTORS
// const shareButton = document.querySelector(".blogpostDetails__share-button");
const blogList = document.querySelector(".blog-list");

// RENDER BLOG LIST
blogPostList.forEach((blogPost) => {
  const blogItem = document.createElement("li");

  blogItem.innerHTML = `
            <a class="blog-item__container" href="${blogPost.path}">
              <div class="blog-item__text-details-container">
                <div class="blog-item__title-description-container">
                  <h3 class="blog-item__title">${blogPost.title}</h3>
                  <p class="blog-item__description">${blogPost.description}</p>
                </div>
                <div class="blog-item__details-container">
                  <div class="blog-item__date-readtime-container">
                    <div class="blog-item__date_container">
                      <img src="/assets/icons/calendar.svg" alt="Calendar icon" />
                      <span class="publish-date">${blogPost.publishdate}</span>
                    </div>
                    <div class="blog-item__readtime-container">
                      <img src="/assets/icons/clock.svg" alt="Clock icon" />
                      <span class="read-time">${blogPost.readlength}</span>
                    </div>
                  </div>
                  <div class="blog-item__share-container">
                    <button class="blog-item__share-button">
                      <img src="/assets/icons/share.svg" alt="Share icon" />
                    </button>
                  </div>
                </div>
              </div>
              <div class="blog-item__image-container">
                <img
                  class="blog-item__image"
                  src="${blogPost.thumbnail}"
                  alt="Screenshot of StarWars website"
                />
              </div>
            </a>
  `;
  blogList.append(blogItem);
});

// EVENTS
// shareButton.addEventListener("click", (e) => {
//   e.preventDefault();
//   e.stopPropagation();
// });
