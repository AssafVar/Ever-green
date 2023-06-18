"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Circles } from "react-loader-spinner";
import styled from '@emotion/styled';

const WithAuth = ({ children }: { children: React.ReactNode }) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const router = useRouter();

    useEffect(() => {
        console.log('in auth')
        axios
            .get('/api/auth/isAuth')
            .then((response) => {
                console.log(response)
                if (response.status !== 200) {
                    router.push('/login');
                }
                setIsAuth(true);
                setLoading(false);
            })
            .catch((error) => {
                router.push('/login');
                console.log(error);
                setLoading(false);

            });
    }, []);

    if (loading) {
        return (
            <div>
                <SpinnerContainer>
                    <Circles />
                </SpinnerContainer>
            </div>
        )
    }
    if (isAuth) {
        return (<div>{children}</div>)
    }
};

export default WithAuth;
const SpinnerContainer = styled.div({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100vh",
});