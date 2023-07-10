import React from 'react';
import './style.css';
import MedSyLogo from './MedSy.png';

const App = () => {
  return (
    <>

          <section className="chat__section">
            <div className="brand">
              <img height="40" src={MedSyLogo} alt="" />
              <h1>Chat</h1>
            </div>
            <div className="message__area"></div>
            <div>
              <textarea id="textarea" cols="1" rows="1" placeholder="Write a message..."></textarea>
            </div>
          </section>
          {/* <script src="/socket.io/socket.io.js"></script>
          <script src="/client.js"></script> */}
    </>
  );
};

export default App;
