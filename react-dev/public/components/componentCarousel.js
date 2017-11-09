/**
 * Created by ANN on 2017/7/30.
 */
/**
 * Created by ANN on 2017/7/29.
 */
import React from "react"

export default  class RightCarousel extends React.Component{
    constructor(){
        super()
        this.state ={
            current:0,
            list:['要闻','财经','体育','娱乐','房产'],
            img:['1448881111.jpg','144888871.jpg','144888877.jpg','144891378.jpg','1448881111.jpg'],
            currentImgIndex:0
        }


    }
    currentClass(val,index){
        return  index==this.state.current?"activeNavItem":""
    }
    currentClassImg(val,index){
        return index ==this.state.currentImgIndex?"ImgShowActive":":"
    }
    changeNavItemHandle(e){
        //if(e.target.className!='activeNavItem'){return}
        // e.stopPropagation()
        var targetData =  e.target.getAttribute("data")
        this.setState({
            current:targetData
        })
    }
    currentPointClass(val,index){
        return  index==this.state.currentImgIndex?"activePointItem":""

    }
    changePointItemHandle(e){
        var targetData =  e.target.getAttribute("data")
        this.setState({
            currentImgIndex:targetData
        })
    }
    turnLeft(){

        var t = this.state.currentImgIndex-1;
        if(t<=0) t=0;
        this.setState({currentImgIndex:t})

    }
    trunRight(){
        var t = this.state.currentImgIndex+1;
        if(t>=4) t=4;
        this.setState({currentImgIndex:t})
    }
    render(){
        return(

            <div className="RightCarouselContainer" >
                <ul className="RightCarousel">
                    <div className="titleImg">
                        <img src="public/css/img/yxl.png"/>
                    </div>
                    <div className="turn">
                        <span className="turnLeft" onClick={this.turnLeft.bind(this)}></span>
                        <span className="turnRigt" onClick={this.trunRight.bind(this)}></span>
                    </div>
                    {this.state.img.map((val,index)=>{
                      //  console.log(val)

                        return(
                            <li key={index} className={this.currentClassImg(val,index)}
                                data={index}>
                             <img src={"public/css/img/"+val}/>
                            </li>
                        )
                    })}
                </ul>
                <ul className="CurseturnPoint">
                    {this.state.list.map((val,index)=>{
                       // console.log(val)

                        return(
                            <li key={index} className={this.currentPointClass(val,index)}
                                data={index}
                                onMouseOver={this.changePointItemHandle.bind(this)}
                            >


                            </li>
                        )
                    })}
                </ul>

            </div>


        )
    }
}