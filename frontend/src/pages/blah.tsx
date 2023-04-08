import React from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function TopBanner(props: any) {
  return (
    <>
      {/* the heading */}
      <div className="row">
        <div className="text text-center">
          <h1 className="col">{props.saying}</h1>
        </div>
      </div>
      {/* the picture */}
      <div className="row row-2">
        <div className="col text-center">
          <img className="col col-8" src="./JoelPic.jpg" alt="logo" />
        </div>
      </div>
      {/* the text */}
      <div>
        <br />
        <p className="text-center">
          Welcome to the official unofficial site for Joel Hilton! Here you can
          find a full list of his movie collection that is famous amongst BYU IS
          students. You can also find a link to his podcast, Bacon Sale. Enjoy!
        </p>
      </div>
    </>
  );
}

export default TopBanner;
