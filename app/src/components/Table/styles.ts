import styled from "styled-components";

export const TableRow = styled.tr`
  margin: 16px;
  padding: 16px;
`;
export const HeadingRow = styled.tr`
  display: flex;
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
  justify-content: space-around;
  display: flex;
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

export const Image = styled.img`
  width: 80px;
  height: 80px;
`;
