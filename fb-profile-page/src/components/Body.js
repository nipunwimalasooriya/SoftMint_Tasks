import React from "react";
import InfoSection from "./InfoSection";
import PostsSection from "./PostsSection";

const Body = () => {
  return (
    <div className="flex gap-4 items-start mx-auto">
      <InfoSection />
      <PostsSection />
    </div>
  );
};

export default Body;
