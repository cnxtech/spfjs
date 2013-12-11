/**
 * @fileoverview The primary SPF entry point.
 *
 * @author nicksay@google.com (Alex Nicksay)
 */

goog.provide('spf.main');

goog.require('spf');
goog.require('spf.config');
goog.require('spf.debug');
goog.require('spf.nav');
goog.require('spf.net.scripts');
goog.require('spf.net.styles');
goog.require('spf.pubsub');


/**
 * Initializes SPF.
 *
 * @param {Object=} opt_config Optional global configuration object.
 * @return {boolean} Whether SPF was successfully initialized.  If the HTML5
 *     history modification API is not supported, returns false.
 */
spf.main.init = function(opt_config) {
  var enable = !!(window.history.pushState);
  spf.debug.info('main.init ', 'enable=', enable);
  var config = opt_config || {};
  for (var key in spf.config.defaults) {
    var value = (key in config) ? config[key] : spf.config.defaults[key];
    spf.config.set(key, value);
  }
  if (enable) {
    spf.nav.init();
  }
  return enable;
};


/**
 * Disposes SPF.
 */
spf.main.dispose = function() {
  var enable = !!(window.history.pushState);
  if (enable) {
    spf.nav.dispose();
  }
  spf.config.clear();
};


/**
 * Marks existing scripts and styles as loaded, once during initial code
 * execution and when the document is ready to catch any resources in the
 * page after SPF is included.
 * @private
 */
spf.main.mark_ = function() {
  spf.net.scripts.mark();
  spf.net.styles.mark();
  if (document.readyState == 'complete') {
    // Since IE 8+ is supported for common library functions such as script
    // and style loading, use both standard and legacy event handlers to mark
    // existing resources.
    if (document.removeEventListener) {
      document.removeEventListener('DOMContentLoaded', spf.main.mark_, false);
    } else if (document.detachEvent) {
      document.detachEvent('onreadystatechange', spf.main.mark_);
    }
  }
};
if (document.addEventListener) {
  document.addEventListener('DOMContentLoaded', spf.main.mark_, false);
} else if (document.attachEvent) {
  document.attachEvent('onreadystatechange', spf.main.mark_);
}
spf.main.mark_();


// Create the API by exporting aliased functions.
// Core API functions are available on the top-level namespace.
// Extra API functions are available on second-level namespaces.
var api = {
  'init': spf.main.init,
  'dispose': spf.main.dispose,
  'navigate': spf.nav.navigate,
  'load': spf.nav.load,
  'process': spf.nav.response.process,  // TODO: Remove after deprecation.
  'prefetch': spf.nav.prefetch,
  'scripts': {
    'load': spf.net.scripts.load,
    'unload': spf.net.scripts.unload,
    'ignore': spf.net.scripts.ignore,
    'prefetch': spf.net.scripts.prefetch
  },
  'styles': {
    'load': spf.net.styles.load,
    'unload': spf.net.styles.unload,
    'ignore': spf.net.styles.ignore,
    'prefetch': spf.net.styles.prefetch
  }
};
if (!SPF_COMPILED) {
  // When not compiled, mixin the API to the existing namespace for development.
  for (var key in api) {
    // Work around the "incomplete alias" warning.
    eval('spf[key] = api[key]');
  }
} else {
  // When compiled for a production/debug build, isolate access to the API.
  window['spf'] = api;
}