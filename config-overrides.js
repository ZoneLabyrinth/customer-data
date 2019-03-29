const path = require('path')
const postcssAspectRatioMini = require('postcss-aspect-ratio-mini');
const postcssPxToViewport = require('postcss-px-to-viewport');
const postcssWriteSvg = require('postcss-write-svg');
const postcssCssnext = require('postcss-cssnext');
const postcssViewportUnits = require('postcss-viewport-units');
const cssnano = require('cssnano');

const fs = require('fs');

function getLessVariables(file) {
    var themeContent = fs.readFileSync(file, 'utf-8')
    var variables = {}
    themeContent.split('\n').forEach(function(item) {
        //只要每一行有‘//’注释符号，此行会被忽略，建议所有样式注释单列一行
        if (item.indexOf('//') > -1 || item.indexOf('/*') > -1) {
            return
        }
        var _pair = item.split(':')
        if (_pair.length < 2) return;
        var key = _pair[0].replace('\r', '').replace('@', '')
        if (!key) return;
        var value = _pair[1].replace(';', '').replace('\r', '').replace(/^\s+|\s+$/g, '')
        variables[key] = value
    })
    return variables
}

const theme = getLessVariables('./src/styles/theme.less')


const {
  override,
  fixBabelImports,
  addLessLoader,
  addWebpackAlias,
  addPostcssPlugins
} = require("customize-cra");


module.exports = override(
  fixBabelImports("import", {
    libraryName: "antd-mobile", libraryDirectory: "es", style: true // change importing css to less
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  }),
  addWebpackAlias({
    "@": path.resolve(__dirname, 'src')
  }),
  addPostcssPlugins([require("postcss-flexbugs-fixes"),
  postcssAspectRatioMini({}),
  postcssPxToViewport({
    viewportWidth: 750, // (Number) The width of the viewport. 
    viewportHeight: 1334, // (Number) The height of the viewport. 
    unitPrecision: 3, // (Number) The decimal numbers to allow the REM units to grow to. 
    viewportUnit: 'vw', // (String) Expected units. 
    selectorBlackList: ['.ignore', '.hairlines'], // (Array) The selectors to ignore and leave as px. 
    minPixelValue: 1, // (Number) Set the minimum pixel value to replace. 
    mediaQuery: false // (Boolean) Allow px to be converted in media queries. 
  }),
  postcssWriteSvg({
    utf8: false
  }),
  postcssCssnext({}),
  postcssViewportUnits({}),
  cssnano({
    // preset: "advanced", 
    autoprefixer: false,
    "postcss-zindex": false
  })
  ])

);