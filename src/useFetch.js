import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController(); //used to stop a fetch request when the fetching controller page is unmounted

        fetch(url, { signal: abortCont.signal }) // returns a promise
            .then(res => { // res is a response object that we get from the fetch api
                if (!res.ok) { // useful in cases when the api responses with an error, suppose the api end is dead
                    throw Error('could not fetch the data for that resource');
                }
                return res.json(); //res.json returns another promise
            })
            .then(data => { //data is now the actual data that we get from the fetch request
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                }
                else {
                    setIsPending(false);
                    setError(err.message);
                }
            })

        return () => abortCont.abort();
    }, [url]); // [url] denotes when when url is changed statements in useEffect is excuted 

    return { data, isPending, error }
}

export default useFetch;