import React from 'react'
import { List } from 'antd-mobile'
import './BaseCard.less'
import PropTypes  from 'prop-types';


const Item = List.Item;

export default class BaseCard extends React.Component {
    static propTypes = {
        titles: PropTypes.array.isRequired,
        active: PropTypes.bool,
        data:PropTypes.object
    }

    render() {
        return (
                <List>
                    {
                        this.props.titles.map((item,index)=>{
                            if (index === 0){ 
                                return (<Item key={index} extra={<span style={{color:this.props.active?"#E14C46":""}}>{this.props.data[item.code]}</span>}>
                                    {item.title}
                                </Item>)
                            }else{
                                return (
                                    <Item key={index} extra={this.props.data[item.code]?this.props.data[item.code]:'--'}>
                                        {item.title}
                                    </Item>)
                            }
                        })
                    }
                </List>

        )
    }
}
