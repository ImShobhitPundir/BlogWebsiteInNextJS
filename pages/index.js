import { useState, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
import Shimmer from "@/components/Shimmer";
import { debounce } from "lodash";

export default function Index({ result, sidebarPosts, catResult }) {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const [posts, setPosts] = useState(result);
  const [newPostsLoading, setNewPostsLoading] = useState(false);
  const [newPosts, setNewPosts] = useState([]);
  const { cats } = catResult;

  useEffect(() => {
    setIsLoading(false); // Set loading state to false after initial render
  }, []);

  const fetchMorePosts = async () => {
    if (isLoadingMore || !hasMore) return;

    setIsLoadingMore(true);

    try {
      const response = await fetch(
        `https://spundir.in/l9_blog/api/pblog/list/${currentPage * 4}/4`
      );
      const result = await response.json();

      if (result.length > 0) {
        setCurrentPage((prevPage) => prevPage + 1);
        setHasMore(true);
        setNewPosts(result);
      } else {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching more posts:", error);
    }
    setIsLoadingMore(false);
  };

  useEffect(() => {
    if (newPosts.length > 0) {
      setNewPostsLoading(true);
      const timer = setTimeout(() => {
        setPosts((prevPosts) => [...prevPosts, ...newPosts]);
        setNewPosts([]);
        setNewPostsLoading(false);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [newPosts]);

  useEffect(() => {
    const handleScroll = debounce(() => {
      const contentDiv = document.getElementById("content");
      const lastPost = contentDiv?.querySelector("a:last-child");

      if (
        lastPost &&
        window.innerHeight + window.scrollY >= lastPost.offsetTop
      ) {
        fetchMorePosts();
      }
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoadingMore, hasMore]);

  // if(isLoading){
  //   return <Shimmer/>
  // }
  return (
    <>
      <div className="grid md:grid-cols-12 gred-cols flex">
        <div className="col-span-8">
        <div className="md:max-w-full max-w-[400px] overflow-x-auto overflow-scrolling-touch text-sm text-gray-500 border-b p-5 pb-2 px-10 sticky top-0 bg-white z-0">
            {/* <button className="flex-none px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
              &lt;
            </button> */}
            <div className="flex space-x-4 ">
              {cats.map((cat) => (
                <Link href={`/${cat.url}`} key={cat.id}>
                  <span className="px-2 py-1 ">{cat.name}</span>
                </Link>
              ))}
            </div>
            {/* <button className="flex-none px-2 py-1 rounded-md bg-gray-200 hover:bg-gray-300 focus:bg-gray-300">
              &gt;
            </button> */}
          </div>
          {/* <div id="main" className="md:max-h-[950px] flex-none  overflow-hidden hover:overflow-y-auto p-5 px-10"> */}
          <div id="main" className="flex-none  overflow-hidden hover:overflow-y-auto p-5 md:px-10 ">
            
            <div id="content">
              {isLoading ? (
                <div>
                  {posts.map((post) => (
                    <Link href={`/article/${post.url}`} key={post.id}>
                      <BlogCard post={post} />
                    </Link>
                  ))}
                </div>
              ) : (
                <div>
                  {posts.map((post) => (
                    <Link href={`/article/${post.url}`} key={post.id}>
                      <BlogCard post={post} />
                    </Link>
                  ))}
                  {newPostsLoading && (
                    <div>
                      <Shimmer />
                      <Shimmer />
                      <Shimmer />
                      <Shimmer />
                      <Shimmer />
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="md:col-span-4 col-span-8 flex-none " id="sidebar">
          <Sidebar posts={sidebarPosts} cats={cats} />
        </div>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch("https://spundir.in/l9_blog/api/pblog/list/0/4");
  const result = await data.json();

  const sidebarData = await fetch(
    "https://spundir.in/l9_blog/api/pblog/list/0/10"
  );
  const sidebarPosts = await sidebarData.json();

  const catData = await fetch("https://spundir.in/l9_blog/api/pcats");
  const catResult = await catData.json();

  return {
    props: {
      result,
      sidebarPosts,
      catResult: catResult,
    },
  };
}
