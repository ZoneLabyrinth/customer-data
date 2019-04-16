import React from 'react'
import CardContainer from '@/components/cardContainer/CardContainer';
import './BidDetail.less'
import { connect } from 'react-redux';
import { Button } from 'antd-mobile';

const mapStateToProps = state => (
    { data: state.text }
)

class Detail extends React.Component {

    componentDidMount() {
        console.log(this.props.data)
    }

    render() {
        const { data } = this.props
        return (
            <div className="bid-detail">
                <CardContainer style={{ minHeight: '600px' }}>
                    <div className="button-container">
                        <span className="button-pre">
                            预览完整文档
                        </span>
                    </div>
                    <div className="content-container">
                        <h2>xxxx药品</h2>
                        <p className="content">正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书</p>
                        <p className="analysis">
                            <span>1.面临的问题</span><br />
                            {data.pid_present}
                        </p>
                        <p className="analysis">
                            <span>2.解决方案</span><br />
                            {data.pid_solution}
                        </p>
                        <p className="analysis">
                            <span>3.价值分析</span><br />
                            {data.pid_value}
                        </p>
                    </div>

                </CardContainer>
            </div>
        )
    }
}


export default connect(mapStateToProps)(Detail)