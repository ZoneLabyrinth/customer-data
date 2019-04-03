import React from 'react'
import './ArticleCard.less'
import PropTypes from 'prop-types'

export default class ArticleCard extends React.Component {

    static propTypes = {
        data: PropTypes.array.isRequired,
        icon: PropTypes.bool
    }

    render() {
        const { data, icon } = this.props
        return (
            <div className="article-container">
                <div className="title">
                    <p>
                        {icon &&
                            <i className="iconfont icon-wenjian"></i> }&nbsp;
                            {data.title}
                    </p>
                    <p>
                        <i className="iconfont icon-jiantouarrow487"></i>
                    </p>
                </div>
                <div className="content">
                    {data.content}
                </div>
            </div>

        )
    }
}
