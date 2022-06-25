import React, {useEffect} from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {QueryClient, QueryClientProvider} from 'react-query';
import Router from './src/Router';
import {fileSystemTest} from './src/Utils/fs';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      cacheTime: 3000,
      retry: 3,
    },
  },
});

const App = () => {
  useEffect(() => {
    fileSystemTest();
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
    </QueryClientProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
});
