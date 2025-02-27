const renderShareModal = (shareButton, blogTitle) => {
  // Create elements
  const shareModal = document.createElement("div");
  const shareMessage = document.createElement("p");

  // Assign classes
  shareModal.className = "share-modal";
  shareMessage.className = "share-modal__message";

  // Set content
  shareMessage.textContent = `Link to '${blogTitle}' copied to clipboard`;

  // Append elements
  shareModal.append(shareMessage);
  shareButton.append(shareModal);

  // Hide nodal after x time
  setTimeout(() => {
    shareModal.classList.add("hidden");
    shareModal.remove();
  }, 3000);
};

export default renderShareModal;
