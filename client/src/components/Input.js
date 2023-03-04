import React, { useState, useEffect } from "react";




const InputForm = () => {

    const [countryData, setCountryData] = useState([{}])

    useEffect(() => {
        fetch("/api").then(
            res => res.json()
        ).then(
            data => {
            setCountryData(data)
            }
        )
    }, [])


    return (
        <div>
           {(typeof countryData.countries === 'undefined') ? (
            <p>Loading...</p>
           ): (
            countryData.countries.map((countries, i) =>(
                <p key={i}> {countries.name}, {countries.carbon}</p>

                
            ))
           )}
        </div>

        

        // <div>
        //     {countryData.countries.countries}
        // </div>
    )



}

export default InputForm

