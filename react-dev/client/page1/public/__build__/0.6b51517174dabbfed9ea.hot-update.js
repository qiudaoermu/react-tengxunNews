webpackHotUpdate(0,{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _firstNewsWord = __webpack_require__(192);

var _firstNewsWord2 = _interopRequireDefault(_firstNewsWord);

var _componentWordImg = __webpack_require__(193);

var _componentWordImg2 = _interopRequireDefault(_componentWordImg);

var _componentRight = __webpack_require__(194);

var _componentRight2 = _interopRequireDefault(_componentRight);

var _componentNewsNavSecend = __webpack_require__(195);

var _componentNewsNavSecend2 = _interopRequireDefault(_componentNewsNavSecend);

var _componentCarousel = __webpack_require__(196);

var _componentCarousel2 = _interopRequireDefault(_componentCarousel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/22.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ComonentBody = function (_React$Component) {
    _inherits(ComonentBody, _React$Component);

    function ComonentBody() {
        _classCallCheck(this, ComonentBody);

        return _possibleConstructorReturn(this, (ComonentBody.__proto__ || Object.getPrototypeOf(ComonentBody)).apply(this, arguments));
    }

    _createClass(ComonentBody, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'news-main' },
                _react2.default.createElement(_firstNewsWord2.default, null),
                _react2.default.createElement(_componentWordImg2.default, null),
                _react2.default.createElement(_componentRight2.default, null),
                _react2.default.createElement(_componentNewsNavSecend2.default, null),
                _react2.default.createElement(_componentCarousel2.default, null)
            );
        }
    }]);

    return ComonentBody;
}(_react2.default.Component);

exports.default = ComonentBody;

/***/ }),

/***/ 192:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by ANN on 2017/7/22.
 */


var ComponentFirstNew = function (_React$Component) {
    _inherits(ComponentFirstNew, _React$Component);

    function ComponentFirstNew() {
        _classCallCheck(this, ComponentFirstNew);

        return _possibleConstructorReturn(this, (ComponentFirstNew.__proto__ || Object.getPrototypeOf(ComponentFirstNew)).apply(this, arguments));
    }

    _createClass(ComponentFirstNew, [{
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'firstNewsContent' },
                _react2.default.createElement(
                    'h1',
                    null,
                    '\u4E60\u8FD1\u5E73\u4E3B\u6301\u4E2D\u592E\u653F\u6CBB\u5C40\u4F1A\u8BAE \u90E8\u7F72\u4E0B\u534A\u5E74\u7ECF\u6D4E\u5DE5\u4F5C'
                ),
                _react2.default.createElement('span', null),
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            null,
                            '\u901F\u89C8\u300A\u5C06\u6539\u9769\u8FDB\u884C\u5230\u5E95\u300B\u7B2C\u516B\u96C6\u300A\u5F3A\u519B\u4E4B\u8DEF\u300B\u4E0B'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'a',
                            null,
                            '\u8425\u6539\u589E\u4E0D\u6B62\u662F\u51CF\u7A0E\uFF0C\u8FD9\u4E2A\u7701\u7684\u53D8\u5316\u5370\u8BC1\u4E86\u603B\u7406\u6240\u8A00'
                        )
                    )
                )
            );
        }
    }]);

    return ComponentFirstNew;
}(_react2.default.Component);

exports.default = ComponentFirstNew;

/***/ }),

