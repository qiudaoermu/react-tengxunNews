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

    function NavsContent(props) {
        _classCallCheck(this, NavsContent);

        var _this = _possibleConstructorReturn(this, (NavsContent.__proto__ || Object.getPrototypeOf(NavsContent)).call(this, props));

        var t = "";
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

        _this.state = {
            current: 0,
            newsData: newdateArr
            // console.log(this.state.newsData)

            // console.error(this.props)
            //t = this.props;
            //this.setState({newsData:t})

        };return _this;
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
        key: "showImg",
        value: function showImg(event) {
            /*  event.stopPropagation()
             if(event.target.className!="shareButton"){return}
             event.preventDefault()*/
            var index = event.target.getAttribute("data");
            this.setState({ realShow: index });
        }
    }, {
        key: "showImgReal",
        value: function showImgReal(index) {
            return index == this.state.realShow ? "sharBoard-active" : "sharBoard";
        }
    }, {
        key: "hideImg",
        value: function hideImg(event) {
            /*event.nativeEvent.stopImmediatePropagation();
             event.stopPropagation()
             if(event.target.className!="shareButton"){return}
             event.preventDefault()*/

            this.setState({ realShow: "400" });
        }
    }, {
        key: "render",
        value: function render() {

            return _react2.default.createElement(
                "div",
                { className: "newsImgparent" },
                this.props.config
            );
        }
    }]);

    return NavsContent;
}(_react2.default.Component);

exports.default = NavsContent;

/***/ })

})
//# sourceMappingURL=0.4e906f8b0a99433c1072.hot-update.js.map