import React, { useState } from "react";
import './App.css'
import Nmap from './NaverMap.js'

function Table({ table_data }) {

    let [mapOn,setmapOn]= useState(0);
    let [lat, setlat] = useState(0);
    let [lng, setlng] = useState(0);
    
    return (
        <>
        {
            //이거 맵 다시뜨게 해서 지도 초기위치도 바꿔주고 싶은데 어케해야할지 모르겠어요 파이팅!
            mapOn == 1 
            ? <Nmap lat={lat} lng={lng}/>
            : null
        }
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
                    <tr key={index}>
                        <td onClick ={()=> {setmapOn(1); setlat(document.lat); setlng(document.lng);}}>{document.name}</td>
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