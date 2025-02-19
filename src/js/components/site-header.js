const renderSiteHeader = (pageName) => {
  // SELECTOR
  const header = document.querySelector(".site-header");

  // Create elements
  const titleLink = document.createElement("a");
  const title = document.createElement("h1");
  const siteLink = document.createElement("a");
  const siteTitle = document.createElement("h1");
  const nav = document.createElement("nav");
  const navList = document.createElement("ol");
  const blogListItem = document.createElement("li");
  const blogAnchor = document.createElement("a");
  const aboutListItem = document.createElement("li");
  const aboutAnchor = document.createElement("a");

  // Assign classes
  titleLink.className = "site-header__title-link";
  title.className = "site-header__title";
  siteLink.className = "page-header__title-link";
  siteTitle.className = "page-header__title";
  nav.className = "site-header__nav";
  navList.className = "site-header__nav-list";
  blogAnchor.className = "active-link";

  // Set attributes and content
  titleLink.href = "/";
  title.textContent = "seb-dev";
  siteLink.href = "/";
  siteTitle.textContent = pageName;
  blogAnchor.href = "/";
  blogAnchor.textContent = "Blogg";
  aboutAnchor.href = "./src/html/pages/about.html";
  aboutAnchor.textContent = "About";

  // Append elements
  titleLink.append(title);
  siteLink.append(siteTitle);
  blogListItem.append(blogAnchor);
  aboutListItem.append(aboutAnchor);
  navList.append(blogListItem, aboutListItem);
  nav.append(navList);
  header.append(titleLink, siteLink, nav);
};

export default renderSiteHeader;
