import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {useQuery} from 'react-query';

const fetchData = () => {
  return fetch(
    'https://getcha-api-v7-prod.getcha.io/v7/community?page_per_count=30&page=2&type=11,12,13,26,27,28,29,30,32',
  )
    .then(res => res.json())
    .catch(err => {
      throw new Error(err);
    });
};

const Second = () => {
  const {data, isError, isLoading} = useQuery('second', fetchData);

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

export default Second;
