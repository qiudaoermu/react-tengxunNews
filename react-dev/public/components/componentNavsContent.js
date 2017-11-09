/**
 * Created by ANN on 2017/7/30.
 */
/**
 * Created by ANN on 2017/7/29.
 */
import React from "react"

export default  class NavsContent extends React.Component{
    constructor(props){
        super(props)



        this.state ={
            current:0,

        }


        //console.error(this.props.data)

    }
    currentClass(val,index){
        return  index==this.state.current?"activeNavItem":""
    }
    contentClass(val,index){
        return index ==this.state.current?"nav_ContentActive":"nav_Content"
    }
    changeNavItemHandle(e){
        //if(e.target.className!='activeNavItem'){return}
        // e.stopPropagation()
        var targetData =  e.target.getAttribute("data")
        this.setState({
            current:targetData
        })
    }
    showShareBoard(event){
         event.stopPropagation()
         if(event.target.className!="shareButton"){return}
         event.preventDefault()
        var index =  event.target.getAttribute("data-cc")
        this.setState({realShow:index})
        console.log(event.target.getAttribute("data-cc"))



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
    JumpImgCorese(event){

        console.log(event.target.getAttribute("data-bb"))

        var json = this.refs.imgJump.getAttribute("data-bb")
       console.log(json)

    }

    handleClickJump(event){
        //event.stopPropagation()
        console.log()
        var data = event.currentTarget.getAttribute("data-cc")
        window.location.href="detial?data="+data

    }
    handleClickTextAndImg(event){
        console.log(event.target.getAttribute("data-bb"))




    }
    render(){
        /*
            console.log(this.props)
            this.props.config.map((val,index)=>{
                    console.log(val)
            })
        */

        return(

            <div className="newsImgparent">
                {this.props.config.map( (item,index) =>{
                    if(item.art_type==1){
                        return(
                            <div className="imgsCon"
                                 ref ="imgJump"
                                 key={index}
                                 data-cc={index}
                                 onClick={this.handleClickJump.bind(this)}>

                                <h2 className="imgArrTitle">{item.longtitle}</h2>
                                <ul>
                                    <div style={{float:"left"}}><img src={item.group_images[0]}/></div>
                                    <div style={{ marginLeft: 18}}><img src={item.group_images[1]}/></div>
                                    <div style={{float:"right",marginRight:0}}><img src={item.group_images[2]}/></div>
                                </ul>
                            </div>
                        )
                    }else{
                        return(
                        <div key={index}
                             className="newsImg"
                             data={index}
                             onClick={this.handleClickTextAndImg.bind(this)}

                        >
                            <div>
                                <img src={item.img}/>
                            </div>
                            <div className="fx1">
                                <h2>{item.longtitle}</h2>
                                <div
                                     onClick={this.showShareBoard.bind(this)}
                                     //onMouseOut = {this.hideImg.bind(this)}
                                     data-cc={index}
                                     className="shareButton">

                                    <div
                                        className={this.showImgReal(index)}
                                        //onMouseOver={this.stopParation.bind(this)}
                                        //onMouseOver={this.showImg.bind(this)}
                                    >
                                        <ul className="shareBtn16" id="shares" >
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
                    }

                })}
            </div>


        )
    }
}