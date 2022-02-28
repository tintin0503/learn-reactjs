import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from './components/AlbumList';

AlbumFeature.propTypes = {};

function AlbumFeature(props) {
   const albumList = [
     {
        id: 1,
        name: "Nhạc trẻ gây nghiện",
        url: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/f/0/5/c/f05c599832086a0a60f1105db362619f.jpg"
      },
     {
        id: 2,
        name: "Anime now",
        url: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/c/2/2/2/c22248eb1f0a214fbc78b42709427947.jpg"
      },
     {
        id: 3,
        name: "Collab & Chill",
        url: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/3/c/0/5/3c05212cdf8e866f312b762dc3ccb3e3.jpg"
      },
     {
        id: 4,
        name: "K-Pop Hits",
        url: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/1/c/d/0/1cd00ca3ff8f03401a4d5efa8c13d549.jpg"
      },
     {
        id: 5,
        name: "Nhạc trẻ gây nghiện",
        url: "https://photo-playlist-zmp3.zadn.vn/s1/user-playlist?src=HavwqN7EvKCI1og5AfZbHm1SUjXecELP1qHzs6xEiba0HopHQ9-mKW8IUzffdUnJ14PnXccSW0S2JXwEQvs53mjOGSyraSDT01C3XctQbnHNNa_1VCREGWeRJy5baOH82KmPd6B2XXmDJH-KP9275bn3If4odOKMN4uR-JIMZNXSJ1JxCvAK8HeU6BrXcTzZKq5JwIZ9aYyKK4-mV9JJBnHD6ValmuH_JXmVgIR3YIbD7aIlSfUBBnWQ5Vibn8bo8nuKzKx2Z7ml7XJY78NTS6bC7wbUp8CxFGLC_GMQWpylNXgWHPg38of95QT7bjeWBHn3faN1r78i6HZqJSlNSt4NGVPBch1t9a4g_a-UiNaZMtMvPo9z&size=thumb/240_240"
     }
   ]
   
    return (
        <div>
          <h2>Đây là list Album từ Zing MP3</h2>
          <AlbumList albumList={albumList} />
        </div>
    );
}

export default AlbumFeature;