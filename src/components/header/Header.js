import React from "react";
import "./Header.css";

const Header = ( props ) => {
    return (
        <header className="header">
            <div className="header-left">
                <img src="./images/logo.png" alt="logo-howdy" className="logo-howdy"/>
                <div className="header-info">
                    <h5>Клондайк Программиста</h5>
                    <p>ПИРАТСКАЯ БУХТА ДЛЯ РАЗРАБОТЧИКОВ</p>    
                </div>
                <ul className="top-menu">
                    <li>Топ-100</li>
                    <li>Подборки Софта</li>
                    <li>Наш Youtube</li>
                    <li>Наш Telegram</li>
                </ul>
                <div className="search-block">
                    <input placeholder="Что ищем? ... вкладки, chrome, psd" onChange={props.onChangeSearchInput} value={props.searchValue}/>
                    <img src="./images/search.png" alt="search"/>
                </div>    
            </div>
        </header>
    )
};

export default Header;