import React from "react";
import videoHomePage from "../../assets/video-homepage.mp4";
const Home = (props) => {
    return (
        <div className="home-container">
            <div>
                <video autoPlay loop muted>
                    <source src={videoHomePage} type="video/mp4" />
                </video>
            </div>
            <div className="home-content">
                <h1 className="home-header">There's a better way to ask</h1>
                <p className="home-desc">
                    You don't want to make a boring form. And your audience
                    won't answer one. Create a typeform instead-and make
                    everyone happy.
                </p>
                <button className="btn home-btn">
                    Get's started. It's free
                </button>
            </div>
        </div>
    );
};

export default Home;
