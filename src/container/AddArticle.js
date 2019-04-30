import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ArticleCard from '../components/articleCard/ArticleCard';
import {textData} from '@/store/actions'

const mapStateToProps = state => (
    {textData:state.textData}
)

const mapDispatchProps = (dispatch,{history}) => ({
    hanlderClick:(data,url)=>{
        dispatch(textData(data))
        history.push(url)
    }
})




export default withRouter(connect(mapStateToProps,mapDispatchProps)(ArticleCard))



