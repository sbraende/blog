import renderSiteHeader from "../components/site-header.js";
import renderBlogPostHeader from "../components/blogpost-header.js";
import renderSiteFooter from "../components/site-footer.js";

document.addEventListener("DOMContentLoaded", () => {
  renderSiteHeader("Blog");
  renderBlogPostHeader();
  renderSiteFooter();
});
