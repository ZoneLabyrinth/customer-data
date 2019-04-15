import React from 'react'
import './SlideButton.less'
import BScroll from 'better-scroll'
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';
import PropTypes  from 'prop-types';
import {withRouter} from 'react-router-dom'


class SlideButton extends React.Component {
    static propTypes = {
        navList: PropTypes.array.isRequired,
    }


    state ={
        containerWidth: ''
    }


    constructor(props) {
        super(props)
        this.viewport = React.createRef();
        this.scroll = React.createRef();
        this.container = React.createRef();
        this.scroller = null;
        

    }

    componentDidMount(){
        const {location} = this.props
        setTimeout(()=>{
            this.setStyle();
            this.initScroll();
            let url = window.location.pathname
            const index = this.props.navList.findIndex(item => 
                url.indexOf(item.path)!== -1
            )
            if(index !==-1){
                this.adjust(index);
            }
        },0)
    }


    //todo 点击选择项目
    handlerItemClick(index) {
        this.adjust(index);
    }

    setStyle() {
        const container = this.container.current
        const aLi = container.children
        let sum = 0;
        for (let i = 0; i < aLi.length; i++) {
            //每个外加左右3的margin
            sum += (aLi[i].clientWidth + 2)
        }
        //加上第一个margin值
        sum += 5;
        container.style.width = `${sum}px`

    }

    adjust(id) {
        const viewportWidth = this.viewport.current.clientWidth;
        const tabListWidth = this.container.current.clientWidth
        const scrollWidth = this.scroll.current.clientWidth;
        // 需要滑动的最小距离
        const minTranslate = Math.min(0, scrollWidth - tabListWidth)
        // 滑动到中间
        const middleTranslate = viewportWidth / 2

        const items = this.container.current.children
        //
        let width = 0;
        this.props.navList.every((item, index) => {
            //已经选择了，不变
            if (index === id) {
                return false
            }
            //否则宽每次加上该项的宽
            width += items[index].clientWidth;
            return true;
        })

        // 最后加上该项宽的一半，保证点击后在中间
        width += items[id].clientWidth / 2
        //需要移动的距离：该项距离中间位置的差
        let translate = middleTranslate - width
        //去滑动最大值，开始时为0
        translate = Math.max(minTranslate,Math.min(0,translate));
        this.scroller.scrollTo(translate,0,300)

    }

    initScroll() {
        console.log(this.scroll)
        this.scroller = new BScroll(this.scroll.current,{
            scrollX:true,
            scrollY:false,
            click:true,
            stopPropagation: true
        })
    }


    render() {
        const { match } = this.props;
        return (
            <div className="slide-button" ref={this.viewport}>
                <nav ref={this.scroll}>
                    <ul ref={this.container}>
                        {
                            this.props.navList.map((item, key) => (
                                <li key={key} onClick={this.handlerItemClick.bind(this, key)}><NavLink to={`${match.url}${item.path}`} activeClassName="active">{item.title}</NavLink></li>
                            ))
                        }
                    </ul>
                </nav>
                        
            </div>

        )
    }
    

}

export default SlideButton = withRouter(SlideButton)