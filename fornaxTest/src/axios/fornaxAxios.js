import axios from 'axios'

export default axios.create({
   
    baseURL: "dev.lagoseppps.com.ng",
    headers: {
      "Access-Control-Allow-Origin": "*", 
      'Authorization': `Bearer ${JSON.parse(sessionStorage.getItem(""))}`,
      // 'Content-Type': 'multipart/form-data'
    },
  });
