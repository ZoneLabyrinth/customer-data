
import React from 'react'
import './BaseList.less'
import PropTypes from 'prop-types'

export default class Reactclass extends React.Component {
    static propTypes = {
        titleList: PropTypes.array,
        dataList: PropTypes.array.isRequired
    }

    constructor(props) {
        super(props);
        this.li = React.createRef();
        this.container = React.createRef();

    }

    componentDidMount() {
        this.setStyle();
    }

    setStyle() {
        const li = this.li.current;
        let width = 0;
        if (li.children.length > 0) {
            for (let i = 0; i < li.children.length; i++) {
                width += li.children[i].clientWidth
            }
        } else return
        console.log(width);

        this.container.current.style.width = `${width}px`

    }



    render() {
        const { titleList, dataList } = this.props;

        return (

            <div className="list-body">
                <ul ref={this.container}>
                    {titleList.length > 0 &&
                        <li className="title" ref={this.li}>
                            {titleList.map((item, index) => (
                                <span key={index}>{item.name}</span>
                            ))}
                        </li>}
                    {dataList.length > 0 && dataList.map((items, index) => (
                        <li key={index}>
                            {items.map((item, index) => (
                                titleList[index] &&
                                <span key={index}>{item[titleList[index].code]}</span>
                            ))}
                        </li>
                    ))}

                </ul>

            </div>

        )
    }
}


