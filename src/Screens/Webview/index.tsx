import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import WebView from 'react-native-webview';

const WebViewScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://0ea4-211-245-120-76.jp.ngrok.io/ads/live/landing',
      }}
      mediaPlaybackRequiresUserAction
      allowsBackForwardNavigationGestures
      renderLoading={Loading}
      bounces={false}
    />
  );
};

export default WebViewScreen;

const Loading = () => (
  <View>
    <ActivityIndicator size={'large'} />
  </View>
);
