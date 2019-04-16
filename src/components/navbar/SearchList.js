import React from 'react';

const SearchList = ({ list, onSearchClick }) => (
    <div>
        {console.log(list)}
        {list.length > 0 &&
            list.map((item, index) => {
                return (
                    <div className="search-list" key={index} onClick={() => onSearchClick(item)}>
                        <span>{item.name}</span>
                        <span><i className='iconfont icon-star'></i></span>
                        {/* <span><i className={`iconfont ${this.state.star ? 'icon-star1' : 'icon-star'}`}></i></span> */}
                    </div>
                )
            })
        }
    </div>
)

export default SearchList