import { CameraView, useCameraPermissions } from 'expo-camera';
import { StatusBar } from 'expo-status-bar';
import { memo, useCallback, useMemo, useState } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface UnitButtonProps {
  type: 'add' | 'minus';
  onPress: () => void;
}

const TYPE_MAPS: {
  [key in UnitButtonProps['type']]: string
} = {
  'add': '+',
  'minus': '-'
}

const UnitButton = memo(({ type, onPress }: UnitButtonProps) => {
  const showType = useMemo(() => TYPE_MAPS[type], [type]);

  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.buttonText}>{showType}</Text>
    </TouchableOpacity>
  );
});

const CameraScreen = memo(() => {
  const [facing, setFacing] = useState<'front' | 'back'>('back');
  const [permission, requestPermission] = useCameraPermissions();

  if (!permission) {
    return <View style={cameraStyles.centerContainer}><Text>请求权限中...</Text></View>;
  }

  if (!permission.granted) {
    return (
      <View style={cameraStyles.centerContainer}>
        <Text style={cameraStyles.permissionText}>需要相机权限才能使用此功能</Text>
        <Button title="授权相机" onPress={requestPermission} />
      </View>
    );
  }

  function toggleCameraFacing() {
    setFacing(current => (current === 'back' ? 'front' : 'back'));
  }

  return (
    <View style={cameraStyles.container}>
      <CameraView 
        style={cameraStyles.camera} 
        facing={facing}
      >
        <View style={cameraStyles.buttonContainer}>
          <TouchableOpacity style={cameraStyles.flipButton} onPress={toggleCameraFacing}>
            <Text style={cameraStyles.text}>翻转相机</Text>
          </TouchableOpacity>
        </View>
      </CameraView>
    </View>
  );
});

export default function App() {
  const [count, setCount] = useState<number>(0);

  const onAdd = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);

  const onMinus = useCallback(() => {
    setCount(prevCount => prevCount - 1);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>计数器应用</Text>
      
      <Text style={styles.numText}>当前数值: {count}</Text>

      <View style={styles.row}>
        <UnitButton type={'minus'} onPress={onMinus} />
        <UnitButton type={'add'} onPress={onAdd} />
      </View>

      <View style={styles.cameraSection}>
        <Text style={styles.sectionTitle}>相机预览</Text>
        <CameraScreen />
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    alignItems: 'center',
    paddingTop: 50,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  numText: {
    fontSize: 32,
    fontWeight: '600',
    color: 'orange',
    marginBottom: 30,
  },
  row: {
    flexDirection: 'row',
    gap: 30,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    width: 60,
    height: 60,
    borderRadius: 32,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3, // Android阴影
    shadowColor: '#000', // iOS阴影
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonText: {
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
  },
  cameraSection: {
    width: '100%',
    alignItems: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#666',
  },
});

const cameraStyles = StyleSheet.create({
  centerContainer: {
    width: 300,
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 10,
  },
  permissionText: {
    textAlign: 'center',
    marginBottom: 20,
    color: '#666',
    paddingHorizontal: 20,
  },
  container: {
    width: 300,
    height: 300,
    overflow: 'hidden',
    borderRadius: 15,
    marginVertical: 10,
  },
  camera: {
    flex: 1,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    right: 0,
    alignItems: 'center',
  },
  flipButton: {
    padding: 15,
    backgroundColor: 'rgba(0,0,0,0.5)',
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});