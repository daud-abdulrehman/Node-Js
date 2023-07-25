// const express = require('express');
// const app = express();
// const PORT = 3000;
// const routes = require("./routes")
 
// // Single routing

//  //user = ["daud1","umar1","mansoor1"]
//  //admin = ["daud2","umar2","mansoor2"]

// app.use(routes);

// const router = express.Router()

// router.route('/route')
//   .get((req, res) => {
//     // Handle GET request for /example
//     res.send('This is a GET request on /example');
//   })
//   .post((req, res) => {
//     // Handle POST request for /example
//     res.send('This is a POST request on /example');
//   })
//   .put((req, res) => {
//     // Handle PUT request for /example
//     res.send('This is a PUT request on /example');
//   });





// app.listen(PORT, function (err) {
//     if (err) console.log(err);
//     console.log("Server listening on PORT", PORT);
// });

//using async await
// const fetchData=async()=>{
//     fetch('https://fakestoreapi.com/products/1')
//             .then(res=>res.json())
//             .then(json=>console.log(json))
//    // console.log(data)
// }

// fetchData()

// const apiUrl = "https://jsonplaceholder.typicode.com/posts";

// // Function to fetch data from the API using promises
// const fetchData = (url) => {
//   return new Promise((resolve, reject) => {
//     fetch(url)
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error("Network response was not ok");
//         }
//         return response.json();
//       })
//       .then((data) => {
//         resolve(data);
//       })
//       .catch((error) => {
//         reject(error);
//       });
//   });
// };

// // Usage of fetchData function to fetch JSON data
// fetchData(apiUrl)
//   .then((data) => {
//     console.log("Fetched JSON data:", data);
//   })
//   .catch((error) => {
//     console.error("Error fetching data:", error);
//   });



//CALCULATOR TASK


const add=(a,b)=>{
    return a+b;
}

// Function to fetch data from the API using promises
const calculator = (a,b,operation) => {
  return new Promise((resolve, reject) => {
    const result = operation(a,b)
    if(result>0){
        resolve("addition Done")
    }
    else{
        reject("can't be added")
    }
  });
};

// Usage of fetchData function to fetch JSON data
calculator(10,5,add)
  .then((data) => {
    console.log("Fetched JSON data:", data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

