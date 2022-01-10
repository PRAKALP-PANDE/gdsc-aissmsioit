import React from "react";
import "./Blog.css";

import BlogCard from "./BlogCard";
import blogs from "./blogs";

const Blog = () => {
  const Blogs = [];

  blogs.forEach((blog) => {
    Blogs.push(blog);
  });
  return (
    <>
      <div
        data-aos="fade-down"
        data-aos-easing="ease-in-sine"
        data-aos-duration="1000"
        data-aos-delay="100"
        data-aos-anchor=".example-selector"
        data-aos-anchor-placement="top-center"
        className="row mt-1 pl-lg-5 ml-lg-2"
      >
        <div id="Events">
          <span>Blogs</span>
          <span role="img" aria-label=""></span>
        </div>
      </div>
      <div className="row">
        <div
          className="col-6 Upcoming"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
          <button className="technical_btn red_btn">Technical</button>
        </div>
        <div
          className="col-6 Past"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
          data-aos-duration="1000"
          data-aos-delay="100"
          data-aos-anchor=".example-selector"
          data-aos-anchor-placement="top-center"
        >
          <button className="technical_btn green_btn">Non Technical</button>
        </div>
      </div>

      <div className="blog-container">
        {Blogs.map((blog, index) => (
          <BlogCard key={index} blog={blog} />
        ))}
      </div>
    </>
  );
};

export default Blog;
