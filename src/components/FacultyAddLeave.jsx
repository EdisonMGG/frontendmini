import axios from 'axios';
import React, { useState } from 'react';

const FacultyAddLeave = () => {
    const [data, setData] = useState({
        name: "",
        IdNo: "",
        Sdate: "",
        Edate: "",
        Tdate: "",
        reasonforleave: "",
        file: null // Add file field
    });

    const inputHandler = (event) => {
        setData({ ...data, [event.target.name]: event.target.value });
    };

    const fileHandler = (event) => {
        setData({ ...data, file: event.target.files[0] });
    };

    const readValue = () => {
        const formData = new FormData(); // Create form data to send with the file
        formData.append("name", data.name);
        formData.append("IdNo", data.IdNo);
        formData.append("Sdate", data.Sdate);
        formData.append("Edate", data.Edate);
        formData.append("Tdate", data.Tdate);
        formData.append("reasonforleave", data.reasonforleave);
        formData.append("file", data.file); // Append file to the form data

        axios.post("http://localhost:8080/facultyaddleave", formData, {
            headers: {
                'Content-Type': 'multipart/form-data' // Set header for file upload
            }
        }).then((response) => {
            console.log(response.data);
            if (response.data.status === "success") {
                alert("Leave added successfully");
            } else {
                alert("Failed to add leave");
            }
        }).catch((error) => {
            console.error("Error adding leave:", error);
        });
    };

    return (
        <div>
            <div className="alert alert-primary" role="alert">
                <center><b><h3>FILL YOUR LEAVE FORM</h3></b></center>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-4">
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Enter Your Name</label>
                                <input type="text" className="form-control" name="name" value={data.name} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Enter Your ID Number</label>
                                <input type="text" className="form-control" name="IdNo" value={data.IdNo} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Enter the Starting Date Of Your Leave</label>
                                <input type="date" className="form-control" name="Sdate" value={data.Sdate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Enter the Ending Date Of Your Leave</label>
                                <input type="date" className="form-control" name="Edate" value={data.Edate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Today's Date</label>
                                <input type="date" className="form-control" name="Tdate" value={data.Tdate} onChange={inputHandler} />
                            </div>
                            <div className="col col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Reason For Your Leave</label>
                                <textarea name="reasonforleave" value={data.reasonforleave} onChange={inputHandler} className="form-control"></textarea>
                            </div>
                            <div className="col col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                <label className="form-label">Upload Supporting Document</label>
                                <input type="file" className="form-control" name="file" onChange={fileHandler} />
                            </div>
                        </div>

                        {/* Center the button */}
                        <div className="row mt-4">
                            <div className="col d-flex justify-content-center">
                                <button className="btn btn-success" onClick={readValue}>ADD</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FacultyAddLeave;
