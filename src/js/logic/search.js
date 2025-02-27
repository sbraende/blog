const searchBlogPosts = (searchInput, blogPostList) => {
  const searchInputValue = searchInput.value.toLowerCase().trim();

  if (!searchInputValue) {
    return blogPostList;
  }

  return blogPostList.filter((blogPost) => blogPost.title.toLowerCase().includes(searchInputValue));
};

export default searchBlogPosts;
