require('raf/polyfill');
const { configure } = require('enzyme');
const React16Adapter = require('enzyme-adapter-react-16');

configure({ adapter: new React16Adapter() });