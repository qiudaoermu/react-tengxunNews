/**
 * Created by ANN on 2017/7/22.
 */

var React = require('react');
var ReactDOM = require('react-dom');
import ComonentHeader from './public/components/header';
import ComonentBody from './public/components/body';
import  Comonentfooter from './public/components/footer'

class Index extends React.Component{

    render(){

        return(
            <div className="main">
                <ComonentHeader/>
                <ComonentBody/>
                <Comonentfooter/>

            </div>

        )
    }
}
console.log(ReactDOM.render(<Index/>,document.getElementById('main')))
console.log(ReactDOM.render(<Index/>,document.getElementById('main')));