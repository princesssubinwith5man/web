import React from 'react';
import { RenderAfterNavermapsLoaded, NaverMap, Marker } from 'react-naver-maps'; // 패키지 불러오기

function NaverMapAPI() {
    const navermaps = window.naver.maps;
    return (
        <NaverMap
            mapDivId={'maps-getting-started-uncontrolled'} // default: react-naver-map
            style={{
                width: '50%', // 네이버지도 가로 길이
                height: '50vh' // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
            defaultZoom={13} // 지도 초기 확대 배율
        >
            <Marker
                key={1}
                position={new navermaps.LatLng(37.551229, 126.988205)}
                animation={2}
                onClick={() => { alert('여기는 N서울타워입니다.'); }}
            />
        </NaverMap>
    );
}

function Nmap() {
    return (
        <RenderAfterNavermapsLoaded
            ncpClientId={'0zhygt90wc'} // 자신의 네이버 계정에서 발급받은 Client ID
            error={<p>Maps Load Error</p>}
            loading={<p>Maps Loading...</p>}
        >
            <NaverMapAPI />
        </RenderAfterNavermapsLoaded>
    );

}

export default Nmap;