import HeaderMini from "../../components/header/HeaderMini";
import Button from '../../components/buttons/Button'
import "./../../generalStyles.scss";
import "./feedback.scss"
import AccountEntry from "../../components/accountEntry/AccountEntry";
import Input from "../../components/inputs/input/input";
import InputRadio from "../../components/inputs/inputsRadio/inputRadio";
import smile1 from "../../imgMFC/smile-1.svg"
import smile2 from "../../imgMFC/smile-2.svg"
import smile3 from "../../imgMFC/smile-3.svg"
import smile4 from "../../imgMFC/smile-4.svg"
import smile5 from "../../imgMFC/smile-5.svg"
import axios from 'axios'
import React from 'react';
// import fetchData from "../../controllers/get";
// import { useNavigate } from 'react-router-dom';
import {useEffect} from 'react'
import { useLocation, useNavigate } from 'react-router-dom';

const Feedback = function() {
    const navigate = useNavigate();
    const location = useLocation();
    const { ServiceCardid } = location.state || {};
    const handleClick = () => {
    navigate('/ServiceCategoryProvidedReason'); 
  };
  console.log(ServiceCardid);
  const fetchDatas = () =>{
    // var login = document.getElementById('user_login').value;
    // var  user;
    const get = async () => {
        try {
        const response = await axios.put('/api/v1/provision_categories/'+ServiceCardid,
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
                // user = new User(element.snils, element.first_name, element.sur_name, 
                // element.last_name, element.phone, element.role, element.id_office)
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
        <HeaderMini/>
        <AccountEntry/>
        <p className="feedback-text">
        Ваши отзывы и предложения 
        помогают нам работать над качеством 
        и оперативностью предоставляемых 
        услуг
        </p>
        <p className="feedback-rate">
        Оцените услугу
        </p>
        <form className="">
        <div className="feedback-smile">
        <InputRadio name="sm-1" value="1" img ={smile1} cheked="cheked"></InputRadio>
        <InputRadio name="sm-1" value="2" img ={smile2}></InputRadio>
        <InputRadio name="sm-1" value="3" img ={smile3}></InputRadio>
        <InputRadio name="sm-1" value="4" img ={smile4}></InputRadio>
        <InputRadio name="sm-1" value="5" img ={smile5}></InputRadio>
        </div>
        <textarea className="feedback-textarea"></textarea>
        <Button onClick={fetchDatas} type="button">ОТПРАВИТЬ</Button>
        </form>
        </div>
      </div>
    </div>
  );
}

export default Feedback;


// import HeaderMini from "../../components/header/HeaderMini";
// import Button from '../../components/buttons/Button'
// import "./../../generalStyles.scss";
// import "./feedback.scss"
// import AccountEntry from "../../components/accountEntry/AccountEntry";
// import Input from "../../components/inputs/input/input";
// import InputRadio from "../../components/inputs/inputsRadio/inputRadio";
// import smile1 from "../../imgMFC/smile-1.svg"
// import smile2 from "../../imgMFC/smile-2.svg"
// import smile3 from "../../imgMFC/smile-3.svg"
// import smile4 from "../../imgMFC/smile-4.svg"
// import smile5 from "../../imgMFC/smile-5.svg"



// const Feedback = function() {
//   return (
//     <div className="section"> 
//     {/* className="section" применен flex для выравниван я по центру */}
//       <div className="wrapperFirst">
//         <div className="container">
//         {/* wrapper - ограничивающий контейнер 382px */}
//         <HeaderMini/>
//         <AccountEntry/>
//         <p className="feedback-text">
//         Ваши отзывы и предложения 
//         помогают нам работать над качеством 
//         и оперативностью предоставляемых 
//         услуг
//         </p>
//         <p className="feedback-rate">
//         Оцените услугу
//         </p>
//         <form className="">
//         <div className="feedback-smile">
//         <InputRadio name="sm-1" value="1" img ={smile1} cheked="cheked"></InputRadio>
//         <InputRadio name="sm-1" value="2" img ={smile2}></InputRadio>
//         <InputRadio name="sm-1" value="3" img ={smile3}></InputRadio>
//         <InputRadio name="sm-1" value="4" img ={smile4}></InputRadio>
//         <InputRadio name="sm-1" value="5" img ={smile5}></InputRadio>
//         </div>
//         <Input className={"input-big"}></Input>
//         <Button type="submit">ОТПРАВИТЬ</Button>
//         </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Feedback;
