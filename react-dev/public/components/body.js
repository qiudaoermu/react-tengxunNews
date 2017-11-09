/**
 * Created by ANN on 2017/7/22.
 */
import  React from 'react';
import ReactDOM from 'react-dom';
import ComponentFirstNew from "./firstNewsWord"
import  WordImg from "./componentWordImg"
import  ComponentRight from "./componentRight"
import  NewsNavS from './componentNewsNavSecend'
import  RightCarousel from './componentCarousel'
export default class ComonentBody extends React.Component{

    render(){

        return(

            <div className="news-main">
               <ComponentFirstNew/>
               <WordImg/>
               <ComponentRight/>
               <NewsNavS/>
               <RightCarousel/>

            </div>
        )
    }
}

