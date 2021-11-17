import styled from "styled-components";

export const Error = styled.div`
  color: red;
`;

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

export const TableRow = styled.tr`
  margin: 16px;
  padding: 16px;
`;

export const TableData = styled.td`
  font-size: 16px;
  border: 1px solid #ddd;
  padding: 8px;
  min-width: 200px;
`;

export const Table = styled.table`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-collapse: collapse;
`;

export const TableHeading = styled.th`
  font-size: 16px;
  font-weight: 600;
  padding-top: 12px;
  padding-bottom: 12px;
  text-align: left;
  background-color: #04aa6d;
  color: white;
  border: 1px solid #ddd;
  padding: 8px;
  min-width: 200px;
`;
export const Input = styled.input`
  width: 100%;
  height: 40px;
  padding: 8px;
  font-size: 16px;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 600 px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
