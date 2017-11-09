webpackHotUpdate(0,{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(16);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _firstNewsWord = __webpack_require__(192);

var _firstNewsWord2 = _interopRequireDefault(_firstNewsWord);

var _componentWordImg = __webpack_require__(193);

var _componentWordImg2 = _interopRequireDefault(_componentWordImg);

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
                _react2.default.createElement(ComponentRight, null)
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

var _react = __webpack_require__(16);

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

var _react = __webpack_require__(16);

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
                            _react2.default.createElement('div', { className: 'shareButton' })
                        )
                    );
                })
            );
        }
    }]);

    return WordImg;
}(_react2.default.Component);

exports.default = WordImg;

/***/ })

})
//# sourceMappingURL=0.e64608b6b4d9ab71f23e.hot-update.js.map