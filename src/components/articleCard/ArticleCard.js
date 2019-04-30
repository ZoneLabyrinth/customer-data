
import React from 'react'
import './ArticleCard.less'
const ArticleCard = ({ data, url,style,code,icon, hanlderClick }) => (
    <div className="article-container" style={style}>
        <div className="title" onClick={()=>hanlderClick(data, url)}>
            <p>
                {icon &&
                    <i className="iconfont icon-wenjian"></i>}&nbsp;
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

export default ArticleCard