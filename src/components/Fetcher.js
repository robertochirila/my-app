import React, { useEffect } from "react"


const Fetcher = () => {

    let getToken = () => {
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            },
            grant_type: "password&username=adrian+1004930927@nexudus.compassword=iFMF5dr7Vz41"
        };

        fetch('https://cors-anywhere.herokuapp.com/https://spaces.nexudus.com/api/token', options)
            .then(response => response.json())
            .then(response => console.log(response))
            .catch(err => console.error(err));
    }

    useEffect(() => {
        getToken()
    }, [])
    return <>
        <p>Hello</p>
    </>
}

export default Fetcher;