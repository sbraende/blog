const shareButton = document.querySelector(".blogpostDetails__share-button");

shareButton.addEventListener("click", (e) => {
  e.preventDefault();
  e.stopPropagation();
});
