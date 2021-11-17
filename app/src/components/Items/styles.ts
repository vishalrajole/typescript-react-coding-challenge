import styled from "styled-components";

// TODO improve colors & consume from theme
export const Bullet = styled.div<{ status: string }>`
  display: inline-flex;
  border-radius: 5px;
  padding: 3px 5px;
  font-size: 14px;
  color: #fff;
  background: ${({ status }) => {
        switch (status) {
            case "new":
                return "blue";
            case "done":
                return "green";
            case "processing":
                return "orange";
            case "error":
                return "red";
            default:
                return "grey";
        }
    }};
`;

export const ImageWrapper = styled.div`
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  overflow: hidden;
  background: #e6e6e6;
  align-items: center;
  justify-content: center;
  color: #666;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
`;

export const Wrapper = styled.div`
  width: 60%;
  margin: 30px auto;
`;
