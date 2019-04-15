import React from 'react'
import CardContainer from '@/components/cardContainer/CardContainer';
import { Picker, List } from 'antd-mobile'
import { createForm , formShape} from 'rc-form'

const district = [
    {label:'3000'},
    {label:'3000'},
    {label:'3000'}
]

class ShareOrg extends React.Component {

    static propsTypes = {
        form: formShape
    }

    render() {
        const { getFieldProps } = this.props.form;

        return (
            <div className="shareOrg-container">
                <CardContainer>
                    <div className="title-container">
                        <div>
                            <span>
                                经营机构
                            </span>
                            <span>
                                北京
                            </span>
                        </div>
                        <div>
                            <span>
                                分享人
                            </span>
                            <span>
                                北京
                            </span>
                        </div>
                        <div>
                            {/* <span>
                                分享类别
                            </span> */}
                            <span>
                                <Picker data={district} cols={1} {...getFieldProps('district')} className="forss">
                                    <List.Item arrow="horizontal">分享类别</List.Item>
                                </Picker>
                            </span>
                        </div>
                        <div>
                            <span>
                                <Picker data={district} cols={1} {...getFieldProps('district')} className="forss">
                                    <List.Item arrow="horizontal">行业分类</List.Item>
                                </Picker>
                            </span>
                        </div>
                    </div>
                </CardContainer>
                <CardContainer>
                    <div className='content-container'>
                        <h2>XXXXX公司数字化方案</h2>
                        <p className="content-body">
                        倾力打造文学交流平台！提供最新最全的有没文章、散文随笔、诗词歌赋、唯美句子、情感语录
                        倾力打造文学交流平台！提供最新最全的有没文章、散文随笔、诗词歌赋、唯美句子、情感语录
                        倾力打造文学交流平台！提供最新最全的有没文章、散文随笔、诗词歌赋、唯美句子、情感语录
                        </p>
                        <p className="down-load">
                            下载完整文档
                        </p>
                    </div>
                </CardContainer>
            </div>

        )
    }
}

export default createForm()(ShareOrg)
