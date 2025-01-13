import HeaderMini from "../../components/header/HeaderMini";
import Button from "../../components/buttons/Button";
import "./../../generalStyles.scss";
import Input from "../../components/inputs/input/input";
import loginIcon from "./../../imgMFC/loginIcon.svg";
import "./LoginEmployee.scss";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import fetchData from "../../controllers/get";
import User from "../../models/user";
import axios from 'axios'

const LoginEmployee = function () {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/EntitySelection'); 
  };
  const fetchDatas = () =>{
    var login = document.getElementById('user_login').value;
    var  user;
    const get = async () => {
        try {
        const response = await axios.post('http://92.39.211.204:1114/api/v1/user/'+login,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
            
        );
        if(response.data.success == false) alert((response.data.data.ErrorDesc))
        else{
            if(response.data.data.length > 0){
              response.data.data.forEach(element => {
                user = new User(element.snils, element.first_name, element.sur_name, 
                element.last_name, element.phone, element.role, element.id_office)
              });
              document.getElementById('user_btn').onclick = handleClick;
            }
            else{
              alert('Введен неверный СНИЛС')
            }
        }
        } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        }
    };
    get();
  }
  return (
    <div className="section">
      {/* className="section" применен flex для выравниван я по центру */}
      <div className="wrapperFirst">
        <div className="container">
          {/* wrapper - ограничивающий контейнер 382px */}
          <HeaderMini />
          <div className="container-loginEmployee">
            <img src={loginIcon} alt="loginIcon" />
            <div className="text-loginEmployee">ВХОД В УЧЕТНУЮ ЗАПИСЬ</div>
          </div>
          <div className="input-loginEmployee">
            {" "}
            <Input id={"user_login"} label={"ИНН / СНИЛС / ID"}></Input>{" "}
          </div>
          <Button id={"user_btn"} onClick={fetchDatas}>ВОЙТИ</Button>
        </div>
      </div>
    </div>
  );
};

export default LoginEmployee;
