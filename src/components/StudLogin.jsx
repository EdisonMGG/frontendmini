import axios from 'axios'
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import './StudLogin.css' // Add this line for external CSS

const StudLogin = () => {

    let navigate = useNavigate()
    const [data, setData] = useState({
        "student_username": "",
        "student_password": ""
    })

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value })
    }

    const readValue = () => {
        axios.post("http://localhost:8080/studlogin", data)
            .then(
                (response) => {
                    if (response.data.status === "success") {
                        navigate("/studaddleave")
                    } else {
                        if (response.data.status === "User Not Found") {
                            alert("Username Does Not Exist")
                        } else {
                            alert("Incorrect Password")
                        }
                    }
                }
            ).catch(
                (error) => {
                    alert(error.message)
                }
            )
    }

    return (
        <div className="login-container">
            <div className="alert alert-primary" role="alert">
                <center><h3><b>STUDENT LOGIN</b></h3></center>
            </div>
            <div className="card login-card w-50 mx-auto text-bg-light">
                <div className="card-body">
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Enter your Email</label>
                        <input type="text" className="form-control" name='student_username' value={data.student_username} onChange={inputHandler} placeholder="Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="" className="form-label">Enter your Password</label>
                        <input type="password" name="student_password" className="form-control" value={data.student_password} onChange={inputHandler} placeholder="Password" />
                    </div>
                    <div className="form-group text-center">
                        <button className="btn btn-success login-btn" onClick={readValue}>Login</button>
                        <br /><br />
                        <Link to="/" className="back-link">Back to Home Page</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default StudLogin
