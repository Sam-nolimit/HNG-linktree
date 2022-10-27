import avatar from "../Assets/Temitope_pic.jpeg";
import {
  Avatar,
  NameTitle,
  ProfileSectionStyle,
  
} from "./ProfileSectionStyle";
const ProfileSection = () => {
  return (
    <ProfileSectionStyle>
      <Avatar>
        <img src={avatar} id="mainImg" alt="Logo" />
      </Avatar>
      <NameTitle>Temitope Adejolu</NameTitle>
    </ProfileSectionStyle>
    
  );
};

export default ProfileSection;
