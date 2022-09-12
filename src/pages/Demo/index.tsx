/* eslint-disable react/button-has-type */
import React, { useEffect } from 'react';
import { Paper } from '~/components';
import { socket } from '~/services';

const Demo: React.FC = () => {
  const sendMessage = () => {
    socket.emit('SEND_MESSAGE', { message: 'Hey' });
  };

  useEffect(() => {
    socket.on('RECEIVE_MESSAGE', data => {
      alert(`hey: ${data.message}`);
    });
  }, []);

  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button onClick={sendMessage}>
        <Paper>
          <h1>heyyy</h1>
        </Paper>
      </button>
    </div>
  );
};

export default Demo;
