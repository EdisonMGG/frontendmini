import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Navbar from './Navbar';

const ViewFaculty = () => {
    const [data, changeData] = useState([]);

    const fetchData = () => {
        axios.get("http://localhost:8080/viewFaculty")
            .then((response) => {
                changeData(response.data);
            })
            .catch((error) => {
                console.error("Error fetching faculty data:", error);
            });
    };

    useEffect(() => { fetchData(); }, []);

    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">Name</th>
                                    <th scope="col">ID No</th>
                                    <th scope="col">Leave Started From</th>
                                    <th scope="col">Leave Ended In</th>
                                    <th scope="col">Date of Submission</th>
                                    <th scope="col">Reason For Leave</th>
                                    <th scope="col">File</th> {/* New column for file */}
                                </tr>
                            </thead>
                            <tbody>
                                {data.map((value, index) => (
                                    <tr key={index}>
                                        <th scope="row">{value.name}</th>
                                        <td>{value.IdNo}</td>
                                        <td>{value.Sdate}</td>
                                        <td>{value.Edate}</td>
                                        <td>{value.Tdate}</td>
                                        <td>{value.reasonforleave}</td>
                                        <td>
                                        {value.filepath ? (
                                                <a href={`http://localhost:8080/${value.filepath.replace(/\\/g, '/')}`} target="_blank" rel="noopener noreferrer">
                                                    View File
                                                </a>
                                            )  : (
                                                <span>No File</span> // Display if no file path
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewFaculty;
