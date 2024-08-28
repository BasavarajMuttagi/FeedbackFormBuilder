import { useState } from "react";
import Faq from "../components/Faq";
import Feature from "../components/Feature";
import Header from "../components/Header";
import Hero from "../components/Hero";
import { createPortal } from "react-dom";
import FeedbackForm from "../components/FeedbackForm";

const Home = () => {
  const [showUploadPopUp, setShowUploadPopUp] = useState(true);
  return (
    <>
      <div className="flex flex-col min-h-screen relative bg-black">
        <div className="fixed w-full backdrop-blur-lg z-20">
          <Header />
        </div>
        <Hero />
        <Feature />
        <Faq />
      </div>
      {showUploadPopUp &&
        createPortal(
          <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 p-3">
            <FeedbackForm closeDialog={setShowUploadPopUp} />
          </div>,
          document.body,
        )}
    </>
  );
};

export default Home;
