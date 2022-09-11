import React from 'react';
import { Paper } from '~/components';

const Demo: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Paper>
        <h1>heyyy</h1>
      </Paper>
    </div>
  );
};

export default Demo;
