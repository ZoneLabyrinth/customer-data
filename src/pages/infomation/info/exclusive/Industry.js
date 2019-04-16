import React from 'react'
import CardTabs from '@/components/cardTabs/CardTabs';
import ArticleCard from '@/components/articleCard/ArticleCard'
import BaseList from '@/components/baseList/BaseList';
import { connect } from 'react-redux';
import Api from '@/api/api';

const tabs = [
    { title: '标签' },
    { title: '文章' },
    { title: '样板' },
];
const title = [
    { name: '代号', code: 'tm_customer_name' },
    { name: '时间', code: 'cont_sign_date' },
    { name: '机构', code: 'pk_branch' },
    { name: '级别', code: 'cont_sign_tmamount' },
    { name: '现成', code: 'cont_sign_prod' },
    { name: '模组', code: 'cont_sign_prod_module' },

]

function article(data,code) {
    return (
        <div>
            {
                data.map((item, index) => <ArticleCard key={index} icon data={item} code={code} url='/detail' />)
            }
        </div>
    )
}

const mapStateToProps = state => (
    { customer: state.customer }
)


class Industry extends React.Component {

    state = {
        sign: [],
        bid: [],
        model:[],
    }

    componentDidMount() {
        this.getData();
    }

    getData = async () => {

        let id = this.props.customer.id;

        let sign = await Api.getIndustrySign(id);

        let bid = await Api.getIndustryBid(id);

        let model = await Api.getIndustryModel(id);

        this.setState(
            {
                sign,
                bid,
                model
            }
        )




    }


    render() {
        const bidCode = {title:'project_name',content:'pid_content'}
        const modelCode = {title:'title',content:'companyintro'}
        return (
            <div className="industry">
                <CardTabs
                    indent
                    tabs={tabs}
                    left={<BaseList titleList={title} dataList={this.state.sign} />}
                    center={article(this.state.bid,bidCode)}
                    right={article(this.state.model,modelCode)}
                />
            </div>
        )
    }
}

export default connect(mapStateToProps)(Industry)