import {useState, useEffect} from 'react';
import {Animated, TouchableHighlight, StyleSheet, View} from 'react-native';

interface Props {
  topView: JSX.Element;
  expandView: JSX.Element;
}

export const ExpandableView = ({topView, expandView}: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [marginTop] = useState(new Animated.Value(0));

  useEffect(() => {
    Animated.timing(marginTop, {
      toValue: isExpanded ? 0 : -101,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [isExpanded, marginTop]);

  return (
    <View style={styles.wrapper}>
      <TouchableHighlight
        onPress={() => {
          setIsExpanded(!isExpanded);
        }}
        style={styles.touchableContainer}>
        <View style={styles.animalCard}>{topView}</View>
      </TouchableHighlight>
      <Animated.View style={[{marginTop}, styles.expandView]}>
        {expandView}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  animalCard: {
    width: '100%',
    backgroundColor: '#FAEDCD',
    borderColor: '#D4A373',
    borderRadius: 10,
    borderWidth: 3,
    padding: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  touchableContainer: {
    borderRadius: 10,
    width: '100%',
    zIndex: 1,
  },
  expandView: {
    justifyContent: 'space-evenly',
    height: 100,
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#FAEDCD',
    padding: 5,
    borderBottomColor: '#D4A373',
    borderLeftColor: '#D4A373',
    borderRightColor: '#D4A373',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderBottomWidth: 3,
    borderLeftWidth: 3,
    borderRightWidth: 3,
  },
  wrapper: {
    width: '90%',
    justifyContent: 'center',
    alignContent: 'center',
    alignSelf: 'center',
    marginVertical: 5,
  },
});
