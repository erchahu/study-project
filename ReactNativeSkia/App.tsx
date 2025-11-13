import { StatusBar, useColorScheme, View } from 'react-native';
import {
  SafeAreaProvider,
} from 'react-native-safe-area-context';
import { FirstSkia } from './main/study/day_1/FirstSkia';
import SmileFace from './main/study/day_1/SmileFace';
import React from 'react';
import Polygons from './main/study/day_2/Polygons';
import SmileFace1 from './main/study/day_2/SmileFace1';
import { HelloWorld } from './main/study/day_2/Text';
import { BottomNavigation } from 'react-native-paper';
import { PathGroup } from './main/study/day_3/PathGroup';
import { PathA } from './main/study/day_3/PathA';
import ShapesDemoList from './main/pages/ShapesDemoList';

const MusicRoute = () => (
  <>
    <FirstSkia />
    <View style={{ flex: 1, flexDirection: 'row' }}>
      <SmileFace />
      <SmileFace1 />
    </View>
    <Polygons />
    <HelloWorld />
  </>
);

const AlbumsRoute = () => (
  <>
    <PathGroup />
  </>
);

const RecentsRoute = () => <PathA />;

const NotificationsRoute = () => <ShapesDemoList />;

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'music', title: 'Favorites', focusedIcon: 'heart', unfocusedIcon: 'heart-outline'},
    { key: 'albums', title: 'Albums', focusedIcon: 'album' },
    { key: 'recents', title: 'Recents', focusedIcon: 'history' },
    { key: 'notifications', title: 'Notifications', focusedIcon: 'bell', unfocusedIcon: 'bell-outline' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    music: MusicRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
    notifications: NotificationsRoute,
  });

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <BottomNavigation
        navigationState={{ index, routes }}
        onIndexChange={setIndex}
        renderScene={renderScene}
      />
    </SafeAreaProvider>
  );
}

export default App;
