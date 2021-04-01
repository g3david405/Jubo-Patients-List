import { createGlobalStyle } from 'styled-components';

const GlobalIcon = createGlobalStyle`
@font-face {font-family: "iconfont";
  src: url('./iconfont.eot?t=1617204118559'); /* IE9 */
  src: url('./iconfont.eot?t=1617204118559#iefix') format('embedded-opentype'), /* IE6-IE8 */
  url('data:application/x-font-woff2;charset=utf-8;base64,d09GMgABAAAAAAL0AAsAAAAABrAAAAKlAAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHEIGVgCCcAqBPIFHATYCJAMICwYABCAFhG0HMBvtBciemjwpCmYDigXwD2AbiCGCYr/f3rOvklCLJJMsmmiWGBolQ2ykQvZQ7X/X9He5lt2I8mYLAwkIrpgrcC5jdoSeUAHazREItck56t6Fh+cNqM3Nz4jDaRMokPnnXS5zTJrUBRgHUqB7YJusQALwhrELXuB5AlVjNEQH+aW1IJOxpwXi3m41gqwQlMlYpiwUDWsziGfIlZOxgBsAT9H34xuSQgYSeQp2zfFdngUy31RODur9x1VAgBABbc6RYgXIiPPG5CEkGA2pJjlT4FiVwZvq/z8wi6P+eaIAu7wORqDwmUSe+FE5E5AxmDXgctIhpHVVnPP+vu7urvbhof7xsSHm5/mQBx/YWC+aDQmZVSjGg4Kmg2qnl9eOQjNgYW1iI1KUNqOc2Fn9dxJdX6NJhxfw/aYs14b7GcE8zMcyBO0cLnt0tLFbgNprY6VULDVhU22n8Ce973co8bH6WPw2+xkYciGFHYD/C+SoM//obzz8dB3ql/pdjgN4HT+cjfz/FxwMc4PyeV3B/xMN7MgMiW1KMk3UmE2sQfdVV1XFP2Bv18dU7eBm7aFcEDEkSkaRKpshZtQV5GpWUSjbRtWygs01PRQSmRxYMgQQ2naQaHpBqu2WmFHfkRv6QqEdCFWXEbhnzVzYFTmUGBmxYFMbtpu9Ht61MEVcWU2sTS4jzUsiej2hgj2CE3UJ5UwB8RC6xAKh2ZrEGI956nXjfHAZcbm82Ee9DmJmOhtjvuT4eL7pTTqz1w0K+yjCiCEsMJM2mJ2Zlwcf9GYUlc9XI6yauBjRjrY6dz2CEtiHxxLpJAwgFig9g9oe5RpBM6skDMPDeJSXG5YP7ITLSXphvuZRDoQZo2ObEPdJFo+68UOVuu3V7r/bB1W2LgknD0Hx6LM8tAEAAAAA') format('woff2'),
  url('./iconfont.woff?t=1617204118559') format('woff'),
  url('./iconfont.ttf?t=1617204118559') format('truetype'), /* chrome, firefox, opera, Safari, Android, iOS 4.2+ */
  url('./iconfont.svg?t=1617204118559#iconfont') format('svg'); /* iOS 4.1- */
}
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.iconfontUpdate {
  font-family: "iconfont" !important;
  font-size: 16px;
  color:red;
  float:right;
  cursor:pointer;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfontThumb {
  font-family: "iconfont" !important;
  font-size: 25px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor:pointer;
}

.iconfontFirst {
  font-family: "iconfont" !important;
  font-size: 24px;
  font-style: normal;
  position:relative;
  z-index:100;
  left:115px;
  top:58px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfontSecond {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  position:relative;
  z-index:100;
  left:92px;
  top:127px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfontThird {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  position:relative;
  z-index:100;
  left:69px;
  top:197px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfontUser {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  color:#EC6149;
  float:left;
  margin-right:14px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfontUserPage{
  font-family: "iconfont" !important;
  font-size: 22px;
  margin-right:10px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;  
  
}

.iconfontDelete {
  font-family: "iconfont" !important;
  font-size: 22px;
  font-style: normal;
  color:#ec6149;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.iconfontComment{
  font-family: "iconfont" !important;
  font-size: 22px;
  font-weight:700;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  cursor:pointer;
}




.iconspin:before {
  content: "\\e851";
}

.iconsearch:before {
  content: "\\e854";
}

.iconpencil:before {
  content: "\\e655";
}

.iconAa:before {
  content: "\\e636";
}
`
export default GlobalIcon;
