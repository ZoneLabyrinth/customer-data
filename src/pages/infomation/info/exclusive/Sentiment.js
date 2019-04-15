import React from 'react'
import CardContainer from '../../../../components/cardContainer/CardContainer';
import BaseCard from '../../../../components/baseCard/BaseCard';
import CardTabs from '../../../../components/cardTabs/CardTabs';
import ArticleCard from '@/components/articleCard/ArticleCard'
import { connect } from 'react-redux';
import Api from '@/api/api';

//标签标题
const tabs = [
    { title: '经营情况' },
    { title: '客户新闻' },
    { title: '行业新闻' },
];

// 标签页内容
const titles = [
    { title: '董事长', code: 'chainman' },
    { title: '总经理', code: 'todo' },
    { title: '副总经理', code: 'todo' },
    { title: '总收入', code: 'all_income' },
    { title: '净利润', code: 'net_profit' },
    { title: '收入增长率', code: 'all_income_growth' },
    { title: '利润增长率', code: 'gross_profit_growth' },
    { title: '收入构成', code: 'todo' },
    { title: '毛利率', code: 'margin_rate' },
    { title: '净利率', code: 'net_rate' },
    { title: '负债率', code: 'Asset_rate' },
    { title: '经营评述', code: 'todo' },
    { title: '官网', code: 'website' },
    { title: '联系电话', code: 'telephone' },
    { title: '邮箱', code: 'email' },

]


function article(data, code) {
    return (
        <div>
            {
                data.map((item, index) => <ArticleCard key={index} code={code} style={{ margin: '0' }} data={item} />)
            }
        </div>
    )
}


const mapStateToProps = state => (
    { customer: state.customer }
)


class Sentiment extends React.Component {

    state = {
        info: {},
        customerNews: [],
        industryNews:[]
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {
        let id = this.props.customer.id

        let info = await Api.getSentimentInfo(id)

        let customerNews = await Api.getSentimentCustomer(id)

        let industryNews = await Api.getSentimentIndustry(id)

        this.setState({
            info,
            customerNews,
            industryNews
        })

    }

    render() {
        const customCode = { title: 'customer_name', content: 'news_summary' }
        const industryCode = { title: 'industry_name', content: 'news_summary' }

        return (
            <div>
                <CardTabs
                    tabs={tabs}
                    left={<BaseCard data={this.state.info} titles={titles} />}
                    center={article(this.state.customerNews, customCode)}
                    right={article(this.state.industryNews, industryCode)}
                />

            </div>
        )
    }
}

export default connect(mapStateToProps)(Sentiment)