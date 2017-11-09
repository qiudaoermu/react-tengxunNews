webpackHotUpdate(0,{

/***/ 197:
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
            img: ['1448881111.jpg', '144888871.jpg', '144888877.jpg', '144891378.jpg', '1448881111.jpg'],
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
        key: 'turnLeft',
        value: function turnLeft() {
            var t = this.state.currentImgIndex - 1;
            this.setState({ currentImgIndex: t });
        }
    }, {
        key: 'trunRight',
        value: function trunRight() {}
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
                    _react2.default.createElement(
                        'div',
                        { className: 'turn' },
                        _react2.default.createElement('span', { className: 'turnLeft', onClick: this.turnLeft.bind(this) }),
                        _react2.default.createElement('span', { className: 'turnRigt', onClick: this.trunRight.bind(this) })
                    ),
                    this.state.img.map(function (val, index) {
                        //  console.log(val)

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
                        // console.log(val)

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
//# sourceMappingURL=0.3b65209e4efcdc2dde01.hot-update.js.map