import styled from "styled-components";

export const Avatar = styled.div`
  #mainImg {
    /* Auto layout */

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    width: 88px;
    height: 88px;

    background: url(.jpg);
    border-radius: 275px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    z-index: 0;
  }
`;

export const NameTitle = styled.div`
  /* Text xl/Bold */

  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 30px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/900 */

  color: #101828;

  /* Inside auto layout */
`;

export const ProfileSectionStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 24px;
  isolation: isolate;

  width: 100%;
  height: 142px;

  /* Inside auto layout */
`;

export const ShareButton = styled.button`
  border: 2px dotted lightgray;
  background-color: transparent;
  border-radius: 100%;
  height: 40px;
  width: 40px;
  position: absolute;
  right: 20%;
  /* left: 0; */
  top: 3rem;
  cursor: pointer;

  @media (max-width: 768px) {
    right: 10%;
  }
`;