/***/ 193:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var WordImg = function (_React$Component) {
    _inherits(WordImg, _React$Component);

    function WordImg() {
        _classCallCheck(this, WordImg);

        var _this2 = _possibleConstructorReturn(this, (WordImg.__proto__ || Object.getPrototypeOf(WordImg)).call(this));

        _this2.state = {
            newsData: [{ name: 1, root: 2 }],
            content: [{ item: '内容一' }, { item: '内容二' }, { item: '内容三' }],
            showShare: "",
            realShow: "none",
            flag: false,
            first: "",
            second: [0]

        };

        return _this2;
    }

    _createClass(WordImg, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var newdateArr = "badiu";

            var _this = this;
            $.ajax({
                url: "/api/user/signup",

                type: "get",
                async: 'false'
            }).done(function (data) {

                console.log($.type(data));

                _this.setState({ newsData: data });
            });
        }
    }, {
        key: 'showImg',
        value: function showImg(event) {
            /*  event.stopPropagation()
              if(event.target.className!="shareButton"){return}
              event.preventDefault()*/
            var index = event.target.getAttribute("data");
            this.setState({ realShow: index });
        }
    }, {
        key: 'showImgReal',
        value: function showImgReal(index) {
            return index == this.state.realShow ? "sharBoard-active" : "sharBoard";
        }
    }, {
        key: 'hideImg',
        value: function hideImg(event) {
            /*event.nativeEvent.stopImmediatePropagation();
            event.stopPropagation()
            if(event.target.className!="shareButton"){return}
            event.preventDefault()*/

            this.setState({ realShow: "400" });
        }
    }, {
        key: 'stopParation',
        value: function stopParation() {
            return;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                'div',
                { className: 'newsImgparent' },
                this.state.newsData.map(function (item, index) {
                    return _react2.default.createElement(
                        'div',
                        { key: index, className: 'newsImg' },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement('img', { src: 'public/css/img/' + item.img + ".jpeg" })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'fx1' },
                            _react2.default.createElement(
                                'h2',
                                null,
                                item.word
                            ),
                            _react2.default.createElement(
                                'div',
                                { onMouseOver: _this3.showImg.bind(_this3),
                                    onMouseOut: _this3.hideImg.bind(_this3),
                                    data: index, className: 'shareButton' },
                                _react2.default.createElement(
                                    'div',
                                    {
                                        className: _this3.showImgReal(index)
                                        //onMouseOver={this.stopParation.bind(this)}

                                    },
                                    _react2.default.createElement(
                                        'ul',
                                        { className: 'shareBtn16', id: 'shares' },
                                        _react2.default.createElement('li', { className: 'jiantou' }),
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'shareButtonLi', id: 'share2qzone' },
                                            _react2.default.createElement('a', { href: 'javascript:void(0)', className: 's_qzone' }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'QQ\u7A7A\u95F4'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { className: 'shareButtonLi', id: 'share2qq' },
                                            _react2.default.createElement('a', { href: 'javascript:void(0)', className: 's_qq' }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                'QQ\u597D\u53CB'
                                            )
                                        ),
                                        _react2.default.createElement(
                                            'li',
                                            { id: 'share2sina', className: 'shareButtonLi' },
                                            _react2.default.createElement('a', { href: 'javascript:void(0)', className: 's_sina' }),
                                            _react2.default.createElement(
                                                'span',
                                                null,
                                                '\u65B0\u6D6A\u5FAE\u535A'
                                            )
                                        )
                                    )
                                )
                            )
                        )
                    );
                })
            );
        }
    }]);

    return WordImg;
}(_react2.default.Component);

exports.default = WordImg;

/***/ }),

