webpackHotUpdate(0,{

/***/ 191:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(21);

var _reactDom2 = _interopRequireDefault(_reactDom);

var _firstNewsWord = __webpack_require__(192);

var _firstNewsWord2 = _interopRequireDefault(_firstNewsWord);

var _componentWordImg = __webpack_require__(193);

var _componentWordImg2 = _interopRequireDefault(_componentWordImg);

var _componentRight = __webpack_require__(194);

var _componentRight2 = _interopRequireDefault(_componentRight);

var _componentNewsNavSecend = __webpack_require__(196);

var _componentNewsNavSecend2 = _interopRequireDefault(_componentNewsNavSecend);

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
                _react2.default.createElement('newsNavSecend', null)
            );
        }
    }]);

    return ComonentBody;
}(_react2.default.Component);

exports.default = ComonentBody;

/***/ }),

/***/ 196:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(14);

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

        _this.state.list = [1, 2, 3, 434];
        return _this;
    }

    _createClass(NewsNavS, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                this.state.list.map(function (val, index) {
                    console.log(val);
                })
            );
        }
    }]);

    return NewsNavS;
}(_react2.default.Component);

exports.default = NewsNavS;

/***/ })

})
//# sourceMappingURL=0.b4d8ad54afd58a0c91cf.hot-update.js.map