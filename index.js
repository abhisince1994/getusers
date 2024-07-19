// Write your code below:
function handleFormSubmit(event) {
    //make a get request to the APIs to nfetch user details
    axios.get("https://crudcrud.com/api/9249b687966644688ab2be96aa2c5be8/users")
    .then((res)=>{
      var users=respose.data;
      display(users);
    })
    .catch((err)=>{
      console.log(err);
    });
  }
  
  // Do not touch the code below
  module.exports = handleFormSubmit;