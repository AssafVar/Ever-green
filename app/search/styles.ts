import styled from "@emotion/styled";

export const FlexContainer = styled('div')({
    display: 'grid',
    gap: '16px',
    flexDirection: 'column',
    gridTemplateColumns: '1fr 4fr',
    '@media (max-width: 1200px)': {
        gridTemplateColumns: '1fr 9fr',
    },
    '@media (max-width: 650px)': {
        gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    marginBottom: '30px',
});

export const LeftSideBox = styled('div')({
    justifyContent: 'center',
    '@media (max-width:1200px)': {
        width: '300px',
    },
    '@media (max-width:650px)': {
        justifySelf: 'center',
    }
})