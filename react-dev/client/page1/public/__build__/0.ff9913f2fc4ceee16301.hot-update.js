webpackHotUpdate(0,{

/***/ 198:
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


var NavsContent = function (_React$Component) {
    _inherits(NavsContent, _React$Component);

    function NavsContent() {
        _classCallCheck(this, NavsContent);

        var newdateArr = "";
        $.ajax({
            url: "/api/user/newsList",

            type: "get",
            async: false
        }).done(function (data) {

            console.log($.type(data));
            newdateArr = data[0].data;
            //_this.setState({newsData:data})
        });

        var _this = _possibleConstructorReturn(this, (NavsContent.__proto__ || Object.getPrototypeOf(NavsContent)).call(this));

        _this.state = {
            current: 0,
            newsData: newdateArr
        };
        console.log(_this.state.newsData);

        return _this;
    }

    _createClass(NavsContent, [{
        key: "currentClass",
        value: function currentClass(val, index) {
            return index == this.state.current ? "activeNavItem" : "";
        }
    }, {
        key: "contentClass",
        value: function contentClass(val, index) {
            return index == this.state.current ? "nav_ContentActive" : "nav_Content";
        }
    }, {
        key: "changeNavItemHandle",
        value: function changeNavItemHandle(e) {
            //if(e.target.className!='activeNavItem'){return}
            // e.stopPropagation()
            var targetData = e.target.getAttribute("data");
            this.setState({
                current: targetData
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                "div",
                { className: "newsImgparent" },
                this.state.newsData.map(function (item, index) {
                    if (item.art_type == 1) {
                        return _react2.default.createElement("div", { className: "header" });
                    }
                    return _react2.default.createElement(
                        "div",
                        { key: index, className: "newsImg" },
                        _react2.default.createElement(
                            "div",
                            null,
                            _react2.default.createElement("img", { src: 'public/css/img/' + item.img + ".jpeg" })
                        ),
                        _react2.default.createElement(
                            "div",
                            { className: "fx1" },
                            _react2.default.createElement(
                                "h2",
                                null,
                                item.word
                            ),
                            _react2.default.createElement(
                                "div",
                                { onMouseOver: _this2.showImg.bind(_this2),
                                    onMouseOut: _this2.hideImg.bind(_this2),
                                    data: index, className: "shareButton" },
                                _react2.default.createElement(
                                    "div",
                                    {
                                        className: _this2.showImgReal(index)
                                        //onMouseOver={this.stopParation.bind(this)}

                                    },
                                    _react2.default.createElement(
                                        "ul",
                                        { className: "shareBtn16", id: "shares" },
                                        _react2.default.createElement("li", { className: "jiantou" }),
                                        _react2.default.createElement(
                                            "li",
                                            { className: "shareButtonLi", id: "share2qzone" },
                                            _react2.default.createElement("a", { href: "javascript:void(0)", className: "s_qzone" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "QQ\u7A7A\u95F4"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "li",
                                            { className: "shareButtonLi", id: "share2qq" },
                                            _react2.default.createElement("a", { href: "javascript:void(0)", className: "s_qq" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "QQ\u597D\u53CB"
                                            )
                                        ),
                                        _react2.default.createElement(
                                            "li",
                                            { id: "share2sina", className: "shareButtonLi" },
                                            _react2.default.createElement("a", { href: "javascript:void(0)", className: "s_sina" }),
                                            _react2.default.createElement(
                                                "span",
                                                null,
                                                "\u65B0\u6D6A\u5FAE\u535A"
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

    return NavsContent;
}(_react2.default.Component);

exports.default = NavsContent;

/***/ })

})
//# sourceMappingURL=0.ff9913f2fc4ceee16301.hot-update.js.map