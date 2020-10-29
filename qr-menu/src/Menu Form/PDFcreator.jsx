import React from 'react';
import '../styles.scss';
import domtoimage from 'dom-to-image';
import axios from 'axios';
import QRCode from 'qrcode';

const PDFcreator = (props) => (
  <div>
    <button
      onClick={() => {
        let node = document.getElementById('menu');
        domtoimage
          .toPng(node)
          .then(function (dataUrl) {
            var img = new Image();
            img.src = dataUrl;
            document.body.appendChild(img);
            axios
              .post('/postImageForQr', {
                image: dataUrl,
              })
              .then((res) => {
                let url = res.data;
                QRCode.toDataURL(url, [], (err, url) => {
                  if (err) console.log(err);
                  var qrimg = new Image();
                  qrimg.src = url;
                  document.body.appendChild(qrimg);
                });
              });
          })
          .catch(function (error) {
            console.error('oops, something went wrong!', error);
          });
      }}
    >
      Convert To QR Code / Image
    </button>
    <div id='qrCode'></div>
  </div>
);

export default PDFcreator;
