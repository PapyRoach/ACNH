import {
  View,
  ActivityIndicator,
  StyleSheet,
  ImageSourcePropType,
} from 'react-native';
import {Header} from '../../header/Header';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

type Props = {
  image: ImageSourcePropType;
  text: string;
};

export function LoadingPage({image, text}: Props) {
  const insets = useSafeAreaInsets();
  return (
    <View
      style={{
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
        flex: 1,
      }}>
      <Header headerImagePath={image} headerText={text} />
      <View style={styles.loaderPage}>
        <ActivityIndicator />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  loaderPage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
