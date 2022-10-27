import styled from "styled-components";
export const FooterWrapper = styled.div`
  padding: 50px 8%;
`;
export const FooterStyle = styled.div`
  box-sizing: border-box;

  /* Auto layout */

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* gap: 32px; */

  width: 100%;
  height: 64px;

  /* Gray/200 */

  border-top: 1px solid #eaecf0;
  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 0;

  @media only screen and (max-width: 600px) {
    display: none;
  }
`;

export const FooterText = styled.span`
  /* Text md/Normal */

  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 24px;
  /* identical to box height, or 150% */

  text-align: center;

  /* Gray/500 */

  color: #667085;

  /* Inside auto layout */
`;
