import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button';
import "./../../generalStyles.scss";
import AccountEntry from "../../components/accountEntry/AccountEntry";
import React from 'react';
import { useNavigate } from 'react-router-dom';

const ChoiceActivity = function() {
  const navigate = useNavigate();
  const handleClick1 = () => {
    navigate('/LeftPanel'); 
  };
  const handleClick2 = () => {
    navigate('/EntitySelection'); 
  };
  return (
    <div className="section"> 
    {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
            {/* wrapper - ограничивающий контейнер 382px */}
            <HeaderMini/>
            <AccountEntry/>
            <Button onClick={handleClick1}>ПОКАЗАТЕЛИ РАБОТЫ</Button>
            <Button onClick={handleClick2}>РАБОТА С КЛИЕНТАМИ</Button>
        </div>
        </div>
      </div>
  );
}

export default ChoiceActivity;