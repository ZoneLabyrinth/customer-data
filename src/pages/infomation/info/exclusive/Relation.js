import React from 'react'
import {Button, WhiteSpace} from 'antd-mobile'
import BaseList from '@/components/baseList/BaseList'
import CardContainer from '@/components/cardContainer/CardContainer';
import Api from '@/api/api'
import { async } from 'q';



const titles =[
    {name:'名称',code:'cust'},
    {name:'关系', code:'rela'},
    {name:'级次', code:'cengji'},
    {name:'机构', code:'jingying'},
    {name:'类型', code:'jigou'},
    {name:'数量', code:'mingcheng'},
    {name:'线', code:'xing'},
    {name:'模组', code:'guquan'},

]




export default class Relation extends React.Component{
    
    state={
        data:[],
        show:false
    }


    componentDidMount(){
        this.getData()

    }

    getData= async (customerId)=>{
        this.setState({
            show:true
        })
        let params = {
            comp:1,
            comp2:2
        }
        let data = await Api.getRelations(params)
        this.setState({
            data,
            show:false
        })
    }




    render(){
        return(
            <div className="relation-container">
                <CardContainer>
                    <div className='search-relation'>
                        <h4>请输入名称</h4>
                        <form>
                            <input placeholder='请输入名称'/>
                            <p><i className="iconfont icon-lianjie"></i></p>
                            <input placeholder='请输入名称' />
                            <WhiteSpace size='lg' /><WhiteSpace size='lg' />
                            <Button type="primary" loading={this.state.show}  className="button" onClick={this.getData.bind(this)}>查询</Button> 
                        </form>
                    </div>

                </CardContainer>

                <CardContainer style={{padding:0,overflow:'auto'}}>
                    <BaseList titleList={titles} dataList={this.state.data} />



                </CardContainer>


            </div>
        )
    }
}
