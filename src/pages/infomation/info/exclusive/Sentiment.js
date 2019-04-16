import React from 'react'
import CardContainer from '../../../../components/cardContainer/CardContainer';
import BaseCard from '../../../../components/baseCard/BaseCard';
import CardTabs from '../../../../components/cardTabs/CardTabs';
import ArticleCard from '@/components/articleCard/ArticleCard'
import { connect } from 'react-redux';
import Api from '@/api/api';

//标签标题
const tabs = [
    { title: '情况' },
    { title: '新闻' },
    { title: '舆情' },
];

// 标签页内容
const titles = [
    { title: '名称', code: 'chainman' },
    { title: '名称2', code: 'todo' },
    { title: '名称3', code: 'todos' },
    { title: '收入', code: 'all_income' },
    { title: '金额', code: 'net_profit' },
    { title: '增长率', code: 'all_income_growth' },
    { title: '减少率', code: 'gross_profit_growth' },
    { title: '构成', code: 'todoss' },
    { title: '毛', code: 'margin_rate' },
    { title: '少', code: 'net_rate' },
    { title: '付钱', code: 'Asset_rate' },
    { title: '评述', code: 'todosss' },
    { title: 'url', code: 'website' },
    { title: '电话', code: 'telephone' },
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