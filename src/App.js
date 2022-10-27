import React from "react";
import { MainWrapper } from "./AppStyle";
import Footer from "./Components/Footer";
import LinkCard from "./Components/LinkCard";
import ProfileSection from "./Components/ProfileSection";
import SocialSection from "./Components/SocialSection";
import shareIcon from "./Assets/share-06.svg";
import dotIcon from "./Assets/dots-horizontal.svg";
import { ShareButton } from "./Components/ProfileSectionStyle";
import { useEffect, useState } from "react";
function App() {
  const [isMobile, setIsMobile] = useState(true);
  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
  });
  return (
    <>
      <MainWrapper>
        <ShareButton>
          {isMobile ? (
            <img src={shareIcon} alt="icon" />
          ) : (
            <img src={dotIcon} alt="icon" />
          )}
        </ShareButton>
        <ProfileSection />
        <LinkCard />
        <SocialSection />
      </MainWrapper>
      <Footer />
    </>
  );
}

export default App;
