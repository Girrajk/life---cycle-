import React from 'react'

function UserForm() {
    return (
        <div style={{ height: "100vh", margin: "0", padding: "0", fontFamily: "revert-layer", boxSizing: "border-box" }}>
            <form style={{ border: "2px groove black", display: "flex", justifyContent: "center", margin: "25px auto", height: "350px", width: "500px", flexDirection: "column", boxShadow: "0 0 7px black", borderRadius: "10px", backgroundColor: "aliceblue", gap: "5px", }}>
                <h1 style={{ textAlign: "center" }}>User Management Application</h1>
                <label style={{ fontWeight: "bold", marginLeft: "100px" }} form='name'>User Name:</label>
                <input style={{ height: "25px", borderRadius: "5px", width: "300px ", margin: "0px auto" }} id='name' placeholder='Enter User Name' required type='text' />
                <label style={{ fontWeight: "bold", marginLeft: "100px" }} form='email'>Email:</label>
                <input style={{ height: "25px", borderRadius: "5px", width: "300px", margin: "0px auto" }} id='email' placeholder='Enter Email' required type='email' />
                <label style={{ fontWeight: "bold", marginLeft: "100px" }} form='number'> Mobile Number:</label>
                <input style={{ height: "25px", borderRadius: "5px", width: "300px", margin: "0px auto" }} id='number' placeholder='Enter mobile Number' type='number' required />

                <button style={{ height: "30px", width: "300px", margin: "10px auto", backgroundColor: "black", color: "gold", fontWeight: "bold" }}>Add</button>

            </form>
        </div>
    )
}

export default UserForm