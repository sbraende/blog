const copyLinkToClipboard = (blogPostPath) => {
  navigator.clipboard.writeText(document.location.origin + blogPostPath.slice(1)); // Slice removes unwanted character
};

export default copyLinkToClipboard;
