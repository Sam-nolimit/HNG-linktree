import styled from "styled-components";

export const LinkCardStyle = styled.p`
  box-sizing: border-box;
  font-family: Inter,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 24px 32px;
  gap: 32px;
  width: 100%;
  height: 76px;
  background: #eaecf0;
  border: 1px solid #eaecf0;
  border-radius: 3px;
  font-weight: 450;
  flex: none;
  order: 0;
  flex-grow: 1;
`;

export const HoverEffectStyle = styled.div`
  p:hover {
    background: #d0d5dd;
  }
`;
