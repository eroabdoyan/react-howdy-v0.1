import React from 'react'
import "./Content.css";

const Content = ( props ) => {
    return (
        <div className='content'>
            <div className='card'>
                <img src={props.img} alt='card-img' className='card-img'/>
                <div className='card-details'>
                    <h5 className='card-name'>{props.name}</h5>
                    <div className='card-info'>
                        <span>{props.data}</span>
                        <div className='system'>
                            <img src={props.systemIcon} alt='system-category' className='icon-img'/>
                            <p>{props.system}</p>
                        </div>
                        <div className='info-download'>
                            <img src='../images/icons/icons8-download-50.png' alt='info-downloaded' className='icon-download'/>
                            {props.downloadeded} скачивание
                        </div>
                    </div>
                    <p className='card-title'>{props.title}</p>    
                    <div className='card-btn'>
                        <div className='btn-download'>
                        Скачать
                        <span className='label'>{props.size} байт</span>
                        </div>
                        <div className='btn-more'>Подробнее</div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Content;