webpackJsonp([0],{

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(55)
}
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(59)
/* template */
var __vue_template__ = __webpack_require__(66)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/DataTable.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-4b997e69", Component.options)
  } else {
    hotAPI.reload("data-v-4b997e69", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ 55:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(56);
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var update = __webpack_require__(57)("33d84955", content, false, {});
// Hot Module Replacement
if(false) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b997e69\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue", function() {
     var newContent = require("!!../../../node_modules/css-loader/index.js!../../../node_modules/vue-loader/lib/style-compiler/index.js?{\"vue\":true,\"id\":\"data-v-4b997e69\",\"scoped\":false,\"hasInlineConfig\":true}!../../../node_modules/sass-loader/dist/cjs.js!../../../node_modules/vue-loader/lib/selector.js?type=styles&index=0!./DataTable.vue");
     if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(54)(false);
// imports


// module
exports.push([module.i, "\n.sortable{cursor:pointer\n}\n.arrow{display:inline-block;vertical-align:middle;width:0;height:0;margin-left:5px;opacity:.6\n}\n.arrow--asc{border-left:4px solid transparent;border-right:4px solid transparent;border-bottom:4px solid #222\n}\n.arrow--desc{border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid #222\n}\n", ""]);

// exports


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {

/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
  Modified by Evan You @yyx990803
*/

var hasDocument = typeof document !== 'undefined'

if (typeof DEBUG !== 'undefined' && DEBUG) {
  if (!hasDocument) {
    throw new Error(
    'vue-style-loader cannot be used in a non-browser environment. ' +
    "Use { target: 'node' } in your Webpack config to indicate a server-rendering environment."
  ) }
}

var listToStyles = __webpack_require__(58)

/*
type StyleObject = {
  id: number;
  parts: Array<StyleObjectPart>
}

type StyleObjectPart = {
  css: string;
  media: string;
  sourceMap: ?string
}
*/

var stylesInDom = {/*
  [id: number]: {
    id: number,
    refs: number,
    parts: Array<(obj?: StyleObjectPart) => void>
  }
*/}

var head = hasDocument && (document.head || document.getElementsByTagName('head')[0])
var singletonElement = null
var singletonCounter = 0
var isProduction = false
var noop = function () {}
var options = null
var ssrIdKey = 'data-vue-ssr-id'

// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
// tags it will allow on a page
var isOldIE = typeof navigator !== 'undefined' && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase())

module.exports = function (parentId, list, _isProduction, _options) {
  isProduction = _isProduction

  options = _options || {}

  var styles = listToStyles(parentId, list)
  addStylesToDom(styles)

  return function update (newList) {
    var mayRemove = []
    for (var i = 0; i < styles.length; i++) {
      var item = styles[i]
      var domStyle = stylesInDom[item.id]
      domStyle.refs--
      mayRemove.push(domStyle)
    }
    if (newList) {
      styles = listToStyles(parentId, newList)
      addStylesToDom(styles)
    } else {
      styles = []
    }
    for (var i = 0; i < mayRemove.length; i++) {
      var domStyle = mayRemove[i]
      if (domStyle.refs === 0) {
        for (var j = 0; j < domStyle.parts.length; j++) {
          domStyle.parts[j]()
        }
        delete stylesInDom[domStyle.id]
      }
    }
  }
}

function addStylesToDom (styles /* Array<StyleObject> */) {
  for (var i = 0; i < styles.length; i++) {
    var item = styles[i]
    var domStyle = stylesInDom[item.id]
    if (domStyle) {
      domStyle.refs++
      for (var j = 0; j < domStyle.parts.length; j++) {
        domStyle.parts[j](item.parts[j])
      }
      for (; j < item.parts.length; j++) {
        domStyle.parts.push(addStyle(item.parts[j]))
      }
      if (domStyle.parts.length > item.parts.length) {
        domStyle.parts.length = item.parts.length
      }
    } else {
      var parts = []
      for (var j = 0; j < item.parts.length; j++) {
        parts.push(addStyle(item.parts[j]))
      }
      stylesInDom[item.id] = { id: item.id, refs: 1, parts: parts }
    }
  }
}

function createStyleElement () {
  var styleElement = document.createElement('style')
  styleElement.type = 'text/css'
  head.appendChild(styleElement)
  return styleElement
}

function addStyle (obj /* StyleObjectPart */) {
  var update, remove
  var styleElement = document.querySelector('style[' + ssrIdKey + '~="' + obj.id + '"]')

  if (styleElement) {
    if (isProduction) {
      // has SSR styles and in production mode.
      // simply do nothing.
      return noop
    } else {
      // has SSR styles but in dev mode.
      // for some reason Chrome can't handle source map in server-rendered
      // style tags - source maps in <style> only works if the style tag is
      // created and inserted dynamically. So we remove the server rendered
      // styles and inject new ones.
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  if (isOldIE) {
    // use singleton mode for IE9.
    var styleIndex = singletonCounter++
    styleElement = singletonElement || (singletonElement = createStyleElement())
    update = applyToSingletonTag.bind(null, styleElement, styleIndex, false)
    remove = applyToSingletonTag.bind(null, styleElement, styleIndex, true)
  } else {
    // use multi-style-tag mode in all other cases
    styleElement = createStyleElement()
    update = applyToTag.bind(null, styleElement)
    remove = function () {
      styleElement.parentNode.removeChild(styleElement)
    }
  }

  update(obj)

  return function updateStyle (newObj /* StyleObjectPart */) {
    if (newObj) {
      if (newObj.css === obj.css &&
          newObj.media === obj.media &&
          newObj.sourceMap === obj.sourceMap) {
        return
      }
      update(obj = newObj)
    } else {
      remove()
    }
  }
}

var replaceText = (function () {
  var textStore = []

  return function (index, replacement) {
    textStore[index] = replacement
    return textStore.filter(Boolean).join('\n')
  }
})()

function applyToSingletonTag (styleElement, index, remove, obj) {
  var css = remove ? '' : obj.css

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = replaceText(index, css)
  } else {
    var cssNode = document.createTextNode(css)
    var childNodes = styleElement.childNodes
    if (childNodes[index]) styleElement.removeChild(childNodes[index])
    if (childNodes.length) {
      styleElement.insertBefore(cssNode, childNodes[index])
    } else {
      styleElement.appendChild(cssNode)
    }
  }
}

function applyToTag (styleElement, obj) {
  var css = obj.css
  var media = obj.media
  var sourceMap = obj.sourceMap

  if (media) {
    styleElement.setAttribute('media', media)
  }
  if (options.ssrId) {
    styleElement.setAttribute(ssrIdKey, obj.id)
  }

  if (sourceMap) {
    // https://developer.chrome.com/devtools/docs/javascript-debugging
    // this makes source maps inside style tags work properly in Chrome
    css += '\n/*# sourceURL=' + sourceMap.sources[0] + ' */'
    // http://stackoverflow.com/a/26603875
    css += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + ' */'
  }

  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild)
    }
    styleElement.appendChild(document.createTextNode(css))
  }
}


