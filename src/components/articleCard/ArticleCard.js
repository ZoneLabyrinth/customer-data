import React from 'react'
import './ArticleCard.less'
import PropTypes from 'prop-types'
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { textData } from '../../store/actions';

/**
 * @param {*} data 数据源
 * @param {*} icon 是否显示图标
 * @param {*} code data的key值
 * @param {*} style 是否需要margin
 * @param {*} url 需要跳转的页面
 */


class ArticleCard extends React.Component {

    
    static propTypes = {
        data: PropTypes.object.isRequired,
        icon: PropTypes.bool,
        code:PropTypes.object.isRequired,
        style:PropTypes.object,
        url:PropTypes.string
    }

    hanlderClick(data,url){
        this.props.dispatch(textData(data))
        this.props.history.push(url)
    }

    render() {
        const { data, icon,code,style,url} = this.props
        return (
            <div className="article-container" style={style}>
                <div className="title" onClick={this.hanlderClick.bind(this,data,url)}>
                    <p>
                        {icon &&
                            <i className="iconfont icon-wenjian"></i> }&nbsp;
                            {data[code.title]}
                    </p>
                    <p>
                        <i className="iconfont icon-jiantouarrow487"></i>
                    </p>
                </div>
                <div className="content">
                    {data[code.content]}
                </div>
            </div>

        )
    }
}


export default withRouter(connect()(ArticleCard))