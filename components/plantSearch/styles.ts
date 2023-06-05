import styled from "@emotion/styled";
import { ListItemIcon, MenuItem, Typography } from "@mui/material";

export const NoSearchesText = styled(Typography)`
margin-top: 10px;
`;
export const SearchItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
  padding: 10px;
  background-color: #f8f8f8;
  border-radius: 8px;
  &:hover {
    background-color: #eaeaea;
  }
`;

export const SearchText = styled(Typography)`
  flex: 1;
  margin-right: 10px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 16px;
  cursor: pointer;
`;

export const DateText = styled(Typography)`
  font-size: 12px;
  color: #888888;
`;

export const StyledMenuItem = styled(MenuItem)`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const OptionText = styled(Typography)`
  font-size: 14px;
`;

export const RedListItemIcon = styled(ListItemIcon)`
  color: red;
`;