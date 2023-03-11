import React from 'react'




const Tag = (props) => {

    // let country = props.country
    // let carbon = props.carbon

    console.log(props)
    

    if (props.country === undefined) {
        return <p>Select a country</p>
    } else {
        return (
            <div>
                The average person in {props.country} produces {props.carbon} kilograms of CO2 per year
            </div>
        )
    }


    


    
}

export default Tag