/**
 * Created by ANN on 2017/7/22.
 */
import  React from 'react';
import ReactDOM from 'react-dom';

export default class ComonentHeader extends React.Component{


    constructor(){
        super()
        this.list = ["首页","滚动","国际","社会","图片","视频","军事","评论","历史","谷雨","公益","旅游","新闻哥"]
        this.state = {
            currentIndex:0
        }
    }
    currentIndex(index,value){
            return this.state.currentIndex==value?"nav-tab-item-active":"nav-tab-item"
    }
    menuChangeItem(event,value){
        var val = event.target.getAttribute("data-index")
        console.log(val)

        console.log(value)
        this.setState({currentIndex:val})
    }
    render(){

        return(

            <div className="header">
                  <h1 className="logo"> <img src="public/css/logo.png"/></h1>
                   <div className="hr"></div>
                    <ul className="nva">
                        {this.list.map((index,value)=> {
                            return (
                                <li className={this.currentIndex(index,value)}
                                    key={value}
                                    data-index = {value}

                                    onClick={(index,value) => {this.menuChangeItem(index,value)}}

                                >{index}</li>
                            )
                        })}

                    </ul>

            </div>

        )
    }
}