/***/ }),

/***/ 58:
/***/ (function(module, exports) {

/**
 * Translates the list format produced by css-loader into something
 * easier to manipulate.
 */
module.exports = function listToStyles (parentId, list) {
  var styles = []
  var newStyles = {}
  for (var i = 0; i < list.length; i++) {
    var item = list[i]
    var id = item[0]
    var css = item[1]
    var media = item[2]
    var sourceMap = item[3]
    var part = {
      id: parentId + ':' + i,
      css: css,
      media: media,
      sourceMap: sourceMap
    }
    if (!newStyles[id]) {
      styles.push(newStyles[id] = { id: id, parts: [part] })
    } else {
      newStyles[id].parts.push(part)
    }
  }
  return styles
}


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_query_string___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_query_string__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pagination_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Pagination_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Pagination_vue__);
var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['endpoint'],
    components: {
        pagination: __WEBPACK_IMPORTED_MODULE_1__Pagination_vue___default.a
    },
    data: function data() {
        return {
            response: {
                table: '',
                icon: '',
                displayable: [],
                column_type: [],
                custom_names: [],
                records: {
                    data: []
                },
                crud: {
                    create: {
                        allow: false
                    },
                    read: {
                        allow: false
                    },
                    update: {
                        allow: false
                    },
                    delete: {
                        allow: false
                    }
                },
                header: {
                    show: {
                        title: false,
                        search: false
                    }
                }
            },
            sort: {
                key: 'id',
                order: 'asc'
            },
            limit: 50,
            page: 1,
            quickSearchQuery: '',
            editing: {
                id: null,
                form: {},
                errors: []
            },
            search: {
                value: '',
                operator: 'equals',
                column: 'id',
                active: false
            },
            creating: {
                active: false,
                form: {},
                errors: []
            },
            selected: []
        };
    },

    computed: {
        filteredRecords: function filteredRecords() {
            var _this = this;

            var data = this.response.records.data;

            data = data.filter(function (row) {
                return Object.keys(row).some(function (key) {
                    return String(row[key]).toLowerCase().indexOf(_this.quickSearchQuery.toLowerCase()) > -1;
                });
            });

            if (this.sort.key) {
                data = _.orderBy(data, function (i) {
                    var value = i[_this.sort.key];

                    if (!isNaN(parseFloat(value))) {
                        return parseFloat(value);
                    }

                    return String(i[_this.sort.key]).toLowerCase();
                }, this.sort.order);
            }

            return data;
        }
    },
    methods: {
        getRecords: function getRecords(page) {
            var _this2 = this;

            if (page) {
                this.page = page;
            }

            return axios.get(this.endpoint + '?' + this.getQueryParameters()).then(function (response) {
                _this2.response = response.data.data;
            });
        },
        displayableColumns: function displayableColumns(record) {
            return _.pick(record, this.response.displayable);
        },
        getQueryParameters: function getQueryParameters() {
            return __WEBPACK_IMPORTED_MODULE_0_query_string___default.a.stringify(_extends({
                page: this.page,
                limit: this.limit
            }, this.search));
        },
        sortBy: function sortBy(column) {
            this.sort.key = column;
            this.sort.order = this.sort.order === 'asc' ? 'desc' : 'asc';
        },
        edit: function edit(record) {
            this.editing.errors = [];
            this.editing.id = record.id;
            this.editing.form = _.pick(record, this.response.crud.update.updatable);
        },
        isUpdatable: function isUpdatable(column) {
            return this.response.crud.update.updatable.includes(column);
        },
        update: function update() {
            var _this3 = this;

            axios.patch(this.endpoint + '/' + this.editing.id, this.editing.form).then(function () {
                _this3.getRecords().then(function () {
                    _this3.editing.id = null;
                    _this3.editing.form = {};
                });
            }).catch(function (error) {
                if (error.response.status === 422) {
                    _this3.editing.errors = error.response.data.errors;
                }
            });
        },
        store: function store() {
            var _this4 = this;

            axios.post('' + this.endpoint, this.creating.form).then(function () {
                _this4.getRecords().then(function () {
                    _this4.creating.active = false;
                    _this4.creating.form = {};
                    _this4.creating.errors = [];
                });
            }).catch(function (error) {
                if (error.response.status === 422) {
                    _this4.creating.errors = error.response.data.errors;
                }
            });
        },
        confirmDestroy: function confirmDestroy(records) {
            var _this5 = this;

            if (window.swal) {
                swal({
                    title: "Are you sure?",
                    icon: "warning",
                    buttons: {
                        cancel: "Cancel",
                        confirm: "Delete"
                    },
                    dangerMode: true
                }).then(function (confirmDelete) {
                    if (!confirmDelete) {
                        return;
                    }
                    _this5.destroy(records);
                });
            } else {
                if (!window.confirm('Are you sure?')) {
                    return;
                }
                this.destroy(records);
            }
        },
        destroy: function destroy(records) {
            var _this6 = this;

            axios.delete(this.endpoint + '/' + records).then(function () {
                _this6.selected = [];
                _this6.getRecords();
            });
        },
        toggleSelectAll: function toggleSelectAll() {
            if (this.selected.length === this.filteredRecords.length) {
                this.selected = [];
                return;
            }
            this.selected = _.map(this.filteredRecords, 'id');
        }
    },
    mounted: function mounted() {
        this.getRecords();
    }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strictUriEncode = __webpack_require__(61);
var objectAssign = __webpack_require__(62);

function encoderForArrayFormat(opts) {
	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, index) {
				return value === null ? [
					encode(key, opts),
					'[',
					index,
					']'
				].join('') : [
					encode(key, opts),
					'[',
					encode(index, opts),
					']=',
					encode(value, opts)
				].join('');
			};

		case 'bracket':
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'[]=',
					encode(value, opts)
				].join('');
			};

		default:
			return function (key, value) {
				return value === null ? encode(key, opts) : [
					encode(key, opts),
					'=',
					encode(value, opts)
				].join('');
			};
	}
}

