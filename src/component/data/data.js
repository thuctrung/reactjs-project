import axios from "axios";
function product(){
    axios({
        method: 'GET',
        data:null,
        url: 'http://localhost/react-project/category.php',
        timeout: 4000,    // 4 seconds timeout          
       })
       .then(response => {
         this.setState({data:response.data});
         console.log(response);
      })        
      .catch(error => console.error('timeout exceeded'));
}