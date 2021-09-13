# React OJT Angular ベースコード

## 目次
- 概要
- コマンドラインでの実行方法
- VS Codeでの実行方法
- 稼働確認方法

## 概要
- 当ベースコードは、React スターターキットのコードをベースにしている

## コマンドラインでの実行方法
- 下記のコマンドを実行する
  ```
  > npm install
  .
  .
  .
  > npm start
  .
  .
  .
  Compiled with warnings.
  
 
  Search for the keywords to learn more about each warning.
  To ignore, add // eslint-disable-next-line to the line before

  ```

## VS Codeでの実行方法
- VS Codeを起動して、下図のようにファイルメニューから「ワークスペースにフォルダーを追加...」を選択して、GitCloneしたフォルダーをワークスペースに追加する
  ![フォルダ追加](doc_images/figure_vsAddFolder.png)
- フォルダを選択して、右クリックで表示されるメニューから「統合ターミナルで開く」を選択する
  ![ターミナルを開く](doc_images/figure_vsOpenTerminal.png)
- 下図のようにターミナルが開かれるので、既述の「コマンドラインでの実行方法」と同様に実行する
  ![ターミナル](doc_images/figure_vsTerminal.png)


## 稼働確認方法
- ブラウザを開いて http://localhost:4200/ に接続する
- 下図のような画面が表示される
  ![メイン画面](doc_images/figure_mainPage.png)
- 「Resetボタン」を押下すると、「Hello」の後ろの現時刻が更新される
- 自動再ロードに対応しているので、この状態でソースコードを修正すると、修正が即反映されるため、基本的に再起動の必要はない



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
