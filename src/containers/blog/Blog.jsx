import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from "./imports";
import './blog.css';

const Blog = () => (
  <div className="gpt3__blog section__padding" id="blog">
    <div className="gpt3__blog-heading">
      <h1 className="gradient__text">A lot is happening, We are blogging about it.</h1>
    </div>
    <div className="gpt3__blog-container">
      <div className="gpt3__blog-container_groupA">
        <Article blogPhoto={blog01} date="May 12, 2022" title="GPT-3 and Open Al is the future. Let us explore how it is?" />
      </div>
      <div className="gpt3__blog-container_groupB">
        <Article blogPhoto={blog02} date="May 12, 2022" title="GPT-3 and Open Al is the future. Let us explore how it is?" />
        <Article blogPhoto={blog03} date="May 12, 2022" title="GPT-3 and Open Al is the future. Let us explore how it is?" />
        <Article blogPhoto={blog04} date="May 12, 2022" title="GPT-3 and Open Al is the future. Let us explore how it is?" />
        <Article blogPhoto={blog05} date="May 12, 2022" title="GPT-3 and Open Al is the future. Let us explore how it is?" />
      </div>
    </div>
  </div>
);

export default Blog;
