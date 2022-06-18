import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Animated, {
  Easing,
  FadeIn,
  FadeOut,
  Keyframe,
  Layout,
} from 'react-native-reanimated';

const LIST_ITEM_COLOR = '#1798DE';

interface Item {
  id: number;
}

const LayoutAnimation = () => {
  const initialMode = useRef<boolean>(true);

  const enteringAnimation = new Keyframe({
    0: {
      transform: [{scale: 1.1}],
    },
    30: {
      transform: [{scale: 1}],
    },
    60: {
      transform: [{scale: 1.2}],
    },
    100: {
      transform: [{scale: 1}],
      easing: Easing.quad,
    },
  }).duration(2000);

  useEffect(() => {
    initialMode.current = false;
  }, []);

  const [items, setItems] = useState<Item[]>(
    new Array(5).fill(0).map((_, index) => ({id: index})),
  );

  const onAdd = useCallback(() => {
    setItems(currentItems => {
      const nextItemId = (currentItems[currentItems.length - 1]?.id ?? 0) + 1;
      return [...currentItems, {id: nextItemId}];
    });
  }, []);

  const onDelete = useCallback((itemId: number) => {
    setItems(currentItems => {
      return currentItems.filter(item => item.id !== itemId);
    });
  }, []);

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.floatingButton} onPress={onAdd}>
        <Text style={{color: 'white', fontSize: 40}}>+</Text>
      </TouchableOpacity>
      <ScrollView
        style={{flex: 1}}
        contentContainerStyle={{paddingVertical: 50}}>
        {items.map((item, index) => {
          return (
            <Animated.View
              key={item.id}
              entering={
                initialMode.current ? FadeIn.delay(200 * index) : FadeIn
              }
              exiting={enteringAnimation}
              layout={Layout.delay(100)}
              onTouchEnd={() => onDelete(item.id)}
              style={styles.listItem}>
              <Text style={styles.font}>{item.id}</Text>
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default LayoutAnimation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listItem: {
    height: 60,
    backgroundColor: LIST_ITEM_COLOR,
    width: '90%',
    marginVertical: 10,
    borderRadius: 20,
    alignSelf: 'center',
    // Shadow on Android
    elevation: 5,
    // Shadow on iOS
    shadowColor: 'black',
    shadowOpacity: 0.15,
    shadowOffset: {width: 0, height: 10},
    shadowRadius: 20,

    justifyContent: 'center',
  },
  floatingButton: {
    width: 50,
    aspectRatio: 1,
    backgroundColor: 'black',
    borderRadius: 40,
    position: 'absolute',
    bottom: 50,
    right: '5%',
    zIndex: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  font: {
    color: 'white',
    fontSize: 20,
    marginLeft: 20,
  },
});