function parserForArrayFormat(opts) {
	var result;

	switch (opts.arrayFormat) {
		case 'index':
			return function (key, value, accumulator) {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return function (key, value, accumulator) {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				} else if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		default:
			return function (key, value, accumulator) {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function encode(value, opts) {
	if (opts.encode) {
		return opts.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	} else if (typeof input === 'object') {
		return keysSorter(Object.keys(input)).sort(function (a, b) {
			return Number(a) - Number(b);
		}).map(function (key) {
			return input[key];
		});
	}

	return input;
}

exports.extract = function (str) {
	return str.split('?')[1] || '';
};

exports.parse = function (str, opts) {
	opts = objectAssign({arrayFormat: 'none'}, opts);

	var formatter = parserForArrayFormat(opts);

	// Create an object with no prototype
	// https://github.com/sindresorhus/query-string/issues/47
	var ret = Object.create(null);

	if (typeof str !== 'string') {
		return ret;
	}

	str = str.trim().replace(/^(\?|#|&)/, '');

	if (!str) {
		return ret;
	}

	str.split('&').forEach(function (param) {
		var parts = param.replace(/\+/g, ' ').split('=');
		// Firefox (pre 40) decodes `%3D` to `=`
		// https://github.com/sindresorhus/query-string/pull/37
		var key = parts.shift();
		var val = parts.length > 0 ? parts.join('=') : undefined;

		// missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		val = val === undefined ? null : decodeURIComponent(val);

		formatter(decodeURIComponent(key), val, ret);
	});

	return Object.keys(ret).sort().reduce(function (result, key) {
		var val = ret[key];
		if (Boolean(val) && typeof val === 'object' && !Array.isArray(val)) {
			// Sort object keys, not values
			result[key] = keysSorter(val);
		} else {
			result[key] = val;
		}

		return result;
	}, Object.create(null));
};

exports.stringify = function (obj, opts) {
	var defaults = {
		encode: true,
		strict: true,
		arrayFormat: 'none'
	};

	opts = objectAssign(defaults, opts);

	var formatter = encoderForArrayFormat(opts);

	return obj ? Object.keys(obj).sort().map(function (key) {
		var val = obj[key];

		if (val === undefined) {
			return '';
		}

		if (val === null) {
			return encode(key, opts);
		}

		if (Array.isArray(val)) {
			var result = [];

			val.slice().forEach(function (val2) {
				if (val2 === undefined) {
					return;
				}

				result.push(formatter(key, val2, result.length));
			});

			return result.join('&');
		}

		return encode(key, opts) + '=' + encode(val, opts);
	}).filter(function (x) {
		return x.length > 0;
	}).join('&') : '';
};


/***/ }),

/***/ 61:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (str) {
	return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
		return '%' + c.charCodeAt(0).toString(16).toUpperCase();
	});
};


/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),

/***/ 63:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(14)
/* script */
var __vue_script__ = __webpack_require__(64)
/* template */
var __vue_template__ = __webpack_require__(65)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/components/Pagination.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-d7acf176", Component.options)
  } else {
    hotAPI.reload("data-v-d7acf176", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 64:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: {
        currentPage: Number,
        totalPages: Number
    },
    data: function data() {
        return {
            qtyPerSection: 7
        };
    },

    computed: {
        section: function section() {
            return Math.ceil(this.currentPage / this.qtyPerSection);
        },
        sections: function sections() {
            return Math.ceil(this.totalPages / this.qtyPerSection);
        },
        lastPage: function lastPage() {
            var lastPage = (this.section - 1) * this.qtyPerSection + this.qtyPerSection;

            if (this.section === this.sections) {
                lastPage = this.totalPages;
            }

            return lastPage;
        },
        pages: function pages() {
            return _.range((this.section - 1) * this.qtyPerSection + 1, this.lastPage + 1);
        }
    },
    methods: {
        switchPage: function switchPage(page) {
            if (page < 1 || page > this.totalPages) {
                return;
            }
            this.$emit('pagination:switched', page);
        },
        goForwardASection: function goForwardASection() {
            this.switchPage(this.firstPageOfSection(this.section - 1));
        },
        goBackASection: function goBackASection() {
            this.switchPage(this.firstPageOfSection(this.section + 1));
        },
        firstPageOfSection: function firstPageOfSection(section) {
            return (section - 1) * this.qtyPerSection + 1;
        }
    }
});

/***/ }),

/***/ 65:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("nav", { attrs: { "aria-label": "Page navigation" } }, [
    _c(
      "ul",
      { staticClass: "pagination" },
      [
        _c(
          "li",
          {
            staticClass: "page-item",
            class: { disabled: _vm.currentPage === 1 }
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.switchPage(_vm.currentPage - 1)
                  }
                }
              },
              [_vm._v("\n                Previous\n            ")]
            )
          ]
        ),
        _vm._v(" "),
        _vm.section > 1
          ? [
              _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.switchPage(1)
                      }
                    }
                  },
                  [_vm._v("\n                    1\n                ")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.goForwardASection($event)
                      }
                    }
                  },
                  [_vm._v("\n                    ...\n                ")]
                )
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _vm._l(_vm.pages, function(page) {
          return _c(
            "li",
            {
              key: page,
              staticClass: "page-item",
              class: { active: _vm.currentPage === page }
            },
            [
              _c(
                "a",
                {
                  staticClass: "page-link",
                  attrs: { href: "#" },
                  on: {
                    click: function($event) {
                      $event.preventDefault()
                      return _vm.switchPage(page)
                    }
                  }
                },
                [_vm._v("\n                " + _vm._s(page) + "\n            ")]
              )
            ]
          )
        }),
        _vm._v(" "),
        _vm.section < _vm.sections
          ? [
              _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.goBackASection($event)
                      }
                    }
                  },
                  [_vm._v("\n                    ...\n                ")]
                )
              ]),
              _vm._v(" "),
              _c("li", { staticClass: "page-item" }, [
                _c(
                  "a",
                  {
                    staticClass: "page-link",
                    attrs: { href: "#" },
                    on: {
                      click: function($event) {
                        $event.preventDefault()
                        return _vm.switchPage(_vm.totalPages)
                      }
                    }
                  },
                  [
                    _vm._v(
                      "\n                    " +
                        _vm._s(_vm.totalPages) +
                        "\n                "
                    )
                  ]
                )
              ])
            ]
          : _vm._e(),
        _vm._v(" "),
        _c(
          "li",
          {
            staticClass: "page-item",
            class: { disabled: _vm.currentPage === _vm.totalPages }
          },
          [
            _c(
              "a",
              {
                staticClass: "page-link",
                attrs: { href: "#" },
                on: {
                  click: function($event) {
                    $event.preventDefault()
                    return _vm.switchPage(_vm.currentPage + 1)
                  }
                }
              },
              [_vm._v("\n                Next\n            ")]
            )
          ]
        )
      ],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-d7acf176", module.exports)
  }
}

