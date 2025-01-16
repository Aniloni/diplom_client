import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button';
import "./../../generalStyles.scss";
import Input from "../../components/inputs/input/input";
import "../personalDataInput/PersonalDataInput.scss";
import AccountEntry from "../../components/accountEntry/AccountEntry";
import Back from './../../imgMFC/Back.svg'
import Info from './../../imgMFC/Info.svg'
import React from 'react';
import { useNavigate } from 'react-router-dom';
// import ColorToggleButton from "../../components/buttons/toggle/ButtonToggle";
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

const PersonalDataInput = function() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ServiceCategorySelection'); 
  };
    const [alignment, setAlignment] = React.useState('phone');
  
    const handleChange = (event, newAlignment) => {
      // Если newAlignment равен null, то не менять состояние
      if (newAlignment !== null) {
        setAlignment(newAlignment);
      }
    };
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
        {/* wrapper - ограничивающий контейнер 382px */}
        <HeaderMini/>
        <AccountEntry/>
        <div className="img-info"> <img src={Info} alt="info" /> </div>
        <div className="container-personalDataInput">
            <div className="img-back"> <img src={Back} alt="back" /> </div>
            <div className="text-personalDataInput">
                Согласие на обработку<br/>персональных данных<br/>физического лица
            </div>
        </div>
        <div className="form-box">
		<div className="button-box">
      <ToggleButtonGroup
          value={alignment}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          sx={{
            '& .MuiToggleButton-root': {
              color: 'var(--brownOpacity60)', // цвет текста
              backgroundColor: 'white', // цвет кнопки
              borderRadius: '18px', // радиус
              border: 'none',
              margin: '0',
              height: '51px',
              width: '169px',
              fontWeight: 'bold',
              '&:hover': {
                backgroundColor: 'white', // цвет при наведении
              },
              '&.Mui-selected': {
                backgroundColor: 'var(--brownOpacity10)', // цвет при выборе
                color: 'var(--brownOpacity60)',
                // color: 'white',
              }
            }
          }}
        >
          <ToggleButton value="phone">ТЕЛЕФОН</ToggleButton>
          <ToggleButton value="snils">СНИЛС</ToggleButton>
        </ToggleButtonGroup>
			{/* <div id="btn-toggle"></div>
			<button type="button" className="toggle-btn">ТЕЛЕФОН</button>
			<button type="button" className="toggle-btn toggle-btn-s">СНИЛС</button> */}
		</div>
	    </div>
        <div className="input-personalDataInput"> 
            <Input className={'in-1'} label={<>ФИО<span className="red">*</span></>}/>
            {alignment === 'phone' && (
              <Input className={'in-2'} label={"ТЕЛЕФОН"}></Input> 
            )}
      
            {alignment === 'snils' && (
             <Input className={'in-2'} label={"СНИЛС"}></Input> 
            )}
            {/* <Input label={"ТЕЛЕФОН"}></Input>  */}
            <label className="lable-personalDataInput">
                <input type="checkbox" required/> Я согласен(а) на <a href="#">обработку персональных данных</a>
            </label>
        </div>
        <div className="text-info">*обязательные для ввода поля</div>
        <div className = "btn-personalDataInput">
        <Button onClick={handleClick}>ПОДТВЕРДИТЬ</Button>
        </div>
        </div>
        </div>
      </div>
  );
}

export default PersonalDataInput;