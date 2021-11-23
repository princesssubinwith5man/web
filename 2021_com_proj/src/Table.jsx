import React from "react";
import './App.css'

function Table({ table_data,setmapOn }) {

    return (
        <>
        <table className="restapi-table">
            <thead>
                <tr>
                    <th>name</th>
                    <th>address</th>
                    <th>like</th>
                    <th>telnum</th>
                </tr>
            </thead>
            <tbody>
                {table_data.map((document, index) => (
                    <tr key={index} onClick ={()=>setmapOn(1)}>
                        <td>{document.name}</td>
                        <td>{document.address}</td>
                        <td>{document.like}</td>
                        <td>{document.telnum}</td>
                    </tr>
                ))}
            </tbody>
        </table>
       
        
        </>
    );
}

export default Table;