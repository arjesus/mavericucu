import React from 'react';
import './whatsapp.css';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const Whatsapp = () => {
  return (
    <div className="whatsapp-container">
      <a className="icon insta" href="https://www.instagram.com/eva_minerva_es/">
        <InstagramIcon style={{ fontSize: '3rem', color: 'white' }} />
      </a>
      <a className="icon whatsapp" href="https://wa.me/34608960411">
        <WhatsAppIcon style={{ fontSize: '3rem', color: 'white' }} />
      </a>
    </div>
  );
};

export default Whatsapp;
