const sortBlogPosts = (sortSelect, blogPostList) => {
  const sortedList = [...blogPostList];

  switch (sortSelect.value) {
    case "shortest-read":
      return sortedList.sort((a, b) => a.readlength - b.readlength);
    case "longest-read":
      return sortedList.sort((a, b) => b.readlength - a.readlength);
    case "newest-first":
      return sortedList.sort((a, b) => b.publishdate.getTime() - a.publishdate.getTime());
    case "oldest-first":
      return sortedList.sort((a, b) => a.publishdate.getTime() - b.publishdate.getTime());
  }
};

export default sortBlogPosts;
