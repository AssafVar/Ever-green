import styled from "@emotion/styled";
import { Typography } from "@mui/material";

export const HeaderContainer = styled('header')({
    backgroundColor: '#F2F2F2',
    padding: '20px',
});

export const HeaderTitle = styled(Typography)({
    color: '#333333',
    fontSize: '24px',
    fontWeight: 'bold',
});

export const MasonryContainer = styled('div')({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '20px',
    justifyItems: 'center',
    marginTop: '10px',
    marginInline: "auto",
    width: '80%',
});