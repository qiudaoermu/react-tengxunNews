webpackHotUpdate(0,{

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _componentNavsContent = __webpack_require__(198);

var _componentNavsContent2 = _interopRequireDefault(_componentNavsContent);

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

        var _this2 = _possibleConstructorReturn(this, (NewsNavS.__proto__ || Object.getPrototypeOf(NewsNavS)).call(this));

        _this2.state = {
            current: 0,
            list: ['要闻', '财经', '体育', '娱乐', '房产', '科技', '汽车', '更多'],
            data: "ab",
            newsData: ''
        };

        return _this2;
    }

    _createClass(NewsNavS, [{
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
            if (!e.target.matches("li")) {
                return;
            }
            e.stopPropagation();
            var targetData = e.target.getAttribute("data");
            this.setState({
                current: targetData
            });

            var newdateArr = "";
            var _this = this;
            $.ajax({
                url: "/api/user/newsList",

                type: "get",
                async: false
            }).done(function (data) {

                console.log($.type(data));
                newdateArr = data[targetData].data;
                //
                console.log(newdateArr);
                _this.setState({ newsData: newdateArr });
            });
        }
    }, {
        key: "render",
        value: function render() {
            var _this3 = this;

            return _react2.default.createElement(
                "div",
                { style: { clear: 'both', float: 'left' } },
                _react2.default.createElement(
                    "ul",
                    { className: "navSUl" },
                    this.state.list.map(function (val, index) {
                        console.log(val);

                        return _react2.default.createElement(
                            "li",
                            { key: index, className: _this3.currentClass(val, index),
                                data: index,
                                onMouseOver: _this3.changeNavItemHandle.bind(_this3)
                            },
                            val,
                            _react2.default.createElement(
                                "div",
                                { className: _this3.contentClass(val, index) },
                                _react2.default.createElement(_componentNavsContent2.default, { data: _this3.state.newsData })
                            )
                        );
                    })
                )
            );
        }
    }]);

    return NewsNavS;
}(_react2.default.Component);

exports.default = NewsNavS;

/***/ })

})
//# sourceMappingURL=0.3aa9520a4ff20df3149a.hot-update.js.map