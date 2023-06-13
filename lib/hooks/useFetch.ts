import React, { useEffect, useState } from 'react';
import axios from 'axios';

const useFetch = (url: string, name: string) => {
    const [loading, setLoading] = useState<null | boolean>(null);
    const [data, setData] = useState<any | string>(null);
    const [error, setError] = useState<null | boolean>(null);

    useEffect(() => {
        setLoading(true);
        setError(null);
        setData(null);
        const value = 'test';
        axios.post(url, { name, value })
            .then((res) => {
                console.log(res);
                setLoading(false);
                setData(res.data);
            })
            .catch((err) => {
                setLoading(false);
                setError(err);
            });
    }, [url, name]);

    return { loading, error, data };
};

export default useFetch;
