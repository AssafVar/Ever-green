import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const HeaderContainer = styled('header')({
    backgroundColor: '#F2F2F2',
    padding: '18px',
    borderRadius:'15px',
    marginInline: '20px'
});

export const HeaderTitle = styled(Typography)({
    color: '#333333',
    fontSize: '24px',
    fontWeight: 'bold',
});

export const MasonryContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', // Adjusted item size to 200px
    gap: '20px',
    justifyItems: 'center',
    marginTop: '10px',
    marginInline: 'auto',
    width: '80%',
  });