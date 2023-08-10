import React from 'react'
import "./Container.css";
import Content from '../content/Content';
import Sidebar from '../sidebar/Sidebar';

const Container = ( props ) => {
    const filteredItems = props.items.filter(item => item.name.toLowerCase().includes(props.searchValue.toLowerCase()));
    return (
        <div className='cont'>
            <div className='container'>
                <Sidebar />
                <h3 className='content-header'>{props.searchValue ? `🔎 ПОИСК «${props.searchValue}»` : "Новые Материалы"}</h3>
                {filteredItems.map(item => <Content key={item.id} {...item}/>)}
            </div>    
        </div>
        
    )
};

export default Container;