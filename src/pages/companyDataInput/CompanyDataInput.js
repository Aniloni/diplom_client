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

const CompanyDataInput = function() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/ServiceCategorySelection'); 
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
                Согласие на обработку<br/>персональных данных<br/>юридического лица
            </div>
        </div>
        <div className="input-personalDataInput"> 
            <Input label={<>Название юр. лица<span className="red">*</span></>}/>
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

export default CompanyDataInput;