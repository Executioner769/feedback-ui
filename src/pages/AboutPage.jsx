import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function AboutPage() {
    return (
        <>
            <Header title="About" />
            <div className="container">
                <section className="section">
                    <h1 className="title">About this Project</h1>
                    <h2 className="subtitle">
                        This project is a simple example of a React application
                        to leave feedback for a product or service.
                    </h2>
                    <h2 className="subtitle">Version: 1.0.0</h2>
                </section>
                <section className="section">
                    <h1 className="title">About the Developer</h1>
                    <h2 className="subtitle">
                        <a
                            href="https://github.com/Executioner769"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Madhusudhan Reddy
                        </a>{" "}
                        is a full stack developer. He has a B.Tech degree in
                        Computer Science and Engineering from National Institute
                        of Technology, Andhra Pradesh
                    </h2>
                    <h2 className="subtitle">
                        He is a self-taught developer and has been working on a
                        few projects.
                    </h2>
                </section>
            </div>
            <Footer title="Back to Home" link="/" />
        </>
    );
}

export default AboutPage;