/***/ 194:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var WordImg = function (_React$Component) {
    _inherits(WordImg, _React$Component);

    function WordImg() {
        _classCallCheck(this, WordImg);

        var _this2 = _possibleConstructorReturn(this, (WordImg.__proto__ || Object.getPrototypeOf(WordImg)).call(this));

        _this2.state = {
            newsData: [{ name: 1, root: 2 }],
            content: [{ item: '内容一' }, { item: '内容二' }, { item: '内容三' }]
        };

        return _this2;
    }

    _createClass(WordImg, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var newdateArr = "badiu";

            var _this = this;
            $.ajax({
                url: "/api/user/signup",

                type: "get",
                async: 'false'
            }).done(function (data) {

                console.log($.type(data));

                _this.setState({ newsData: data });
            });
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                { className: 'newsImgRignt' },
                _react2.default.createElement(
                    'div',
                    { className: 'etitle' },
                    _react2.default.createElement(
                        'h3',
                        null,
                        _react2.default.createElement('a', null)
                    ),
                    _react2.default.createElement(
                        'span',
                        null,
                        '\u6797\u80AFSUV \u63A2\u79D8\u76F4\u64AD'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'con' },
                    _react2.default.createElement(
                        'a',
                        null,
                        '\u4E2D\u56FD\u5F0F\u6E38\u5B66\u662F\u5751\uFF0C\u5BB6\u957F\u4E3A\u4F55\u8FD8\u8DF3'
                    ),
                    _react2.default.createElement(
                        'div',
                        { className: 'info' },
                        _react2.default.createElement(
                            'div',
                            { className: 'pic' },
                            _react2.default.createElement('img', { src: 'public/css/img/ninja150108020922434.jpg', alt: '' })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'text' },
                            '\u4E2D\u56FD\u76EE\u524D\u7684\u6D77\u5916\u6E38\u5B66\uFF0C\u672C\u8D28\u4E0A\u662F\u201C\u6302\u7F8A\u5934\u5356\u72D7\u8089\u201D\u3002'
                        )
                    ),
                    _react2.default.createElement(
                        'ul',
                        null,
                        _react2.default.createElement(
                            'ul',
                            { style: { marginTop: 86 } },
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { target: '_blank', href: 'http://history.news.qq.com/' },
                                    '\u5386\u53F2'
                                ),
                                ' |',
                                _react2.default.createElement(
                                    'a',
                                    { target: '_blank', href: 'http://view.news.qq.com/original/legacyintouch/d662.html' },
                                    '\u82F1\u6CD5\u8054\u519B\u4E3A\u4F55\u4E0D\u70E7\u7D2B\u7981\u57CE\uFF1F'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { target: '_blank', href: 'http://view.news.qq.com/' },
                                    '\u8BC4\u8BBA'
                                ),
                                ' | ',
                                _react2.default.createElement(
                                    'a',
                                    { target: '_blank', href: 'http://view.news.qq.com/a/20170727/012063.htm' },
                                    '\u9AD8\u94C1\u63D0\u901F\u6B63\u5F53\u65F6'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'http://view.news.qq.com/a/20170727/011768.htm', target: '_blank' },
                                    '\u8D2A\u5B98\u6B7B\u540E\u201C\u53D7\u5BA1\u201D\u6709\u52A9\u52A0\u5927\u53CD\u8150\u5A01\u6151'
                                )
                            ),
                            _react2.default.createElement(
                                'li',
                                null,
                                _react2.default.createElement(
                                    'a',
                                    { href: 'http://view.news.qq.com/a/20170726/011672.htm', target: '_blank' },
                                    '\u706B\u9505\u5E97\u5356\u51C9\u83DC\u8FDD\u6CD5\u7684\u53CC\u91CD\u6559\u80B2\u610F\u4E49'
                                )
                            )
                        )
                    )
                )
            );
        }
    }]);

    return WordImg;
}(_react2.default.Component);

