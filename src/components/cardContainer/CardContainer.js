import React from 'react'
import './CardContainer.less'

export default class CardContainer extends React.Component {

    render() {
        return (
            <div className="card" style={{...this.props.style}}>
                {this.props.children}
            </div>
        )
    }
}
