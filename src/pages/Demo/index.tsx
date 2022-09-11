import React from 'react';
import { getString } from 'firebase/remote-config';
import { Paper } from '~/components';
import { firebaseRemoteConfig } from '~/services';

const Demo: React.FC = () => {
  const remoteConfigValueTest = getString(
    firebaseRemoteConfig,
    'remoteConfigTest' as FirebaseRemoteConfigKeys,
  );
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
        <h1>{remoteConfigValueTest}</h1>
      </Paper>
    </div>
  );
};

export default Demo;
