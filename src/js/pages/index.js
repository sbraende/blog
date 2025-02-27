import renderSiteHeader from "../components/siteHeader.js";
import renderBlogList from "../components/blogList.js";
import renderSiteFooter from "../components/siteFooter.js";
import blogList from "../../data/blogPostList.js";
import sortBlogPosts from "../logic/sort.js";
import searchBlogPosts from "../logic/search.js";

// SELECT
const sortSelect = document.querySelector(".sort__select");
const searchInput = document.querySelector(".search__input");

// EVENT-LISTENERS
sortSelect.addEventListener("change", () => {
  const filteredList = searchBlogPosts(searchInput, blogList);
  const sortedList = sortBlogPosts(sortSelect, filteredList);
  renderBlogList(sortedList);
});

searchInput.addEventListener("input", () => {
  const filteredList = searchBlogPosts(searchInput, blogList);
  const sortedList = sortBlogPosts(sortSelect, filteredList);
  renderBlogList(sortedList);
});

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderSiteHeader("Blog");
  renderBlogList(blogList);
  renderSiteFooter();
});
