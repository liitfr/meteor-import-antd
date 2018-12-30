# meteor-import-antd

A workaround for whom wants to use antd with meteor.

## Why ?

please refer to this `meteor/babel` [issue](https://github.com/meteor/babel/issues/13)

The purpose of this package is to free you of double imports per component (the component by itself plus its style). By using it, you'll just need one import.

## How to use it ?

```
import Skeleton from 'meteor-import-antd/Skeleton';
```
instead of recommanded :
```
import 'antd/lib/skeleton/style/index.css';
import Skeleton from 'antd/lib/skeleton';
```

By the way, you'll also have to import global styles by yourself on a top level component, or in a `GlobalStyle` if you use `styled-component` :

```
import { createGlobalStyle } from 'styled-components';
import antdReset from 'antd/lib/style/v2-compatible-reset.css';
import antdStyle from 'antd/lib/style/index.css';

const GlobalStyle = createGlobalStyle`
  ${antdStyle}
  ${antdReset}
`;

export default GlobalStyle;

```