/***/ }),

/***/ 66:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _vm.response.header.show.title || _vm.response.header.show.search
      ? _c(
          "div",
          { staticClass: "card card-default" },
          [
            _vm.response.header.show.title
              ? _c(
                  "div",
                  { staticClass: "card-body row mx-0 align-items-md-center" },
                  [
                    _c("div", { staticClass: "col-md-6" }, [
                      _c("h4", { staticClass: "font-weight-bold pt-3" }, [
                        _vm.response.icon != null
                          ? _c("i", { class: _vm.response.icon }, [_vm._v(" ")])
                          : _vm._e(),
                        _vm._v(
                          _vm._s(
                            _vm.response.custom_names["table_name"] ||
                              _vm.response.table
                          ) + "\n                "
                        )
                      ])
                    ]),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "col-md-6 text-right" },
                      [
                        _vm.response.header.show.search
                          ? [
                              _vm.search.active
                                ? [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-secondary ml-3",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.search.active = !_vm.search
                                              .active
                                          }
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "fas fa-toggle-on"
                                        }),
                                        _vm._v(
                                          "  Search\n                        "
                                        )
                                      ]
                                    )
                                  ]
                                : [
                                    _c(
                                      "button",
                                      {
                                        staticClass: "btn btn-secondary ml-3",
                                        attrs: { type: "button" },
                                        on: {
                                          click: function($event) {
                                            $event.preventDefault()
                                            _vm.search.active = !_vm.search
                                              .active
                                          }
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "fas fa-toggle-off"
                                        }),
                                        _vm._v(
                                          "  Search\n                        "
                                        )
                                      ]
                                    )
                                  ]
                            ]
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.response.crud.create.allow
                          ? [
                              _vm.response.crud.create.inline
                                ? [
                                    _vm.creating.active
                                      ? [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-warning pull-right ml-3",
                                              attrs: { type: "button" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  _vm.creating.active = !_vm
                                                    .creating.active
                                                }
                                              }
                                            },
                                            [
                                              _c("span", {
                                                staticClass: "fas fa-times"
                                              }),
                                              _vm._v(
                                                "  Cancel\n                            "
                                              )
                                            ]
                                          )
                                        ]
                                      : [
                                          _c(
                                            "button",
                                            {
                                              staticClass:
                                                "btn btn-primary pull-right ml-3",
                                              attrs: { type: "button" },
                                              on: {
                                                click: function($event) {
                                                  $event.preventDefault()
                                                  _vm.creating.active = !_vm
                                                    .creating.active
                                                }
                                              }
                                            },
                                            [
                                              _c("span", {
                                                staticClass: "fas fa-plus"
                                              }),
                                              _vm._v(
                                                "  Add New\n                            "
                                              )
                                            ]
                                          )
                                        ]
                                  ]
                                : [
                                    _c(
                                      "a",
                                      {
                                        staticClass:
                                          "btn btn-primary pull-right",
                                        attrs: {
                                          href:
                                            _vm.response.crud.resource_route +
                                            "/create"
                                        }
                                      },
                                      [
                                        _c("span", {
                                          staticClass: "fas fa-plus"
                                        }),
                                        _vm._v(
                                          "  Add New\n                        "
                                        )
                                      ]
                                    )
                                  ]
                            ]
                          : _vm._e()
                      ],
                      2
                    )
                  ]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.creating.active
              ? _c("div", { staticClass: "card-body" }, [
                  _c("div", { staticClass: "card bg-light mb-3" }, [
                    _c("div", { staticClass: "card-body" }, [
                      _c(
                        "form",
                        {
                          attrs: { action: "#" },
                          on: {
                            submit: function($event) {
                              $event.preventDefault()
                              return _vm.store($event)
                            }
                          }
                        },
                        [
                          _vm._l(_vm.response.crud.create.creatable, function(
                            column,
                            index
                          ) {
                            return _c(
                              "div",
                              { key: index, staticClass: "form-group row" },
                              [
                                _vm.response.column_type[column] === "boolean"
                                  ? [
                                      _c(
                                        "div",
                                        {
                                          staticClass:
                                            "col-md-3 col-form-label text-right"
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.response.custom_names[
                                                column
                                              ] || column
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c(
                                        "div",
                                        {
                                          staticClass: "col-md-6 align-middle"
                                        },
                                        [
                                          _c(
                                            "div",
                                            { staticClass: "form-check" },
                                            [
                                              _c("input", {
                                                directives: [
                                                  {
                                                    name: "model",
                                                    rawName: "v-model",
                                                    value:
                                                      _vm.creating.form[column],
                                                    expression:
                                                      "creating.form[column]"
                                                  }
                                                ],
                                                staticClass:
                                                  "form-check-input position-static",
                                                class: {
                                                  "is-invalid":
                                                    _vm.creating.errors[column]
                                                },
                                                attrs: {
                                                  type: "checkbox",
                                                  id: column
                                                },
                                                domProps: {
                                                  checked: Array.isArray(
                                                    _vm.creating.form[column]
                                                  )
                                                    ? _vm._i(
                                                        _vm.creating.form[
                                                          column
                                                        ],
                                                        null
                                                      ) > -1
                                                    : _vm.creating.form[column]
                                                },
                                                on: {
                                                  change: function($event) {
                                                    var $$a =
                                                        _vm.creating.form[
                                                          column
                                                        ],
                                                      $$el = $event.target,
                                                      $$c = $$el.checked
                                                        ? true
                                                        : false
                                                    if (Array.isArray($$a)) {
                                                      var $$v = null,
                                                        $$i = _vm._i($$a, $$v)
                                                      if ($$el.checked) {
                                                        $$i < 0 &&
                                                          _vm.$set(
                                                            _vm.creating.form,
                                                            column,
                                                            $$a.concat([$$v])
                                                          )
                                                      } else {
                                                        $$i > -1 &&
                                                          _vm.$set(
                                                            _vm.creating.form,
                                                            column,
                                                            $$a
                                                              .slice(0, $$i)
                                                              .concat(
                                                                $$a.slice(
                                                                  $$i + 1
                                                                )
                                                              )
                                                          )
                                                      }
                                                    } else {
                                                      _vm.$set(
                                                        _vm.creating.form,
                                                        column,
                                                        $$c
                                                      )
                                                    }
                                                  }
                                                }
                                              }),
                                              _vm._v(" "),
                                              _vm.creating.errors[column]
                                                ? _c(
                                                    "span",
                                                    {
                                                      staticClass:
                                                        "invalid-feedback",
                                                      attrs: { role: "alert" }
                                                    },
                                                    [
                                                      _c("strong", [
                                                        _vm._v(
                                                          _vm._s(
                                                            _vm.creating.errors[
                                                              column
                                                            ][0]
                                                          )
                                                        )
                                                      ])
                                                    ]
                                                  )
                                                : _vm._e()
                                            ]
                                          )
                                        ]
                                      )
                                    ]
                                  : [
                                      _c(
                                        "label",
                                        {
                                          staticClass:
                                            "col-md-3 col-form-label text-right",
                                          attrs: { for: column }
                                        },
                                        [
                                          _vm._v(
                                            _vm._s(
                                              _vm.response.custom_names[
                                                column
                                              ] || column
                                            )
                                          )
                                        ]
                                      ),
                                      _vm._v(" "),
                                      _c("div", { staticClass: "col-md-6" }, [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.creating.form[column],
                                              expression:
                                                "creating.form[column]"
                                            }
                                          ],
                                          staticClass: "form-control",
                                          class: {
                                            "is-invalid":
                                              _vm.creating.errors[column]
                                          },
                                          attrs: { type: "text", id: column },
                                          domProps: {
                                            value: _vm.creating.form[column]
                                          },
                                          on: {
                                            input: function($event) {
                                              if ($event.target.composing) {
                                                return
                                              }
                                              _vm.$set(
                                                _vm.creating.form,
                                                column,
                                                $event.target.value
                                              )
                                            }
                                          }
                                        }),
                                        _vm._v(" "),
                                        _vm.creating.errors[column]
                                          ? _c(
                                              "span",
                                              {
                                                staticClass: "invalid-feedback",
                                                attrs: { role: "alert" }
                                              },
                                              [
                                                _c("strong", [
                                                  _vm._v(
                                                    _vm._s(
                                                      _vm.creating.errors[
                                                        column
                                                      ][0]
                                                    )
                                                  )
                                                ])
                                              ]
                                            )
                                          : _vm._e()
                                      ])
                                    ]
                              ],
                              2
                            )
                          }),
                          _vm._v(" "),
                          _vm._m(0)
                        ],
                        2
                      )
                    ])
                  ])
                ])
              : _vm._e(),
            _vm._v(" "),
            !_vm.response.header.show.title
              ? [
                  _c(
                    "div",
                    { staticClass: "card-body" },
                    [
                      _vm.search.active
                        ? [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-secondary pull-right mr-3",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.search.active = !_vm.search.active
                                  }
                                }
                              },
                              [
                                _c("span", { staticClass: "fas fa-toggle-on" }),
                                _vm._v(" Search\n                    ")
                              ]
                            )
                          ]
                        : [
                            _c(
                              "a",
                              {
                                staticClass:
                                  "btn btn-secondary pull-right mr-3",
                                attrs: { href: "#" },
                                on: {
                                  click: function($event) {
                                    $event.preventDefault()
                                    _vm.search.active = !_vm.search.active
                                  }
                                }
                              },
                              [
                                _c("span", {
                                  staticClass: "fas fa-toggle-off"
                                }),
                                _vm._v(" Search\n                    ")
                              ]
                            )
                          ]
                    ],
                    2
                  )
                ]
              : _vm._e(),
            _vm._v(" "),
            _vm.search.active
              ? _c("div", { staticClass: "card-body" }, [
                  _c(
                    "form",
                    {
                      attrs: { action: "#" },
                      on: {
                        submit: function($event) {
                          $event.preventDefault()
                          return _vm.getRecords($event)
                        }
                      }
                    },
                    [
                      _c("label", { attrs: { for: "search" } }, [
                        _vm._v("Search")
                      ]),
                      _vm._v(" "),
                      _c("div", { staticClass: "row row-fluid" }, [
                        _c("div", { staticClass: "form-group col-md-3" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search.column,
                                  expression: "search.column"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.search,
                                    "column",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            _vm._l(_vm.response.displayable, function(
                              column,
                              index
                            ) {
                              return _c(
                                "option",
                                { key: index, domProps: { value: column } },
                                [
                                  _vm._v(
                                    _vm._s(
                                      _vm.response.custom_names[column] ||
                                        column
                                    )
                                  )
                                ]
                              )
                            }),
                            0
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-3" }, [
                          _c(
                            "select",
                            {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search.operator,
                                  expression: "search.operator"
                                }
                              ],
                              staticClass: "form-control",
                              on: {
                                change: function($event) {
                                  var $$selectedVal = Array.prototype.filter
                                    .call($event.target.options, function(o) {
                                      return o.selected
                                    })
                                    .map(function(o) {
                                      var val =
                                        "_value" in o ? o._value : o.value
                                      return val
                                    })
                                  _vm.$set(
                                    _vm.search,
                                    "operator",
                                    $event.target.multiple
                                      ? $$selectedVal
                                      : $$selectedVal[0]
                                  )
                                }
                              }
                            },
                            [
                              _c("option", { attrs: { value: "equals" } }, [
                                _vm._v("=")
                              ]),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "contains" } }, [
                                _vm._v("contains")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "starts_with" } },
                                [_vm._v("starts with")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "ends_with" } }, [
                                _vm._v("ends with")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "greater_than" } },
                                [_vm._v("greater than")]
                              ),
                              _vm._v(" "),
                              _c("option", { attrs: { value: "less_than" } }, [
                                _vm._v("less than")
                              ]),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "greater_than_or_equal" } },
                                [_vm._v("greater than or equal")]
                              ),
                              _vm._v(" "),
                              _c(
                                "option",
                                { attrs: { value: "less_than_or_equal" } },
                                [_vm._v("less than or equal")]
                              )
                            ]
                          )
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "form-group col-md-6" }, [
                          _c("div", { staticClass: "input-group" }, [
                            _c("input", {
                              directives: [
                                {
                                  name: "model",
                                  rawName: "v-model",
                                  value: _vm.search.value,
                                  expression: "search.value"
                                }
                              ],
                              staticClass: "form-control",
                              attrs: { type: "text", id: "search" },
                              domProps: { value: _vm.search.value },
                              on: {
                                input: function($event) {
                                  if ($event.target.composing) {
                                    return
                                  }
                                  _vm.$set(
                                    _vm.search,
                                    "value",
                                    $event.target.value
                                  )
                                }
                              }
                            }),
                            _vm._v(" "),
                            _vm._m(1)
                          ])
                        ])
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c("div", { staticClass: "row" }, [
                    _c("div", { staticClass: "form-group col-md-10" }, [
                      _c("label", { attrs: { for: "filter" } }, [
                        _vm._v("Quick search current results")
                      ]),
                      _vm._v(" "),
                      _c("input", {
                        directives: [
                          {
                            name: "model",
                            rawName: "v-model",
                            value: _vm.quickSearchQuery,
                            expression: "quickSearchQuery"
                          }
                        ],
                        staticClass: "form-control",
                        attrs: { type: "text", id: "filter" },
                        domProps: { value: _vm.quickSearchQuery },
                        on: {
                          input: function($event) {
                            if ($event.target.composing) {
                              return
                            }
                            _vm.quickSearchQuery = $event.target.value
                          }
                        }
                      })
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "form-group col-md-2" }, [
                      _c("label", { attrs: { for: "limit" } }, [
                        _vm._v("Display records")
                      ]),
                      _vm._v(" "),
                      _c(
                        "select",
                        {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.limit,
                              expression: "limit"
                            }
                          ],
                          staticClass: "form-control",
                          attrs: { id: "limit" },
                          on: {
                            change: [
                              function($event) {
                                var $$selectedVal = Array.prototype.filter
                                  .call($event.target.options, function(o) {
                                    return o.selected
                                  })
                                  .map(function(o) {
                                    var val = "_value" in o ? o._value : o.value
                                    return val
                                  })
                                _vm.limit = $event.target.multiple
                                  ? $$selectedVal
                                  : $$selectedVal[0]
                              },
                              _vm.getRecords
                            ]
                          }
                        },
                        [
                          _c("option", { attrs: { value: "5" } }, [
                            _vm._v("5")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "10" } }, [
                            _vm._v("10")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "50" } }, [
                            _vm._v("50")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "100" } }, [
                            _vm._v("100")
                          ]),
                          _vm._v(" "),
                          _c("option", { attrs: { value: "1000" } }, [
                            _vm._v("1000")
                          ]),
                          _vm._v(" "),
                          _c(
                            "option",
                            { domProps: { value: _vm.response.records.total } },
                            [_vm._v("All")]
                          )
                        ]
                      )
                    ])
                  ])
                ])
              : _vm._e()
          ],
          2
        )
      : _vm._e(),
    _vm._v(" "),
    _c("div", { staticClass: "card card-default mt-4" }, [
      _vm.response.records.last_page > 1 || _vm.response.crud.delete.allow
        ? _c(
            "div",
            { staticClass: "card-header row mx-0 align-items-md-center" },
            [
              _c(
                "div",
                { staticClass: "col-md-6 pt-3" },
                [
                  _vm.response.records.last_page > 1
                    ? _c("pagination", {
                        attrs: {
                          currentPage: _vm.response.records.current_page,
                          totalPages: _vm.response.records.last_page
                        },
                        on: { "pagination:switched": _vm.getRecords }
                      })
                    : _vm._e()
                ],
                1
              ),
              _vm._v(" "),
              _c("div", { staticClass: "col-md-6 text-right" }, [
                _vm.response.crud.delete.allow
                  ? _c("div", { staticClass: "dropdown" }, [
                      _c(
                        "button",
                        {
                          staticClass: "btn btn-primary dropdown-toggle",
                          attrs: {
                            type: "button",
                            id: "withSelectedMenuButton",
                            "data-toggle": "dropdown",
                            "aria-haspopup": "true",
                            "aria-expanded": "false",
                            disabled: _vm.selected.length === 0
                          }
                        },
                        [
                          _vm._v(
                            "\n                        With Selected..\n                    "
                          )
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "div",
                        {
                          staticClass: "dropdown-menu",
                          attrs: { "aria-labelledby": "withSelectedMenuButton" }
                        },
                        [
                          _c(
                            "a",
                            {
                              staticClass: "dropdown-item",
                              attrs: { href: "#" },
                              on: {
                                click: function($event) {
                                  $event.preventDefault()
                                  return _vm.confirmDestroy(_vm.selected)
                                }
                              }
                            },
                            [_vm._v("Delete")]
                          )
                        ]
                      )
                    ])
                  : _vm._e()
              ])
            ]
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "card-body" }, [
        _vm.filteredRecords.length
          ? _c("div", { staticClass: "table-responsive" }, [
              _c(
                "table",
                { staticClass: "table table-bordered table-striped" },
                [
                  _c("thead", { staticClass: "thead-light" }, [
                    _c(
                      "tr",
                      [
                        _vm.response.crud.delete.allow
                          ? _c(
                              "th",
                              { staticClass: "align-middle text-center" },
                              [
                                _vm.filteredRecords.length <= 500
                                  ? _c(
                                      "div",
                                      {
                                        staticClass: "form-group",
                                        staticStyle: {
                                          "margin-bottom": "0rem !important"
                                        }
                                      },
                                      [
                                        _c(
                                          "div",
                                          { staticClass: "form-check" },
                                          [
                                            _c("input", {
                                              staticClass:
                                                "form-check-input position-static",
                                              attrs: { type: "checkbox" },
                                              domProps: {
                                                checked:
                                                  _vm.filteredRecords.length ===
                                                  _vm.selected.length
                                              },
                                              on: {
                                                change: _vm.toggleSelectAll
                                              }
                                            })
                                          ]
                                        )
                                      ]
                                    )
                                  : _vm._e()
                              ]
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._l(_vm.response.displayable, function(
                          column,
                          index
                        ) {
                          return _c(
                            "th",
                            {
                              key: index,
                              staticClass: "text-nowrap align-middle"
                            },
                            [
                              _c(
                                "span",
                                {
                                  staticClass: "sortable",
                                  on: {
                                    click: function($event) {
                                      return _vm.sortBy(column)
                                    }
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                                    " +
                                      _vm._s(
                                        _vm.response.custom_names[column] ||
                                          column
                                      ) +
                                      "\n                                    "
                                  ),
                                  _vm.sort.key === column
                                    ? _c("div", {
                                        staticClass: "arrow",
                                        class: {
                                          "arrow--asc":
                                            _vm.sort.order === "asc",
                                          "arrow--desc":
                                            _vm.sort.order === "desc"
                                        }
                                      })
                                    : _vm._e()
                                ]
                              )
                            ]
                          )
                        }),
                        _vm._v(" "),
                        _vm.response.crud.read.allow ||
                        _vm.response.crud.update.allow ||
                        _vm.response.crud.delete.allow
                          ? _c("th", [_vm._v(" ")])
                          : _vm._e()
                      ],
                      2
                    )
                  ]),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.filteredRecords, function(record, index) {
                      return _c(
                        "tr",
                        { key: index },
                        [
                          _vm.response.crud.delete.allow
                            ? _c(
                                "td",
                                { staticClass: "align-middle text-center" },
                                [
                                  _c(
                                    "div",
                                    {
                                      staticClass: "form-group",
                                      staticStyle: {
                                        "margin-bottom": "0rem !important"
                                      }
                                    },
                                    [
                                      _c("div", { staticClass: "form-check" }, [
                                        _c("input", {
                                          directives: [
                                            {
                                              name: "model",
                                              rawName: "v-model",
                                              value: _vm.selected,
                                              expression: "selected"
                                            }
                                          ],
                                          staticClass:
                                            "form-check-input position-static",
                                          attrs: { type: "checkbox" },
                                          domProps: {
                                            value: record.id,
                                            checked: Array.isArray(_vm.selected)
                                              ? _vm._i(
                                                  _vm.selected,
                                                  record.id
                                                ) > -1
                                              : _vm.selected
                                          },
                                          on: {
                                            change: function($event) {
                                              var $$a = _vm.selected,
                                                $$el = $event.target,
                                                $$c = $$el.checked
                                                  ? true
                                                  : false
                                              if (Array.isArray($$a)) {
                                                var $$v = record.id,
                                                  $$i = _vm._i($$a, $$v)
                                                if ($$el.checked) {
                                                  $$i < 0 &&
                                                    (_vm.selected = $$a.concat([
                                                      $$v
                                                    ]))
                                                } else {
                                                  $$i > -1 &&
                                                    (_vm.selected = $$a
                                                      .slice(0, $$i)
                                                      .concat(
                                                        $$a.slice($$i + 1)
                                                      ))
                                                }
                                              } else {
                                                _vm.selected = $$c
                                              }
                                            }
                                          }
                                        })
                                      ])
                                    ]
                                  )
                                ]
                              )
                            : _vm._e(),
                          _vm._v(" "),
                          _vm._l(_vm.displayableColumns(record), function(
                            columnValue,
                            column,
                            index
                          ) {
                            return _c(
                              "td",
                              {
                                key: index,
                                staticClass: "text-nowrap align-middle"
                              },
                              [
                                _vm.editing.id === record.id &&
                                _vm.isUpdatable(column)
                                  ? [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "form-group text-center",
                                          staticStyle: {
                                            "margin-bottom": "0rem !important"
                                          }
                                        },
                                        [
                                          _vm.response.column_type[column] ===
                                          "boolean"
                                            ? [
                                                _c(
                                                  "div",
                                                  { staticClass: "form-check" },
                                                  [
                                                    _c("input", {
                                                      directives: [
                                                        {
                                                          name: "model",
                                                          rawName: "v-model",
                                                          value:
                                                            _vm.editing.form[
                                                              column
                                                            ],
                                                          expression:
                                                            "editing.form[column]"
                                                        }
                                                      ],
                                                      staticClass:
                                                        "form-check-input position-static",
                                                      class: {
                                                        "is-invalid":
                                                          _vm.editing.errors[
                                                            column
                                                          ]
                                                      },
                                                      attrs: {
                                                        type: "checkbox",
                                                        value: "columnValue"
                                                      },
                                                      domProps: {
                                                        checked: Array.isArray(
                                                          _vm.editing.form[
                                                            column
                                                          ]
                                                        )
                                                          ? _vm._i(
                                                              _vm.editing.form[
                                                                column
                                                              ],
                                                              "columnValue"
                                                            ) > -1
                                                          : _vm.editing.form[
                                                              column
                                                            ]
                                                      },
                                                      on: {
                                                        change: function(
                                                          $event
                                                        ) {
                                                          var $$a =
                                                              _vm.editing.form[
                                                                column
                                                              ],
                                                            $$el =
                                                              $event.target,
                                                            $$c = $$el.checked
                                                              ? true
                                                              : false
                                                          if (
                                                            Array.isArray($$a)
                                                          ) {
                                                            var $$v =
                                                                "columnValue",
                                                              $$i = _vm._i(
                                                                $$a,
                                                                $$v
                                                              )
                                                            if ($$el.checked) {
                                                              $$i < 0 &&
                                                                _vm.$set(
                                                                  _vm.editing
                                                                    .form,
                                                                  column,
                                                                  $$a.concat([
                                                                    $$v
                                                                  ])
                                                                )
                                                            } else {
                                                              $$i > -1 &&
                                                                _vm.$set(
                                                                  _vm.editing
                                                                    .form,
                                                                  column,
                                                                  $$a
                                                                    .slice(
                                                                      0,
                                                                      $$i
                                                                    )
                                                                    .concat(
                                                                      $$a.slice(
                                                                        $$i + 1
                                                                      )
                                                                    )
                                                                )
                                                            }
                                                          } else {
                                                            _vm.$set(
                                                              _vm.editing.form,
                                                              column,
                                                              $$c
                                                            )
                                                          }
                                                        }
                                                      }
                                                    })
                                                  ]
                                                )
                                              ]
                                            : [
                                                _c("input", {
                                                  directives: [
                                                    {
                                                      name: "model",
                                                      rawName: "v-model",
                                                      value:
                                                        _vm.editing.form[
                                                          column
                                                        ],
                                                      expression:
                                                        "editing.form[column]"
                                                    }
                                                  ],
                                                  staticClass: "form-control",
                                                  class: {
                                                    "is-invalid":
                                                      _vm.editing.errors[column]
                                                  },
                                                  attrs: {
                                                    type: "text",
                                                    value: "columnValue"
                                                  },
                                                  domProps: {
                                                    value:
                                                      _vm.editing.form[column]
                                                  },
                                                  on: {
                                                    input: function($event) {
                                                      if (
                                                        $event.target.composing
                                                      ) {
                                                        return
                                                      }
                                                      _vm.$set(
                                                        _vm.editing.form,
                                                        column,
                                                        $event.target.value
                                                      )
                                                    }
                                                  }
                                                })
                                              ],
                                          _vm._v(" "),
                                          _vm.editing.errors[column]
                                            ? _c(
                                                "span",
                                                {
                                                  staticClass:
                                                    "invalid-feedback",
                                                  attrs: { role: "alert" }
                                                },
                                                [
                                                  _c("strong", [
                                                    _vm._v(
                                                      _vm._s(
                                                        _vm.editing.errors[
                                                          column
                                                        ][0]
                                                      )
                                                    )
                                                  ])
                                                ]
                                              )
                                            : _vm._e()
                                        ],
                                        2
                                      )
                                    ]
                                  : [
                                      _vm._v(
                                        "\n                                    " +
                                          _vm._s(columnValue) +
                                          "\n                                "
                                      )
                                    ]
                              ],
                              2
                            )
                          }),
                          _vm._v(" "),
                          _vm.response.crud.read.allow ||
                          _vm.response.crud.update.allow ||
                          _vm.response.crud.delete.allow
                            ? _c(
                                "td",
                                {
                                  staticClass:
                                    "text-nowrap align-middle text-center"
                                },
                                [
                                  _vm.response.crud.update.allow
                                    ? [
                                        _vm.response.crud.update.inline
                                          ? [
                                              _vm.editing.id !== record.id
                                                ? _c(
                                                    "button",
                                                    {
                                                      staticClass:
                                                        "btn btn-default btn-xs icon-btn md-btn-flat",
                                                      attrs: { type: "button" },
                                                      on: {
                                                        click: function(
                                                          $event
                                                        ) {
                                                          $event.preventDefault()
                                                          return _vm.edit(
                                                            record
                                                          )
                                                        }
                                                      }
                                                    },
                                                    [
                                                      _c("i", {
                                                        staticClass:
                                                          "fas fa-pencil-alt"
                                                      })
                                                    ]
                                                  )
                                                : _vm._e(),
                                              _vm._v(" "),
                                              _vm.editing.id === record.id
                                                ? [
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-default btn-xs icon-btn md-btn-flat",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            return _vm.update(
                                                              $event
                                                            )
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-save"
                                                        })
                                                      ]
                                                    ),
                                                    _vm._v(" "),
                                                    _c(
                                                      "button",
                                                      {
                                                        staticClass:
                                                          "btn btn-default btn-xs icon-btn md-btn-flat",
                                                        attrs: {
                                                          type: "button"
                                                        },
                                                        on: {
                                                          click: function(
                                                            $event
                                                          ) {
                                                            $event.preventDefault()
                                                            _vm.editing.id = null
                                                          }
                                                        }
                                                      },
                                                      [
                                                        _c("i", {
                                                          staticClass:
                                                            "fas fa-times"
                                                        })
                                                      ]
                                                    )
                                                  ]
                                                : _vm._e()
                                            ]
                                          : [
                                              _c(
                                                "a",
                                                {
                                                  staticClass:
                                                    "btn btn-default btn-xs icon-btn md-btn-flat",
                                                  attrs: {
                                                    href:
                                                      _vm.response.crud
                                                        .resource_route +
                                                      "/" +
                                                      record.id +
                                                      "/edit"
                                                  }
                                                },
                                                [
                                                  _c("i", {
                                                    staticClass:
                                                      "fas fa-pencil-alt"
                                                  })
                                                ]
                                              )
                                            ]
                                      ]
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.response.crud.read.allow
                                    ? _c(
                                        "a",
                                        {
                                          staticClass:
                                            "btn btn-default btn-xs icon-btn md-btn-flat",
                                          attrs: {
                                            href:
                                              _vm.response.crud.resource_route +
                                              "/" +
                                              record.id
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-search"
                                          })
                                        ]
                                      )
                                    : _vm._e(),
                                  _vm._v(" "),
                                  _vm.response.crud.delete.allow
                                    ? _c(
                                        "button",
                                        {
                                          staticClass:
                                            "btn btn-default btn-xs icon-btn md-btn-flat",
                                          attrs: { type: "button" },
                                          on: {
                                            click: function($event) {
                                              $event.preventDefault()
                                              return _vm.confirmDestroy(
                                                record.id
                                              )
                                            }
                                          }
                                        },
                                        [
                                          _c("i", {
                                            staticClass: "fas fa-trash-alt"
                                          })
                                        ]
                                      )
                                    : _vm._e()
                                ],
                                2
                              )
                            : _vm._e()
                        ],
                        2
                      )
                    }),
                    0
                  )
                ]
              )
            ])
          : _c("p", { staticClass: "text-center" }, [
              _vm._v("\n                No results found.\n            ")
            ])
      ]),
      _vm._v(" "),
      _vm.response.records.last_page > 1
        ? _c(
            "div",
            { staticClass: "card-footer row mx-0 align-items-md-center" },
            [
              _c(
                "div",
                { staticClass: "col-md-12 pt-3" },
                [
                  _c("pagination", {
                    attrs: {
                      currentPage: _vm.response.records.current_page,
                      totalPages: _vm.response.records.last_page
                    },
                    on: { "pagination:switched": _vm.getRecords }
                  })
                ],
                1
              )
            ]
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "form-group row" }, [
      _c("div", { staticClass: "col-md-6 offset-md-3" }, [
        _c(
          "button",
          { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
          [_vm._v("Create")]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "input-group-append" }, [
      _c(
        "button",
        { staticClass: "btn btn-outline-primary", attrs: { type: "submit" } },
        [_vm._v("Search")]
      )
    ])
  }
]
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-4b997e69", module.exports)
  }
}

/***/ })

});