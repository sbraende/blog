import renderSiteHeader from "../components/siteHeader.js";
import renderBlogList from "../components/blogList.js";
import renderSiteFooter from "../components/siteFooter.js";
import blogList from "../../data/blogPostList.js";
import sortBlogPosts from "../logic/sort.js";

// SELECT
const searchInput = document.querySelector(".search__input");
const sortSelect = document.querySelector(".sort__select");

// EVENT-LISTENERS
sortSelect.addEventListener("change", () => {
  const sortedArray = sortBlogPosts(sortSelect, blogList);
  renderBlogList(sortedArray);
});

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderSiteHeader("Blog");
  renderBlogList(blogList);
  renderSiteFooter();
});
