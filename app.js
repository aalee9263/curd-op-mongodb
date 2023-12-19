

baseUrl = 'http://localhost:5001';

let addUser = () => {

    let firstName = document.querySelector("#firstName").value
    let secondName = document.querySelector("#secondName").value
    
axios.post(`${baseUrl}/users`, {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })

  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
}