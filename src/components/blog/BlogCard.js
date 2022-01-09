import React from "react";
import { NavLink } from "react-router-dom";
import { scrollToTop } from "../footer/ScrollToTop";

const BlogCard = ({ blog }) => {
  return (
    <div className="blog-card ">
      <div className="card__header">
        <div className="card-image ">
          <NavLink onClick={scrollToTop} to={`/blogs/${blog.id}/`}>
            <img
              //   src="https://source.unsplash.com/600x400/?computer"
              src={blog.imageSrc}
              alt="card__image"
              className="card__image"
              width="600"
            />
          </NavLink>
        </div>
      </div>
      <div className="card_main">
        <div className="card__body">
          <span className="tag tag-blue">{blog.tag}</span>
          <NavLink onClick={scrollToTop} to={`/blogs/${blog.id}/`}>
            <h4>{blog.name}</h4>
          </NavLink>

          <p>{blog.about}</p>
        </div>

        <div className="card__footer">
          <div className="user">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://gdsc.community.dev/u/m8vetm/"
            >
              <img
                src="https://i.pravatar.cc/40?img=68"
                alt="user__image"
                className="user__image"
              />
            </a>
            <div className="user__info">
              <h5>{blog.author}</h5>
              <small>{blog.date}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
