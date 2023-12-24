# react-native-find-image-color

This plugin detects most used color in an image

## SIGNIFICANT NOTE

- This package depends on `react-native-webview` plugin and if you have already installed `react-native-webview` in your project make sure you have the same versions otherwise you'll get an error. If you faced an error fork this repository and update `react-native-webview` version.

- Current Version is: **^13.3.0"** (24 December 2023)

### Example

```
"dependencies" : {
  Your repo url with updated react-native-webview version
  "react-native-find-image-color" : "git://github.com/user/project.git",
  ...

```

## Installation 

`yarn add react-native-find-image-color`  or  `npm i react-native-find-image-color`

## Usage

```
import ColorWebview from 'react-native-find-image-color'
<ColorWebview
    base64={route.params.base64}
    onGenerate={color => {
        console.log(color)
    }}
/>
```

## Why only base64 image

- You can get cors error because of some cdn configurations (IE. Amazon S3 Links) but if you convert the links to base64 you can get the colors.

 - ### Example Base64 Convert

 ```
    let imagePath: string = ''
    const resp = await RNFetchBlob.config({
      fileCache: true,
    }).fetch('GET', url)
    imagePath = resp.path()
    const base64 = await resp.readFile('base64')
    fs.unlink(imagePath)
 ```

## Note

- If you try webview with `react-native-view-shot` you'll need to remove webview from dom before the shot.


## Contributing

See the [contributing guide](CONTRIBUTING.md) to learn how to contribute to the repository and the development workflow.

## License

MIT

---

Made with [create-react-native-library](https://github.com/callstack/react-native-builder-bob)
