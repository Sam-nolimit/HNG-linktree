import slack from "../Assets/slack.svg";
import gitbub from "../Assets/github.svg";
import { SocialSectionStyle } from "./SocialSectionStyle";

const SocialSection = () => {
  return (
    <SocialSectionStyle>
      <img src={slack} id="slack" alt="slack" />
      <img src={gitbub} id="github" alt="github" />
    </SocialSectionStyle>
  );
};

export default SocialSection;
