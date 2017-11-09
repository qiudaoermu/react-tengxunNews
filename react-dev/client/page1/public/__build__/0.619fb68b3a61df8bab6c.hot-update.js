webpackHotUpdate(0,{

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
            event.stopPropagation();
            console.log("open");
            if (event.target.className != "shareButton") {
                return;
            }
            event.preventDefault();
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
            event.nativeEvent.stopImmediatePropagation();
            console.log("closed");
            /*this.setState({flag:true})
             */
            event.stopPropagation();
            if (event.target.className != "shareButton") {
                return;
            }
            event.preventDefault();
            this.setState({ second: 1 });

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
                                        className: _this3.showImgReal(index),
                                        onMouseOver: _this3.stopParation.bind(_this3)

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

/***/ })

})
//# sourceMappingURL=0.619fb68b3a61df8bab6c.hot-update.js.map