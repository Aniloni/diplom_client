import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button';
import '../serviceSubmit/ServiceSubmit.scss';
import AccountEntry from "../../components/accountEntry/AccountEntry";
import Back from './../../imgMFC/Back.svg';
import Info from './../../imgMFC/Info.svg';
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const ServiceSubmit = function() {
  const navigate = useNavigate();
  
  // Используем useLocation, чтобы получить переданный текст
  const location = useLocation();
  const selectedService = location.state?.selectedService || "Услуга не выбрана";

  const handleClick = () => {
    navigate('/ServiceProvided');
  };

  const backClick = ()=>{
    navigate('/ServiceSelection');
  };
  return (
    <div className="section">
      <div className="wrapperFirst">
        <div className="container">
          <HeaderMini />
          <AccountEntry />
          <button className="img-infoSubmit">
            <img src={Info} alt="info" />
          </button>
          <div className="chosenService">
            <div className="img-backSubmit">
              <img src={Back} alt="back" onClick={backClick} />
            </div>
            <div className="chosenServiceText text">
              Выбранная услуга
            </div>
          </div>
          <div className="chosenServiceTextarea">
            {/* Здесь отображается выбранная услуга */}
            {selectedService}
          </div>
          <div className="btn-personalDataInput">
            <Button onClick={handleClick}>ПОДТВЕРДИТЬ</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSubmit;
