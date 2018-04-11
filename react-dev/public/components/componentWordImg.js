/**
 * Created by ANN on 2017/7/25.
 */
import React from 'react';

export default class WordImg extends React.Component{
    constructor(){
        super()

        var newdateArr = "badiu";

        var _this = this;
        $.ajax({
            url:"newComponent.json",

            type:"get",
            async:false
        }).done(function(data){

            newdateArr = data
            //_this.setState({newsData:data})
        });
        this.state={
            newsData:newdateArr,
            content:[
                {item:'内容一'},
                {item:'内容二'},
                {item:'内容三'}
            ],
            showShare:"",
            realShow:"none",
            flag:false,
            first:"",
            second:[0]
        }




    }
    componentDidMount(){



    }
    showImg(event){
     /*  event.stopPropagation()
       if(event.target.className!="shareButton"){return}
       event.preventDefault()*/
       var index =  event.currentTarget.getAttribute("data");
       console.log("index"+index);
       this.setState({realShow:index})



    }
    showImgReal(index){
        return index==this.state.realShow?"sharBoard-active":"sharBoard"
    }
    hideImg(event){
        /*event.nativeEvent.stopImmediatePropagation();
        event.stopPropagation()
        if(event.target.className!="shareButton"){return}
        event.preventDefault()*/


            this.setState({realShow:"400"})
    }
    stopParation(){
        return
    }
    showImgChild(event){
        var index =  event.target.getAttribute("data");

        this.setState({realShow:index})
    }

    render(){


        return(
            <div className="newsImgparent">
                {this.state.newsData.map( (item,index) =>{
                    return(
                        <div key={index} className="newsImg">
                            <div>
                                 <img src={'public/css/img/'+item.img+".jpeg"}/>
                            </div>

                            <div className="fx1" >
                                <h2>{item.word}</h2>
                                <div onMouseOver={this.showImg.bind(this)}
                                     onMouseOut = {this.hideImg.bind(this)}
                                     data = {index} className="shareButton"
                                     key={index}
                                >

                                    <div className={this.showImgReal(index)} key = {index}
                                        onMouseOver={this.showImgChild.bind(this)}>
                                        <ul className="shareBtn16" id="shares">
                                            <li className="jiantou"></li>
                                            <li className="shareButtonLi" id="share2qzone">
                                                <a href="javascript:void(0)" className="s_qzone" >

                                                </a>
                                                <span>QQ空间</span>
                                            </li>
                                            <li className="shareButtonLi" id="share2qq">
                                                <a href="javascript:void(0)" className="s_qq" >

                                                </a>
                                                <span>QQ好友</span>
                                            </li>
                                            <li id="share2sina" className="shareButtonLi">
                                                <a href="javascript:void(0)" className="s_sina" >

                                                </a>
                                                <span>新浪微博</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                             </div>

                        </div>
                        )

                })}
            </div>
        )
    }
}
