import React from 'react'
import { List } from 'antd-mobile'
import './BaseCard.less'
import PropTypes  from 'prop-types';


const Item = List.Item;

export default class BaseCard extends React.Component {
    static propTypes = {
        data: PropTypes.array.isRequired,
        active: PropTypes.bool
    }

    render() {
        return (
            // <CardContainer>
                <List>
                    {
                        this.props.data.map((item,index)=>{
                            if (index === 0){
                                return (<Item key={index} extra={<span style={{color:this.props.active?"#E14C46":""}}>{item.value}</span>}>
                                    {item.title}
                                </Item>)
                            }else{
                                return (
                                    <Item key={index} extra={item.value}>
                                        {item.title}
                                    </Item>)
                            }
                        })
                    }
                </List>
            // </CardContainer>

        )
    }
}
