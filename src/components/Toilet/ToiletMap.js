import React from 'react';


const ToiletMap = () => {
  return (
    <div className="toilet-container">
      <h5>화장실 지도(서울광장 주변)</h5>
      <img src="/images/toilet_map.png" role="presentation" />
      <h6 style={{ float: 'right' }}>출처: 박원순 서울시장 트위터</h6>
    </div>
  );
}

export default ToiletMap;