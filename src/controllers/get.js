// import Category from "../models/Category";
// const categoriesGet = function () {
//     // const filteredList = cardsList.filter((card) =>
//     //     card.title.toLowerCase().includes(searchText.toLowerCase())
//     // );
//     let catArr;
//     useEffect(() => {
//         const getData = async () => {
//             try {
//                 const response = await axios.get(
//                     "http://92.39.211.204:1114/api/v1/categories",
//                     {
//                         headers: {
//                             "Content-Type": "application/json",
//                             Accept: "application/json",
//                         },
//                     }
//                 );
//                 console.log(response);
                
//                 response.data.forEach(eleement => {
//                     catArr = new Category(eleement.name, eleement.id_group_categories, 
//                         eleement.title, eleement.link, eleement.sort);
//                 });
//             } catch (error) {
//                 console.error(error);
//             }
//         };
//         getData();
//     }, []);

//     return (
//         catArr.forEach(e=>{
//             <div className="wrapperSecond">
//                 {e.name}
//             </div>
//         })
        
//     );
// };
import axios from 'axios'

const fetchData = (url) =>{
    var s;
    const get = async (url) => {
        try {
        const response = await axios.get(url,
            {
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            }
            
        );
        if(response.data.success == false) alert((response.data.data.ErrorDesc))
        else{
            response.data.data.forEach(element => {
                s = element;
            });
            // return s;
        }
        } catch (error) {
        console.error('Ошибка при выполнении запроса:', error);
        }
    };
    get(url);
}

  export default fetchData