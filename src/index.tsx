import React, { type FC } from 'react';
import { StyleSheet, View } from 'react-native';
import WebView from 'react-native-webview';

const ReactNativeImageColorPick: FC<{
  base64: string;
  onGenerate: (hex: string) => void;
}> = ({ base64, onGenerate }) => {
  const script = `
    <script>
      function get_average_rgb(img) {
        var context = document.createElement('canvas').getContext('2d');
        var src = img;
        img = new Image;
        img.setAttribute('crossOrigin', '');
        img.src =  "data:image/png;base64," + src;
        img.onload = function () {
          context.imageSmoothingEnabled = true;
          context.drawImage(img, 0, 0, 1, 1);
          const i = context.getImageData(0, 0, 1, 1).data;
          const rgba = "rgba(" + i[0] + ',' + i[1] + ',' + [2] + ")"
          console.log(rgba)
          const HEX = "#" + ((1 << 24) + (i[0] << 16) + (i[1] << 8) + i[2]).toString(16).slice(1);
          window.ReactNativeWebView.postMessage(HEX);
        }
      }
      get_average_rgb('${base64}')
    </script>
    `;

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      top: 0,
      height: 0,
      backgroundColor: 'green',
    },
  });

  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: script }}
        javaScriptEnabled={true}
        onMessage={(event) => {
          if (!event.nativeEvent?.data) {
            return;
          }
          onGenerate(event.nativeEvent.data);
        }}
      />
    </View>
  );
};

export default ReactNativeImageColorPick;