exports.default = WordImg;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/29.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var NewsNavS = function (_React$Component) {
    _inherits(NewsNavS, _React$Component);

    function NewsNavS() {
        _classCallCheck(this, NewsNavS);

        var _this = _possibleConstructorReturn(this, (NewsNavS.__proto__ || Object.getPrototypeOf(NewsNavS)).call(this));

        _this.state = {
            current: 0,
            list: ['要闻', '财经', '体育', '娱乐', '房产', '科技', '汽车', '更多']
        };

        return _this;
    }

    _createClass(NewsNavS, [{
        key: 'currentClass',
        value: function currentClass(val, index) {
            return index == this.state.current ? "activeNavItem" : "";
        }
    }, {
        key: 'contentClass',
        value: function contentClass(val, index) {
            return index == this.state.current ? "nav_ContentActive" : "nav_Content";
        }
    }, {
        key: 'changeNavItemHandle',
        value: function changeNavItemHandle(e) {
            //if(e.target.className!='activeNavItem'){return}
            // e.stopPropagation()
            var targetData = e.target.getAttribute("data");
            this.setState({
                current: targetData
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { style: { clear: 'both', float: 'left' } },
                _react2.default.createElement(
                    'ul',
                    { className: 'navSUl' },
                    this.state.list.map(function (val, index) {
                        console.log(val);

                        return _react2.default.createElement(
                            'li',
                            { key: index, className: _this2.currentClass(val, index),
                                data: index,
                                onMouseOver: _this2.changeNavItemHandle.bind(_this2)
                            },
                            val,
                            _react2.default.createElement('div', { className: _this2.contentClass(val, index) })
                        );
                    })
                )
            );
        }
    }]);

    return NewsNavS;
}(_react2.default.Component);

exports.default = NewsNavS;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/30.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */
/**
 * Created by ANN on 2017/7/29.
 */


var RightCarousel = function (_React$Component) {
    _inherits(RightCarousel, _React$Component);

    function RightCarousel() {
        _classCallCheck(this, RightCarousel);

        var _this = _possibleConstructorReturn(this, (RightCarousel.__proto__ || Object.getPrototypeOf(RightCarousel)).call(this));

        _this.state = {
            current: 0,
            list: ['要闻', '财经', '体育', '娱乐', '房产'],
            img: ['144888827.jpg', '144888871.jpg', '144888877.jpg', '144891378.jpg', '1448881111.jpg'],
            currentImgIndex: 0
        };

        return _this;
    }

    _createClass(RightCarousel, [{
        key: 'currentClass',
        value: function currentClass(val, index) {
            return index == this.state.current ? "activeNavItem" : "";
        }
    }, {
        key: 'currentClassImg',
        value: function currentClassImg(val, index) {
            return index == this.state.currentImgIndex ? "ImgShowActive" : ":";
        }
    }, {
        key: 'changeNavItemHandle',
        value: function changeNavItemHandle(e) {
            //if(e.target.className!='activeNavItem'){return}
            // e.stopPropagation()
            var targetData = e.target.getAttribute("data");
            this.setState({
                current: targetData
            });
        }
    }, {
        key: 'currentPointClass',
        value: function currentPointClass(val, index) {
            return index == this.state.currentImgIndex ? "activePointItem" : "";
        }
    }, {
        key: 'changePointItemHandle',
        value: function changePointItemHandle(e) {
            var targetData = e.target.getAttribute("data");
            this.setState({
                currentImgIndex: targetData
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'div',
                { className: 'RightCarouselContainer' },
                _react2.default.createElement(
                    'ul',
                    { className: 'RightCarousel' },
                    _react2.default.createElement(
                        'div',
                        { className: 'titleImg' },
                        _react2.default.createElement('img', { src: 'public/css/img/yxl.png' })
                    ),
                    this.state.img.map(function (val, index) {
                        console.log(val);

                        return _react2.default.createElement(
                            'li',
                            { key: index, className: _this2.currentClassImg(val, index),
                                data: index },
                            _react2.default.createElement('img', { src: "public/css/img/" + val })
                        );
                    })
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'CurseturnPoint' },
                    this.state.list.map(function (val, index) {
                        console.log(val);

                        return _react2.default.createElement('li', { key: index, className: _this2.currentPointClass(val, index),
                            data: index,
                            onMouseOver: _this2.changePointItemHandle.bind(_this2)
                        });
                    })
                )
            );
        }
    }]);

    return RightCarousel;
}(_react2.default.Component);

exports.default = RightCarousel;

/***/ })

})
//# sourceMappingURL=0.6b51517174dabbfed9ea.hot-update.js.map