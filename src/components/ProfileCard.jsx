import React from "react";
import Image from "./Image";
import Content from "./Content";
import "./Profile.css";

const ProfileCard = (props) => {
  return (
    <div className="card">
      <Image source={props.image} />
      <Content
        name={props.name}
        description={props.description}
        github={props.github}
        linkedin={props.linkedin}
      />
    </div>
  );
};

export default ProfileCard;