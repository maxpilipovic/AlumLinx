import React from 'react';
import './column.css';

export function Column() {
  return (
    <div className="container">
      {/* Left Sidebar */}
      <div className="sidebar-left">
        <h2>Navigation</h2>
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Explore</a></li>
          <li><a href="#">Notifications</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Bookmarks</a></li>
          <li><a href="#">Lists</a></li>
        </ul>
      </div>

      {/* Main Feed */}
      <div className="main-feed">
        <h2>Main Feed</h2>
        <div className="post">
          <h3>Post Title 1</h3>
          <p>This is a post content with some filler text. This where any kind of post will be visible after being shared.</p>
        </div>
        <div className="post">
          <h3>Post Title 2 (CHAPTER 1. Loomings.)</h3>
          <p>Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world. It is a way I have of driving off the spleen and regulating the circulation. Whenever I find myself growing grim about the mouth; whenever it is a damp, drizzly November in my soul; whenever I find myself involuntarily pausing before coffin warehouses, and bringing up the rear of every funeral I meet; and especially whenever my hypos get such an upper hand of me, that it requires a strong moral principle to prevent me from deliberately stepping into the street, and methodically knocking people’s hats off—then, I account it high time to get to sea as soon as I can. This is my substitute for pistol and ball. With a philosophical flourish Cato throws himself upon his sword; I quietly take to the ship. There is nothing surprising in this. If they but knew it, almost all men in their degree, some time or other, cherish very nearly the same feelings towards the ocean with me.</p>
        </div>
        <div className="post">
          <h3>Post Title 3</h3>
          <p>More filler content to simulate a feed. This is where dynamic content would also go.</p>
        
          {/* Image under Post 3 */}
          <img src='./imgs/lebron.jpg' alt="Post Image" className="post-image" />
        </div>
      </div>

      {/* Right Sidebar */}
      <div className="sidebar-right">
        <h2>Recommendations</h2>
        <ul>
          <li>Suggested User 1</li>
          <li>Suggested User 2</li>
          <li>Suggested User 3</li>
          <li>Suggested User 4</li>
        </ul>
      </div>
    </div>
  );
}

