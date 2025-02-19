const renderSiteFooter = () => {
  // Select
  const footer = document.querySelector(".site-footer");

  // Create elements
  const paragraph = document.createElement("p");
  const blueskyLink = document.createElement("a");
  const separator = document.createTextNode(" | ");
  const githubLink = document.createElement("a");

  // Assign classes
  blueskyLink.className = "site-footer__link";
  githubLink.className = "site-footer__link";

  // Set attributes and content
  blueskyLink.href = "https://sbraende.bsky.social";
  blueskyLink.target = "_blank";
  blueskyLink.textContent = "🦋 Bluesky";

  githubLink.href = "https://github.com/sbraende/";
  githubLink.target = "_blank";
  githubLink.textContent = "🐈‍⬛ GitHub";

  // Append elements in correct structure
  paragraph.append(blueskyLink, separator, githubLink);
  footer.append(paragraph);
};

export default renderSiteFooter;
