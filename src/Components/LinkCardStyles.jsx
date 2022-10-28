import styled from "styled-components";

export const LinkCardStyle = styled.p`
  box-sizing: border-box;

  /* Auto layout */
  /* border: 8px solid red; */
 font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 8px;

  width: 100%;
  height: 76px;

  /* Gray/200 */

  background: #eaecf0;
  /* Gray/200 */

  border: 1px solid #eaecf0;
  border-radius: 8px;
  font-weight: 600;

  /* Inside auto layout */

  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const HoverEffectStyle = styled.div`
  p:hover {
    background: #d0d5dd;
  }
`;
