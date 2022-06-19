import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';
import {fetchData} from './fetch';

const Fourth = () => {
  const {data, isError, isLoading} = useQuery('fourth', () => fetchData(4));

  if (isError || isLoading) {
    return (
      <View>
        <Text>뭔가 잘못됨</Text>
      </View>
    );
  }

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={data.data.list.infos}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              flexDirection: 'row',
              height: 52,
              alignItems: 'center',
              marginLeft: 20,
            }}>
            <Text>{`${item.id_contents} : ${item.title}`}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Fourth;
