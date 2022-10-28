import avatar from "../Assets/Temitope_pic.jpeg";
import {
  Avatar,
  NameTitle,
  SlackID,
  ProfileSectionStyle,
  
} from "./ProfileSectionStyle";
const ProfileSection = () => {
  return (
    <ProfileSectionStyle>
      <Avatar>
        <img src={avatar} id="mainImg" alt="Logo" />
      </Avatar>
      <NameTitle> @TAdejolu</NameTitle>
      <SlackID> U048B97TPD1 </SlackID>
    </ProfileSectionStyle>
    
  );
};

export default ProfileSection;
