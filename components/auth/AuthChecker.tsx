"use client";

import axios from 'axios';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { Circles } from "react-loader-spinner";
import { SpinnerContainer } from './styles';

const WithAuth = ({ children }: { children: React.ReactNode }) => {

    const [loading, setLoading] = useState<boolean>(true)
    const [isAuth, setIsAuth] = useState<boolean>(false)
    const router = useRouter();

    useEffect(() => {
        axios
            .get('/api/auth/isAuth')
            .then((response) => {
                if (response.status !== 200) {
                    router.push('/login');
                }
                setIsAuth(true);
                setLoading(false);
            })
            .catch((error) => {
                router.push('/login');
                setLoading(false);

            });
    }, []);
    if (isAuth) {
        return (<div>{children}</div>)
    }
    if (loading) {
        return (
            <div>
                <SpinnerContainer>
                    <Circles />
                </SpinnerContainer>
            </div>
        )
    }else{
        return <div>Something went wrong</div>
    }

};

export default WithAuth;
