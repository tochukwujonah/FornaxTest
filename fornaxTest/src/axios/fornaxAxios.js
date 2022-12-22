import axios from 'axios'

export default axios.create({
   
    baseURL: "http://fornaxqa.southeastasia.cloudapp.azure.com/fornaxcloudqa",
    headers: {
      'Content-Type':'application/json',
      "Access-Control-Allow-Origin": "*", 
      'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem("authToken"))}`,
      // 'Content-Type': 'multipart/form-data'
    },
  });

  

  // http://fornaxqa.southeastasia.cloudapp.azure.com/fornaxcloudqa


  // const login = async (userData) => {


  //   const userData = {
  //     userName: '',
  //     password: '',
  //   };
  //   const response = await fornaxAxios.post("/library/auth/login", userData); 
    

  //   if(response.data){
  //       // sessionStorage.setItem('user', JSON.stringify(response.data.data.token));
  //       sessionStorage.setItem('authToken', JSON.stringify(response.data.data.token));
  //   }
  //   return response.data;
  //   }









  // const response = await axios.get(
  //   baseURL,
  //   {headers: {
  //           "Access-Control-Allow-Origin" : "*",
  //           "Content-type": "Application/json",
  //           'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem(""))}`,
  //           }   
  //       }
  // )
  // .then((response) => {
  //     var response = response.data;
  //   },
  //   (error) => {
  //     var status = error.response.status
  //   }
  // );