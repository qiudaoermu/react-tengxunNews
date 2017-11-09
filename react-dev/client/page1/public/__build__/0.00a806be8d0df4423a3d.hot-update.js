webpackHotUpdate(0,{

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
            list: ['要闻', '财经', '体育', '娱乐', '房产']
        };

        return _this;
    }

    _createClass(RightCarousel, [{
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
                { className: 'RightCarouselContainer' },
                _react2.default.createElement(
                    'ul',
                    { className: 'RightCarousel' },
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
                ),
                _react2.default.createElement(
                    'ul',
                    { className: 'CurseturnPoint' },
                    this.state.list.map(function (val, index) {
                        console.log(val);

                        return _react2.default.createElement('li', { key: index, className: _this2.currentClass(val, index),
                            data: index,
                            onMouseOver: _this2.changeNavItemHandle.bind(_this2)
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
//# sourceMappingURL=0.00a806be8d0df4423a3d.hot-update.js.map