import React from 'react'
import './Sidebar.css';

const Sidebar = () => {
    const [openSideMenu, setOpenSideMenu] = React.useState(false);
    const [sideMenuIndex, setSideMenuIndex] = React.useState(null);
    
    const onClickOpenSideMenu = (index) => {
        setOpenSideMenu(!openSideMenu);
        setSideMenuIndex(sideMenuIndex === index ? null : index);
    };

    const sideMenuList = [
        "КиберБезопасность",
        "Софт для Windows",
        "Разработчику",
        "Разработка игр",
        "Дизайн",
        "Другое",
    ];
    const sideMenuIcons = [
        "./images/icons-sidemenu/fire.svg",
        "./images/icons-sidemenu/windows.svg",
        "./images/icons-sidemenu/htm5.svg",
        "./images/icons-sidemenu/cubes.svg",
        "./images/icons-sidemenu/photoshop.svg",
        "./images/icons-sidemenu/package.svg", 
    ];
    const subSideMenuList = [
        [
            "Софт",
            "Базы Данных",
        ],
        [
            "Внешний Вид",
            "Медиа",
            "Система",
            "Безопасность",
            "Для Программиста",
            "Разное",
        ],
        [
            "Html/Css",
            "Php/Mysql",
            "JavaScript",
            "Psd Макеты",
        ],
        [
            "Софт",
            "3D Модели",
        ],
        [
            "Изображения",
            "Иконки",
            "Шрифты",
            "Мокапы",
            "Gfx",
        ],
        [],
    ]

    
    return (
        <div className='main'>
            <div className='statistics'>
                <div className='online' aria-label='Текущий онлайн на проекте'>
                    <span>
                        <div className="online">
                            <span className='live-pulse-online'></span>
                        </div>
                        398
                    </span>
                    <small>онлайн</small>
                </div>
                <div className='files'>
                    <span>
                        <div className="files">
                            <span className='live-pulse-files'></span>
                        </div>
                        1,086
                    </span>
                    <small>файлов</small>
                </div>
                <div className='downloaded'>
                    <span>
                        <div className="downloaded">
                            <span className='live-pulse-downloaded'></span>
                        </div>
                        3,146,877
                    </span>
                    <small>скачиваний</small>
                </div>
            </div>
            
            <nav className='category-list'>
            <h1 className='sidebar-header'>Категории</h1>
                <ul className='side-menu'>
                    {sideMenuList.map((value, i) => 
                    <li key={i} className='side-menu' onClick={() => onClickOpenSideMenu(i)}>
                        <div className='block-menu'>
                            <img src={sideMenuIcons[i]} alt='icon' className='icon'/>
                            <img src={sideMenuIcons[i]} alt='icon' className='icon-bg'/> 
                            {value}
                        </div>
                        {sideMenuIndex === i && (
                            <ul className='sub-sideMenuList'>
                                <div className='opened-sideMenuList'>
                                    {subSideMenuList[i].map((subItem, i) => (
                                        <li key={i} className='opened-subList'>{subItem}</li>                                         
                                    ))}   
                                </div>
                            </ul>    
                        )}
                    </li>
                    )}
                </ul>
            </nav>
            <div className='online-chat'>
                <div className='header-online'>
                    <h1 className='header-otext'>Онлайн Чат</h1>
                </div>
                <div className='online-no_connection'>
                    <img src='../images/icons/no_connection.png' alt='no_connection' className='no_connection'/>
                </div>
            </div>
            <div className='advertising'>
                <div className='ad-header'>
                    <h1>Реклама</h1>
                    <div>

                    </div>
                </div>
            </div>
            <div className='about-us'>
                <h1>Мы Вконтакте</h1>
                <div className='our-vk'>здес будет наш Вконтакте</div>
            </div>
            <div className='sidebar-info'>
                <img src='./images/orphus.png' alt='sidebar-info'/>
            </div>
        </div>
    )
};

export default Sidebar;