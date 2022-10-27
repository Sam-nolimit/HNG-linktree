import styled from "styled-components";

export const SocialSectionStyle = styled.div`
  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 24px 0px;
  gap: 24px;

  width: 100%;
  height: 24px;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
  @media only screen and (max-width: 600px) {
    display: none;
  }
`;


