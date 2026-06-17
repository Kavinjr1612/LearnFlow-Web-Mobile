import { CapacitorConfig } from '@capacitor/core';

const config: CapacitorConfig = {
  appId: 'com.learnflow.web',
  appName: 'LearnFlow',
  webDir: 'dist',
  server: {
    cleartext: true
  }
};

export default config;
