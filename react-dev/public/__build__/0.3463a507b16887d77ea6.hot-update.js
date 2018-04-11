webpackHotUpdate(0,{

/***/ 189:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(10);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                * Created by ANN on 2017/7/25.
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */


var ComponentRight = function (_React$Component) {
    _inherits(ComponentRight, _React$Component);

    function ComponentRight() {
        _classCallCheck(this, ComponentRight);

        var _this2 = _possibleConstructorReturn(this, (ComponentRight.__proto__ || Object.getPrototypeOf(ComponentRight)).call(this));

        _this2.state = {
            newsData: [{ name: 1, root: 2 }],
            content: [{ item: '内容一' }, { item: '内容二' }, { item: '内容三' }]
        };

        return _this2;
    }

    _createClass(ComponentRight, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var newdateArr = "badiu";

            var _this = this;
            $.ajax({
                url: "newComponent.json",

                type: "get",
                async: 'false'
            }).done(function (data) {

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

    return ComponentRight;
}(_react2.default.Component);

exports.default = ComponentRight;

/***/ })

})
//# sourceMappingURL=0.3463a507b16887d77ea6.hot-update.js.map