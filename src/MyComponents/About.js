import React from 'react'

export const About = () => {
    let myStyle = {
        minHeight: "70vh",
        margin: "40px auto"
    }
    return (
        <div className="container" style={myStyle}>
            <h3 className="my-3">Little bit about us</h3> 
            <p className="my-3">This is best application in market to store your personalnotes to stay ahead on your leraning</p>
        </div>
    )
}
