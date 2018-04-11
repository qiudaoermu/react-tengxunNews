/**
 * Created by ANN on 2017/7/29.
 */
import React from "react"
import NavsContent from "./componentNavsContent"
var config = ["aConfig","bConfig"]
export default  class NewsNavS extends React.Component{
    constructor(){
        super()
        this.state ={
            current:0,
            list:['要闻','财经','体育','娱乐','房产','科技','汽车'],
            list2:[]
        }





    }
    componentDidMount(){
        var _this = this;
        var newdateArr="";
        $.ajax({
            url:"a.json",

            type:"get",
            async:false,
            data:{targetData:0}
        }).done(function(data){


            newdateArr = data
            //_this.setState({newsData:data})
            _this.setState({
                list2:newdateArr
            })
        })
    }
    currentClass(val,index){
        return  index==this.state.current?"activeNavItem":""
    }
    contentClass(val,index){
        return index ==this.state.current?"nav_ContentActive":"nav_Content"
    }
    changeNavItemHandle(e){
        if(!e.target.matches("li")){return}
        e.stopPropagation()
        var targetData =  e.target.getAttribute("data")
        this.setState({
            current:targetData
        })

        var newdateArr="";
        var _this = this
        $.ajax({
            url:"a.json",

            type:"get",
            async:false,
            data:{targetData:targetData}
        }).done(function(data){

            console.log( $.type(data))
            newdateArr = data
            //_this.setState({newsData:data})
            _this.setState({
                list2:newdateArr
            })
        })

    }
    render(){
        return(

                <div style={{clear:'both',float:'left'}}>
                    <ul className="navSUl">
                    {this.state.list.map((val,index)=>{

                                return(
                                    <li key={index} className={this.currentClass(val,index)}
                                        data={index}
                                        onMouseOver={this.changeNavItemHandle.bind(this)}
                                    >
                                        {val}
                                        <div className={this.contentClass(val,index)}>
                                             <NavsContent config ={this.state.list2}/>

                                        </div>
                                    </li>
                                )
                    })}
                    </ul>

                </div>


        )
    }
}
NewsNavS.defaultProps={
    json:[
        { a:1,
            b:2},
        { a:1,
            b:2}
    ]

}
