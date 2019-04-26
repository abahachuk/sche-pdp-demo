(function () {
  'use strict';
  
  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }
    
    return _typeof(obj);
  }
  
  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }
    
    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }
  
  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);
        
        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }
        
        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }
        
        _next(undefined);
      });
    };
  }
  
  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }
  
  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  
  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }
  
  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    
    return obj;
  }
  
  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      
      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }
    
    return target;
  }
  
  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }
    
    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }
  
  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }
  
  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };
    
    return _setPrototypeOf(o, p);
  }
  
  function isNativeReflectConstruct() {
    if (typeof Reflect === "undefined" || !Reflect.construct) return false;
    if (Reflect.construct.sham) return false;
    if (typeof Proxy === "function") return true;
    
    try {
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
      return true;
    } catch (e) {
      return false;
    }
  }
  
  function _construct(Parent, args, Class) {
    if (isNativeReflectConstruct()) {
      _construct = Reflect.construct;
    } else {
      _construct = function _construct(Parent, args, Class) {
        var a = [null];
        a.push.apply(a, args);
        var Constructor = Function.bind.apply(Parent, a);
        var instance = new Constructor();
        if (Class) _setPrototypeOf(instance, Class.prototype);
        return instance;
      };
    }
    
    return _construct.apply(null, arguments);
  }
  
  function _isNativeFunction(fn) {
    return Function.toString.call(fn).indexOf("[native code]") !== -1;
  }
  
  function _wrapNativeSuper(Class) {
    var _cache = typeof Map === "function" ? new Map() : undefined;
    
    _wrapNativeSuper = function _wrapNativeSuper(Class) {
      if (Class === null || !_isNativeFunction(Class)) return Class;
      
      if (typeof Class !== "function") {
        throw new TypeError("Super expression must either be null or a function");
      }
      
      if (typeof _cache !== "undefined") {
        if (_cache.has(Class)) return _cache.get(Class);
        
        _cache.set(Class, Wrapper);
      }
      
      function Wrapper() {
        return _construct(Class, arguments, _getPrototypeOf(this).constructor);
      }
      
      Wrapper.prototype = Object.create(Class.prototype, {
        constructor: {
          value: Wrapper,
          enumerable: false,
          writable: true,
          configurable: true
        }
      });
      return _setPrototypeOf(Wrapper, Class);
    };
    
    return _wrapNativeSuper(Class);
  }
  
  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }
    
    return self;
  }
  
  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }
    
    return _assertThisInitialized(self);
  }
  
  function _superPropBase(object, property) {
    while (!Object.prototype.hasOwnProperty.call(object, property)) {
      object = _getPrototypeOf(object);
      if (object === null) break;
    }
    
    return object;
  }
  
  function _get(target, property, receiver) {
    if (typeof Reflect !== "undefined" && Reflect.get) {
      _get = Reflect.get;
    } else {
      _get = function _get(target, property, receiver) {
        var base = _superPropBase(target, property);
        
        if (!base) return;
        var desc = Object.getOwnPropertyDescriptor(base, property);
        
        if (desc.get) {
          return desc.get.call(receiver);
        }
        
        return desc.value;
      };
    }
    
    return _get(target, property, receiver || target);
  }
  
  function _taggedTemplateLiteral(strings, raw) {
    if (!raw) {
      raw = strings.slice(0);
    }
    
    return Object.freeze(Object.defineProperties(strings, {
      raw: {
        value: Object.freeze(raw)
      }
    }));
  }
  
  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread();
  }
  
  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) arr2[i] = arr[i];
      
      return arr2;
    }
  }
  
  function _iterableToArray(iter) {
    if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
  }
  
  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance");
  }
  
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var directives = new WeakMap();
  /**
   * Brands a function as a directive so that lit-html will call the function
   * during template rendering, rather than passing as a value.
   *
   * @param f The directive factory function. Must be a function that returns a
   * function of the signature `(part: Part) => void`. The returned function will
   * be called with the part object
   *
   * @example
   *
   * ```
   * import {directive, html} from 'lit-html';
   *
   * const immutable = directive((v) => (part) => {
   *   if (part.value !== v) {
   *     part.setValue(v)
   *   }
   * });
   * ```
   */
      // tslint:disable-next-line:no-any
  
  var directive = function directive(f) {
        return function () {
          var d = f.apply(void 0, arguments);
          directives.set(d, true);
          return d;
        };
      };
  var isDirective = function isDirective(o) {
    return typeof o === 'function' && directives.has(o);
  };
  
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  
  /**
   * True if the custom elements polyfill is in use.
   */
  var isCEPolyfill = window.customElements !== undefined && window.customElements.polyfillWrapFlushCallback !== undefined;
  /**
   * Removes nodes, starting from `startNode` (inclusive) to `endNode`
   * (exclusive), from `container`.
   */
  
  var removeNodes = function removeNodes(container, startNode) {
    var endNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var node = startNode;
    
    while (node !== endNode) {
      var n = node.nextSibling;
      container.removeChild(node);
      node = n;
    }
  };
  
  /**
   * @license
   * Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  
  /**
   * A sentinel value that signals that a value was handled by a directive and
   * should not be written to the DOM.
   */
  var noChange = {};
  /**
   * A sentinel value that signals a NodePart to fully clear its content.
   */
  
  var nothing = {};
  
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  
  /**
   * An expression marker with embedded unique key to avoid collision with
   * possible text in templates.
   */
  var marker = "{{lit-".concat(String(Math.random()).slice(2), "}}");
  /**
   * An expression marker used text-positions, multi-binding attributes, and
   * attributes with markup-like text values.
   */
  
  var nodeMarker = "<!--".concat(marker, "-->");
  var markerRegex = new RegExp("".concat(marker, "|").concat(nodeMarker));
  /**
   * Suffix appended to all bound attribute names.
   */
  
  var boundAttributeSuffix = '$lit$';
  /**
   * An updateable Template that tracks the location of dynamic parts.
   */
  
  var Template = function Template(result, element) {
    var _this = this;
    
    _classCallCheck(this, Template);
    
    this.parts = [];
    this.element = element;
    var index = -1;
    var partIndex = 0;
    var nodesToRemove = [];
    
    var _prepareTemplate = function _prepareTemplate(template) {
      var content = template.content; // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
      // null
      
      var walker = document.createTreeWalker(content, 133
          /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
          , null, false); // Keeps track of the last index associated with a part. We try to delete
      // unnecessary nodes, but we never want to associate two different parts
      // to the same index. They must have a constant node between.
      
      var lastPartIndex = 0;
      
      while (walker.nextNode()) {
        index++;
        var node = walker.currentNode;
        
        if (node.nodeType === 1
        /* Node.ELEMENT_NODE */
        ) {
          if (node.hasAttributes()) {
            var attributes = node.attributes; // Per
            // https://developer.mozilla.org/en-US/docs/Web/API/NamedNodeMap,
            // attributes are not guaranteed to be returned in document order.
            // In particular, Edge/IE can return them out of order, so we cannot
            // assume a correspondance between part index and attribute index.
            
            var count = 0;
            
            for (var i = 0; i < attributes.length; i++) {
              if (attributes[i].value.indexOf(marker) >= 0) {
                count++;
              }
            }
            
            while (count-- > 0) {
              // Get the template literal section leading up to the first
              // expression in this attribute
              var stringForPart = result.strings[partIndex]; // Find the attribute name
              
              var name = lastAttributeNameRegex.exec(stringForPart)[2]; // Find the corresponding attribute
              // All bound attributes have had a suffix added in
              // TemplateResult#getHTML to opt out of special attribute
              // handling. To look up the attribute value we also need to add
              // the suffix.
              
              var attributeLookupName = name.toLowerCase() + boundAttributeSuffix;
              var attributeValue = node.getAttribute(attributeLookupName);
              var strings = attributeValue.split(markerRegex);
              
              _this.parts.push({
                type: 'attribute',
                index: index,
                name: name,
                strings: strings
              });
              
              node.removeAttribute(attributeLookupName);
              partIndex += strings.length - 1;
            }
          }
          
          if (node.tagName === 'TEMPLATE') {
            _prepareTemplate(node);
          }
        } else if (node.nodeType === 3
        /* Node.TEXT_NODE */
        ) {
          var data = node.data;
          
          if (data.indexOf(marker) >= 0) {
            var parent = node.parentNode;
            
            var _strings = data.split(markerRegex);
            
            var lastIndex = _strings.length - 1; // Generate a new text node for each literal section
            // These nodes are also used as the markers for node parts
            
            for (var _i = 0; _i < lastIndex; _i++) {
              parent.insertBefore(_strings[_i] === '' ? createMarker() : document.createTextNode(_strings[_i]), node);
              
              _this.parts.push({
                type: 'node',
                index: ++index
              });
            } // If there's no text, we must insert a comment to mark our place.
            // Else, we can trust it will stick around after cloning.
            
            
            if (_strings[lastIndex] === '') {
              parent.insertBefore(createMarker(), node);
              nodesToRemove.push(node);
            } else {
              node.data = _strings[lastIndex];
            } // We have a part for each match found
            
            
            partIndex += lastIndex;
          }
        } else if (node.nodeType === 8
        /* Node.COMMENT_NODE */
        ) {
          if (node.data === marker) {
            var _parent = node.parentNode; // Add a new marker node to be the startNode of the Part if any of
            // the following are true:
            //  * We don't have a previousSibling
            //  * The previousSibling is already the start of a previous part
            
            if (node.previousSibling === null || index === lastPartIndex) {
              index++;
              
              _parent.insertBefore(createMarker(), node);
            }
            
            lastPartIndex = index;
            
            _this.parts.push({
              type: 'node',
              index: index
            }); // If we don't have a nextSibling, keep this node so we have an end.
            // Else, we can remove it to save future costs.
            
            
            if (node.nextSibling === null) {
              node.data = '';
            } else {
              nodesToRemove.push(node);
              index--;
            }
            
            partIndex++;
          } else {
            var _i2 = -1;
            
            while ((_i2 = node.data.indexOf(marker, _i2 + 1)) !== -1) {
              // Comment node has a binding marker inside, make an inactive part
              // The binding won't work, but subsequent bindings will
              // TODO (justinfagnani): consider whether it's even worth it to
              // make bindings in comments work
              _this.parts.push({
                type: 'node',
                index: -1
              });
            }
          }
        }
      }
    };
    
    _prepareTemplate(element); // Remove text binding nodes after the walk to not disturb the TreeWalker
    
    
    for (var _i3 = 0, _nodesToRemove = nodesToRemove; _i3 < _nodesToRemove.length; _i3++) {
      var n = _nodesToRemove[_i3];
      n.parentNode.removeChild(n);
    }
  };
  var isTemplatePartActive = function isTemplatePartActive(part) {
    return part.index !== -1;
  }; // Allows `document.createComment('')` to be renamed for a
  // small manual size-savings.
  
  var createMarker = function createMarker() {
    return document.createComment('');
  };
  /**
   * This regex extracts the attribute name preceding an attribute-position
   * expression. It does this by matching the syntax allowed for attributes
   * against the string literal directly preceding the expression, assuming that
   * the expression is in an attribute-value position.
   *
   * See attributes in the HTML spec:
   * https://www.w3.org/TR/html5/syntax.html#attributes-0
   *
   * "\0-\x1F\x7F-\x9F" are Unicode control characters
   *
   * " \x09\x0a\x0c\x0d" are HTML space characters:
   * https://www.w3.org/TR/html5/infrastructure.html#space-character
   *
   * So an attribute is:
   *  * The name: any character except a control character, space character, ('),
   *    ("), ">", "=", or "/"
   *  * Followed by zero or more space characters
   *  * Followed by "="
   *  * Followed by zero or more space characters
   *  * Followed by:
   *    * Any character except space, ('), ("), "<", ">", "=", (`), or
   *    * (") then any non-("), or
   *    * (') then any non-(')
   */
  
  var lastAttributeNameRegex = /([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F \x09\x0a\x0c\x0d"'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
  
  /**
   * An instance of a `Template` that can be attached to the DOM and updated
   * with new values.
   */
  
  var TemplateInstance =
      /*#__PURE__*/
      function () {
        function TemplateInstance(template, processor, options) {
          _classCallCheck(this, TemplateInstance);
          
          this._parts = [];
          this.template = template;
          this.processor = processor;
          this.options = options;
        }
        
        _createClass(TemplateInstance, [{
          key: "update",
          value: function update(values) {
            var i = 0;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;
            
            try {
              for (var _iterator = this._parts[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var part = _step.value;
                
                if (part !== undefined) {
                  part.setValue(values[i]);
                }
                
                i++;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return != null) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
            
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;
            
            try {
              for (var _iterator2 = this._parts[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var _part = _step2.value;
                
                if (_part !== undefined) {
                  _part.commit();
                }
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
          }
        }, {
          key: "_clone",
          value: function _clone() {
            var _this = this;
            
            // When using the Custom Elements polyfill, clone the node, rather than
            // importing it, to keep the fragment in the template's document. This
            // leaves the fragment inert so custom elements won't upgrade and
            // potentially modify their contents by creating a polyfilled ShadowRoot
            // while we traverse the tree.
            var fragment = isCEPolyfill ? this.template.element.content.cloneNode(true) : document.importNode(this.template.element.content, true);
            var parts = this.template.parts;
            var partIndex = 0;
            var nodeIndex = 0;
            
            var _prepareInstance = function _prepareInstance(fragment) {
              // Edge needs all 4 parameters present; IE11 needs 3rd parameter to be
              // null
              var walker = document.createTreeWalker(fragment, 133
                  /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
                  , null, false);
              var node = walker.nextNode(); // Loop through all the nodes and parts of a template
              
              while (partIndex < parts.length && node !== null) {
                var part = parts[partIndex]; // Consecutive Parts may have the same node index, in the case of
                // multiple bound attributes on an element. So each iteration we either
                // increment the nodeIndex, if we aren't on a node with a part, or the
                // partIndex if we are. By not incrementing the nodeIndex when we find a
                // part, we allow for the next part to be associated with the current
                // node if neccessasry.
                
                if (!isTemplatePartActive(part)) {
                  _this._parts.push(undefined);
                  
                  partIndex++;
                } else if (nodeIndex === part.index) {
                  if (part.type === 'node') {
                    var _part2 = _this.processor.handleTextExpression(_this.options);
                    
                    _part2.insertAfterNode(node.previousSibling);
                    
                    _this._parts.push(_part2);
                  } else {
                    var _this$_parts;
                    
                    (_this$_parts = _this._parts).push.apply(_this$_parts, _toConsumableArray(_this.processor.handleAttributeExpressions(node, part.name, part.strings, _this.options)));
                  }
                  
                  partIndex++;
                } else {
                  nodeIndex++;
                  
                  if (node.nodeName === 'TEMPLATE') {
                    _prepareInstance(node.content);
                  }
                  
                  node = walker.nextNode();
                }
              }
            };
            
            _prepareInstance(fragment);
            
            if (isCEPolyfill) {
              document.adoptNode(fragment);
              customElements.upgrade(fragment);
            }
            
            return fragment;
          }
        }]);
        
        return TemplateInstance;
      }();
  
  /**
   * The return type of `html`, which holds a Template and the values from
   * interpolated expressions.
   */
  
  var TemplateResult =
      /*#__PURE__*/
      function () {
        function TemplateResult(strings, values, type, processor) {
          _classCallCheck(this, TemplateResult);
          
          this.strings = strings;
          this.values = values;
          this.type = type;
          this.processor = processor;
        }
        /**
         * Returns a string of HTML used to create a `<template>` element.
         */
        
        
        _createClass(TemplateResult, [{
          key: "getHTML",
          value: function getHTML() {
            var endIndex = this.strings.length - 1;
            var html = '';
            
            for (var i = 0; i < endIndex; i++) {
              var s = this.strings[i]; // This exec() call does two things:
              // 1) Appends a suffix to the bound attribute name to opt out of special
              // attribute value parsing that IE11 and Edge do, like for style and
              // many SVG attributes. The Template class also appends the same suffix
              // when looking up attributes to create Parts.
              // 2) Adds an unquoted-attribute-safe marker for the first expression in
              // an attribute. Subsequent attribute expressions will use node markers,
              // and this is safe since attributes with multiple expressions are
              // guaranteed to be quoted.
              
              var match = lastAttributeNameRegex.exec(s);
              
              if (match) {
                // We're starting a new bound attribute.
                // Add the safe attribute suffix, and use unquoted-attribute-safe
                // marker.
                html += s.substr(0, match.index) + match[1] + match[2] + boundAttributeSuffix + match[3] + marker;
              } else {
                // We're either in a bound node, or trailing bound attribute.
                // Either way, nodeMarker is safe to use.
                html += s + nodeMarker;
              }
            }
            
            return html + this.strings[endIndex];
          }
        }, {
          key: "getTemplateElement",
          value: function getTemplateElement() {
            var template = document.createElement('template');
            template.innerHTML = this.getHTML();
            return template;
          }
        }]);
        
        return TemplateResult;
      }();
  
  var isPrimitive = function isPrimitive(value) {
    return value === null || !(_typeof(value) === 'object' || typeof value === 'function');
  };
  /**
   * Sets attribute values for AttributeParts, so that the value is only set once
   * even if there are multiple parts for an attribute.
   */
  
  var AttributeCommitter =
      /*#__PURE__*/
      function () {
        function AttributeCommitter(element, name, strings) {
          _classCallCheck(this, AttributeCommitter);
          
          this.dirty = true;
          this.element = element;
          this.name = name;
          this.strings = strings;
          this.parts = [];
          
          for (var i = 0; i < strings.length - 1; i++) {
            this.parts[i] = this._createPart();
          }
        }
        /**
         * Creates a single part. Override this to create a differnt type of part.
         */
        
        
        _createClass(AttributeCommitter, [{
          key: "_createPart",
          value: function _createPart() {
            return new AttributePart(this);
          }
        }, {
          key: "_getValue",
          value: function _getValue() {
            var strings = this.strings;
            var l = strings.length - 1;
            var text = '';
            
            for (var i = 0; i < l; i++) {
              text += strings[i];
              var part = this.parts[i];
              
              if (part !== undefined) {
                var v = part.value;
                
                if (v != null && (Array.isArray(v) || // tslint:disable-next-line:no-any
                                  typeof v !== 'string' && v[Symbol.iterator])) {
                  var _iteratorNormalCompletion = true;
                  var _didIteratorError = false;
                  var _iteratorError = undefined;
                  
                  try {
                    for (var _iterator = v[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                      var t = _step.value;
                      text += typeof t === 'string' ? t : String(t);
                    }
                  } catch (err) {
                    _didIteratorError = true;
                    _iteratorError = err;
                  } finally {
                    try {
                      if (!_iteratorNormalCompletion && _iterator.return != null) {
                        _iterator.return();
                      }
                    } finally {
                      if (_didIteratorError) {
                        throw _iteratorError;
                      }
                    }
                  }
                } else {
                  text += typeof v === 'string' ? v : String(v);
                }
              }
            }
            
            text += strings[l];
            return text;
          }
        }, {
          key: "commit",
          value: function commit() {
            if (this.dirty) {
              this.dirty = false;
              this.element.setAttribute(this.name, this._getValue());
            }
          }
        }]);
        
        return AttributeCommitter;
      }();
  var AttributePart =
      /*#__PURE__*/
      function () {
        function AttributePart(comitter) {
          _classCallCheck(this, AttributePart);
          
          this.value = undefined;
          this.committer = comitter;
        }
        
        _createClass(AttributePart, [{
          key: "setValue",
          value: function setValue(value) {
            if (value !== noChange && (!isPrimitive(value) || value !== this.value)) {
              this.value = value; // If the value is a not a directive, dirty the committer so that it'll
              // call setAttribute. If the value is a directive, it'll dirty the
              // committer if it calls setValue().
              
              if (!isDirective(value)) {
                this.committer.dirty = true;
              }
            }
          }
        }, {
          key: "commit",
          value: function commit() {
            while (isDirective(this.value)) {
              var directive = this.value;
              this.value = noChange;
              directive(this);
            }
            
            if (this.value === noChange) {
              return;
            }
            
            this.committer.commit();
          }
        }]);
        
        return AttributePart;
      }();
  var NodePart =
      /*#__PURE__*/
      function () {
        function NodePart(options) {
          _classCallCheck(this, NodePart);
          
          this.value = undefined;
          this._pendingValue = undefined;
          this.options = options;
        }
        /**
         * Inserts this part into a container.
         *
         * This part must be empty, as its contents are not automatically moved.
         */
        
        
        _createClass(NodePart, [{
          key: "appendInto",
          value: function appendInto(container) {
            this.startNode = container.appendChild(createMarker());
            this.endNode = container.appendChild(createMarker());
          }
          /**
           * Inserts this part between `ref` and `ref`'s next sibling. Both `ref` and
           * its next sibling must be static, unchanging nodes such as those that appear
           * in a literal section of a template.
           *
           * This part must be empty, as its contents are not automatically moved.
           */
          
        }, {
          key: "insertAfterNode",
          value: function insertAfterNode(ref) {
            this.startNode = ref;
            this.endNode = ref.nextSibling;
          }
          /**
           * Appends this part into a parent part.
           *
           * This part must be empty, as its contents are not automatically moved.
           */
          
        }, {
          key: "appendIntoPart",
          value: function appendIntoPart(part) {
            part._insert(this.startNode = createMarker());
            
            part._insert(this.endNode = createMarker());
          }
          /**
           * Appends this part after `ref`
           *
           * This part must be empty, as its contents are not automatically moved.
           */
          
        }, {
          key: "insertAfterPart",
          value: function insertAfterPart(ref) {
            ref._insert(this.startNode = createMarker());
            
            this.endNode = ref.endNode;
            ref.endNode = this.startNode;
          }
        }, {
          key: "setValue",
          value: function setValue(value) {
            this._pendingValue = value;
          }
        }, {
          key: "commit",
          value: function commit() {
            while (isDirective(this._pendingValue)) {
              var directive = this._pendingValue;
              this._pendingValue = noChange;
              directive(this);
            }
            
            var value = this._pendingValue;
            
            if (value === noChange) {
              return;
            }
            
            if (isPrimitive(value)) {
              if (value !== this.value) {
                this._commitText(value);
              }
            } else if (value instanceof TemplateResult) {
              this._commitTemplateResult(value);
            } else if (value instanceof Node) {
              this._commitNode(value);
            } else if (Array.isArray(value) || // tslint:disable-next-line:no-any
                       value[Symbol.iterator]) {
              this._commitIterable(value);
            } else if (value === nothing) {
              this.value = nothing;
              this.clear();
            } else {
              // Fallback, will render the string representation
              this._commitText(value);
            }
          }
        }, {
          key: "_insert",
          value: function _insert(node) {
            this.endNode.parentNode.insertBefore(node, this.endNode);
          }
        }, {
          key: "_commitNode",
          value: function _commitNode(value) {
            if (this.value === value) {
              return;
            }
            
            this.clear();
            
            this._insert(value);
            
            this.value = value;
          }
        }, {
          key: "_commitText",
          value: function _commitText(value) {
            var node = this.startNode.nextSibling;
            value = value == null ? '' : value;
            
            if (node === this.endNode.previousSibling && node.nodeType === 3
            /* Node.TEXT_NODE */
            ) {
              // If we only have a single text node between the markers, we can just
              // set its value, rather than replacing it.
              // TODO(justinfagnani): Can we just check if this.value is primitive?
              node.data = value;
            } else {
              this._commitNode(document.createTextNode(typeof value === 'string' ? value : String(value)));
            }
            
            this.value = value;
          }
        }, {
          key: "_commitTemplateResult",
          value: function _commitTemplateResult(value) {
            var template = this.options.templateFactory(value);
            
            if (this.value instanceof TemplateInstance && this.value.template === template) {
              this.value.update(value.values);
            } else {
              // Make sure we propagate the template processor from the TemplateResult
              // so that we use its syntax extension, etc. The template factory comes
              // from the render function options so that it can control template
              // caching and preprocessing.
              var instance = new TemplateInstance(template, value.processor, this.options);
              
              var fragment = instance._clone();
              
              instance.update(value.values);
              
              this._commitNode(fragment);
              
              this.value = instance;
            }
          }
        }, {
          key: "_commitIterable",
          value: function _commitIterable(value) {
            // For an Iterable, we create a new InstancePart per item, then set its
            // value to the item. This is a little bit of overhead for every item in
            // an Iterable, but it lets us recurse easily and efficiently update Arrays
            // of TemplateResults that will be commonly returned from expressions like:
            // array.map((i) => html`${i}`), by reusing existing TemplateInstances.
            // If _value is an array, then the previous render was of an
            // iterable and _value will contain the NodeParts from the previous
            // render. If _value is not an array, clear this part and make a new
            // array for NodeParts.
            if (!Array.isArray(this.value)) {
              this.value = [];
              this.clear();
            } // Lets us keep track of how many items we stamped so we can clear leftover
            // items from a previous render
            
            
            var itemParts = this.value;
            var partIndex = 0;
            var itemPart;
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;
            
            try {
              for (var _iterator2 = value[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var item = _step2.value;
                // Try to reuse an existing part
                itemPart = itemParts[partIndex]; // If no existing part, create a new one
                
                if (itemPart === undefined) {
                  itemPart = new NodePart(this.options);
                  itemParts.push(itemPart);
                  
                  if (partIndex === 0) {
                    itemPart.appendIntoPart(this);
                  } else {
                    itemPart.insertAfterPart(itemParts[partIndex - 1]);
                  }
                }
                
                itemPart.setValue(item);
                itemPart.commit();
                partIndex++;
              }
            } catch (err) {
              _didIteratorError2 = true;
              _iteratorError2 = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
                  _iterator2.return();
                }
              } finally {
                if (_didIteratorError2) {
                  throw _iteratorError2;
                }
              }
            }
            
            if (partIndex < itemParts.length) {
              // Truncate the parts array so _value reflects the current state
              itemParts.length = partIndex;
              this.clear(itemPart && itemPart.endNode);
            }
          }
        }, {
          key: "clear",
          value: function clear() {
            var startNode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.startNode;
            removeNodes(this.startNode.parentNode, startNode.nextSibling, this.endNode);
          }
        }]);
        
        return NodePart;
      }();
  /**
   * Implements a boolean attribute, roughly as defined in the HTML
   * specification.
   *
   * If the value is truthy, then the attribute is present with a value of
   * ''. If the value is falsey, the attribute is removed.
   */
  
  var BooleanAttributePart =
      /*#__PURE__*/
      function () {
        function BooleanAttributePart(element, name, strings) {
          _classCallCheck(this, BooleanAttributePart);
          
          this.value = undefined;
          this._pendingValue = undefined;
          
          if (strings.length !== 2 || strings[0] !== '' || strings[1] !== '') {
            throw new Error('Boolean attributes can only contain a single expression');
          }
          
          this.element = element;
          this.name = name;
          this.strings = strings;
        }
        
        _createClass(BooleanAttributePart, [{
          key: "setValue",
          value: function setValue(value) {
            this._pendingValue = value;
          }
        }, {
          key: "commit",
          value: function commit() {
            while (isDirective(this._pendingValue)) {
              var directive = this._pendingValue;
              this._pendingValue = noChange;
              directive(this);
            }
            
            if (this._pendingValue === noChange) {
              return;
            }
            
            var value = !!this._pendingValue;
            
            if (this.value !== value) {
              if (value) {
                this.element.setAttribute(this.name, '');
              } else {
                this.element.removeAttribute(this.name);
              }
            }
            
            this.value = value;
            this._pendingValue = noChange;
          }
        }]);
        
        return BooleanAttributePart;
      }();
  /**
   * Sets attribute values for PropertyParts, so that the value is only set once
   * even if there are multiple parts for a property.
   *
   * If an expression controls the whole property value, then the value is simply
   * assigned to the property under control. If there are string literals or
   * multiple expressions, then the strings are expressions are interpolated into
   * a string first.
   */
  
  var PropertyCommitter =
      /*#__PURE__*/
      function (_AttributeCommitter) {
        _inherits(PropertyCommitter, _AttributeCommitter);
        
        function PropertyCommitter(element, name, strings) {
          var _this;
          
          _classCallCheck(this, PropertyCommitter);
          
          _this = _possibleConstructorReturn(this, _getPrototypeOf(PropertyCommitter).call(this, element, name, strings));
          _this.single = strings.length === 2 && strings[0] === '' && strings[1] === '';
          return _this;
        }
        
        _createClass(PropertyCommitter, [{
          key: "_createPart",
          value: function _createPart() {
            return new PropertyPart(this);
          }
        }, {
          key: "_getValue",
          value: function _getValue() {
            if (this.single) {
              return this.parts[0].value;
            }
            
            return _get(_getPrototypeOf(PropertyCommitter.prototype), "_getValue", this).call(this);
          }
        }, {
          key: "commit",
          value: function commit() {
            if (this.dirty) {
              this.dirty = false; // tslint:disable-next-line:no-any
              
              this.element[this.name] = this._getValue();
            }
          }
        }]);
        
        return PropertyCommitter;
      }(AttributeCommitter);
  var PropertyPart =
      /*#__PURE__*/
      function (_AttributePart) {
        _inherits(PropertyPart, _AttributePart);
        
        function PropertyPart() {
          _classCallCheck(this, PropertyPart);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(PropertyPart).apply(this, arguments));
        }
        
        return PropertyPart;
      }(AttributePart); // Detect event listener options support. If the `capture` property is read
  // from the options object, then options are supported. If not, then the thrid
  // argument to add/removeEventListener is interpreted as the boolean capture
  // value so we should only pass the `capture` property.
  
  var eventOptionsSupported = false;
  
  try {
    var options = {
      get capture() {
        eventOptionsSupported = true;
        return false;
      }
      
    }; // tslint:disable-next-line:no-any
    
    window.addEventListener('test', options, options); // tslint:disable-next-line:no-any
    
    window.removeEventListener('test', options, options);
  } catch (_e) {}
  
  var EventPart =
      /*#__PURE__*/
      function () {
        function EventPart(element, eventName, eventContext) {
          var _this2 = this;
          
          _classCallCheck(this, EventPart);
          
          this.value = undefined;
          this._pendingValue = undefined;
          this.element = element;
          this.eventName = eventName;
          this.eventContext = eventContext;
          
          this._boundHandleEvent = function (e) {
            return _this2.handleEvent(e);
          };
        }
        
        _createClass(EventPart, [{
          key: "setValue",
          value: function setValue(value) {
            this._pendingValue = value;
          }
        }, {
          key: "commit",
          value: function commit() {
            while (isDirective(this._pendingValue)) {
              var directive = this._pendingValue;
              this._pendingValue = noChange;
              directive(this);
            }
            
            if (this._pendingValue === noChange) {
              return;
            }
            
            var newListener = this._pendingValue;
            var oldListener = this.value;
            var shouldRemoveListener = newListener == null || oldListener != null && (newListener.capture !== oldListener.capture || newListener.once !== oldListener.once || newListener.passive !== oldListener.passive);
            var shouldAddListener = newListener != null && (oldListener == null || shouldRemoveListener);
            
            if (shouldRemoveListener) {
              this.element.removeEventListener(this.eventName, this._boundHandleEvent, this._options);
            }
            
            if (shouldAddListener) {
              this._options = getOptions(newListener);
              this.element.addEventListener(this.eventName, this._boundHandleEvent, this._options);
            }
            
            this.value = newListener;
            this._pendingValue = noChange;
          }
        }, {
          key: "handleEvent",
          value: function handleEvent(event) {
            if (typeof this.value === 'function') {
              this.value.call(this.eventContext || this.element, event);
            } else {
              this.value.handleEvent(event);
            }
          }
        }]);
        
        return EventPart;
      }(); // We copy options because of the inconsistent behavior of browsers when reading
  // the third argument of add/removeEventListener. IE11 doesn't support options
  // at all. Chrome 41 only reads `capture` if the argument is an object.
  
  var getOptions = function getOptions(o) {
    return o && (eventOptionsSupported ? {
      capture: o.capture,
      passive: o.passive,
      once: o.once
    } : o.capture);
  };
  
  /**
   * Creates Parts when a template is instantiated.
   */
  
  var DefaultTemplateProcessor =
      /*#__PURE__*/
      function () {
        function DefaultTemplateProcessor() {
          _classCallCheck(this, DefaultTemplateProcessor);
        }
        
        _createClass(DefaultTemplateProcessor, [{
          key: "handleAttributeExpressions",
          
          /**
           * Create parts for an attribute-position binding, given the event, attribute
           * name, and string literals.
           *
           * @param element The element containing the binding
           * @param name  The attribute name
           * @param strings The string literals. There are always at least two strings,
           *   event for fully-controlled bindings with a single expression.
           */
          value: function handleAttributeExpressions(element, name, strings, options) {
            var prefix = name[0];
            
            if (prefix === '.') {
              var _comitter = new PropertyCommitter(element, name.slice(1), strings);
              
              return _comitter.parts;
            }
            
            if (prefix === '@') {
              return [new EventPart(element, name.slice(1), options.eventContext)];
            }
            
            if (prefix === '?') {
              return [new BooleanAttributePart(element, name.slice(1), strings)];
            }
            
            var comitter = new AttributeCommitter(element, name, strings);
            return comitter.parts;
          }
          /**
           * Create parts for a text-position binding.
           * @param templateFactory
           */
          
        }, {
          key: "handleTextExpression",
          value: function handleTextExpression(options) {
            return new NodePart(options);
          }
        }]);
        
        return DefaultTemplateProcessor;
      }();
  var defaultTemplateProcessor = new DefaultTemplateProcessor();
  
  /**
   * The default TemplateFactory which caches Templates keyed on
   * result.type and result.strings.
   */
  
  function templateFactory(result) {
    var templateCache = templateCaches.get(result.type);
    
    if (templateCache === undefined) {
      templateCache = {
        stringsArray: new WeakMap(),
        keyString: new Map()
      };
      templateCaches.set(result.type, templateCache);
    }
    
    var template = templateCache.stringsArray.get(result.strings);
    
    if (template !== undefined) {
      return template;
    } // If the TemplateStringsArray is new, generate a key from the strings
    // This key is shared between all templates with identical content
    
    
    var key = result.strings.join(marker); // Check if we already have a Template for this key
    
    template = templateCache.keyString.get(key);
    
    if (template === undefined) {
      // If we have not seen this key before, create a new Template
      template = new Template(result, result.getTemplateElement()); // Cache the Template for this key
      
      templateCache.keyString.set(key, template);
    } // Cache all future queries for this TemplateStringsArray
    
    
    templateCache.stringsArray.set(result.strings, template);
    return template;
  }
  var templateCaches = new Map();
  
  var parts = new WeakMap();
  /**
   * Renders a template to a container.
   *
   * To update a container with new values, reevaluate the template literal and
   * call `render` with the new result.
   *
   * @param result a TemplateResult created by evaluating a template tag like
   *     `html` or `svg`.
   * @param container A DOM parent to render to. The entire contents are either
   *     replaced, or efficiently updated if the same result type was previous
   *     rendered there.
   * @param options RenderOptions for the entire render tree rendered to this
   *     container. Render options must *not* change between renders to the same
   *     container, as those changes will not effect previously rendered DOM.
   */
  
  var render = function render(result, container, options) {
    var part = parts.get(container);
    
    if (part === undefined) {
      removeNodes(container, container.firstChild);
      parts.set(container, part = new NodePart(Object.assign({
        templateFactory: templateFactory
      }, options)));
      part.appendInto(container);
    }
    
    part.setValue(result);
    part.commit();
  };
  
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  // This line will be used in regexes to search for lit-html usage.
  // TODO(justinfagnani): inject version number at build time
  
  (window['litHtmlVersions'] || (window['litHtmlVersions'] = [])).push('1.0.0');
  /**
   * Interprets a template literal as an HTML template that can efficiently
   * render to and update a container.
   */
  
  var html = function html(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }
    
    return new TemplateResult(strings, values, 'html', defaultTemplateProcessor);
  };
  
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var walkerNodeFilter = 133
      /* NodeFilter.SHOW_{ELEMENT|COMMENT|TEXT} */
  ;
  /**
   * Removes the list of nodes from a Template safely. In addition to removing
   * nodes from the Template, the Template part indices are updated to match
   * the mutated Template DOM.
   *
   * As the template is walked the removal state is tracked and
   * part indices are adjusted as needed.
   *
   * div
   *   div#1 (remove) <-- start removing (removing node is div#1)
   *     div
   *       div#2 (remove)  <-- continue removing (removing node is still div#1)
   *         div
   * div <-- stop removing since previous sibling is the removing node (div#1,
   * removed 4 nodes)
   */
  
  function removeNodesFromTemplate(template, nodesToRemove) {
    var content = template.element.content,
        parts = template.parts;
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var part = parts[partIndex];
    var nodeIndex = -1;
    var removeCount = 0;
    var nodesToRemoveInTemplate = [];
    var currentRemovingNode = null;
    
    while (walker.nextNode()) {
      nodeIndex++;
      var node = walker.currentNode; // End removal if stepped past the removing node
      
      if (node.previousSibling === currentRemovingNode) {
        currentRemovingNode = null;
      } // A node to remove was found in the template
      
      
      if (nodesToRemove.has(node)) {
        nodesToRemoveInTemplate.push(node); // Track node we're removing
        
        if (currentRemovingNode === null) {
          currentRemovingNode = node;
        }
      } // When removing, increment count by which to adjust subsequent part indices
      
      
      if (currentRemovingNode !== null) {
        removeCount++;
      }
      
      while (part !== undefined && part.index === nodeIndex) {
        // If part is in a removed node deactivate it by setting index to -1 or
        // adjust the index as needed.
        part.index = currentRemovingNode !== null ? -1 : part.index - removeCount; // go to the next active part.
        
        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
        part = parts[partIndex];
      }
    }
    
    nodesToRemoveInTemplate.forEach(function (n) {
      return n.parentNode.removeChild(n);
    });
  }
  
  var countNodes = function countNodes(node) {
    var count = node.nodeType === 11
        /* Node.DOCUMENT_FRAGMENT_NODE */
                ? 0 : 1;
    var walker = document.createTreeWalker(node, walkerNodeFilter, null, false);
    
    while (walker.nextNode()) {
      count++;
    }
    
    return count;
  };
  
  var nextActiveIndexInTemplateParts = function nextActiveIndexInTemplateParts(parts) {
    var startIndex = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : -1;
    
    for (var i = startIndex + 1; i < parts.length; i++) {
      var part = parts[i];
      
      if (isTemplatePartActive(part)) {
        return i;
      }
    }
    
    return -1;
  };
  /**
   * Inserts the given node into the Template, optionally before the given
   * refNode. In addition to inserting the node into the Template, the Template
   * part indices are updated to match the mutated Template DOM.
   */
  
  
  function insertNodeIntoTemplate(template, node) {
    var refNode = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var content = template.element.content,
        parts = template.parts; // If there's no refNode, then put node at end of template.
    // No part indices need to be shifted in this case.
    
    if (refNode === null || refNode === undefined) {
      content.appendChild(node);
      return;
    }
    
    var walker = document.createTreeWalker(content, walkerNodeFilter, null, false);
    var partIndex = nextActiveIndexInTemplateParts(parts);
    var insertCount = 0;
    var walkerIndex = -1;
    
    while (walker.nextNode()) {
      walkerIndex++;
      var walkerNode = walker.currentNode;
      
      if (walkerNode === refNode) {
        insertCount = countNodes(node);
        refNode.parentNode.insertBefore(node, refNode);
      }
      
      while (partIndex !== -1 && parts[partIndex].index === walkerIndex) {
        // If we've inserted the node, simply adjust all subsequent parts
        if (insertCount > 0) {
          while (partIndex !== -1) {
            parts[partIndex].index += insertCount;
            partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
          }
          
          return;
        }
        
        partIndex = nextActiveIndexInTemplateParts(parts, partIndex);
      }
    }
  }
  
  var getTemplateCacheKey = function getTemplateCacheKey(type, scopeName) {
    return "".concat(type, "--").concat(scopeName);
  };
  
  var compatibleShadyCSSVersion = true;
  
  if (typeof window.ShadyCSS === 'undefined') {
    compatibleShadyCSSVersion = false;
  } else if (typeof window.ShadyCSS.prepareTemplateDom === 'undefined') {
    console.warn("Incompatible ShadyCSS version detected." + "Please update to at least @webcomponents/webcomponentsjs@2.0.2 and" + "@webcomponents/shadycss@1.3.1.");
    compatibleShadyCSSVersion = false;
  }
  /**
   * Template factory which scopes template DOM using ShadyCSS.
   * @param scopeName {string}
   */
  
  
  var shadyTemplateFactory = function shadyTemplateFactory(scopeName) {
    return function (result) {
      var cacheKey = getTemplateCacheKey(result.type, scopeName);
      var templateCache = templateCaches.get(cacheKey);
      
      if (templateCache === undefined) {
        templateCache = {
          stringsArray: new WeakMap(),
          keyString: new Map()
        };
        templateCaches.set(cacheKey, templateCache);
      }
      
      var template = templateCache.stringsArray.get(result.strings);
      
      if (template !== undefined) {
        return template;
      }
      
      var key = result.strings.join(marker);
      template = templateCache.keyString.get(key);
      
      if (template === undefined) {
        var element = result.getTemplateElement();
        
        if (compatibleShadyCSSVersion) {
          window.ShadyCSS.prepareTemplateDom(element, scopeName);
        }
        
        template = new Template(result, element);
        templateCache.keyString.set(key, template);
      }
      
      templateCache.stringsArray.set(result.strings, template);
      return template;
    };
  };
  
  var TEMPLATE_TYPES = ['html', 'svg'];
  /**
   * Removes all style elements from Templates for the given scopeName.
   */
  
  var removeStylesFromLitTemplates = function removeStylesFromLitTemplates(scopeName) {
    TEMPLATE_TYPES.forEach(function (type) {
      var templates = templateCaches.get(getTemplateCacheKey(type, scopeName));
      
      if (templates !== undefined) {
        templates.keyString.forEach(function (template) {
          var content = template.element.content; // IE 11 doesn't support the iterable param Set constructor
          
          var styles = new Set();
          Array.from(content.querySelectorAll('style')).forEach(function (s) {
            styles.add(s);
          });
          removeNodesFromTemplate(template, styles);
        });
      }
    });
  };
  
  var shadyRenderSet = new Set();
  /**
   * For the given scope name, ensures that ShadyCSS style scoping is performed.
   * This is done just once per scope name so the fragment and template cannot
   * be modified.
   * (1) extracts styles from the rendered fragment and hands them to ShadyCSS
   * to be scoped and appended to the document
   * (2) removes style elements from all lit-html Templates for this scope name.
   *
   * Note, <style> elements can only be placed into templates for the
   * initial rendering of the scope. If <style> elements are included in templates
   * dynamically rendered to the scope (after the first scope render), they will
   * not be scoped and the <style> will be left in the template and rendered
   * output.
   */
  
  var prepareTemplateStyles = function prepareTemplateStyles(renderedDOM, template, scopeName) {
    shadyRenderSet.add(scopeName); // Move styles out of rendered DOM and store.
    
    var styles = renderedDOM.querySelectorAll('style'); // If there are no styles, skip unnecessary work
    
    if (styles.length === 0) {
      // Ensure prepareTemplateStyles is called to support adding
      // styles via `prepareAdoptedCssText` since that requires that
      // `prepareTemplateStyles` is called.
      window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
      return;
    }
    
    var condensedStyle = document.createElement('style'); // Collect styles into a single style. This helps us make sure ShadyCSS
    // manipulations will not prevent us from being able to fix up template
    // part indices.
    // NOTE: collecting styles is inefficient for browsers but ShadyCSS
    // currently does this anyway. When it does not, this should be changed.
    
    for (var i = 0; i < styles.length; i++) {
      var style = styles[i];
      style.parentNode.removeChild(style);
      condensedStyle.textContent += style.textContent;
    } // Remove styles from nested templates in this scope.
    
    
    removeStylesFromLitTemplates(scopeName); // And then put the condensed style into the "root" template passed in as
    // `template`.
    
    insertNodeIntoTemplate(template, condensedStyle, template.element.content.firstChild); // Note, it's important that ShadyCSS gets the template that `lit-html`
    // will actually render so that it can update the style inside when
    // needed (e.g. @apply native Shadow DOM case).
    
    window.ShadyCSS.prepareTemplateStyles(template.element, scopeName);
    
    if (window.ShadyCSS.nativeShadow) {
      // When in native Shadow DOM, re-add styling to rendered content using
      // the style ShadyCSS produced.
      var _style = template.element.content.querySelector('style');
      
      renderedDOM.insertBefore(_style.cloneNode(true), renderedDOM.firstChild);
    } else {
      // When not in native Shadow DOM, at this point ShadyCSS will have
      // removed the style from the lit template and parts will be broken as a
      // result. To fix this, we put back the style node ShadyCSS removed
      // and then tell lit to remove that node from the template.
      // NOTE, ShadyCSS creates its own style so we can safely add/remove
      // `condensedStyle` here.
      template.element.content.insertBefore(condensedStyle, template.element.content.firstChild);
      var removes = new Set();
      removes.add(condensedStyle);
      removeNodesFromTemplate(template, removes);
    }
  };
  /**
   * Extension to the standard `render` method which supports rendering
   * to ShadowRoots when the ShadyDOM (https://github.com/webcomponents/shadydom)
   * and ShadyCSS (https://github.com/webcomponents/shadycss) polyfills are used
   * or when the webcomponentsjs
   * (https://github.com/webcomponents/webcomponentsjs) polyfill is used.
   *
   * Adds a `scopeName` option which is used to scope element DOM and stylesheets
   * when native ShadowDOM is unavailable. The `scopeName` will be added to
   * the class attribute of all rendered DOM. In addition, any style elements will
   * be automatically re-written with this `scopeName` selector and moved out
   * of the rendered DOM and into the document `<head>`.
   *
   * It is common to use this render method in conjunction with a custom element
   * which renders a shadowRoot. When this is done, typically the element's
   * `localName` should be used as the `scopeName`.
   *
   * In addition to DOM scoping, ShadyCSS also supports a basic shim for css
   * custom properties (needed only on older browsers like IE11) and a shim for
   * a deprecated feature called `@apply` that supports applying a set of css
   * custom properties to a given location.
   *
   * Usage considerations:
   *
   * * Part values in `<style>` elements are only applied the first time a given
   * `scopeName` renders. Subsequent changes to parts in style elements will have
   * no effect. Because of this, parts in style elements should only be used for
   * values that will never change, for example parts that set scope-wide theme
   * values or parts which render shared style elements.
   *
   * * Note, due to a limitation of the ShadyDOM polyfill, rendering in a
   * custom element's `constructor` is not supported. Instead rendering should
   * either done asynchronously, for example at microtask timing (for example
   * `Promise.resolve()`), or be deferred until the first time the element's
   * `connectedCallback` runs.
   *
   * Usage considerations when using shimmed custom properties or `@apply`:
   *
   * * Whenever any dynamic changes are made which affect
   * css custom properties, `ShadyCSS.styleElement(element)` must be called
   * to update the element. There are two cases when this is needed:
   * (1) the element is connected to a new parent, (2) a class is added to the
   * element that causes it to match different custom properties.
   * To address the first case when rendering a custom element, `styleElement`
   * should be called in the element's `connectedCallback`.
   *
   * * Shimmed custom properties may only be defined either for an entire
   * shadowRoot (for example, in a `:host` rule) or via a rule that directly
   * matches an element with a shadowRoot. In other words, instead of flowing from
   * parent to child as do native css custom properties, shimmed custom properties
   * flow only from shadowRoots to nested shadowRoots.
   *
   * * When using `@apply` mixing css shorthand property names with
   * non-shorthand names (for example `border` and `border-width`) is not
   * supported.
   */
  
  
  var render$1 = function render$1(result, container, options) {
    var scopeName = options.scopeName;
    var hasRendered = parts.has(container);
    var needsScoping = container instanceof ShadowRoot && compatibleShadyCSSVersion && result instanceof TemplateResult; // Handle first render to a scope specially...
    
    var firstScopeRender = needsScoping && !shadyRenderSet.has(scopeName); // On first scope render, render into a fragment; this cannot be a single
    // fragment that is reused since nested renders can occur synchronously.
    
    var renderContainer = firstScopeRender ? document.createDocumentFragment() : container;
    render(result, renderContainer, Object.assign({
      templateFactory: shadyTemplateFactory(scopeName)
    }, options)); // When performing first scope render,
    // (1) We've rendered into a fragment so that there's a chance to
    // `prepareTemplateStyles` before sub-elements hit the DOM
    // (which might cause them to render based on a common pattern of
    // rendering in a custom element's `connectedCallback`);
    // (2) Scope the template with ShadyCSS one time only for this scope.
    // (3) Render the fragment into the container and make sure the
    // container knows its `part` is the one we just rendered. This ensures
    // DOM will be re-used on subsequent renders.
    
    if (firstScopeRender) {
      var part = parts.get(renderContainer);
      parts.delete(renderContainer);
      
      if (part.value instanceof TemplateInstance) {
        prepareTemplateStyles(renderContainer, part.value.template, scopeName);
      }
      
      removeNodes(container, container.firstChild);
      container.appendChild(renderContainer);
      parts.set(container, part);
    } // After elements have hit the DOM, update styling if this is the
    // initial render to this container.
    // This is needed whenever dynamic changes are made so it would be
    // safest to do every render; however, this would regress performance
    // so we leave it up to the user to call `ShadyCSSS.styleElement`
    // for dynamic changes.
    
    
    if (!hasRendered && needsScoping) {
      window.ShadyCSS.styleElement(container.host);
    }
  };
  
  function createCommonjsModule(fn, module) {
    return module = { exports: {} }, fn(module, module.exports), module.exports;
  }
  
  var runtime = createCommonjsModule(function (module) {
    /**
     * Copyright (c) 2014-present, Facebook, Inc.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    !function (global) {
      
      var Op = Object.prototype;
      var hasOwn = Op.hasOwnProperty;
      var undefined$1; // More compressible than void 0.
      
      var $Symbol = typeof Symbol === "function" ? Symbol : {};
      var iteratorSymbol = $Symbol.iterator || "@@iterator";
      var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
      var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
      var runtime = global.regeneratorRuntime;
      
      if (runtime) {
        {
          // If regeneratorRuntime is defined globally and we're in a module,
          // make the exports object identical to regeneratorRuntime.
          module.exports = runtime;
        } // Don't bother evaluating the rest of this file if the runtime was
        // already defined globally.
        
        
        return;
      } // Define the runtime globally (as expected by generated code) as either
      // module.exports (if we're in a module) or a new, empty object.
      
      
      runtime = global.regeneratorRuntime = module.exports;
      
      function wrap(innerFn, outerFn, self, tryLocsList) {
        // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
        var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
        var generator = Object.create(protoGenerator.prototype);
        var context = new Context(tryLocsList || []); // The ._invoke method unifies the implementations of the .next,
        // .throw, and .return methods.
        
        generator._invoke = makeInvokeMethod(innerFn, self, context);
        return generator;
      }
      
      runtime.wrap = wrap; // Try/catch helper to minimize deoptimizations. Returns a completion
      // record like context.tryEntries[i].completion. This interface could
      // have been (and was previously) designed to take a closure to be
      // invoked without arguments, but in all the cases we care about we
      // already have an existing method we want to call, so there's no need
      // to create a new function object. We can even get away with assuming
      // the method takes exactly one argument, since that happens to be true
      // in every case, so we don't have to touch the arguments object. The
      // only additional allocation required is the completion record, which
      // has a stable shape and so hopefully should be cheap to allocate.
      
      function tryCatch(fn, obj, arg) {
        try {
          return {
            type: "normal",
            arg: fn.call(obj, arg)
          };
        } catch (err) {
          return {
            type: "throw",
            arg: err
          };
        }
      }
      
      var GenStateSuspendedStart = "suspendedStart";
      var GenStateSuspendedYield = "suspendedYield";
      var GenStateExecuting = "executing";
      var GenStateCompleted = "completed"; // Returning this object from the innerFn has the same effect as
      // breaking out of the dispatch switch statement.
      
      var ContinueSentinel = {}; // Dummy constructor functions that we use as the .constructor and
      // .constructor.prototype properties for functions that return Generator
      // objects. For full spec compliance, you may wish to configure your
      // minifier not to mangle the names of these two functions.
      
      function Generator() {}
      
      function GeneratorFunction() {}
      
      function GeneratorFunctionPrototype() {} // This is a polyfill for %IteratorPrototype% for environments that
      // don't natively support it.
      
      
      var IteratorPrototype = {};
      
      IteratorPrototype[iteratorSymbol] = function () {
        return this;
      };
      
      var getProto = Object.getPrototypeOf;
      var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
      
      if (NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
        // This environment has a native %IteratorPrototype%; use it instead
        // of the polyfill.
        IteratorPrototype = NativeIteratorPrototype;
      }
      
      var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
      GeneratorFunction.prototype = Gp.constructor = GeneratorFunctionPrototype;
      GeneratorFunctionPrototype.constructor = GeneratorFunction;
      GeneratorFunctionPrototype[toStringTagSymbol] = GeneratorFunction.displayName = "GeneratorFunction"; // Helper for defining the .next, .throw, and .return methods of the
      // Iterator interface in terms of a single ._invoke method.
      
      function defineIteratorMethods(prototype) {
        ["next", "throw", "return"].forEach(function (method) {
          prototype[method] = function (arg) {
            return this._invoke(method, arg);
          };
        });
      }
      
      runtime.isGeneratorFunction = function (genFun) {
        var ctor = typeof genFun === "function" && genFun.constructor;
        return ctor ? ctor === GeneratorFunction || // For the native GeneratorFunction constructor, the best we can
                      // do is to check its .name property.
                      (ctor.displayName || ctor.name) === "GeneratorFunction" : false;
      };
      
      runtime.mark = function (genFun) {
        if (Object.setPrototypeOf) {
          Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
        } else {
          genFun.__proto__ = GeneratorFunctionPrototype;
          
          if (!(toStringTagSymbol in genFun)) {
            genFun[toStringTagSymbol] = "GeneratorFunction";
          }
        }
        
        genFun.prototype = Object.create(Gp);
        return genFun;
      }; // Within the body of any async function, `await x` is transformed to
      // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
      // `hasOwn.call(value, "__await")` to determine if the yielded value is
      // meant to be awaited.
      
      
      runtime.awrap = function (arg) {
        return {
          __await: arg
        };
      };
      
      function AsyncIterator(generator) {
        function invoke(method, arg, resolve, reject) {
          var record = tryCatch(generator[method], generator, arg);
          
          if (record.type === "throw") {
            reject(record.arg);
          } else {
            var result = record.arg;
            var value = result.value;
            
            if (value && _typeof(value) === "object" && hasOwn.call(value, "__await")) {
              return Promise.resolve(value.__await).then(function (value) {
                invoke("next", value, resolve, reject);
              }, function (err) {
                invoke("throw", err, resolve, reject);
              });
            }
            
            return Promise.resolve(value).then(function (unwrapped) {
              // When a yielded Promise is resolved, its final value becomes
              // the .value of the Promise<{value,done}> result for the
              // current iteration. If the Promise is rejected, however, the
              // result for this iteration will be rejected with the same
              // reason. Note that rejections of yielded Promises are not
              // thrown back into the generator function, as is the case
              // when an awaited Promise is rejected. This difference in
              // behavior between yield and await is important, because it
              // allows the consumer to decide what to do with the yielded
              // rejection (swallow it and continue, manually .throw it back
              // into the generator, abandon iteration, whatever). With
              // await, by contrast, there is no opportunity to examine the
              // rejection reason outside the generator function, so the
              // only option is to throw it from the await expression, and
              // let the generator function handle the exception.
              result.value = unwrapped;
              resolve(result);
            }, reject);
          }
        }
        
        var previousPromise;
        
        function enqueue(method, arg) {
          function callInvokeWithMethodAndArg() {
            return new Promise(function (resolve, reject) {
              invoke(method, arg, resolve, reject);
            });
          }
          
          return previousPromise = // If enqueue has been called before, then we want to wait until
              // all previous Promises have been resolved before calling invoke,
              // so that results are always delivered in the correct order. If
              // enqueue has not been called before, then it is important to
              // call invoke immediately, without waiting on a callback to fire,
              // so that the async generator function has the opportunity to do
              // any necessary setup in a predictable way. This predictability
              // is why the Promise constructor synchronously invokes its
              // executor callback, and why async functions synchronously
              // execute code before the first await. Since we implement simple
              // async functions in terms of async generators, it is especially
              // important to get this right, even though it requires care.
              previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, // Avoid propagating failures to Promises returned by later
                  // invocations of the iterator.
                  callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
        } // Define the unified helper method that is used to implement .next,
        // .throw, and .return (see defineIteratorMethods).
        
        
        this._invoke = enqueue;
      }
      
      defineIteratorMethods(AsyncIterator.prototype);
      
      AsyncIterator.prototype[asyncIteratorSymbol] = function () {
        return this;
      };
      
      runtime.AsyncIterator = AsyncIterator; // Note that simple async functions are implemented on top of
      // AsyncIterator objects; they just return a Promise for the value of
      // the final result produced by the iterator.
      
      runtime.async = function (innerFn, outerFn, self, tryLocsList) {
        var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList));
        return runtime.isGeneratorFunction(outerFn) ? iter // If outerFn is a generator, return the full iterator.
                                                    : iter.next().then(function (result) {
              return result.done ? result.value : iter.next();
            });
      };
      
      function makeInvokeMethod(innerFn, self, context) {
        var state = GenStateSuspendedStart;
        return function invoke(method, arg) {
          if (state === GenStateExecuting) {
            throw new Error("Generator is already running");
          }
          
          if (state === GenStateCompleted) {
            if (method === "throw") {
              throw arg;
            } // Be forgiving, per 25.3.3.3.3 of the spec:
            // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
            
            
            return doneResult();
          }
          
          context.method = method;
          context.arg = arg;
          
          while (true) {
            var delegate = context.delegate;
            
            if (delegate) {
              var delegateResult = maybeInvokeDelegate(delegate, context);
              
              if (delegateResult) {
                if (delegateResult === ContinueSentinel) continue;
                return delegateResult;
              }
            }
            
            if (context.method === "next") {
              // Setting context._sent for legacy support of Babel's
              // function.sent implementation.
              context.sent = context._sent = context.arg;
            } else if (context.method === "throw") {
              if (state === GenStateSuspendedStart) {
                state = GenStateCompleted;
                throw context.arg;
              }
              
              context.dispatchException(context.arg);
            } else if (context.method === "return") {
              context.abrupt("return", context.arg);
            }
            
            state = GenStateExecuting;
            var record = tryCatch(innerFn, self, context);
            
            if (record.type === "normal") {
              // If an exception is thrown from innerFn, we leave state ===
              // GenStateExecuting and loop back for another invocation.
              state = context.done ? GenStateCompleted : GenStateSuspendedYield;
              
              if (record.arg === ContinueSentinel) {
                continue;
              }
              
              return {
                value: record.arg,
                done: context.done
              };
            } else if (record.type === "throw") {
              state = GenStateCompleted; // Dispatch the exception by looping back around to the
              // context.dispatchException(context.arg) call above.
              
              context.method = "throw";
              context.arg = record.arg;
            }
          }
        };
      } // Call delegate.iterator[context.method](context.arg) and handle the
      // result, either by returning a { value, done } result from the
      // delegate iterator, or by modifying context.method and context.arg,
      // setting context.delegate to null, and returning the ContinueSentinel.
      
      
      function maybeInvokeDelegate(delegate, context) {
        var method = delegate.iterator[context.method];
        
        if (method === undefined$1) {
          // A .throw or .return when the delegate iterator has no .throw
          // method always terminates the yield* loop.
          context.delegate = null;
          
          if (context.method === "throw") {
            if (delegate.iterator.return) {
              // If the delegate iterator has a return method, give it a
              // chance to clean up.
              context.method = "return";
              context.arg = undefined$1;
              maybeInvokeDelegate(delegate, context);
              
              if (context.method === "throw") {
                // If maybeInvokeDelegate(context) changed context.method from
                // "return" to "throw", let that override the TypeError below.
                return ContinueSentinel;
              }
            }
            
            context.method = "throw";
            context.arg = new TypeError("The iterator does not provide a 'throw' method");
          }
          
          return ContinueSentinel;
        }
        
        var record = tryCatch(method, delegate.iterator, context.arg);
        
        if (record.type === "throw") {
          context.method = "throw";
          context.arg = record.arg;
          context.delegate = null;
          return ContinueSentinel;
        }
        
        var info = record.arg;
        
        if (!info) {
          context.method = "throw";
          context.arg = new TypeError("iterator result is not an object");
          context.delegate = null;
          return ContinueSentinel;
        }
        
        if (info.done) {
          // Assign the result of the finished delegate to the temporary
          // variable specified by delegate.resultName (see delegateYield).
          context[delegate.resultName] = info.value; // Resume execution at the desired location (see delegateYield).
          
          context.next = delegate.nextLoc; // If context.method was "throw" but the delegate handled the
          // exception, let the outer generator proceed normally. If
          // context.method was "next", forget context.arg since it has been
          // "consumed" by the delegate iterator. If context.method was
          // "return", allow the original .return call to continue in the
          // outer generator.
          
          if (context.method !== "return") {
            context.method = "next";
            context.arg = undefined$1;
          }
        } else {
          // Re-yield the result returned by the delegate method.
          return info;
        } // The delegate iterator is finished, so forget it and continue with
        // the outer generator.
        
        
        context.delegate = null;
        return ContinueSentinel;
      } // Define Generator.prototype.{next,throw,return} in terms of the
      // unified ._invoke helper method.
      
      
      defineIteratorMethods(Gp);
      Gp[toStringTagSymbol] = "Generator"; // A Generator should always return itself as the iterator object when the
      // @@iterator function is called on it. Some browsers' implementations of the
      // iterator prototype chain incorrectly implement this, causing the Generator
      // object to not be returned from this call. This ensures that doesn't happen.
      // See https://github.com/facebook/regenerator/issues/274 for more details.
      
      Gp[iteratorSymbol] = function () {
        return this;
      };
      
      Gp.toString = function () {
        return "[object Generator]";
      };
      
      function pushTryEntry(locs) {
        var entry = {
          tryLoc: locs[0]
        };
        
        if (1 in locs) {
          entry.catchLoc = locs[1];
        }
        
        if (2 in locs) {
          entry.finallyLoc = locs[2];
          entry.afterLoc = locs[3];
        }
        
        this.tryEntries.push(entry);
      }
      
      function resetTryEntry(entry) {
        var record = entry.completion || {};
        record.type = "normal";
        delete record.arg;
        entry.completion = record;
      }
      
      function Context(tryLocsList) {
        // The root entry object (effectively a try statement without a catch
        // or a finally block) gives us a place to store values thrown from
        // locations where there is no enclosing try statement.
        this.tryEntries = [{
          tryLoc: "root"
        }];
        tryLocsList.forEach(pushTryEntry, this);
        this.reset(true);
      }
      
      runtime.keys = function (object) {
        var keys = [];
        
        for (var key in object) {
          keys.push(key);
        }
        
        keys.reverse(); // Rather than returning an object with a next method, we keep
        // things simple and return the next function itself.
        
        return function next() {
          while (keys.length) {
            var key = keys.pop();
            
            if (key in object) {
              next.value = key;
              next.done = false;
              return next;
            }
          } // To avoid creating an additional object, we just hang the .value
          // and .done properties off the next function object itself. This
          // also ensures that the minifier will not anonymize the function.
          
          
          next.done = true;
          return next;
        };
      };
      
      function values(iterable) {
        if (iterable) {
          var iteratorMethod = iterable[iteratorSymbol];
          
          if (iteratorMethod) {
            return iteratorMethod.call(iterable);
          }
          
          if (typeof iterable.next === "function") {
            return iterable;
          }
          
          if (!isNaN(iterable.length)) {
            var i = -1,
                next = function next() {
                  while (++i < iterable.length) {
                    if (hasOwn.call(iterable, i)) {
                      next.value = iterable[i];
                      next.done = false;
                      return next;
                    }
                  }
                  
                  next.value = undefined$1;
                  next.done = true;
                  return next;
                };
            
            return next.next = next;
          }
        } // Return an iterator with no values.
        
        
        return {
          next: doneResult
        };
      }
      
      runtime.values = values;
      
      function doneResult() {
        return {
          value: undefined$1,
          done: true
        };
      }
      
      Context.prototype = {
        constructor: Context,
        reset: function reset(skipTempReset) {
          this.prev = 0;
          this.next = 0; // Resetting context._sent for legacy support of Babel's
          // function.sent implementation.
          
          this.sent = this._sent = undefined$1;
          this.done = false;
          this.delegate = null;
          this.method = "next";
          this.arg = undefined$1;
          this.tryEntries.forEach(resetTryEntry);
          
          if (!skipTempReset) {
            for (var name in this) {
              // Not sure about the optimal order of these conditions:
              if (name.charAt(0) === "t" && hasOwn.call(this, name) && !isNaN(+name.slice(1))) {
                this[name] = undefined$1;
              }
            }
          }
        },
        stop: function stop() {
          this.done = true;
          var rootEntry = this.tryEntries[0];
          var rootRecord = rootEntry.completion;
          
          if (rootRecord.type === "throw") {
            throw rootRecord.arg;
          }
          
          return this.rval;
        },
        dispatchException: function dispatchException(exception) {
          if (this.done) {
            throw exception;
          }
          
          var context = this;
          
          function handle(loc, caught) {
            record.type = "throw";
            record.arg = exception;
            context.next = loc;
            
            if (caught) {
              // If the dispatched exception was caught by a catch block,
              // then let that catch block handle the exception normally.
              context.method = "next";
              context.arg = undefined$1;
            }
            
            return !!caught;
          }
          
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            var record = entry.completion;
            
            if (entry.tryLoc === "root") {
              // Exception thrown outside of any try block that could handle
              // it, so set the completion value of the entire function to
              // throw the exception.
              return handle("end");
            }
            
            if (entry.tryLoc <= this.prev) {
              var hasCatch = hasOwn.call(entry, "catchLoc");
              var hasFinally = hasOwn.call(entry, "finallyLoc");
              
              if (hasCatch && hasFinally) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                } else if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else if (hasCatch) {
                if (this.prev < entry.catchLoc) {
                  return handle(entry.catchLoc, true);
                }
              } else if (hasFinally) {
                if (this.prev < entry.finallyLoc) {
                  return handle(entry.finallyLoc);
                }
              } else {
                throw new Error("try statement without catch or finally");
              }
            }
          }
        },
        abrupt: function abrupt(type, arg) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            
            if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
              var finallyEntry = entry;
              break;
            }
          }
          
          if (finallyEntry && (type === "break" || type === "continue") && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc) {
            // Ignore the finally entry if control is not jumping to a
            // location outside the try/catch block.
            finallyEntry = null;
          }
          
          var record = finallyEntry ? finallyEntry.completion : {};
          record.type = type;
          record.arg = arg;
          
          if (finallyEntry) {
            this.method = "next";
            this.next = finallyEntry.finallyLoc;
            return ContinueSentinel;
          }
          
          return this.complete(record);
        },
        complete: function complete(record, afterLoc) {
          if (record.type === "throw") {
            throw record.arg;
          }
          
          if (record.type === "break" || record.type === "continue") {
            this.next = record.arg;
          } else if (record.type === "return") {
            this.rval = this.arg = record.arg;
            this.method = "return";
            this.next = "end";
          } else if (record.type === "normal" && afterLoc) {
            this.next = afterLoc;
          }
          
          return ContinueSentinel;
        },
        finish: function finish(finallyLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            
            if (entry.finallyLoc === finallyLoc) {
              this.complete(entry.completion, entry.afterLoc);
              resetTryEntry(entry);
              return ContinueSentinel;
            }
          }
        },
        "catch": function _catch(tryLoc) {
          for (var i = this.tryEntries.length - 1; i >= 0; --i) {
            var entry = this.tryEntries[i];
            
            if (entry.tryLoc === tryLoc) {
              var record = entry.completion;
              
              if (record.type === "throw") {
                var thrown = record.arg;
                resetTryEntry(entry);
              }
              
              return thrown;
            }
          } // The context.catch method must only be called with a location
          // argument that corresponds to a known catch block.
          
          
          throw new Error("illegal catch attempt");
        },
        delegateYield: function delegateYield(iterable, resultName, nextLoc) {
          this.delegate = {
            iterator: values(iterable),
            resultName: resultName,
            nextLoc: nextLoc
          };
          
          if (this.method === "next") {
            // Deliberately forget the last sent value so that we don't
            // accidentally pass it on to the delegate.
            this.arg = undefined$1;
          }
          
          return ContinueSentinel;
        }
      };
    }( // In sloppy mode, unbound `this` refers to the global object, fallback to
        // Function constructor if we're in global strict mode. That is sadly a form
        // of indirect eval which violates Content Security Policy.
        function () {
          return this;
        }() || Function("return this")());
  });
  
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  
  /**
   * When using Closure Compiler, JSCompiler_renameProperty(property, object) is
   * replaced at compile time by the munged name for object[property]. We cannot
   * alias this function, so we have to use a small shim that has the same
   * behavior when not compiling.
   */
  window.JSCompiler_renameProperty = function (prop, _obj) {
    return prop;
  };
  
  var defaultConverter = {
    toAttribute: function toAttribute(value, type) {
      switch (type) {
        case Boolean:
          return value ? '' : null;
        
        case Object:
        case Array:
          // if the value is `null` or `undefined` pass this through
          // to allow removing/no change behavior.
          return value == null ? value : JSON.stringify(value);
      }
      
      return value;
    },
    fromAttribute: function fromAttribute(value, type) {
      switch (type) {
        case Boolean:
          return value !== null;
        
        case Number:
          return value === null ? null : Number(value);
        
        case Object:
        case Array:
          return JSON.parse(value);
      }
      
      return value;
    }
  };
  /**
   * Change function that returns true if `value` is different from `oldValue`.
   * This method is used as the default for a property's `hasChanged` function.
   */
  
  var notEqual = function notEqual(value, old) {
    // This ensures (old==NaN, value==NaN) always returns false
    return old !== value && (old === old || value === value);
  };
  var defaultPropertyDeclaration = {
    attribute: true,
    type: String,
    converter: defaultConverter,
    reflect: false,
    hasChanged: notEqual
  };
  var microtaskPromise = Promise.resolve(true);
  var STATE_HAS_UPDATED = 1;
  var STATE_UPDATE_REQUESTED = 1 << 2;
  var STATE_IS_REFLECTING_TO_ATTRIBUTE = 1 << 3;
  var STATE_IS_REFLECTING_TO_PROPERTY = 1 << 4;
  var STATE_HAS_CONNECTED = 1 << 5;
  /**
   * Base element class which manages element properties and attributes. When
   * properties change, the `update` method is asynchronously called. This method
   * should be supplied by subclassers to render updates as desired.
   */
  
  var UpdatingElement =
      /*#__PURE__*/
      function (_HTMLElement) {
        _inherits(UpdatingElement, _HTMLElement);
        
        function UpdatingElement() {
          var _this;
          
          _classCallCheck(this, UpdatingElement);
          
          _this = _possibleConstructorReturn(this, _getPrototypeOf(UpdatingElement).call(this));
          _this._updateState = 0;
          _this._instanceProperties = undefined;
          _this._updatePromise = microtaskPromise;
          _this._hasConnectedResolver = undefined;
          /**
           * Map with keys for any properties that have changed since the last
           * update cycle with previous values.
           */
          
          _this._changedProperties = new Map();
          /**
           * Map with keys of properties that should be reflected when updated.
           */
          
          _this._reflectingProperties = undefined;
          
          _this.initialize();
          
          return _this;
        }
        /**
         * Returns a list of attributes corresponding to the registered properties.
         * @nocollapse
         */
        
        
        _createClass(UpdatingElement, [{
          key: "initialize",
          
          /**
           * Performs element initialization. By default captures any pre-set values for
           * registered properties.
           */
          value: function initialize() {
            this._saveInstanceProperties(); // ensures first update will be caught by an early access of `updateComplete`
            
            
            this._requestUpdate();
          }
          /**
           * Fixes any properties set on the instance before upgrade time.
           * Otherwise these would shadow the accessor and break these properties.
           * The properties are stored in a Map which is played back after the
           * constructor runs. Note, on very old versions of Safari (<=9) or Chrome
           * (<=41), properties created for native platform properties like (`id` or
           * `name`) may not have default values set in the element constructor. On
           * these browsers native properties appear on instances and therefore their
           * default value will overwrite any element default (e.g. if the element sets
           * this.id = 'id' in the constructor, the 'id' will become '' since this is
           * the native platform default).
           */
          
        }, {
          key: "_saveInstanceProperties",
          value: function _saveInstanceProperties() {
            var _this2 = this;
            
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            this.constructor._classProperties.forEach(function (_v, p) {
              if (_this2.hasOwnProperty(p)) {
                var value = _this2[p];
                delete _this2[p];
                
                if (!_this2._instanceProperties) {
                  _this2._instanceProperties = new Map();
                }
                
                _this2._instanceProperties.set(p, value);
              }
            });
          }
          /**
           * Applies previously saved instance properties.
           */
          
        }, {
          key: "_applyInstanceProperties",
          value: function _applyInstanceProperties() {
            var _this3 = this;
            
            // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            // tslint:disable-next-line:no-any
            this._instanceProperties.forEach(function (v, p) {
              return _this3[p] = v;
            });
            
            this._instanceProperties = undefined;
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            this._updateState = this._updateState | STATE_HAS_CONNECTED; // Ensure first connection completes an update. Updates cannot complete before
            // connection and if one is pending connection the `_hasConnectionResolver`
            // will exist. If so, resolve it to complete the update, otherwise
            // requestUpdate.
            
            if (this._hasConnectedResolver) {
              this._hasConnectedResolver();
              
              this._hasConnectedResolver = undefined;
            }
          }
          /**
           * Allows for `super.disconnectedCallback()` in extensions while
           * reserving the possibility of making non-breaking feature additions
           * when disconnecting at some point in the future.
           */
          
        }, {
          key: "disconnectedCallback",
          value: function disconnectedCallback() {}
          /**
           * Synchronizes property values when attributes change.
           */
          
        }, {
          key: "attributeChangedCallback",
          value: function attributeChangedCallback(name, old, value) {
            if (old !== value) {
              this._attributeToProperty(name, value);
            }
          }
        }, {
          key: "_propertyToAttribute",
          value: function _propertyToAttribute(name, value) {
            var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : defaultPropertyDeclaration;
            var ctor = this.constructor;
            
            var attr = ctor._attributeNameForProperty(name, options);
            
            if (attr !== undefined) {
              var attrValue = ctor._propertyValueToAttribute(value, options); // an undefined value does not change the attribute.
              
              
              if (attrValue === undefined) {
                return;
              } // Track if the property is being reflected to avoid
              // setting the property again via `attributeChangedCallback`. Note:
              // 1. this takes advantage of the fact that the callback is synchronous.
              // 2. will behave incorrectly if multiple attributes are in the reaction
              // stack at time of calling. However, since we process attributes
              // in `update` this should not be possible (or an extreme corner case
              // that we'd like to discover).
              // mark state reflecting
              
              
              this._updateState = this._updateState | STATE_IS_REFLECTING_TO_ATTRIBUTE;
              
              if (attrValue == null) {
                this.removeAttribute(attr);
              } else {
                this.setAttribute(attr, attrValue);
              } // mark state not reflecting
              
              
              this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_ATTRIBUTE;
            }
          }
        }, {
          key: "_attributeToProperty",
          value: function _attributeToProperty(name, value) {
            // Use tracking info to avoid deserializing attribute value if it was
            // just set from a property setter.
            if (this._updateState & STATE_IS_REFLECTING_TO_ATTRIBUTE) {
              return;
            }
            
            var ctor = this.constructor;
            
            var propName = ctor._attributeToPropertyMap.get(name);
            
            if (propName !== undefined) {
              var options = ctor._classProperties.get(propName) || defaultPropertyDeclaration; // mark state reflecting
              
              this._updateState = this._updateState | STATE_IS_REFLECTING_TO_PROPERTY;
              this[propName] = // tslint:disable-next-line:no-any
                  ctor._propertyValueFromAttribute(value, options); // mark state not reflecting
              
              this._updateState = this._updateState & ~STATE_IS_REFLECTING_TO_PROPERTY;
            }
          }
          /**
           * This private version of `requestUpdate` does not access or return the
           * `updateComplete` promise. This promise can be overridden and is therefore
           * not free to access.
           */
          
        }, {
          key: "_requestUpdate",
          value: function _requestUpdate(name, oldValue) {
            var shouldRequestUpdate = true; // If we have a property key, perform property update steps.
            
            if (name !== undefined) {
              var ctor = this.constructor;
              var options = ctor._classProperties.get(name) || defaultPropertyDeclaration;
              
              if (ctor._valueHasChanged(this[name], oldValue, options.hasChanged)) {
                if (!this._changedProperties.has(name)) {
                  this._changedProperties.set(name, oldValue);
                } // Add to reflecting properties set.
                // Note, it's important that every change has a chance to add the
                // property to `_reflectingProperties`. This ensures setting
                // attribute + property reflects correctly.
                
                
                if (options.reflect === true && !(this._updateState & STATE_IS_REFLECTING_TO_PROPERTY)) {
                  if (this._reflectingProperties === undefined) {
                    this._reflectingProperties = new Map();
                  }
                  
                  this._reflectingProperties.set(name, options);
                }
              } else {
                // Abort the request if the property should not be considered changed.
                shouldRequestUpdate = false;
              }
            }
            
            if (!this._hasRequestedUpdate && shouldRequestUpdate) {
              this._enqueueUpdate();
            }
          }
          /**
           * Requests an update which is processed asynchronously. This should
           * be called when an element should update based on some state not triggered
           * by setting a property. In this case, pass no arguments. It should also be
           * called when manually implementing a property setter. In this case, pass the
           * property `name` and `oldValue` to ensure that any configured property
           * options are honored. Returns the `updateComplete` Promise which is resolved
           * when the update completes.
           *
           * @param name {PropertyKey} (optional) name of requesting property
           * @param oldValue {any} (optional) old value of requesting property
           * @returns {Promise} A Promise that is resolved when the update completes.
           */
          
        }, {
          key: "requestUpdate",
          value: function requestUpdate(name, oldValue) {
            this._requestUpdate(name, oldValue);
            
            return this.updateComplete;
          }
          /**
           * Sets up the element to asynchronously update.
           */
          
        }, {
          key: "_enqueueUpdate",
          value: function () {
            var _enqueueUpdate2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  var _this4 = this;
                  
                  var resolve, reject, previousUpdatePromise, result;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          // Mark state updating...
                          this._updateState = this._updateState | STATE_UPDATE_REQUESTED;
                          previousUpdatePromise = this._updatePromise;
                          this._updatePromise = new Promise(function (res, rej) {
                            resolve = res;
                            reject = rej;
                          });
                          _context.prev = 3;
                          _context.next = 6;
                          return previousUpdatePromise;
                        
                        case 6:
                          _context.next = 10;
                          break;
                        
                        case 8:
                          _context.prev = 8;
                          _context.t0 = _context["catch"](3);
                        
                        case 10:
                          if (this._hasConnected) {
                            _context.next = 13;
                            break;
                          }
                          
                          _context.next = 13;
                          return new Promise(function (res) {
                            return _this4._hasConnectedResolver = res;
                          });
                        
                        case 13:
                          _context.prev = 13;
                          result = this.performUpdate(); // If `performUpdate` returns a Promise, we await it. This is done to
                          // enable coordinating updates with a scheduler. Note, the result is
                          // checked to avoid delaying an additional microtask unless we need to.
                          
                          if (!(result != null)) {
                            _context.next = 18;
                            break;
                          }
                          
                          _context.next = 18;
                          return result;
                        
                        case 18:
                          _context.next = 23;
                          break;
                        
                        case 20:
                          _context.prev = 20;
                          _context.t1 = _context["catch"](13);
                          reject(_context.t1);
                        
                        case 23:
                          resolve(!this._hasRequestedUpdate);
                        
                        case 24:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee, this, [[3, 8], [13, 20]]);
                }));
            
            function _enqueueUpdate() {
              return _enqueueUpdate2.apply(this, arguments);
            }
            
            return _enqueueUpdate;
          }()
        }, {
          key: "performUpdate",
          
          /**
           * Performs an element update. Note, if an exception is thrown during the
           * update, `firstUpdated` and `updated` will not be called.
           *
           * You can override this method to change the timing of updates. If this
           * method is overridden, `super.performUpdate()` must be called.
           *
           * For instance, to schedule updates to occur just before the next frame:
           *
           * ```
           * protected async performUpdate(): Promise<unknown> {
           *   await new Promise((resolve) => requestAnimationFrame(() => resolve()));
           *   super.performUpdate();
           * }
           * ```
           */
          value: function performUpdate() {
            // Mixin instance properties once, if they exist.
            if (this._instanceProperties) {
              this._applyInstanceProperties();
            }
            
            var shouldUpdate = false;
            var changedProperties = this._changedProperties;
            
            try {
              shouldUpdate = this.shouldUpdate(changedProperties);
              
              if (shouldUpdate) {
                this.update(changedProperties);
              }
            } catch (e) {
              // Prevent `firstUpdated` and `updated` from running when there's an
              // update exception.
              shouldUpdate = false;
              throw e;
            } finally {
              // Ensure element can accept additional updates after an exception.
              this._markUpdated();
            }
            
            if (shouldUpdate) {
              if (!(this._updateState & STATE_HAS_UPDATED)) {
                this._updateState = this._updateState | STATE_HAS_UPDATED;
                this.firstUpdated(changedProperties);
              }
              
              this.updated(changedProperties);
            }
          }
        }, {
          key: "_markUpdated",
          value: function _markUpdated() {
            this._changedProperties = new Map();
            this._updateState = this._updateState & ~STATE_UPDATE_REQUESTED;
          }
          /**
           * Returns a Promise that resolves when the element has completed updating.
           * The Promise value is a boolean that is `true` if the element completed the
           * update without triggering another update. The Promise result is `false` if
           * a property was set inside `updated()`. If the Promise is rejected, an
           * exception was thrown during the update. This getter can be implemented to
           * await additional state. For example, it is sometimes useful to await a
           * rendered element before fulfilling this Promise. To do this, first await
           * `super.updateComplete` then any subsequent state.
           *
           * @returns {Promise} The Promise returns a boolean that indicates if the
           * update resolved without triggering another update.
           */
          
        }, {
          key: "shouldUpdate",
          
          /**
           * Controls whether or not `update` should be called when the element requests
           * an update. By default, this method always returns `true`, but this can be
           * customized to control when to update.
           *
           * * @param _changedProperties Map of changed properties with old values
           */
          value: function shouldUpdate(_changedProperties) {
            return true;
          }
          /**
           * Updates the element. This method reflects property values to attributes.
           * It can be overridden to render and keep updated element DOM.
           * Setting properties inside this method will *not* trigger
           * another update.
           *
           * * @param _changedProperties Map of changed properties with old values
           */
          
        }, {
          key: "update",
          value: function update(_changedProperties) {
            var _this5 = this;
            
            if (this._reflectingProperties !== undefined && this._reflectingProperties.size > 0) {
              // Use forEach so this works even if for/of loops are compiled to for
              // loops expecting arrays
              this._reflectingProperties.forEach(function (v, k) {
                return _this5._propertyToAttribute(k, _this5[k], v);
              });
              
              this._reflectingProperties = undefined;
            }
          }
          /**
           * Invoked whenever the element is updated. Implement to perform
           * post-updating tasks via DOM APIs, for example, focusing an element.
           *
           * Setting properties inside this method will trigger the element to update
           * again after this update cycle completes.
           *
           * * @param _changedProperties Map of changed properties with old values
           */
          
        }, {
          key: "updated",
          value: function updated(_changedProperties) {}
          /**
           * Invoked when the element is first updated. Implement to perform one time
           * work on the element after update.
           *
           * Setting properties inside this method will trigger the element to update
           * again after this update cycle completes.
           *
           * * @param _changedProperties Map of changed properties with old values
           */
          
        }, {
          key: "firstUpdated",
          value: function firstUpdated(_changedProperties) {}
        }, {
          key: "_hasConnected",
          get: function get() {
            return this._updateState & STATE_HAS_CONNECTED;
          }
        }, {
          key: "_hasRequestedUpdate",
          get: function get() {
            return this._updateState & STATE_UPDATE_REQUESTED;
          }
        }, {
          key: "hasUpdated",
          get: function get() {
            return this._updateState & STATE_HAS_UPDATED;
          }
        }, {
          key: "updateComplete",
          get: function get() {
            return this._updatePromise;
          }
        }], [{
          key: "_ensureClassProperties",
          
          /**
           * Ensures the private `_classProperties` property metadata is created.
           * In addition to `finalize` this is also called in `createProperty` to
           * ensure the `@property` decorator can add property metadata.
           */
          
          /** @nocollapse */
          value: function _ensureClassProperties() {
            var _this6 = this;
            
            // ensure private storage for property declarations.
            if (!this.hasOwnProperty(JSCompiler_renameProperty('_classProperties', this))) {
              this._classProperties = new Map(); // NOTE: Workaround IE11 not supporting Map constructor argument.
              
              var superProperties = Object.getPrototypeOf(this)._classProperties;
              
              if (superProperties !== undefined) {
                superProperties.forEach(function (v, k) {
                  return _this6._classProperties.set(k, v);
                });
              }
            }
          }
          /**
           * Creates a property accessor on the element prototype if one does not exist.
           * The property setter calls the property's `hasChanged` property option
           * or uses a strict identity check to determine whether or not to request
           * an update.
           * @nocollapse
           */
          
        }, {
          key: "createProperty",
          value: function createProperty(name) {
            var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : defaultPropertyDeclaration;
            
            // Note, since this can be called by the `@property` decorator which
            // is called before `finalize`, we ensure storage exists for property
            // metadata.
            this._ensureClassProperties();
            
            this._classProperties.set(name, options); // Do not generate an accessor if the prototype already has one, since
            // it would be lost otherwise and that would never be the user's intention;
            // Instead, we expect users to call `requestUpdate` themselves from
            // user-defined accessors. Note that if the super has an accessor we will
            // still overwrite it
            
            
            if (options.noAccessor || this.prototype.hasOwnProperty(name)) {
              return;
            }
            
            var key = _typeof(name) === 'symbol' ? Symbol() : "__".concat(name);
            Object.defineProperty(this.prototype, name, {
              // tslint:disable-next-line:no-any no symbol in index
              get: function get() {
                return this[key];
              },
              set: function set(value) {
                // tslint:disable-next-line:no-any no symbol in index
                var oldValue = this[name]; // tslint:disable-next-line:no-any no symbol in index
                
                this[key] = value;
                
                this._requestUpdate(name, oldValue);
              },
              configurable: true,
              enumerable: true
            });
          }
          /**
           * Creates property accessors for registered properties and ensures
           * any superclasses are also finalized.
           * @nocollapse
           */
          
        }, {
          key: "finalize",
          value: function finalize() {
            if (this.hasOwnProperty(JSCompiler_renameProperty('finalized', this)) && this.finalized) {
              return;
            } // finalize any superclasses
            
            
            var superCtor = Object.getPrototypeOf(this);
            
            if (typeof superCtor.finalize === 'function') {
              superCtor.finalize();
            }
            
            this.finalized = true;
            
            this._ensureClassProperties(); // initialize Map populated in observedAttributes
            
            
            this._attributeToPropertyMap = new Map(); // make any properties
            // Note, only process "own" properties since this element will inherit
            // any properties defined on the superClass, and finalization ensures
            // the entire prototype chain is finalized.
            
            if (this.hasOwnProperty(JSCompiler_renameProperty('properties', this))) {
              var props = this.properties; // support symbols in properties (IE11 does not support this)
              
              var propKeys = [].concat(_toConsumableArray(Object.getOwnPropertyNames(props)), _toConsumableArray(typeof Object.getOwnPropertySymbols === 'function' ? Object.getOwnPropertySymbols(props) : [])); // This for/of is ok because propKeys is an array
              
              var _iteratorNormalCompletion = true;
              var _didIteratorError = false;
              var _iteratorError = undefined;
              
              try {
                for (var _iterator = propKeys[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                  var p = _step.value;
                  // note, use of `any` is due to TypeSript lack of support for symbol in
                  // index types
                  // tslint:disable-next-line:no-any no symbol in index
                  this.createProperty(p, props[p]);
                }
              } catch (err) {
                _didIteratorError = true;
                _iteratorError = err;
              } finally {
                try {
                  if (!_iteratorNormalCompletion && _iterator.return != null) {
                    _iterator.return();
                  }
                } finally {
                  if (_didIteratorError) {
                    throw _iteratorError;
                  }
                }
              }
            }
          }
          /**
           * Returns the property name for the given attribute `name`.
           * @nocollapse
           */
          
        }, {
          key: "_attributeNameForProperty",
          value: function _attributeNameForProperty(name, options) {
            var attribute = options.attribute;
            return attribute === false ? undefined : typeof attribute === 'string' ? attribute : typeof name === 'string' ? name.toLowerCase() : undefined;
          }
          /**
           * Returns true if a property should request an update.
           * Called when a property value is set and uses the `hasChanged`
           * option for the property if present or a strict identity check.
           * @nocollapse
           */
          
        }, {
          key: "_valueHasChanged",
          value: function _valueHasChanged(value, old) {
            var hasChanged = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : notEqual;
            return hasChanged(value, old);
          }
          /**
           * Returns the property value for the given attribute value.
           * Called via the `attributeChangedCallback` and uses the property's
           * `converter` or `converter.fromAttribute` property option.
           * @nocollapse
           */
          
        }, {
          key: "_propertyValueFromAttribute",
          value: function _propertyValueFromAttribute(value, options) {
            var type = options.type;
            var converter = options.converter || defaultConverter;
            var fromAttribute = typeof converter === 'function' ? converter : converter.fromAttribute;
            return fromAttribute ? fromAttribute(value, type) : value;
          }
          /**
           * Returns the attribute value for the given property value. If this
           * returns undefined, the property will *not* be reflected to an attribute.
           * If this returns null, the attribute will be removed, otherwise the
           * attribute will be set to the value.
           * This uses the property's `reflect` and `type.toAttribute` property options.
           * @nocollapse
           */
          
        }, {
          key: "_propertyValueToAttribute",
          value: function _propertyValueToAttribute(value, options) {
            if (options.reflect === undefined) {
              return;
            }
            
            var type = options.type;
            var converter = options.converter;
            var toAttribute = converter && converter.toAttribute || defaultConverter.toAttribute;
            return toAttribute(value, type);
          }
        }, {
          key: "observedAttributes",
          get: function get() {
            var _this7 = this;
            
            // note: piggy backing on this to ensure we're finalized.
            this.finalize();
            var attributes = []; // Use forEach so this works even if for/of loops are compiled to for loops
            // expecting arrays
            
            this._classProperties.forEach(function (v, p) {
              var attr = _this7._attributeNameForProperty(p, v);
              
              if (attr !== undefined) {
                _this7._attributeToPropertyMap.set(attr, p);
                
                attributes.push(attr);
              }
            });
            
            return attributes;
          }
        }]);
        
        return UpdatingElement;
      }(_wrapNativeSuper(HTMLElement));
  /**
   * Marks class as having finished creating properties.
   */
  
  UpdatingElement.finalized = true;
  
  /**
   * @license
   * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
   * This code may only be used under the BSD style license found at
   * http://polymer.github.io/LICENSE.txt
   * The complete set of authors may be found at
   * http://polymer.github.io/AUTHORS.txt
   * The complete set of contributors may be found at
   * http://polymer.github.io/CONTRIBUTORS.txt
   * Code distributed by Google as part of the polymer project is also
   * subject to an additional IP rights grant found at
   * http://polymer.github.io/PATENTS.txt
   */
  var legacyCustomElement = function legacyCustomElement(tagName, clazz) {
    window.customElements.define(tagName, clazz); // Cast as any because TS doesn't recognize the return type as being a
    // subtype of the decorated class when clazz is typed as
    // `Constructor<HTMLElement>` for some reason.
    // `Constructor<HTMLElement>` is helpful to make sure the decorator is
    // applied to elements however.
    // tslint:disable-next-line:no-any
    
    return clazz;
  };
  
  var standardCustomElement = function standardCustomElement(tagName, descriptor) {
    var kind = descriptor.kind,
        elements = descriptor.elements;
    return {
      kind: kind,
      elements: elements,
      // This callback is called once the class is otherwise fully defined
      finisher: function finisher(clazz) {
        window.customElements.define(tagName, clazz);
      }
    };
  };
  /**
   * Class decorator factory that defines the decorated class as a custom element.
   *
   * @param tagName the name of the custom element to define
   */
  
  
  var customElement = function customElement(tagName) {
    return function (classOrDescriptor) {
      return typeof classOrDescriptor === 'function' ? legacyCustomElement(tagName, classOrDescriptor) : standardCustomElement(tagName, classOrDescriptor);
    };
  };
  
  var standardProperty = function standardProperty(options, element) {
    // When decorating an accessor, pass it through and add property metadata.
    // Note, the `hasOwnProperty` check in `createProperty` ensures we don't
    // stomp over the user's accessor.
    if (element.kind === 'method' && element.descriptor && !('value' in element.descriptor)) {
      return Object.assign({}, element, {
        finisher: function finisher(clazz) {
          clazz.createProperty(element.key, options);
        }
      });
    } else {
      // createProperty() takes care of defining the property, but we still
      // must return some kind of descriptor, so return a descriptor for an
      // unused prototype field. The finisher calls createProperty().
      return {
        kind: 'field',
        key: Symbol(),
        placement: 'own',
        descriptor: {},
        // When @babel/plugin-proposal-decorators implements initializers,
        // do this instead of the initializer below. See:
        // https://github.com/babel/babel/issues/9260 extras: [
        //   {
        //     kind: 'initializer',
        //     placement: 'own',
        //     initializer: descriptor.initializer,
        //   }
        // ],
        // tslint:disable-next-line:no-any decorator
        initializer: function initializer() {
          if (typeof element.initializer === 'function') {
            this[element.key] = element.initializer.call(this);
          }
        },
        finisher: function finisher(clazz) {
          clazz.createProperty(element.key, options);
        }
      };
    }
  };
  
  var legacyProperty = function legacyProperty(options, proto, name) {
    proto.constructor.createProperty(name, options);
  };
  /**
   * A property decorator which creates a LitElement property which reflects a
   * corresponding attribute value. A `PropertyDeclaration` may optionally be
   * supplied to configure property features.
   *
   * @ExportDecoratedItems
   */
  
  
  function property(options) {
    // tslint:disable-next-line:no-any decorator
    return function (protoOrDescriptor, name) {
      return name !== undefined ? legacyProperty(options, protoOrDescriptor, name) : standardProperty(options, protoOrDescriptor);
    };
  }
  
  /**
   @license
   Copyright (c) 2019 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at
   http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
   http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
   found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
   part of the polymer project is also subject to an additional IP rights grant
   found at http://polymer.github.io/PATENTS.txt
   */
  var supportsAdoptingStyleSheets = 'adoptedStyleSheets' in Document.prototype && 'replace' in CSSStyleSheet.prototype;
  var constructionToken = Symbol();
  var CSSResult =
      /*#__PURE__*/
      function () {
        function CSSResult(cssText, safeToken) {
          _classCallCheck(this, CSSResult);
          
          if (safeToken !== constructionToken) {
            throw new Error('CSSResult is not constructable. Use `unsafeCSS` or `css` instead.');
          }
          
          this.cssText = cssText;
        } // Note, this is a getter so that it's lazy. In practice, this means
        // stylesheets are not created until the first element instance is made.
        
        
        _createClass(CSSResult, [{
          key: "toString",
          value: function toString() {
            return this.cssText;
          }
        }, {
          key: "styleSheet",
          get: function get() {
            if (this._styleSheet === undefined) {
              // Note, if `adoptedStyleSheets` is supported then we assume CSSStyleSheet
              // is constructable.
              if (supportsAdoptingStyleSheets) {
                this._styleSheet = new CSSStyleSheet();
                
                this._styleSheet.replaceSync(this.cssText);
              } else {
                this._styleSheet = null;
              }
            }
            
            return this._styleSheet;
          }
        }]);
        
        return CSSResult;
      }();
  
  var textFromCSSResult = function textFromCSSResult(value) {
    if (value instanceof CSSResult) {
      return value.cssText;
    } else {
      throw new Error("Value passed to 'css' function must be a 'css' function result: ".concat(value, ". Use 'unsafeCSS' to pass non-literal values, but\n            take care to ensure page security."));
    }
  };
  /**
   * Template tag which which can be used with LitElement's `style` property to
   * set element styles. For security reasons, only literal string values may be
   * used. To incorporate non-literal values `unsafeCSS` may be used inside a
   * template string part.
   */
  
  
  var css = function css(strings) {
    for (var _len = arguments.length, values = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      values[_key - 1] = arguments[_key];
    }
    
    var cssText = values.reduce(function (acc, v, idx) {
      return acc + textFromCSSResult(v) + strings[idx + 1];
    }, strings[0]);
    return new CSSResult(cssText, constructionToken);
  };
  
  // This line will be used in regexes to search for LitElement usage.
  // TODO(justinfagnani): inject version number at build time
  
  (window['litElementVersions'] || (window['litElementVersions'] = [])).push('2.0.1');
  /**
   * Minimal implementation of Array.prototype.flat
   * @param arr the array to flatten
   * @param result the accumlated result
   */
  
  function arrayFlat(styles) {
    var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
    
    for (var i = 0, length = styles.length; i < length; i++) {
      var value = styles[i];
      
      if (Array.isArray(value)) {
        arrayFlat(value, result);
      } else {
        result.push(value);
      }
    }
    
    return result;
  }
  /** Deeply flattens styles array. Uses native flat if available. */
  
  
  var flattenStyles = function flattenStyles(styles) {
    return styles.flat ? styles.flat(Infinity) : arrayFlat(styles);
  };
  
  var LitElement =
      /*#__PURE__*/
      function (_UpdatingElement) {
        _inherits(LitElement, _UpdatingElement);
        
        function LitElement() {
          _classCallCheck(this, LitElement);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(LitElement).apply(this, arguments));
        }
        
        _createClass(LitElement, [{
          key: "initialize",
          
          /**
           * Performs element initialization. By default this calls `createRenderRoot`
           * to create the element `renderRoot` node and captures any pre-set values for
           * registered properties.
           */
          value: function initialize() {
            _get(_getPrototypeOf(LitElement.prototype), "initialize", this).call(this);
            
            this.renderRoot = this.createRenderRoot(); // Note, if renderRoot is not a shadowRoot, styles would/could apply to the
            // element's getRootNode(). While this could be done, we're choosing not to
            // support this now since it would require different logic around de-duping.
            
            if (window.ShadowRoot && this.renderRoot instanceof window.ShadowRoot) {
              this.adoptStyles();
            }
          }
          /**
           * Returns the node into which the element should render and by default
           * creates and returns an open shadowRoot. Implement to customize where the
           * element's DOM is rendered. For example, to render into the element's
           * childNodes, return `this`.
           * @returns {Element|DocumentFragment} Returns a node into which to render.
           */
          
        }, {
          key: "createRenderRoot",
          value: function createRenderRoot() {
            return this.attachShadow({
              mode: 'open'
            });
          }
          /**
           * Applies styling to the element shadowRoot using the `static get styles`
           * property. Styling will apply using `shadowRoot.adoptedStyleSheets` where
           * available and will fallback otherwise. When Shadow DOM is polyfilled,
           * ShadyCSS scopes styles and adds them to the document. When Shadow DOM
           * is available but `adoptedStyleSheets` is not, styles are appended to the
           * end of the `shadowRoot` to [mimic spec
           * behavior](https://wicg.github.io/construct-stylesheets/#using-constructed-stylesheets).
           */
          
        }, {
          key: "adoptStyles",
          value: function adoptStyles() {
            var styles = this.constructor._styles;
            
            if (styles.length === 0) {
              return;
            } // There are three separate cases here based on Shadow DOM support.
            // (1) shadowRoot polyfilled: use ShadyCSS
            // (2) shadowRoot.adoptedStyleSheets available: use it.
            // (3) shadowRoot.adoptedStyleSheets polyfilled: append styles after
            // rendering
            
            
            if (window.ShadyCSS !== undefined && !window.ShadyCSS.nativeShadow) {
              window.ShadyCSS.ScopingShim.prepareAdoptedCssText(styles.map(function (s) {
                return s.cssText;
              }), this.localName);
            } else if (supportsAdoptingStyleSheets) {
              this.renderRoot.adoptedStyleSheets = styles.map(function (s) {
                return s.styleSheet;
              });
            } else {
              // This must be done after rendering so the actual style insertion is done
              // in `update`.
              this._needsShimAdoptedStyleSheets = true;
            }
          }
        }, {
          key: "connectedCallback",
          value: function connectedCallback() {
            _get(_getPrototypeOf(LitElement.prototype), "connectedCallback", this).call(this); // Note, first update/render handles styleElement so we only call this if
            // connected after first update.
            
            
            if (this.hasUpdated && window.ShadyCSS !== undefined) {
              window.ShadyCSS.styleElement(this);
            }
          }
          /**
           * Updates the element. This method reflects property values to attributes
           * and calls `render` to render DOM via lit-html. Setting properties inside
           * this method will *not* trigger another update.
           * * @param _changedProperties Map of changed properties with old values
           */
          
        }, {
          key: "update",
          value: function update(changedProperties) {
            var _this = this;
            
            _get(_getPrototypeOf(LitElement.prototype), "update", this).call(this, changedProperties);
            
            var templateResult = this.render();
            
            if (templateResult instanceof TemplateResult) {
              this.constructor.render(templateResult, this.renderRoot, {
                scopeName: this.localName,
                eventContext: this
              });
            } // When native Shadow DOM is used but adoptedStyles are not supported,
            // insert styling after rendering to ensure adoptedStyles have highest
            // priority.
            
            
            if (this._needsShimAdoptedStyleSheets) {
              this._needsShimAdoptedStyleSheets = false;
              
              this.constructor._styles.forEach(function (s) {
                var style = document.createElement('style');
                style.textContent = s.cssText;
                
                _this.renderRoot.appendChild(style);
              });
            }
          }
          /**
           * Invoked on each update to perform rendering tasks. This method must return
           * a lit-html TemplateResult. Setting properties inside this method will *not*
           * trigger the element to update.
           */
          
        }, {
          key: "render",
          value: function render() {}
        }], [{
          key: "finalize",
          
          /** @nocollapse */
          value: function finalize() {
            _get(_getPrototypeOf(LitElement), "finalize", this).call(this); // Prepare styling that is stamped at first render time. Styling
            // is built from user provided `styles` or is inherited from the superclass.
            
            
            this._styles = this.hasOwnProperty(JSCompiler_renameProperty('styles', this)) ? this._getUniqueStyles() : this._styles || [];
          }
          /** @nocollapse */
          
        }, {
          key: "_getUniqueStyles",
          value: function _getUniqueStyles() {
            // Take care not to call `this.styles` multiple times since this generates
            // new CSSResults each time.
            // TODO(sorvell): Since we do not cache CSSResults by input, any
            // shared styles will generate new stylesheet objects, which is wasteful.
            // This should be addressed when a browser ships constructable
            // stylesheets.
            var userStyles = this.styles;
            var styles = [];
            
            if (Array.isArray(userStyles)) {
              var flatStyles = flattenStyles(userStyles); // As a performance optimization to avoid duplicated styling that can
              // occur especially when composing via subclassing, de-duplicate styles
              // preserving the last item in the list. The last item is kept to
              // try to preserve cascade order with the assumption that it's most
              // important that last added styles override previous styles.
              
              var styleSet = flatStyles.reduceRight(function (set, s) {
                set.add(s); // on IE set.add does not return the set.
                
                return set;
              }, new Set()); // Array.from does not work on Set in IE
              
              styleSet.forEach(function (v) {
                return styles.unshift(v);
              });
            } else if (userStyles) {
              styles.push(userStyles);
            }
            
            return styles;
          }
        }]);
        
        return LitElement;
      }(UpdatingElement);
  /**
   * Ensure this class is marked as `finalized` as an optimization ensuring
   * it will not needlessly try to `finalize`.
   */
  
  LitElement.finalized = true;
  /**
   * Render method used to render the lit-html TemplateResult to the element's
   * DOM.
   * @param {TemplateResult} Template to render.
   * @param {Element|DocumentFragment} Node into which to render.
   * @param {String} Element name.
   * @nocollapse
   */
  
  LitElement.render = render$1;
  
  // unsafeHTML directive, and the DocumentFragment that was last set as a value.
  // The DocumentFragment is used as a unique key to check if the last value
  // rendered to the part was with unsafeHTML. If not, we'll always re-render the
  // value passed to unsafeHTML.
  
  var previousValues = new WeakMap();
  /**
   * Renders the result as HTML, rather than text.
   *
   * Note, this is unsafe to use with any user-provided input that hasn't been
   * sanitized or escaped, as it may lead to cross-site-scripting
   * vulnerabilities.
   */
  
  var unsafeHTML = directive(function (value) {
    return function (part) {
      if (!(part instanceof NodePart)) {
        throw new Error('unsafeHTML can only be used in text bindings');
      }
      
      var previousValue = previousValues.get(part);
      
      if (previousValue !== undefined && isPrimitive(value) && value === previousValue.value && part.value === previousValue.fragment) {
        return;
      }
      
      var template = document.createElement('template');
      template.innerHTML = value; // innerHTML casts to string internally
      
      var fragment = document.importNode(template.content, true);
      part.setValue(fragment);
      previousValues.set(part, {
        value: value,
        fragment: fragment
      });
    };
  });
  
  /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  
  /**
   This is a JavaScript mixin that you can use to connect a Custom Element base
   class to a Redux store. The `stateChanged(state)` method will be called when
   the state is updated.
   
   Example:
   
   import { connect } from 'pwa-helpers/connect-mixin.js';
   
   class MyElement extends connect(store)(HTMLElement) {
          stateChanged(state) {
            this.textContent = state.data.count.toString();
          }
        }
   */
  var connect = function connect(store) {
    return function (baseElement) {
      return (
          /*#__PURE__*/
          function (_baseElement) {
            _inherits(_class, _baseElement);
            
            function _class() {
              _classCallCheck(this, _class);
              
              return _possibleConstructorReturn(this, _getPrototypeOf(_class).apply(this, arguments));
            }
            
            _createClass(_class, [{
              key: "connectedCallback",
              value: function connectedCallback() {
                var _this = this;
                
                if (_get(_getPrototypeOf(_class.prototype), "connectedCallback", this)) {
                  _get(_getPrototypeOf(_class.prototype), "connectedCallback", this).call(this);
                }
                
                this._storeUnsubscribe = store.subscribe(function () {
                  return _this.stateChanged(store.getState());
                });
                this.stateChanged(store.getState());
              }
            }, {
              key: "disconnectedCallback",
              value: function disconnectedCallback() {
                this._storeUnsubscribe();
                
                if (_get(_getPrototypeOf(_class.prototype), "disconnectedCallback", this)) {
                  _get(_getPrototypeOf(_class.prototype), "disconnectedCallback", this).call(this);
                }
              }
              /**
               * The `stateChanged(state)` method will be called when the state is updated.
               */
              
            }, {
              key: "stateChanged",
              value: function stateChanged(_state) {}
            }]);
            
            return _class;
          }(baseElement)
      );
    };
  };
  
  /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  
  /**
   A Redux store enhancer that lets you lazy-install reducers after the store
   has booted up. Use this if your application lazy-loads routes that are connected
   to a Redux store.
   
   Example:
   
   import { combineReducers } from 'redux';
   import { lazyReducerEnhancer } from 'pwa-helpers/lazy-reducer-enhancer.js';
   import someReducer from './reducers/someReducer.js';
   
   export const store = createStore(
   (state, action) => state,
   compose(lazyReducerEnhancer(combineReducers))
   );
   
   Then, in your page/element, you can lazy load a specific reducer with:
   
   store.addReducers({
          someReducer
        });
   */
  var lazyReducerEnhancer = function lazyReducerEnhancer(combineReducers) {
    var enhancer = function enhancer(nextCreator) {
      return function (origReducer, preloadedState) {
        var lazyReducers = {};
        var nextStore = nextCreator(origReducer, preloadedState);
        return Object.assign({}, nextStore, {
          addReducers: function addReducers(newReducers) {
            var combinedReducerMap = Object.assign({}, lazyReducers, newReducers);
            this.replaceReducer(combineReducers(lazyReducers = combinedReducerMap));
          }
        });
      };
    };
    
    return enhancer;
  };
  
  /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  
  /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  
  /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  
  /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  
  /**
   Basic router that calls a callback whenever the location is updated.
   
   Example:
   
   import { installRouter } from 'pwa-helpers/router.js';
   
   installRouter((location) => handleNavigation(location));
   
   For example, if you're using this router in a Redux-connected component,
   you could dispatch an action in the callback:
   
   import { installRouter } from 'pwa-helpers/router.js';
   import { navigate } from '../actions/app.js';
   
   installRouter((location) => store.dispatch(navigate(location)))
   
   If you need to force a navigation to a new location programmatically, you can
   do so by pushing a new state using the History API, and then manually
   calling the callback with the new location:
   
   window.history.pushState({}, '', '/new-route');
   handleNavigation(window.location);
   
   Optionally, you can use the second argument to read the event that caused the
   navigation. For example, you may want to scroll to top only after a link click.
   
   installRouter((location, event) => {
          // Only scroll to top on link clicks, not popstate events.
          if (event && event.type === 'click') {
            window.scrollTo(0, 0);
          }
          handleNavigation(location);
        });
   */
  var installRouter = function installRouter(locationUpdatedCallback) {
    document.body.addEventListener('click', function (e) {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey) return;
      var anchor = e.composedPath().filter(function (n) {
        return n.tagName === 'A';
      })[0];
      if (!anchor || anchor.target || anchor.hasAttribute('download') || anchor.getAttribute('rel') === 'external') return;
      var href = anchor.href;
      if (!href || href.indexOf('mailto:') !== -1) return;
      var location = window.location;
      var origin = location.origin || location.protocol + '//' + location.host;
      if (href.indexOf(origin) !== 0) return;
      e.preventDefault();
      
      if (href !== location.href) {
        window.history.pushState({}, '', href);
        locationUpdatedCallback(location, e);
      }
    });
    window.addEventListener('popstate', function (e) {
      return locationUpdatedCallback(window.location, e);
    });
    locationUpdatedCallback(window.location, null
        /* event */
    );
  };
  
  /**
   @license
   Copyright (c) 2018 The Polymer Project Authors. All rights reserved.
   This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
   The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
   The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
   Code distributed by Google as part of the polymer project is also
   subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
   */
  
  function regexparam (str, loose) {
    var c,
        o,
        tmp,
        ext,
        keys = [],
        pattern = '',
        arr = str.split('/');
    arr[0] || arr.shift();
    
    while (tmp = arr.shift()) {
      c = tmp[0];
      
      if (c === '*') {
        keys.push('wild');
        pattern += '/(.*)';
      } else if (c === ':') {
        o = tmp.indexOf('?', 1);
        ext = tmp.indexOf('.', 1);
        keys.push(tmp.substring(1, !!~o ? o : !!~ext ? ext : tmp.length));
        pattern += !!~o && !~ext ? '(?:/([^/]+?))?' : '/([^/]+?)';
        if (!!~ext) pattern += (!!~o ? '?' : '') + '\\' + tmp.substring(ext);
      } else {
        pattern += '/' + tmp;
      }
    }
    
    return {
      keys: keys,
      pattern: new RegExp('^' + pattern + (loose ? '(?:$|\/)' : '\/?$'), 'i')
    };
  }
  
  var refreshRoute = function refreshRoute(route, activeRoute) {
    var _regexparam = regexparam(route),
        pattern = _regexparam.pattern,
        keys = _regexparam.keys;
    
    var noQueryRoute = activeRoute.replace(/\?.*/, '');
    var match = pattern.exec(noQueryRoute);
    var active = pattern.test(noQueryRoute);
    return {
      active: active,
      params: !active ? {} : keys.reduce(function (list, item, index) {
        return Object.assign({}, list, _defineProperty({}, item, match && match[index + 1] || ''));
      }, {})
    };
  };
  
  var ActionTypes;
  
  (function (ActionTypes) {
    ActionTypes["ADD_ROUTE"] = "ADD_ROUTE";
    ActionTypes["NAVIGATE"] = "NAVIGATE";
    ActionTypes["SET_ACTIVE_ROUTE"] = "SET_ACTIVE_ROUTE";
  })(ActionTypes || (ActionTypes = {}));
  
  var addRoute = function addRoute(path) {
    return {
      type: ActionTypes.ADD_ROUTE,
      path: path
    };
  };
  var setActiveRoute = function setActiveRoute(path) {
    return {
      type: ActionTypes.SET_ACTIVE_ROUTE,
      path: path
    };
  };
  
  var getRoute = function getRoute(_ref, route) {
    var routes = _ref.router.routes;
    return routes && route && routes[route] || {};
  };
  var noRouteActive = function noRouteActive(_ref2) {
    var routes = _ref2.router.routes;
    return Object.keys(routes).reduce(function (noActive, route) {
      return noActive && !routes[route].active;
    }, true);
  };
  var isRouteActive = function isRouteActive(state, route) {
    return route ? !!getRoute(state, route).active : noRouteActive(state);
  };
  var getRouteParams = function getRouteParams(state, route) {
    return getRoute(state, route).params || {};
  };
  
  function _templateObject4() {
    var data = _taggedTemplateLiteral(["<slot></slot>"]);
    
    _templateObject4 = function _templateObject4() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject3() {
    var data = _taggedTemplateLiteral([""]);
    
    _templateObject3 = function _templateObject3() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject2() {
    var data = _taggedTemplateLiteral([""]);
    
    _templateObject2 = function _templateObject2() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject() {
    var data = _taggedTemplateLiteral(["", ""]);
    
    _templateObject = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var __decorate = undefined && undefined.__decorate || function (decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if ((typeof Reflect === "undefined" ? "undefined" : _typeof(Reflect)) === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
      if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    }
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var routerInstalled = false; // eslint-disable-next-line import/no-mutable-exports, @typescript-eslint/no-explicit-any
  var Route = (function (store) {
    /**
     * Element that renders its content or a component
     * when browser route matches
     * @element lit-route
     * @demo ../demo/index.html
     */
    var Route =
        /*#__PURE__*/
        function (_connect) {
          _inherits(Route, _connect);
          
          /**
           * Element that renders its content or a component
           * when browser route matches
           * @element lit-route
           * @demo ../demo/index.html
           */
          function Route() {
            var _this;
            
            _classCallCheck(this, Route);
            
            _this = _possibleConstructorReturn(this, _getPrototypeOf(Route).apply(this, arguments));
            _this.active = false;
            _this.params = {};
            _this.isResolving = false;
            _this.scrollOpt = {};
            _this.scrollDisable = false;
            return _this;
          }
          
          _createClass(Route, [{
            key: "firstUpdated",
            value: function firstUpdated() {
              if (!routerInstalled) {
                installRouter(function (_ref) {
                  var pathname = _ref.pathname,
                      search = _ref.search,
                      hash = _ref.hash;
                  var path = window.decodeURIComponent(pathname + search + hash);
                  return store.dispatch(setActiveRoute(path));
                });
                routerInstalled = true;
              }
              
              if (this.path) {
                store.dispatch(addRoute(this.path));
              }
            }
          }, {
            key: "stateChanged",
            value: function stateChanged(state) {
              var _this2 = this;
              
              this.active = isRouteActive(state, this.path);
              this.params = getRouteParams(state, this.path);
              
              if (this.active && this.resolve) {
                this.isResolving = true;
                this.resolve().then(function () {
                  _this2.isResolving = false;
                }).catch(function () {
                  _this2.isResolving = false;
                });
              }
              
              if (this.active && !this.scrollDisable && this.scrollOpt) {
                if (Object.keys(this.scrollOpt).length !== 0) {
                  this.scrollIntoView(Object.assign({}, this.scrollOpt));
                } else {
                  window.scrollTo(0, 0);
                }
              }
            }
          }, {
            key: "getTemplate",
            value: function getTemplate(component, attributesObject) {
              var _this3 = this;
              
              var tagName = component.replace(/[^A-Za-z-]/, '');
              var attributes = '';
              
              if (attributesObject) {
                attributes = Object.keys(attributesObject).map(function (param) {
                  return " ".concat(param, "=\"").concat(_this3.params[param], "\"");
                }).join('');
              }
              
              var template = "<".concat(tagName).concat(attributes, "></").concat(tagName, ">");
              return html(_templateObject(), unsafeHTML(template));
            }
          }, {
            key: "render",
            value: function render() {
              if (!this.active) {
                return html(_templateObject2());
              }
              
              if (this.resolve && this.isResolving) {
                return !this.loading ? html(_templateObject3()) : this.getTemplate(this.loading);
              }
              
              if (!this.component) {
                return html(_templateObject4());
              }
              
              return this.getTemplate(this.component, this.params);
            }
          }]);
          
          return Route;
        }(connect(store)(LitElement));
    
    __decorate([property({
      type: Boolean,
      reflect: true
    })], Route.prototype, "active", void 0);
    
    __decorate([property({
      type: String
    })], Route.prototype, "component", void 0);
    
    __decorate([property({
      type: Object
    })], Route.prototype, "params", void 0);
    
    __decorate([property({
      type: String
    })], Route.prototype, "path", void 0);
    
    __decorate([property({
      type: Boolean
    })], Route.prototype, "isResolving", void 0);
    
    __decorate([property({
      type: Function
    })], Route.prototype, "resolve", void 0);
    
    __decorate([property({
      type: String
    })], Route.prototype, "loading", void 0);
    
    __decorate([property({
      type: Object
    })], Route.prototype, "scrollOpt", void 0);
    
    __decorate([property({
      type: Boolean
    })], Route.prototype, "scrollDisable", void 0);
    
    Route = __decorate([customElement('lit-route')], Route);
  });
  
  var initialState = {
    activeRoute: '/',
    routes: {}
  };
  
  var reducer = function reducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    
    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        _ref$type = _ref.type,
        type = _ref$type === void 0 ? '' : _ref$type,
        _ref$path = _ref.path,
        path = _ref$path === void 0 ? '' : _ref$path;
    
    switch (type) {
      case ActionTypes.NAVIGATE:
      case ActionTypes.SET_ACTIVE_ROUTE:
        return Object.assign({}, state, {
          activeRoute: path,
          routes: Object.keys(state.routes).reduce(function (routes, route) {
            return Object.assign({}, routes, _defineProperty({}, route, refreshRoute(route, path)));
          }, {})
        });
      
      case ActionTypes.ADD_ROUTE:
        return Object.assign({}, state, {
          routes: Object.assign({}, state.routes, _defineProperty({}, path, refreshRoute(path, state.activeRoute)))
        });
      
      default:
        return state;
    }
  };
  
  var connectRouter = function connectRouter(store) {
    store.addReducers({
      router: reducer
    });
    Route(store);
  };
  
  function _templateObject2$1() {
    var data = _taggedTemplateLiteral(["\n      .breadcrumbs {\n        margin: 4px 12px 40px;\n      }\n\n      .breadcrumbs_list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        display: flex;\n      }\n\n      .breadcrumbs_item {\n        color: #333;\n        font-size: 12px;\n        line-height: 20px;\n      }\n\n      .breadcrumbs_item::after {\n        content: '';\n        display: inline-block;\n        margin: 0 9px;\n        width: 3px;\n        height: 6px;\n        vertical-align: middle;\n        background-image: url(https://www.schneider-electric.co.uk/shop-static/assets/images/pdp-page/pdp-arrow-right.svg);\n        background-size: cover;\n      }\n\n      .breadcrumbs_item:last-child::after {\n        display: none;\n      }\n\n      .breadcrumbs_link {\n        color: #333;\n        text-decoration: none;\n        font-size: 12px;\n        line-height: 20px;\n      }\n    "]);
    
    _templateObject2$1 = function _templateObject2() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject$1() {
    var data = _taggedTemplateLiteral(["\n      <nav class=\"breadcrumbs\">\n        <ul class=\"breadcrumbs_list\">\n          <li class=\"breadcrumbs_item\"><a class=\"breadcrumbs_link\" href=\"\">home</a></li>\n          <li class=\"breadcrumbs_item\"><a class=\"breadcrumbs_link\" href=\"\">home</a></li>\n          <li class=\"breadcrumbs_item\"><a class=\"breadcrumbs_link\" href=\"\">home</a></li>\n          <li class=\"breadcrumbs_item\"><a class=\"breadcrumbs_link\" href=\"\">home</a></li>\n          <li class=\"breadcrumbs_item\"><a class=\"breadcrumbs_link\" href=\"\">home</a></li>\n        </ul>\n      </nav>\n    "]);
    
    _templateObject$1 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var Breadcrumbs =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(Breadcrumbs, _LitElement);
        
        function Breadcrumbs() {
          _classCallCheck(this, Breadcrumbs);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(Breadcrumbs).apply(this, arguments));
        }
        
        _createClass(Breadcrumbs, [{
          key: "render",
          value: function render() {
            return html(_templateObject$1());
          }
        }], [{
          key: "styles",
          get: function get() {
            return css(_templateObject2$1());
          }
        }]);
        
        return Breadcrumbs;
      }(LitElement);
  
  customElements.define('x-breadcrumbs', Breadcrumbs);
  
  function _templateObject2$2() {
    var data = _taggedTemplateLiteral(["\n      .slider {\n        display: flex;\n      }\n\n      .slider_slides-list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      .slider_slides-item {\n        margin: 0 0 10px;\n        border: 1px solid #e6e6e6;\n        height: 48px;\n      }\n\n      .slider_slides-item-image {\n        display: block;\n        height: 100%;\n        width: 100%;\n      }\n\n      .slider_slides-item__active {\n        border-color: #3dcd58;\n      }\n\n      .slider_slides-wrapper {\n        min-width: 50px;\n        width: 50px;\n        flex-grow: 0;\n        margin: 0 12px 0 0;\n      }\n\n      .slider_preview-wrapper {\n        flex-grow: 1;\n        width: 0;\n        margin: 0 25px 0 0;\n      }\n\n      .slider_preview {\n        display: block;\n        width: 100%;\n        height: 250px;\n        margin: 0 0 13px;\n      }\n\n      .slider_preview-description {\n        font-size: 13px;\n        line-height: 20px;\n        color: #626469;\n        font-weight: normal;\n        margin: 0;\n      }\n    "]);
    
    _templateObject2$2 = function _templateObject2() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject$2() {
    var data = _taggedTemplateLiteral(["\n      <div class=\"slider\">\n        <div class=\"slider_slides-wrapper\">\n          <ul class=\"slider_slides-list\">\n            <li class=\"slider_slides-item slider_slides-item__active\"><img class=\"slider_slides-item-image\" src=\"https://img.youtube.com/vi/855ObNTgD1E/0.jpg\"></li>\n            <li class=\"slider_slides-item\"><img class=\"slider_slides-item-image\" src=\"https://img.youtube.com/vi/855ObNTgD1E/0.jpg\"></li>\n            <li class=\"slider_slides-item\"><img class=\"slider_slides-item-image\" src=\"https://img.youtube.com/vi/855ObNTgD1E/0.jpg\"></li>\n          </ul>\n        </div>\n        <div class=\"slider_preview-wrapper\">\n          <img class=\"slider_preview\" src=\"https://img.youtube.com/vi/855ObNTgD1E/0.jpg\">\n          <p class=\"slider_preview-description\">\n            Video: How is a faulted Altivar drive reset?\n          </p>\n        </div>\n      </div>\n    "]);
    
    _templateObject$2 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var Slider =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(Slider, _LitElement);
        
        function Slider() {
          _classCallCheck(this, Slider);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(Slider).apply(this, arguments));
        }
        
        _createClass(Slider, [{
          key: "render",
          value: function render() {
            return html(_templateObject$2());
          }
        }], [{
          key: "styles",
          get: function get() {
            return css(_templateObject2$2());
          }
        }]);
        
        return Slider;
      }(LitElement);
  
  customElements.define('x-slider', Slider);
  
  function _templateObject2$3() {
    var data = _taggedTemplateLiteral(["\n      <div class=\"product\">\n        <div class=\"product_card\">\n          <div class=\"product_main-info\">\n            <x-slider></x-slider>\n          </div>\n          <div class=\"product_info\">\n            <a class=\"product_view-all-link\" href=\"\">View all EVlink private company's car park</a>\n            <p class=\"product_id\">EVF2S22P02</p>\n            <p class=\"product_description\">EVlink PARKING Floor Standing 22KW 1xT2 EV CHARGING STATION</p>\n            <a class=\"product_show-more-characteristics-link\" href=\"\">Show more characteristics</a>\n          </div>\n          <div class=\"product_additional-info\">\n            <div class=\"product_info-box\">\n                <div class=\"product_info-box-section\">\n                  <ul class=\"product_info-box-list\">\n                    <li class=\"product_info-box-item\">\n                      <div class=\"product_info-box-item-name\">\n                        Price\n                      </div>\n                      <div class=\"product_info-box-item-value\">\n                        <b>184.62 USD</b>\n                      </div>\n                    </li>\n                </div>\n            </div>\n          </div>\n        </div>\n\t\t\t\t<a href=\"/product-cart\" >cart</a>\n      </div>\n    "]);
    
    _templateObject2$3 = function _templateObject2() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject$3() {
    var data = _taggedTemplateLiteral(["\n      .product {\n        margin: 0 12px 55px;\n      }\n\n      .product_view-all-link {\n        color: #42b4e6;\n        font-size: 14px;\n        line-height: 18px;\n        display: inline-block;\n        margin: 0 0 15px;\n      }\n\n      .product_show-more-characteristics-link {\n        color: #42b4e6;\n        font-size: 14px;\n        line-height: 20px;\n        display: inline-block;\n        margin: 0 0 15px;\n      }\n\n      .product_id {\n        color: #333;\n        font-size: 28px;\n        line-height: 32px;\n        margin: 0 0 15px;\n      }\n\n      .product_description {\n        color: #333;\n        font-size: 14px;\n        line-height: 22px;\n        margin: 0 0 10px;\n      }\n\n      .product_card {\n        display: flex;\n      }\n\n      .product_main-info {\n        flex-grow: 1;\n        width: 0;\n      }\n\n      .product_info {\n        flex-grow: 0;\n        width: 368px;\n        min-width: 368px;\n        padding: 0 20px;\n      }\n\n      .product_additional-info {\n        width: 0;\n        flex-grow: 1;\n      }\n\n      .product_info-box {\n        border: 1px solid #e7e6e6;\n      }\n\n      .product_info-box-section {\n        padding: 12px 30px;\n        background-color: #fafafa;\n        border-bottom: 1px solid #e7e6e6;\n      }\n\n      .product_info-box-list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      .product_info-box-section__bg-color_secondary {\n        background-color: #fff;\n      }\n\n      .product_info-box-section:last-child {\n        border-bottom: 0;\n      }\n\n      .product_characteristics-list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      .product_characteristics-item {\n        margin: 0 0 13px;\n        font-size: 14px;\n        line-height: 14px;\n        color: #333;\n      }\n\n      .product_characteristics-item-name {\n        margin: 0 0 7px;\n      }\n    "]);
    
    _templateObject$3 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var Product =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(Product, _LitElement);
        
        _createClass(Product, null, [{
          key: "styles",
          get: function get() {
            return css(_templateObject$3());
          }
        }, {
          key: "properties",
          get: function get() {
            return {
              product: {
                type: Object
              }
            };
          }
        }]);
        
        function Product() {
          var _this;
          
          _classCallCheck(this, Product);
          
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Product).call(this));
          _this.product = {};
          return _this;
        }
        
        _createClass(Product, [{
          key: "render",
          value: function render() {
            return html(_templateObject2$3());
          }
        }]);
        
        return Product;
      }(LitElement);
  
  customElements.define('x-product', Product);
  
  function _templateObject2$4() {
    var data = _taggedTemplateLiteral(["\n      .related-products {\n        margin: 0 0 40px;\n      }\n\n      .related-products_title {\n        padding: 0 12px;\n        margin: 0 0 25px;\n        font-size: 20px;\n        line-height: 23px;\n        color: #3dcd58;\n      }\n\n      .related-products_list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        display: flex;\n      }\n\n      .related-products_item {\n        width: 33%;\n        padding: 0 12px;\n      }\n\n      .related-products_more-link {\n        display: block;\n        margin: 0 0 20px;\n        font-size: 14px;\n        line-height: 18px;\n        color: #333;\n        font-weight: bold;\n        text-decoration: none;\n      }\n\n      .related-products_more-link::after {\n        content: '\\203A';\n      }\n\n      .related-products_card {\n        display: flex;\n        text-decoration: none;\n      }\n\n      .related-products_card-image {\n        width: 60px;\n        height: 60px;\n      }\n\n      .related-products_product-id {\n        font-size: 12px;\n        line-height: 16px;\n        color: #9fa0a4;\n        margin: 0 0 5px;\n      }\n\n      .related-products_product-description {\n        font-size: 14px;\n        line-height: 18px;\n        color: #626469;\n        margin: 0 0 5px;\n      }\n\n      .related-products_card-info {\n        padding: 0 15px;\n        width: calc(100% - 60px);\n      }\n\n      .related-products_product-price {\n        margin: 0 0 5px;\n        font-size: 14px;\n        line-height: 20px;\n        color: #9fa0a4;\n      }\n\n      .related-products_product-price-value {\n        color: #333;\n      }\n    "], ["\n      .related-products {\n        margin: 0 0 40px;\n      }\n\n      .related-products_title {\n        padding: 0 12px;\n        margin: 0 0 25px;\n        font-size: 20px;\n        line-height: 23px;\n        color: #3dcd58;\n      }\n\n      .related-products_list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        display: flex;\n      }\n\n      .related-products_item {\n        width: 33%;\n        padding: 0 12px;\n      }\n\n      .related-products_more-link {\n        display: block;\n        margin: 0 0 20px;\n        font-size: 14px;\n        line-height: 18px;\n        color: #333;\n        font-weight: bold;\n        text-decoration: none;\n      }\n\n      .related-products_more-link::after {\n        content: '\\\\203A';\n      }\n\n      .related-products_card {\n        display: flex;\n        text-decoration: none;\n      }\n\n      .related-products_card-image {\n        width: 60px;\n        height: 60px;\n      }\n\n      .related-products_product-id {\n        font-size: 12px;\n        line-height: 16px;\n        color: #9fa0a4;\n        margin: 0 0 5px;\n      }\n\n      .related-products_product-description {\n        font-size: 14px;\n        line-height: 18px;\n        color: #626469;\n        margin: 0 0 5px;\n      }\n\n      .related-products_card-info {\n        padding: 0 15px;\n        width: calc(100% - 60px);\n      }\n\n      .related-products_product-price {\n        margin: 0 0 5px;\n        font-size: 14px;\n        line-height: 20px;\n        color: #9fa0a4;\n      }\n\n      .related-products_product-price-value {\n        color: #333;\n      }\n    "]);
    
    _templateObject2$4 = function _templateObject2() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject$4() {
    var data = _taggedTemplateLiteral(["\n      <div class=\"related-products\">\n        <h2 class=\"related-products_title\">\n          Customers Also Buy These Products\n        </h2>\n        <ul class=\"related-products_list\">\n          <li class=\"related-products_item\">\n            <a class=\"related-products_more-link\" href=\"\">Related Products (11)</a>\n            <a href=\"\" class=\"related-products_card\">\n              <div class=\"related-products_card-image-wrapper\">\n                <img class=\"related-products_card-image\" src=\"https://download.schneider-electric.com/files?p_Doc_Ref=PF140099&p_File_Type=rendition_64_gif&default_image=DefaultProductImage.png\">\n              </div>\n              <div class=\"related-products_card-info\">\n                <p class=\"related-products_product-id\">\n                  VW3A9317\n                </p>\n                <p class=\"related-products_product-description\">\n                  voltage converter - for variable speed drive\n                </p>\n                <p class=\"related-products_product-price\">\n                  <span class=\"related-products_product-price-label\">Price:</span>\n                  <b class=\"related-products_product-price-value\">88.00 USD</b>\n                </p>\n              </div>\n            </a>\n          </li>\n          <li class=\"related-products_item\">\n            <a class=\"related-products_more-link\" href=\"\">Related Products (11)</a>\n            <a href=\"\" class=\"related-products_card\">\n              <div class=\"related-products_card-image-wrapper\">\n                <img class=\"related-products_card-image\" src=\"https://download.schneider-electric.com/files?p_Doc_Ref=PF140099&p_File_Type=rendition_64_gif&default_image=DefaultProductImage.png\">\n              </div>\n              <div class=\"related-products_card-info\">\n                <p class=\"related-products_product-id\">\n                  VW3A9317\n                </p>\n                <p class=\"related-products_product-description\">\n                  voltage converter - for variable speed drive\n                </p>\n                <p class=\"related-products_product-price\">\n                  <span class=\"related-products_product-price-label\">Price:</span>\n                  <b class=\"related-products_product-price-value\">88.00 USD</b>\n                </p>\n              </div>\n            </a>\n          </li>\n          <li class=\"related-products_item\">\n            <a class=\"related-products_more-link\" href=\"\">Related Products (11)</a>\n            <a href=\"\" class=\"related-products_card\">\n              <div class=\"related-products_card-image-wrapper\">\n                <img class=\"related-products_card-image\" src=\"https://download.schneider-electric.com/files?p_Doc_Ref=PF140099&p_File_Type=rendition_64_gif&default_image=DefaultProductImage.png\">\n              </div>\n              <div class=\"related-products_card-info\">\n                <p class=\"related-products_product-id\">\n                  VW3A9317\n                </p>\n                <p class=\"related-products_product-description\">\n                  voltage converter - for variable speed drive\n                </p>\n                <p class=\"related-products_product-price\">\n                  <span class=\"related-products_product-price-label\">Price:</span>\n                  <b class=\"related-products_product-price-value\">88.00 USD</b>\n                </p>\n              </div>\n            </a>\n          </li>\n        </ul>\n      </div>\n    "]);
    
    _templateObject$4 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var RelatedProducts =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(RelatedProducts, _LitElement);
        
        function RelatedProducts() {
          _classCallCheck(this, RelatedProducts);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(RelatedProducts).apply(this, arguments));
        }
        
        _createClass(RelatedProducts, [{
          key: "render",
          value: function render() {
            return html(_templateObject$4());
          }
        }], [{
          key: "styles",
          get: function get() {
            return css(_templateObject2$4());
          }
        }]);
        
        return RelatedProducts;
      }(LitElement);
  
  customElements.define('x-related-products', RelatedProducts);
  
  function _templateObject2$5() {
    var data = _taggedTemplateLiteral(["\n      .documents {\n        margin: 0 0 25px;\n        padding: 12px;\n        background-color: #f5f5f5;\n      }\n\n      .documents_list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        display: flex;\n      }\n\n      .documents_item {\n        margin: 0 60px 0 0;\n      }\n\n      .documents_link {\n        color: #626469;\n        font-size: 13px;\n        line-height: 20px;\n        text-decoration: none;\n      }\n\n      .documents_link::before {\n        display: inline-block;\n        vertical-align: middle;\n        content: '';\n        width: 17px;\n        height: 22px;\n        margin: 0 10px 0 0;\n        background-position: -93px -255px;\n        background-image: url(https://www.schneider-electric.us/shop-static/assets/css/img/common-sprite@2x.png);\n        background-size: 317px 314px;\n      }\n    "]);
    
    _templateObject2$5 = function _templateObject2() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject$5() {
    var data = _taggedTemplateLiteral(["\n      <div class=\"documents\">\n        <ul class=\"documents_list\">\n          <li class=\"documents_item\"><a class=\"documents_link\" href=\"\">Product Datasheet</a></li>\n          <li class=\"documents_item\"><a class=\"documents_link\" href=\"\">Product Datasheet</a></li>\n          <li class=\"documents_item\"><a class=\"documents_link\" href=\"\">Product Datasheet</a></li>\n        </ul>\n      </div>\n    "]);
    
    _templateObject$5 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var Documents =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(Documents, _LitElement);
        
        function Documents() {
          _classCallCheck(this, Documents);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(Documents).apply(this, arguments));
        }
        
        _createClass(Documents, [{
          key: "render",
          value: function render() {
            return html(_templateObject$5());
          }
        }], [{
          key: "styles",
          get: function get() {
            return css(_templateObject2$5());
          }
        }]);
        
        return Documents;
      }(LitElement);
  
  customElements.define('x-documents', Documents);
  
  function _templateObject2$6() {
    var data = _taggedTemplateLiteral(["\n      .table {\n        width: 100%;\n        margin: 0 0 25px;\n        border-collapse: collapse;\n      }\n\n      .table_caption {\n        font-size: 16px;\n        line-height: 40px;\n        padding: 0 10px;\n        background-color: #eaeaea;\n        text-align: left;\n      }\n\n      .table_row {\n        border-bottom: 1px solid #eaeaea;\n      }\n\n      .table_title {\n        width: 35%;\n        padding: 0 10px;\n        font-size: 14px;\n        line-height: 44px;\n      }\n\n      .table_value {\n        padding: 0 10px;\n        font-size: 14px;\n        line-height: 44px;\n      }\n    "]);
    
    _templateObject2$6 = function _templateObject2() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject$6() {
    var data = _taggedTemplateLiteral(["\n      <table class=\"table\">\n        <caption class=\"table_caption\">Main</caption>\n        <tr class=\"table_row\">\n          <th class=\"table_title\">range of product</th>\n          <td class=\"table_value\">Altivar 12</td>\n        </tr>\n        <tr class=\"table_row\">\n          <th class=\"table_title\">range of product</th>\n          <td class=\"table_value\">Altivar 12</td>\n        </tr>\n        <tr class=\"table_row\">\n          <th class=\"table_title\">range of product</th>\n          <td class=\"table_value\">Altivar 12</td>\n        </tr>\n        <tr class=\"table_row\">\n          <th class=\"table_title\">range of product</th>\n          <td class=\"table_value\">Altivar 12</td>\n        </tr>\n      </table>\n    "]);
    
    _templateObject$6 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var Table =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(Table, _LitElement);
        
        function Table() {
          _classCallCheck(this, Table);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(Table).apply(this, arguments));
        }
        
        _createClass(Table, [{
          key: "render",
          value: function render() {
            return html(_templateObject$6());
          }
        }], [{
          key: "styles",
          get: function get() {
            return css(_templateObject2$6());
          }
        }]);
        
        return Table;
      }(LitElement);
  
  customElements.define('x-table', Table);
  
  function _templateObject2$7() {
    var data = _taggedTemplateLiteral(["\n      .tabs_nav {\n        padding: 0 12px;\n      }\n\n      .tabs_nav-list {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n        display: flex;\n      }\n\n      .tabs_nav-link {\n        color: #333;\n        font-size: 18px;\n        line-height: 52px;\n        text-decoration: none;\n        display: block;\n        padding: 0 10px;\n        border-bottom: 3px transparent solid;\n      }\n\n      .tabs_nav-link:hover {\n        color: #3dcd58;\n      }\n\n      .tabs_nav-link__active {\n        color: #3dcd58;\n        border-bottom-color: #3dcd58;\n      }\n\n      .tabs_content {\n        padding: 25px 12px 0;\n        background-color: #fafafa;\n      }\n\n      .tabs_sections {\n        list-style: none;\n        padding: 0;\n        margin: 0;\n      }\n\n      .tabs_section {\n        margin: 0 0 50px;\n      }\n\n      .tabs_section-title {\n        font-size: 26px;\n        line-height: 40px;\n        color: #3dcd58;\n        font-weight: normal;\n        margin: 0 0 13px;\n      }\n    "]);
    
    _templateObject2$7 = function _templateObject2() {
      return data;
    };
    
    return data;
  }
  
  function _templateObject$7() {
    var data = _taggedTemplateLiteral(["\n      <div class=\"tabs\">\n        <nav class=\"tabs_nav\">\n          <ul class=\"tabs_nav-list\">\n            <li class=\"tabs_nav-item\"><a class=\"tabs_nav-link tabs_nav-link__active\" href=\"\">Characteristics</a></li>\n            <li class=\"tabs_nav-item\"><a class=\"tabs_nav-link\" href=\"\">Characteristics</a></li>\n            <li class=\"tabs_nav-item\"><a class=\"tabs_nav-link\" href=\"\">Characteristics</a></li>\n            <li class=\"tabs_nav-item\"><a class=\"tabs_nav-link\" href=\"\">Characteristics</a></li>\n            <li class=\"tabs_nav-item\"><a class=\"tabs_nav-link\" href=\"\">Characteristics</a></li>\n          </ul>\n        </nav>\n        <div class=\"tabs_content\">\n          <ul class=\"tabs_sections\">\n            <li class=\"tabs_section\">\n              <header class=\"tabs_section-header\">\n                <h4 class=\"tabs_section-title\">Characteristics</h4>\n              </header>\n              <section class=\"tabs_section-content\">\n                <x-table></x-table>\n              </section>\n            </li>\n          </ul>\n        </div>\n      </div>\n    "]);
    
    _templateObject$7 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var Tabs =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(Tabs, _LitElement);
        
        function Tabs() {
          _classCallCheck(this, Tabs);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(Tabs).apply(this, arguments));
        }
        
        _createClass(Tabs, [{
          key: "render",
          value: function render() {
            return html(_templateObject$7());
          }
        }], [{
          key: "styles",
          get: function get() {
            return css(_templateObject2$7());
          }
        }]);
        
        return Tabs;
      }(LitElement);
  
  customElements.define('x-tabs', Tabs);
  
  function _templateObject$8() {
    var data = _taggedTemplateLiteral(["\n      <x-breadcrumbs></x-breadcrumbs>\n      <x-product></x-product>\n      <x-related-products></x-related-products>\n      <x-documents></x-documents>\n      <x-tabs></x-tabs>\n    "]);
    
    _templateObject$8 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var Pdp =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(Pdp, _LitElement);
        
        _createClass(Pdp, null, [{
          key: "properties",
          get: function get() {
            return {
              product: {
                type: Object
              }
            };
          }
        }]);
        
        function Pdp() {
          var _this;
          
          _classCallCheck(this, Pdp);
          
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Pdp).call(this));
          _this.product = {};
          return _this;
        }
        
        _createClass(Pdp, [{
          key: "render",
          value: function render() {
            return html(_templateObject$8());
          }
        }]);
        
        return Pdp;
      }(LitElement);
  
  customElements.define('x-pdp', Pdp);
  
  function _templateObject$9() {
    var data = _taggedTemplateLiteral(["\n      <div>\n        <lit-route path=\"/product\"><x-pdp .product=", "></x-pdp></lit-route>\n        <lit-route path=\"/product-cart\"><x-cart .product=", "></x-cart></lit-route>\n      </div>\n    "]);
    
    _templateObject$9 = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var App =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(App, _LitElement);
        
        function App() {
          var _this;
          
          _classCallCheck(this, App);
          
          _this = _possibleConstructorReturn(this, _getPrototypeOf(App).call(this));
          _this.product = {};
          return _this;
        }
        
        _createClass(App, [{
          key: "getMockData",
          value: function () {
            var _getMockData = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  var data;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          _context.next = 2;
                          return fetch('data.json');
                        
                        case 2:
                          data = _context.sent;
                          _context.next = 5;
                          return data.json();
                        
                        case 5:
                          return _context.abrupt("return", _context.sent);
                        
                        case 6:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));
            
            function getMockData() {
              return _getMockData.apply(this, arguments);
            }
            
            return getMockData;
          }()
        }, {
          key: "firstUpdated",
          value: function () {
            var _firstUpdated = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee2() {
                  return regeneratorRuntime.wrap(function _callee2$(_context2) {
                    while (1) {
                      switch (_context2.prev = _context2.next) {
                        case 0:
                          _context2.next = 2;
                          return this.getMockData();
                        
                        case 2:
                          this.product = _context2.sent;
                        
                        case 3:
                        case "end":
                          return _context2.stop();
                      }
                    }
                  }, _callee2, this);
                }));
            
            function firstUpdated() {
              return _firstUpdated.apply(this, arguments);
            }
            
            return firstUpdated;
          }()
        }, {
          key: "render",
          value: function render() {
            return html(_templateObject$9(), this.product, this.product);
          }
        }], [{
          key: "properties",
          get: function get() {
            return {
              product: {
                type: Object
              }
            };
          }
        }]);
        
        return App;
      }(LitElement);
  
  customElements.define('x-app', App);
  
  function _templateObject$a() {
    var data = _taggedTemplateLiteral(["\n      <div>\n        uraaa\n      </div>\n    "]);
    
    _templateObject$a = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var TestLit =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(TestLit, _LitElement);
        
        function TestLit() {
          _classCallCheck(this, TestLit);
          
          return _possibleConstructorReturn(this, _getPrototypeOf(TestLit).apply(this, arguments));
        }
        
        _createClass(TestLit, [{
          key: "render",
          value: function render() {
            return html(_templateObject$a());
          }
        }]);
        
        return TestLit;
      }(LitElement);
  
  customElements.define('test-lit', TestLit);
  
  function _templateObject$b() {
    var data = _taggedTemplateLiteral(["\n\t\t\t<div>\n\t\t\t\t<div>Cart element</div>\n\t\t\t\t<span>", "</span>\n      </div>\n    "]);
    
    _templateObject$b = function _templateObject() {
      return data;
    };
    
    return data;
  }
  
  var Cart =
      /*#__PURE__*/
      function (_LitElement) {
        _inherits(Cart, _LitElement);
        
        _createClass(Cart, null, [{
          key: "properties",
          get: function get() {
            return {
              product: {
                type: Object
              }
            };
          }
        }]);
        
        function Cart() {
          var _this;
          
          _classCallCheck(this, Cart);
          
          _this = _possibleConstructorReturn(this, _getPrototypeOf(Cart).call(this));
          _this.product = {};
          return _this;
        }
        
        _createClass(Cart, [{
          key: "render",
          value: function render() {
            return html(_templateObject$b(), 'qwe: ' + this.product.name);
          }
        }]);
        
        return Cart;
      }(LitElement);
  
  customElements.define('x-cart', Cart);
  
  function symbolObservablePonyfill(root) {
    var result;
    var _Symbol = root.Symbol;
    
    if (typeof _Symbol === 'function') {
      if (_Symbol.observable) {
        result = _Symbol.observable;
      } else {
        result = _Symbol('observable');
        _Symbol.observable = result;
      }
    } else {
      result = '@@observable';
    }
    
    return result;
  }
  
  /* global window */
  var root;
  
  if (typeof self !== 'undefined') {
    root = self;
  } else if (typeof window !== 'undefined') {
    root = window;
  } else if (typeof global !== 'undefined') {
    root = global;
  } else if (typeof module !== 'undefined') {
    root = module;
  } else {
    root = Function('return this')();
  }
  
  var result = symbolObservablePonyfill(root);
  
  /**
   * These are private action types reserved by Redux.
   * For any unknown actions, you must return the current state.
   * If the current state is undefined, you must return the initial state.
   * Do not reference these action types directly in your code.
   */
  
  var randomString = function randomString() {
    return Math.random().toString(36).substring(7).split('').join('.');
  };
  
  var ActionTypes$1 = {
    INIT: "@@redux/INIT" + randomString(),
    REPLACE: "@@redux/REPLACE" + randomString(),
    PROBE_UNKNOWN_ACTION: function PROBE_UNKNOWN_ACTION() {
      return "@@redux/PROBE_UNKNOWN_ACTION" + randomString();
    }
  };
  /**
   * @param {any} obj The object to inspect.
   * @returns {boolean} True if the argument appears to be a plain object.
   */
  
  function isPlainObject(obj) {
    if (_typeof(obj) !== 'object' || obj === null) return false;
    var proto = obj;
    
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    
    return Object.getPrototypeOf(obj) === proto;
  }
  /**
   * Creates a Redux store that holds the state tree.
   * The only way to change the data in the store is to call `dispatch()` on it.
   *
   * There should only be a single store in your app. To specify how different
   * parts of the state tree respond to actions, you may combine several reducers
   * into a single reducer function by using `combineReducers`.
   *
   * @param {Function} reducer A function that returns the next state tree, given
   * the current state tree and the action to handle.
   *
   * @param {any} [preloadedState] The initial state. You may optionally specify it
   * to hydrate the state from the server in universal apps, or to restore a
   * previously serialized user session.
   * If you use `combineReducers` to produce the root reducer function, this must be
   * an object with the same shape as `combineReducers` keys.
   *
   * @param {Function} [enhancer] The store enhancer. You may optionally specify it
   * to enhance the store with third-party capabilities such as middleware,
   * time travel, persistence, etc. The only store enhancer that ships with Redux
   * is `applyMiddleware()`.
   *
   * @returns {Store} A Redux store that lets you read the state, dispatch actions
   * and subscribe to changes.
   */
  
  
  function createStore(reducer, preloadedState, enhancer) {
    var _ref2;
    
    if (typeof preloadedState === 'function' && typeof enhancer === 'function' || typeof enhancer === 'function' && typeof arguments[3] === 'function') {
      throw new Error('It looks like you are passing several store enhancers to ' + 'createStore(). This is not supported. Instead, compose them ' + 'together to a single function');
    }
    
    if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
      enhancer = preloadedState;
      preloadedState = undefined;
    }
    
    if (typeof enhancer !== 'undefined') {
      if (typeof enhancer !== 'function') {
        throw new Error('Expected the enhancer to be a function.');
      }
      
      return enhancer(createStore)(reducer, preloadedState);
    }
    
    if (typeof reducer !== 'function') {
      throw new Error('Expected the reducer to be a function.');
    }
    
    var currentReducer = reducer;
    var currentState = preloadedState;
    var currentListeners = [];
    var nextListeners = currentListeners;
    var isDispatching = false;
    
    function ensureCanMutateNextListeners() {
      if (nextListeners === currentListeners) {
        nextListeners = currentListeners.slice();
      }
    }
    /**
     * Reads the state tree managed by the store.
     *
     * @returns {any} The current state tree of your application.
     */
    
    
    function getState() {
      if (isDispatching) {
        throw new Error('You may not call store.getState() while the reducer is executing. ' + 'The reducer has already received the state as an argument. ' + 'Pass it down from the top reducer instead of reading it from the store.');
      }
      
      return currentState;
    }
    /**
     * Adds a change listener. It will be called any time an action is dispatched,
     * and some part of the state tree may potentially have changed. You may then
     * call `getState()` to read the current state tree inside the callback.
     *
     * You may call `dispatch()` from a change listener, with the following
     * caveats:
     *
     * 1. The subscriptions are snapshotted just before every `dispatch()` call.
     * If you subscribe or unsubscribe while the listeners are being invoked, this
     * will not have any effect on the `dispatch()` that is currently in progress.
     * However, the next `dispatch()` call, whether nested or not, will use a more
     * recent snapshot of the subscription list.
     *
     * 2. The listener should not expect to see all state changes, as the state
     * might have been updated multiple times during a nested `dispatch()` before
     * the listener is called. It is, however, guaranteed that all subscribers
     * registered before the `dispatch()` started will be called with the latest
     * state by the time it exits.
     *
     * @param {Function} listener A callback to be invoked on every dispatch.
     * @returns {Function} A function to remove this change listener.
     */
    
    
    function subscribe(listener) {
      if (typeof listener !== 'function') {
        throw new Error('Expected the listener to be a function.');
      }
      
      if (isDispatching) {
        throw new Error('You may not call store.subscribe() while the reducer is executing. ' + 'If you would like to be notified after the store has been updated, subscribe from a ' + 'component and invoke store.getState() in the callback to access the latest state. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
      }
      
      var isSubscribed = true;
      ensureCanMutateNextListeners();
      nextListeners.push(listener);
      return function unsubscribe() {
        if (!isSubscribed) {
          return;
        }
        
        if (isDispatching) {
          throw new Error('You may not unsubscribe from a store listener while the reducer is executing. ' + 'See https://redux.js.org/api-reference/store#subscribe(listener) for more details.');
        }
        
        isSubscribed = false;
        ensureCanMutateNextListeners();
        var index = nextListeners.indexOf(listener);
        nextListeners.splice(index, 1);
      };
    }
    /**
     * Dispatches an action. It is the only way to trigger a state change.
     *
     * The `reducer` function, used to create the store, will be called with the
     * current state tree and the given `action`. Its return value will
     * be considered the **next** state of the tree, and the change listeners
     * will be notified.
     *
     * The base implementation only supports plain object actions. If you want to
     * dispatch a Promise, an Observable, a thunk, or something else, you need to
     * wrap your store creating function into the corresponding middleware. For
     * example, see the documentation for the `redux-thunk` package. Even the
     * middleware will eventually dispatch plain object actions using this method.
     *
     * @param {Object} action A plain object representing “what changed”. It is
     * a good idea to keep actions serializable so you can record and replay user
     * sessions, or use the time travelling `redux-devtools`. An action must have
     * a `type` property which may not be `undefined`. It is a good idea to use
     * string constants for action types.
     *
     * @returns {Object} For convenience, the same action object you dispatched.
     *
     * Note that, if you use a custom middleware, it may wrap `dispatch()` to
     * return something else (for example, a Promise you can await).
     */
    
    
    function dispatch(action) {
      if (!isPlainObject(action)) {
        throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
      }
      
      if (typeof action.type === 'undefined') {
        throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
      }
      
      if (isDispatching) {
        throw new Error('Reducers may not dispatch actions.');
      }
      
      try {
        isDispatching = true;
        currentState = currentReducer(currentState, action);
      } finally {
        isDispatching = false;
      }
      
      var listeners = currentListeners = nextListeners;
      
      for (var i = 0; i < listeners.length; i++) {
        var listener = listeners[i];
        listener();
      }
      
      return action;
    }
    /**
     * Replaces the reducer currently used by the store to calculate the state.
     *
     * You might need this if your app implements code splitting and you want to
     * load some of the reducers dynamically. You might also need this if you
     * implement a hot reloading mechanism for Redux.
     *
     * @param {Function} nextReducer The reducer for the store to use instead.
     * @returns {void}
     */
    
    
    function replaceReducer(nextReducer) {
      if (typeof nextReducer !== 'function') {
        throw new Error('Expected the nextReducer to be a function.');
      }
      
      currentReducer = nextReducer;
      dispatch({
        type: ActionTypes$1.REPLACE
      });
    }
    /**
     * Interoperability point for observable/reactive libraries.
     * @returns {observable} A minimal observable of state changes.
     * For more information, see the observable proposal:
     * https://github.com/tc39/proposal-observable
     */
    
    
    function observable() {
      var _ref;
      
      var outerSubscribe = subscribe;
      return _ref = {
        /**
         * The minimal observable subscription method.
         * @param {Object} observer Any object that can be used as an observer.
         * The observer object should have a `next` method.
         * @returns {subscription} An object with an `unsubscribe` method that can
         * be used to unsubscribe the observable from the store, and prevent further
         * emission of values from the observable.
         */
        subscribe: function subscribe(observer) {
          if (_typeof(observer) !== 'object' || observer === null) {
            throw new TypeError('Expected the observer to be an object.');
          }
          
          function observeState() {
            if (observer.next) {
              observer.next(getState());
            }
          }
          
          observeState();
          var unsubscribe = outerSubscribe(observeState);
          return {
            unsubscribe: unsubscribe
          };
        }
      }, _ref[result] = function () {
        return this;
      }, _ref;
    } // When a store is created, an "INIT" action is dispatched so that every
    // reducer returns their initial state. This effectively populates
    // the initial state tree.
    
    
    dispatch({
      type: ActionTypes$1.INIT
    });
    return _ref2 = {
      dispatch: dispatch,
      subscribe: subscribe,
      getState: getState,
      replaceReducer: replaceReducer
    }, _ref2[result] = observable, _ref2;
  }
  /**
   * Prints a warning in the console if it exists.
   *
   * @param {String} message The warning message.
   * @returns {void}
   */
  
  
  function warning(message) {
    /* eslint-disable no-console */
    if (typeof console !== 'undefined' && typeof console.error === 'function') {
      console.error(message);
    }
    /* eslint-enable no-console */
    
    
    try {
      // This error was thrown as a convenience so that if you enable
      // "break on all exceptions" in your console,
      // it would pause the execution at this line.
      throw new Error(message);
    } catch (e) {} // eslint-disable-line no-empty
    
  }
  
  function getUndefinedStateErrorMessage(key, action) {
    var actionType = action && action.type;
    var actionDescription = actionType && "action \"" + String(actionType) + "\"" || 'an action';
    return "Given " + actionDescription + ", reducer \"" + key + "\" returned undefined. " + "To ignore an action, you must explicitly return the previous state. " + "If you want this reducer to hold no value, you can return null instead of undefined.";
  }
  
  function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
    var reducerKeys = Object.keys(reducers);
    var argumentName = action && action.type === ActionTypes$1.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';
    
    if (reducerKeys.length === 0) {
      return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
    }
    
    if (!isPlainObject(inputState)) {
      return "The " + argumentName + " has unexpected type of \"" + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + "\". Expected argument to be an object with the following " + ("keys: \"" + reducerKeys.join('", "') + "\"");
    }
    
    var unexpectedKeys = Object.keys(inputState).filter(function (key) {
      return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
    });
    unexpectedKeys.forEach(function (key) {
      unexpectedKeyCache[key] = true;
    });
    if (action && action.type === ActionTypes$1.REPLACE) return;
    
    if (unexpectedKeys.length > 0) {
      return "Unexpected " + (unexpectedKeys.length > 1 ? 'keys' : 'key') + " " + ("\"" + unexpectedKeys.join('", "') + "\" found in " + argumentName + ". ") + "Expected to find one of the known reducer keys instead: " + ("\"" + reducerKeys.join('", "') + "\". Unexpected keys will be ignored.");
    }
  }
  
  function assertReducerShape(reducers) {
    Object.keys(reducers).forEach(function (key) {
      var reducer = reducers[key];
      var initialState = reducer(undefined, {
        type: ActionTypes$1.INIT
      });
      
      if (typeof initialState === 'undefined') {
        throw new Error("Reducer \"" + key + "\" returned undefined during initialization. " + "If the state passed to the reducer is undefined, you must " + "explicitly return the initial state. The initial state may " + "not be undefined. If you don't want to set a value for this reducer, " + "you can use null instead of undefined.");
      }
      
      if (typeof reducer(undefined, {
        type: ActionTypes$1.PROBE_UNKNOWN_ACTION()
      }) === 'undefined') {
        throw new Error("Reducer \"" + key + "\" returned undefined when probed with a random type. " + ("Don't try to handle " + ActionTypes$1.INIT + " or other actions in \"redux/*\" ") + "namespace. They are considered private. Instead, you must return the " + "current state for any unknown actions, unless it is undefined, " + "in which case you must return the initial state, regardless of the " + "action type. The initial state may not be undefined, but can be null.");
      }
    });
  }
  /**
   * Turns an object whose values are different reducer functions, into a single
   * reducer function. It will call every child reducer, and gather their results
   * into a single state object, whose keys correspond to the keys of the passed
   * reducer functions.
   *
   * @param {Object} reducers An object whose values correspond to different
   * reducer functions that need to be combined into one. One handy way to obtain
   * it is to use ES6 `import * as reducers` syntax. The reducers may never return
   * undefined for any action. Instead, they should return their initial state
   * if the state passed to them was undefined, and the current state for any
   * unrecognized action.
   *
   * @returns {Function} A reducer function that invokes every reducer inside the
   * passed object, and builds a state object with the same shape.
   */
  
  
  function combineReducers(reducers) {
    var reducerKeys = Object.keys(reducers);
    var finalReducers = {};
    
    for (var i = 0; i < reducerKeys.length; i++) {
      var key = reducerKeys[i];
      
      if (process.env.NODE_ENV !== 'production') {
        if (typeof reducers[key] === 'undefined') {
          warning("No reducer provided for key \"" + key + "\"");
        }
      }
      
      if (typeof reducers[key] === 'function') {
        finalReducers[key] = reducers[key];
      }
    }
    
    var finalReducerKeys = Object.keys(finalReducers);
    var unexpectedKeyCache;
    
    if (process.env.NODE_ENV !== 'production') {
      unexpectedKeyCache = {};
    }
    
    var shapeAssertionError;
    
    try {
      assertReducerShape(finalReducers);
    } catch (e) {
      shapeAssertionError = e;
    }
    
    return function combination(state, action) {
      if (state === void 0) {
        state = {};
      }
      
      if (shapeAssertionError) {
        throw shapeAssertionError;
      }
      
      if (process.env.NODE_ENV !== 'production') {
        var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
        
        if (warningMessage) {
          warning(warningMessage);
        }
      }
      
      var hasChanged = false;
      var nextState = {};
      
      for (var _i = 0; _i < finalReducerKeys.length; _i++) {
        var _key = finalReducerKeys[_i];
        var reducer = finalReducers[_key];
        var previousStateForKey = state[_key];
        var nextStateForKey = reducer(previousStateForKey, action);
        
        if (typeof nextStateForKey === 'undefined') {
          var errorMessage = getUndefinedStateErrorMessage(_key, action);
          throw new Error(errorMessage);
        }
        
        nextState[_key] = nextStateForKey;
        hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
      }
      
      return hasChanged ? nextState : state;
    };
  }
  /**
   * Composes single-argument functions from right to left. The rightmost
   * function can take multiple arguments as it provides the signature for
   * the resulting composite function.
   *
   * @param {...Function} funcs The functions to compose.
   * @returns {Function} A function obtained by composing the argument functions
   * from right to left. For example, compose(f, g, h) is identical to doing
   * (...args) => f(g(h(...args))).
   */
  
  
  function compose() {
    for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
      funcs[_key] = arguments[_key];
    }
    
    if (funcs.length === 0) {
      return function (arg) {
        return arg;
      };
    }
    
    if (funcs.length === 1) {
      return funcs[0];
    }
    
    return funcs.reduce(function (a, b) {
      return function () {
        return a(b.apply(void 0, arguments));
      };
    });
  }
  /*
   * This is a dummy function to check if the function name has been altered by minification.
   * If the function has been minified and NODE_ENV !== 'production', warn the user.
   */
  
  
  function isCrushed() {}
  
  if (process.env.NODE_ENV !== 'production' && typeof isCrushed.name === 'string' && isCrushed.name !== 'isCrushed') {
    warning('You are currently using minified code outside of NODE_ENV === "production". ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or setting mode to production in webpack (https://webpack.js.org/concepts/mode/) ' + 'to ensure you have the correct code for your production build.');
  }
  
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  var NODE_ENV = process.env.NODE_ENV;
  
  var invariant = function invariant(condition, format, a, b, c, d, e, f) {
    if (NODE_ENV !== 'production') {
      if (format === undefined) {
        throw new Error('invariant requires an error message argument');
      }
    }
    
    if (!condition) {
      var error;
      
      if (format === undefined) {
        error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
      } else {
        var args = [a, b, c, d, e, f];
        var argIndex = 0;
        error = new Error(format.replace(/%s/g, function () {
          return args[argIndex++];
        }));
        error.name = 'Invariant Violation';
      }
      
      error.framesToPop = 1; // we don't care about invariant's own frame
      
      throw error;
    }
  };
  
  var invariant_1 = invariant;
  
  var isFunction = (function (value) {
    return typeof value === 'function';
  });
  
  var isEmpty = (function (value) {
    return value.length === 0;
  });
  
  var toString = (function (value) {
    return value.toString();
  });
  
  var isString = (function (value) {
    return typeof value === 'string';
  });
  
  var DEFAULT_NAMESPACE = '/';
  var ACTION_TYPE_DELIMITER = '||';
  
  var identity = (function (value) {
    return value;
  });
  
  var isNull = (function (value) {
    return value === null;
  });
  
  function createAction(type, payloadCreator, metaCreator) {
    if (payloadCreator === void 0) {
      payloadCreator = identity;
    }
    
    invariant_1(isFunction(payloadCreator) || isNull(payloadCreator), 'Expected payloadCreator to be a function, undefined or null');
    var finalPayloadCreator = isNull(payloadCreator) || payloadCreator === identity ? identity : function (head) {
      for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
        args[_key - 1] = arguments[_key];
      }
      
      return head instanceof Error ? head : payloadCreator.apply(void 0, [head].concat(args));
    };
    var hasMeta = isFunction(metaCreator);
    var typeString = type.toString();
    
    var actionCreator = function actionCreator() {
      var payload = finalPayloadCreator.apply(void 0, arguments);
      var action = {
        type: type
      };
      
      if (payload instanceof Error) {
        action.error = true;
      }
      
      if (payload !== undefined) {
        action.payload = payload;
      }
      
      if (hasMeta) {
        action.meta = metaCreator.apply(void 0, arguments);
      }
      
      return action;
    };
    
    actionCreator.toString = function () {
      return typeString;
    };
    
    return actionCreator;
  }
  
  var isPlainObject$1 = (function (value) {
    if (_typeof(value) !== 'object' || value === null) return false;
    var proto = value;
    
    while (Object.getPrototypeOf(proto) !== null) {
      proto = Object.getPrototypeOf(proto);
    }
    
    return Object.getPrototypeOf(value) === proto;
  });
  
  var isArray = (function (value) {
    return Array.isArray(value);
  });
  
  var isNil = (function (value) {
    return value === null || value === undefined;
  });
  
  var getLastElement = (function (array) {
    return array[array.length - 1];
  });
  
  /**
   * Export.
   */
  var toNoCase_1 = toNoCase;
  /**
   * Test whether a string is camel-case.
   */
  
  var hasSpace = /\s/;
  var hasSeparator = /(_|-|\.|:)/;
  var hasCamel = /([a-z][A-Z]|[A-Z][a-z])/;
  /**
   * Remove any starting case from a `string`, like camel or snake, but keep
   * spaces and punctuation that may be important otherwise.
   *
   * @param {String} string
   * @return {String}
   */
  
  function toNoCase(string) {
    if (hasSpace.test(string)) return string.toLowerCase();
    if (hasSeparator.test(string)) return (unseparate(string) || string).toLowerCase();
    if (hasCamel.test(string)) return uncamelize(string).toLowerCase();
    return string.toLowerCase();
  }
  /**
   * Separator splitter.
   */
  
  
  var separatorSplitter = /[\W_]+(.|$)/g;
  /**
   * Un-separate a `string`.
   *
   * @param {String} string
   * @return {String}
   */
  
  function unseparate(string) {
    return string.replace(separatorSplitter, function (m, next) {
      return next ? ' ' + next : '';
    });
  }
  /**
   * Camelcase splitter.
   */
  
  
  var camelSplitter = /(.)([A-Z]+)/g;
  /**
   * Un-camelcase a `string`.
   *
   * @param {String} string
   * @return {String}
   */
  
  function uncamelize(string) {
    return string.replace(camelSplitter, function (m, previous, uppers) {
      return previous + ' ' + uppers.toLowerCase().split('').join(' ');
    });
  }
  
  /**
   * Export.
   */
  
  var toSpaceCase_1 = toSpaceCase;
  /**
   * Convert a `string` to space case.
   *
   * @param {String} string
   * @return {String}
   */
  
  function toSpaceCase(string) {
    return toNoCase_1(string).replace(/[\W_]+(.|$)/g, function (matches, match) {
      return match ? ' ' + match : '';
    }).trim();
  }
  
  /**
   * Export.
   */
  
  var toCamelCase_1 = toCamelCase;
  /**
   * Convert a `string` to camel case.
   *
   * @param {String} string
   * @return {String}
   */
  
  function toCamelCase(string) {
    return toSpaceCase_1(string).replace(/\s(\w)/g, function (matches, letter) {
      return letter.toUpperCase();
    });
  }
  
  var namespacer = '/';
  var camelCase = (function (type) {
    return type.indexOf(namespacer) === -1 ? toCamelCase_1(type) : type.split(namespacer).map(toCamelCase_1).join(namespacer);
  });
  
  var arrayToObject = (function (array, callback) {
    return array.reduce(function (partialObject, element) {
      return callback(partialObject, element);
    }, {});
  });
  
  var isMap = (function (value) {
    return typeof Map !== 'undefined' && value instanceof Map;
  });
  
  function ownKeys(object) {
    if (isMap(object)) {
      // We are using loose transforms in babel. Here we are trying to convert an
      // interable to an array. Loose mode expects everything to already be an
      // array. The problem is that our eslint rules encourage us to prefer
      // spread over Array.from.
      //
      // Instead of disabling loose mode we simply disable the warning.
      // eslint-disable-next-line unicorn/prefer-spread
      return Array.from(object.keys());
    }
    
    if (typeof Reflect !== 'undefined' && typeof Reflect.ownKeys === 'function') {
      return Reflect.ownKeys(object);
    }
    
    var keys = Object.getOwnPropertyNames(object);
    
    if (typeof Object.getOwnPropertySymbols === 'function') {
      keys = keys.concat(Object.getOwnPropertySymbols(object));
    }
    
    return keys;
  }
  
  function get(key, x) {
    return isMap(x) ? x.get(key) : x[key];
  }
  
  var flattenWhenNode = (function (predicate) {
    return function flatten(map, _temp, partialFlatMap, partialFlatActionType) {
      var _ref = _temp === void 0 ? {} : _temp,
          _ref$namespace = _ref.namespace,
          namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace,
          prefix = _ref.prefix;
      
      if (partialFlatMap === void 0) {
        partialFlatMap = {};
      }
      
      if (partialFlatActionType === void 0) {
        partialFlatActionType = '';
      }
      
      function connectNamespace(type) {
        var _ref2;
        
        if (!partialFlatActionType) return type;
        var types = type.toString().split(ACTION_TYPE_DELIMITER);
        var partials = partialFlatActionType.split(ACTION_TYPE_DELIMITER);
        return (_ref2 = []).concat.apply(_ref2, partials.map(function (p) {
          return types.map(function (t) {
            return "" + p + namespace + t;
          });
        })).join(ACTION_TYPE_DELIMITER);
      }
      
      function connectPrefix(type) {
        if (partialFlatActionType || !prefix || prefix && new RegExp("^" + prefix + namespace).test(type)) {
          return type;
        }
        
        return "" + prefix + namespace + type;
      }
      
      ownKeys(map).forEach(function (type) {
        var nextNamespace = connectPrefix(connectNamespace(type));
        var mapValue = get(type, map);
        
        if (predicate(mapValue)) {
          flatten(mapValue, {
            namespace: namespace,
            prefix: prefix
          }, partialFlatMap, nextNamespace);
        } else {
          partialFlatMap[nextNamespace] = mapValue;
        }
      });
      return partialFlatMap;
    };
  });
  
  var flattenActionMap = flattenWhenNode(isPlainObject$1);
  
  function unflattenActionCreators(flatActionCreators, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace,
        prefix = _ref.prefix;
    
    function unflatten(flatActionType, partialNestedActionCreators, partialFlatActionTypePath) {
      var nextNamespace = camelCase(partialFlatActionTypePath.shift());
      
      if (isEmpty(partialFlatActionTypePath)) {
        partialNestedActionCreators[nextNamespace] = flatActionCreators[flatActionType];
      } else {
        if (!partialNestedActionCreators[nextNamespace]) {
          partialNestedActionCreators[nextNamespace] = {};
        }
        
        unflatten(flatActionType, partialNestedActionCreators[nextNamespace], partialFlatActionTypePath);
      }
    }
    
    var nestedActionCreators = {};
    Object.getOwnPropertyNames(flatActionCreators).forEach(function (type) {
      var unprefixedType = prefix ? type.replace("" + prefix + namespace, '') : type;
      return unflatten(type, nestedActionCreators, unprefixedType.split(namespace));
    });
    return nestedActionCreators;
  }
  
  function _objectSpread$1(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);
      
      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }
      
      ownKeys.forEach(function (key) {
        _defineProperty$1(target, key, source[key]);
      });
    }
    
    return target;
  }
  
  function _defineProperty$1(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }
    
    return obj;
  }
  function createActions(actionMap) {
    for (var _len = arguments.length, identityActions = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      identityActions[_key - 1] = arguments[_key];
    }
    
    var options = isPlainObject$1(getLastElement(identityActions)) ? identityActions.pop() : {};
    invariant_1(identityActions.every(isString) && (isString(actionMap) || isPlainObject$1(actionMap)), 'Expected optional object followed by string action types');
    
    if (isString(actionMap)) {
      return actionCreatorsFromIdentityActions([actionMap].concat(identityActions), options);
    }
    
    return _objectSpread$1({}, actionCreatorsFromActionMap(actionMap, options), actionCreatorsFromIdentityActions(identityActions, options));
  }
  
  function actionCreatorsFromActionMap(actionMap, options) {
    var flatActionMap = flattenActionMap(actionMap, options);
    var flatActionCreators = actionMapToActionCreators(flatActionMap);
    return unflattenActionCreators(flatActionCreators, options);
  }
  
  function actionMapToActionCreators(actionMap, _temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        prefix = _ref.prefix,
        _ref$namespace = _ref.namespace,
        namespace = _ref$namespace === void 0 ? DEFAULT_NAMESPACE : _ref$namespace;
    
    function isValidActionMapValue(actionMapValue) {
      if (isFunction(actionMapValue) || isNil(actionMapValue)) {
        return true;
      }
      
      if (isArray(actionMapValue)) {
        var _actionMapValue$ = actionMapValue[0],
            payload = _actionMapValue$ === void 0 ? identity : _actionMapValue$,
            meta = actionMapValue[1];
        return isFunction(payload) && isFunction(meta);
      }
      
      return false;
    }
    
    return arrayToObject(Object.keys(actionMap), function (partialActionCreators, type) {
      var _objectSpread2;
      
      var actionMapValue = actionMap[type];
      invariant_1(isValidActionMapValue(actionMapValue), 'Expected function, undefined, null, or array with payload and meta ' + ("functions for " + type));
      var prefixedType = prefix ? "" + prefix + namespace + type : type;
      var actionCreator = isArray(actionMapValue) ? createAction.apply(void 0, [prefixedType].concat(actionMapValue)) : createAction(prefixedType, actionMapValue);
      return _objectSpread$1({}, partialActionCreators, (_objectSpread2 = {}, _objectSpread2[type] = actionCreator, _objectSpread2));
    });
  }
  
  function actionCreatorsFromIdentityActions(identityActions, options) {
    var actionMap = arrayToObject(identityActions, function (partialActionMap, type) {
      var _objectSpread3;
      
      return _objectSpread$1({}, partialActionMap, (_objectSpread3 = {}, _objectSpread3[type] = identity, _objectSpread3));
    });
    var actionCreators = actionMapToActionCreators(actionMap, options);
    return arrayToObject(Object.keys(actionCreators), function (partialActionCreators, type) {
      var _objectSpread4;
      
      return _objectSpread$1({}, partialActionCreators, (_objectSpread4 = {}, _objectSpread4[camelCase(type)] = actionCreators[type], _objectSpread4));
    });
  }
  
  var isUndefined = (function (value) {
    return value === undefined;
  });
  
  function handleAction(type, reducer, defaultState) {
    if (reducer === void 0) {
      reducer = identity;
    }
    
    var types = toString(type).split(ACTION_TYPE_DELIMITER);
    invariant_1(!isUndefined(defaultState), "defaultState for reducer handling " + types.join(', ') + " should be defined");
    invariant_1(isFunction(reducer) || isPlainObject$1(reducer), 'Expected reducer to be a function or object with next and throw reducers');
    
    var _ref = isFunction(reducer) ? [reducer, reducer] : [reducer.next, reducer.throw].map(function (aReducer) {
          return isNil(aReducer) ? identity : aReducer;
        }),
        nextReducer = _ref[0],
        throwReducer = _ref[1];
    
    return function (state, action) {
      if (state === void 0) {
        state = defaultState;
      }
      
      var actionType = action.type;
      
      if (!actionType || types.indexOf(toString(actionType)) === -1) {
        return state;
      }
      
      return (action.error === true ? throwReducer : nextReducer)(state, action);
    };
  }
  
  var reduceReducers = (function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    
    var initialState = typeof args[args.length - 1] !== 'function' && args.pop();
    var reducers = args;
    
    if (typeof initialState === 'undefined') {
      throw new TypeError('The initial state may not be undefined. If you do not want to set a value for this reducer, you can use null instead of undefined.');
    }
    
    return function (prevState, value) {
      for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
        args[_key2 - 2] = arguments[_key2];
      }
      
      var prevStateIsUndefined = typeof prevState === 'undefined';
      var valueIsUndefined = typeof value === 'undefined';
      
      if (prevStateIsUndefined && valueIsUndefined && initialState) {
        return initialState;
      }
      
      return reducers.reduce(function (newState, reducer) {
        return reducer.apply(undefined, [newState, value].concat(args));
      }, prevStateIsUndefined && !valueIsUndefined && initialState ? initialState : prevState);
    };
  });
  
  function hasGeneratorInterface(handler) {
    var keys = ownKeys(handler);
    var hasOnlyInterfaceNames = keys.every(function (ownKey) {
      return ownKey === 'next' || ownKey === 'throw';
    });
    return keys.length && keys.length <= 2 && hasOnlyInterfaceNames;
  }
  
  var flattenReducerMap = flattenWhenNode(function (node) {
    return (isPlainObject$1(node) || isMap(node)) && !hasGeneratorInterface(node);
  });
  
  function handleActions(handlers, defaultState, options) {
    if (options === void 0) {
      options = {};
    }
    
    invariant_1(isPlainObject$1(handlers) || isMap(handlers), 'Expected handlers to be a plain object.');
    var flattenedReducerMap = flattenReducerMap(handlers, options);
    var reducers = ownKeys(flattenedReducerMap).map(function (type) {
      return handleAction(type, get(type, flattenedReducerMap), defaultState);
    });
    var reducer = reduceReducers.apply(void 0, reducers.concat([defaultState]));
    return function (state, action) {
      if (state === void 0) {
        state = defaultState;
      }
      
      return reducer(state, action);
    };
  }
  
  var _createActions = createActions({
        CHANGE_PRODUCT_TITLE: function CHANGE_PRODUCT_TITLE() {
          var title = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
          return {
            title: title
          };
        }
      }),
      changeProductTitle = _createActions.changeProductTitle;
  
  var defaultState = {
    title: 'title'
  };
  var reducer$1 = handleActions({
    CHANGE_PRODUCT_TITLE: function CHANGE_PRODUCT_TITLE(state, _ref) {
      var title = _ref.payload.title;
      return _objectSpread({}, state, {
        title: title
      });
    }
  }, defaultState);
  
  var compose$1 = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  var store = createStore(reducer$1, compose$1(lazyReducerEnhancer(combineReducers)));
  
  connectRouter(store);
  
}());
//# sourceMappingURL=index.js.map
