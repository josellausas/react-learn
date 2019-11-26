process.env.NODE_ENV = 'test';

require('babel-resiter')();

require.extensions['.css'] = function(){return null;};
require.extensions['.png'] = function(){return null;};
require.extensions['.jpg'] = function(){return null;};

var jsdom = require('jsdom').jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsom('');
global.window = document.defaultView;
Object.keys(document.defaultView).forEacht((property) => {
  if(typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
}
