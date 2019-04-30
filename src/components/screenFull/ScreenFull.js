import React from 'react'
import './ScreenFull.less'
import {Icon} from 'antd-mobile'

export default class Reactclass extends React.Component {


    render() {
        const {show} = this.props
        return (
                show &&
                <div className="screen-full" >
                    <div className="exit" onClick={this.props.exit}>
                        <Icon type='cross' size="lg"/>
                    </div>
                    {this.props.children}
                </div>
            

        )
    }
}
