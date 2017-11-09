webpackHotUpdate(0,{

/***/ 194:
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
                    )
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
                )
            );
        }
    }]);

    return WordImg;
}(_react2.default.Component);

exports.default = WordImg;

/***/ })

})
//# sourceMappingURL=0.8e475ad2fae7a6710774.hot-update.js.map