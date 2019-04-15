import React from 'react'
import { Tabs } from 'antd-mobile'
import { StickyContainer, Sticky } from 'react-sticky';
import CardContainer from '@/components/cardContainer/CardContainer'
import './CardTabs.less'
import PropTypes from 'prop-types';

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}


export default class CardTabs extends React.Component {

    /**
     * @param{indent} 是否缩进
     */

    static propTypes = {
        indent: PropTypes.bool,
        left: PropTypes.element.isRequired,
        center: PropTypes.element.isRequired,
        right: PropTypes.element.isRequired,
        four: PropTypes.element,
        last: PropTypes.element
    }


    render() {
        const { left, center, right, indent, tabs, four, last } = this.props
        return (
            <div>
                <CardContainer style={indent ? { padding: 0 } : null}>
                    <StickyContainer>
                        <Tabs tabs={tabs}
                            destroyInactiveTab
                            renderTabBar={renderTabBar}
                        >
                            <div style={{overflowX:'auto'}}>
                                {left}
                            </div>
                            <div>
                                {center}
                            </div>
                            <div>
                                {right}
                            </div>
                            <div>
                                {four}
                            </div>
                            <div>
                                {last}
                            </div>
                        </Tabs>
                    </StickyContainer>

                </CardContainer>
            </div>

        )
    }
}
