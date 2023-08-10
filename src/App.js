import React from 'react';
import "./index.css";
import Header from './components/header/Header';
import Container from './components/container/Container';

const App = () => {
  const [items, setItems] = React.useState([
    {
        id: 1,
        name: 'Mem Reduct - Приложение для управления, мониторинга и очистки системной памяти',
        img: '../images/img/q0u8az8aumss8000wg.jpg',
        data: '19.03.2023',
        systemIcon: '../images/icons/windows.png',
        system: 'Система',
        downloadeded: '961',
        title: 'Программа использует недокументированные внутренние возможности системы (Native API) для очистки системного кэша (системный рабочий набор, рабочий набор, резервные списки страниц, измененные списки страниц) с переменным результатом ~10-50%. Приложение совместимо с операционными системами Windows XP SP3 и выше, но некоторые общие возможности',
        size: 293,
    },
    {
      id: 2,
      name: 'O&O ShutUp10++ - Полный контроль над функциями в Windows',
      img: '../images/img/j092moszubs4owko8k.jpg',
      data: '03.12.2022',
      systemIcon: '../images/icons/windows.png',
      system: 'Безопасность',
      downloadeded: '734' ,
      title: 'Используя очень простой интерфейс, вы решаете, как Windows 10 и Windows 11 должны хранить вашу конфиденциальность, решая, какие нежелательные функции должны быть деактивированы.',
      size: 862,
    },
    {
      id: 3,
      name: 'Ashampoo Uninstaller 10 - Полное очищение удаленных программ',
      img: '../images/img/2tctp171djeoswo488.jpg',
      data: '02.11.2022',
      systemIcon: '../images/icons/windows.png',
      system: 'Разный софт',
      downloadeded: '1,038',
      title: 'Эта программа Uninstaller отслеживает установку программного обеспечения в режиме реального времени, поэтому она знает, где сохраняются файлы/папки и файлы реестра во время установки программного обеспечения. А когда вы удаляете программу с компьютера, она полностью очищает ваш компьютер.',
      size: 17,
  },
])

  const [searchValue, setSearchValue] = React.useState('');
  const onChangeSearchInput = (evt) => {
    setSearchValue(evt.target.value);
  };

  return (
    <div className="wrapper">
      <Header searchValue={searchValue} setSearchValue={setSearchValue} onChangeSearchInput={onChangeSearchInput}/>
      <Container items={items} setItems={setItems} searchValue={searchValue}/>
    </div>
  );
}

export default App;
