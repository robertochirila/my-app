import React, { useEffect } from "react"


const Fetcher = () => {

    let getToken = () => {
        let email = encodeURIComponent('adrian+1004930927@nexudus.com')
        let password = "iFMF5dr7Vz41"
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                'Access-Control-Allow-Origin': '*'
            },
            body: "grant_type=password&username=" + email + "&password=" + password
        };
        fetch('https://cors-anywhere.herokuapp.com/https://spaces.nexudus.com/api/token', options)
            .then(response => response.json())
            .then(response => {
                if (response.access_token !== null && response.access_token !== undefined) {
                    getProducts(response.access_token)
                }
            }
            )
            .catch(err => console.error(err));
    }

    let getProducts = (access_token) => {
        console.log(access_token)
        const options = {
            method: 'GET',
            headers: {
                authorization: 'Bearer ' + access_token
            }
        };

        fetch('https://cors-anywhere.herokuapp.com/https://spaces.nexudus.com/api/billing/products?page=1&size=25', options)
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