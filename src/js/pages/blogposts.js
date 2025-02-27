import renderSiteHeader from "../components/siteHeader.js";
import renderBlogPostHeader from "../components/blogPostHeader.js";
import renderSiteFooter from "../components/siteFooter.js";

// INITIALIZATION
document.addEventListener("DOMContentLoaded", () => {
  renderSiteHeader("Blog");
  renderBlogPostHeader();
  renderSiteFooter();
});
