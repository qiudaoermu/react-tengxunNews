/**
 * Created by ANN on 2017/7/25.
 */
import React from 'react';

export default class ComponentRight extends React.Component{
    constructor(){
        super()
        this.state={
            newsData:[{name:1,root:2}],
            content:[
                {item:'内容一'},
                {item:'内容二'},
                {item:'内容三'}
            ],
        }

    }
    componentDidMount(){
        var newdateArr = "badiu"

        var _this = this;
        $.ajax({
            url:"newComponent.json",

            type:"get",
            async:'false'
        }).done(function(data){

            console.log( $.type(data))

            _this.setState({newsData:data})
        })
    }
    render(){



        return(
            <div className="newsImgRignt">
                <div className="etitle">
                    <h3><a></a></h3>
                    <span>
                     林肯SUV 探秘直播
                    </span>
                </div>
                <div className="con">
                    <a>中国式游学是坑，家长为何还跳</a>
                    <div className="info">
                        <div className="pic">
                            <img src="public/css/img/ninja150108020922434.jpg" alt=""/>
                        </div>
                        <div className="text">
                            中国目前的海外游学，本质上是“挂羊头卖狗肉”。
                        </div>
                    </div>
                    <ul>
                        <ul style={{marginTop:86}}>


                            <li>
                                <a target="_blank" href="http://history.news.qq.com/">历史</a> |
                                <a target="_blank" href="http://view.news.qq.com/original/legacyintouch/d662.html">英法联军为何不烧紫禁城？</a>
                            </li>




                            <li>
                                <a target="_blank" href="http://view.news.qq.com/">评论</a> | <a target="_blank" href="http://view.news.qq.com/a/20170727/012063.htm">高铁提速正当时</a>
                            </li>




                            <li><a href="http://view.news.qq.com/a/20170727/011768.htm" target="_blank">贪官死后“受审”有助加大反腐威慑</a></li>



                            <li><a href="http://view.news.qq.com/a/20170726/011672.htm" target="_blank">火锅店卖凉菜违法的双重教育意义</a></li>





                        </ul>
                    </ul>
                </div>


            </div>
        )
    }
}
