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
                        <a href='http://preview.yonyou.com/p/PowerPointFrame.aspx?ui=zh-CN&WOPISrc=http://pan.yonyou.com/webdoc/wopi/files/cGFuLnlvbnlvdS5jb206MTI0OTYyMDczNDc3MTI4MTU1MzgyNTQzODg5My5wcHR4&access_token=eyJmaWQiOjEyNDk2MjA3MzQ3NzEyOCwidWlkIjoyODM1NCwiZXhwaXJlcyI6MTU1NTEzOTYxODcyNSwiZ2lkIjowLCJjYW5FZGl0IjpmYWxzZX0'>下载</a>
                        {/* <video src="http://pan.yonyou.com/unode/stor/downloadByUrl?downloadId=1.eyJhZ2UiOjg2NDAwLCJidWNrZXQiOiJkZWZhdWx0IiwiY3RpbWUiOjE1NTUwNTA0ODQsImtleSI6IkVDZG9GRGI1YlZMVllMUWdPaWJsQkU3UW16MEFBQUFLSXBtNiIsImxlbiI6MTcwMDM5NzM4LCJuYW1lIjoiMi7nlKjlj4vljZfmmIzkuqfkuJrlm63ku4vnu40ubXA0IiwicG9zIjowLCJzaXplIjoxNzAwMzk3Mzh9.2029138053" controls="controls" autoplay={'autoplay'}  width="400" height="200">
                        zhi
                        </video> */}
                        <video width="400" height='200' controls="controls" >
                            <source src="http://pan.yonyou.com/unode/stor/downloadByUrl?downloadId=1.eyJhZ2UiOjg2NDAwLCJidWNrZXQiOiJkZWZhdWx0IiwiY3RpbWUiOjE1NTUwNTA0ODQsImtleSI6IkVDZG9GRGI1YlZMVllMUWdPaWJsQkU3UW16MEFBQUFLSXBtNiIsImxlbiI6MTcwMDM5NzM4LCJuYW1lIjoiMi7nlKjlj4vljZfmmIzkuqfkuJrlm63ku4vnu40ubXA0IiwicG9zIjowLCJzaXplIjoxNzAwMzk3Mzh9.2029138053" type="video/mp4" />

                        </video>


                        {/* <video width="400"height='200' controls='controls' src=''></video> */}

                        <span className="button-pre">
                            预览完整文档
                        </span>
                    </div>
                    <div className="content-container">
                        <h2>xxxx药品公司ERP</h2>
                        <p className="content">正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书正轨招标书</p>
                        <p className="analysis">
                            <span>1.客户经营管理面临的问题</span><br />
                            {data.pid_present}
                        </p>
                        <p className="analysis">
                            <span>2.针对性解决方案</span><br />
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