import styled from "styled-components";

export const Avatar = styled.div`
  #mainImg {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;
    width: 88px;
    height: 88px;
    background: url(.jpg);
    border-radius: 275px;
    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
  }
`;

export const NameTitle = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  color: black;
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
 
`;

export const ProfileSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  isolation: isolate;
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  width: 100%;
  height: 142px;

`;

export const ShareButton = styled.button`
  border: 2px dotted lightgray;
  background-color: transparent;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  position: absolute;
  right: 20%;
  top: 3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 10%;
  }
`;

export const SlackID = styled.div`
font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 30px;
  text-align: center;
  display: none;
  color: black;
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
 
`