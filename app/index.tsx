import { StyleSheet, SafeAreaView } from 'react-native';
import { Stack } from 'expo-router';

import Loading from '../components/Loading/Loading';
import Filter from '../components/Filter/Filter';
import NewsList from '../components/NewsList/NewsList';
import SearchInput from '../components/SearchInput/SearchInput';
import ErrorComponent from '../components/ErrorComponent/ErrorComponent';

import { useFetch } from '../hooks/useFetch';

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
});

const Home = () => {
  const { data, error, loading, setParams } = useFetch();
  return (
    <SafeAreaView style={styles.container}>
      <Stack.Screen
        options={{
          headerTitle: 'News App',
        }}
      />
      <SearchInput setParams={setParams} />
      <Filter setParams={setParams} />
      {(loading && <Loading />) ||
        (data && <NewsList data={data.articles} />) ||
        (error && <ErrorComponent />)}
    </SafeAreaView>
  );
};

export default Home;
