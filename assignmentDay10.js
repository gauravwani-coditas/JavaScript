// Create an empty object called cow

cow = {

}
// Print the the cow object on the console
console.log(cow);
// Add name, legs, color, age and sound properties for the cow object. The sound property is a method which return "maaah maaah"
cow = {
    name : 'Duleri',
    legs : 4,
    color : 'white',
    age : 10,
    sound : ()=>{
        return "maah maah";
    }
}
// Get name, legs, color, age and sound value from the cow object
const {name,color,age,sound} = cow;
console.log(`Name : ${name}, Color : ${color}, Age : ${age}, Sound : ${cow.sound}`);

//using for loop in Object.entries method
for(const[key,value] of Object.entries(cow)){
    console.log(key+ ' is '+ value);
}

// Set new properties the cow object: breed, getCowInfo()
cow.breed = 'Khillari';
cow.getCowInfo = () =>{
    const weight = 10;
    const milkQuantityInLitres = 8;
    return "Weight in kg :  "+ weight+' and milk Quantity in litres :  '+milkQuantityInLitres;
}
console.log(cow);
console.log(cow.getCowInfo());


const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
  }

//Find the person who has many skills in the users object.
// Count logged in users, count users having greater than equal to 30 points from the following object.


let maxSkilledUser;
let maxSkills = 0;
let countPointsGreaterThanEqualThirty = 0;
let loggedInUsers = 0;
const mernDevelopers = [];
for(const user in users){

    const{skills, isLoggedIn, points} = users[user];

    if(skills.length > maxSkills){
        maxSkills = skills.length;
        maxSkilledUser = user;
    }
    if(isLoggedIn){
        loggedInUsers++;
    }
    if(points >= 30){
        countPointsGreaterThanEqualThirty++;
    }
    if(skills.includes("MongoDB") && skills.includes("Express") && skills.includes("React") && skills.includes("Node")){
        mernDevelopers.push(user);
    }
}
console.log(`${maxSkilledUser} has many skills`);
console.log(`Count of person with points greater than equal to 30 : ${countPointsGreaterThanEqualThirty}`);

// Find people who are MERN stack developer from the users object
console.log(`Mern stack Developers : ${mernDevelopers}`);

// Set your name in the users object without modifying the original users object
const newUsers = {
    Gaurav : {
        email: 'wanigaurav24.com',
        skills: ['C++', 'Android', 'Flutter', 'Java'],
        age: 21,
        isLoggedIn: true,
        points: 35
    },
    ...users
  }
console.log(newUsers);

// Get all keys or properties of users object
console.log(Object.keys(users));

// Get all the values of users object
console.log(Object.values(users));

// Use the countries object to print a country name, capital, populations and languages.
const countries = {
    India: {
        capital: "New Delhi",
        population: 100000000,
        languages: ["Hindi", "Tamil", "Marathi"]
      },
    USA: {
      capital: "Washington",
      population: 1000000,
      languages: ["English","Spanish"]
    },
    Germany : {
        capital: "Berlin",
      population: 10000,
      languages: ["German","Spanish"]
    },
    Japan: {
      capital: "Tokyo",
      population: 100000,
      languages: ["Japanese"]
    }
  }
  
// Create an object called personAccount. It has firstName, lastName, incomes, expenses properties and it has totalIncome, totalExpense, accountInfo,addIncome, addExpense and accountBalance methods. Incomes is a set of incomes and its description and expenses is a set of incomes and its description.
const detailsOfCountries = Object.entries(countries); 
for(const country in countries){
  const {capital, population, languages} = countries[country];

  console.log(`Name: ${country}`);
  console.log(`population: ${population}`);
  console.log(`Languages: ${languages}`);
  console.log(`Capital: ${capital}`);
}

for(const country in countries){
    const {capital, population, languages} = countries[country];
  
    console.log(`Name: ${country}`);
    console.log(`population: ${population}`);
    console.log(`Languages: ${languages}`);
    console.log(`Capital: ${capital}`);
  }


// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const personAccount ={
    firsName : "Gaurav",
    lastName : "Wani",
    incomes:{
          salary : 100000,
          freelanceWork : 5000
    },
    expenses :{
        rent : 7200,
        groceries : 300
    },
    totalIncome : function()
    {
       const {incomes} =personAccount;
       let sumOfAllIncomes = 0;
       for( const income of Object.values(incomes))
       {
          sumOfAllIncomes+=income;
       }
       return sumOfAllIncomes;
    },
    totalExpense : function()
    {
      const {expenses} =personAccount;
      let sumOfAllExpenses = 0;
      for( const expense of Object.values(expenses))
      {
        sumOfAllExpenses+=expense;
      }
      return sumOfAllExpenses;
    },
    addIncome : function(description,income)
    {
      const {incomes} =personAccount;
      incomes[description]=income;
    },
    addExpense : function(description,expense)
    {
      const {expenses} =personAccount;
      expenses[description]=expense;
    },
    accountBalance : function()
    {
       return this.totalIncome()-this.totalExpense();
    }
  }
// Imagine you are getting the below users array of objects.
const usersArray = [
    {
        _id: 'ab12ex',
        username: 'Alex',
        email: 'alex@alex.com',
        password: '123123',
        createdAt:'08/01/2020 9:00 AM',
        isLoggedIn: false
    },
    {
        _id: 'fg12cy',
        username: 'Asab',
        email: 'asab@asab.com',
        password: '123456',
        createdAt:'08/01/2020 9:30 AM',
        isLoggedIn: true
    },
    {
        _id: 'zwf8md',
        username: 'Brook',
        email: 'brook@brook.com',
        password: '123111',
        createdAt:'08/01/2020 9:45 AM',
        isLoggedIn: true
    },
    {
        _id: 'eefamr',
        username: 'Martha',
        email: 'martha@martha.com',
        password: '123222',
        createdAt:'08/01/2020 9:50 AM',
        isLoggedIn: false
    },
    {
        _id: 'ghderc',
        username: 'Thomas',
        email: 'thomas@thomas.com',
        password: '123333',
        createdAt:'08/01/2020 10:00 AM',
        isLoggedIn: false
    }
    ];

// Create a function called signUp which allows user to add to the collection. If user exists, inform the user that he has already an account.
const signUp = function(userName, userEmail, userPassword){
  const userAlreadyExists = usersArray.some(user => userEmail === user.email);

  if(userAlreadyExists){
    console.log("User Already exists ");
  } else {
    usersArray.push(
      {
        _id : Math.round(Math.random()*1000),
        username : userName,
        email : userEmail,
        password : userPassword,
        createdAt: (new Date()).toString(),
        isLoggedIn: false
      }
    );
    console.log("User Added !")
  }
}

signUp("Gaurav", "wanigaurav24@gmail.com", "jaiShreeRam@123");

// Create a function called signIn which allows user to sign in to the application
const signIn = function(email, password){

    const validUser = usersArray.some(user => email === user.email && password === user.password);
  
    if(validUser){
      console.log("Sign In done");
    } else {
      console.log("Invalid credentials!");
    }
  }
  signIn("wanigaurav24@gmail.com", "jaiShreeRam@123");
  const products = [
    {
      _id: 'eedfcf',
      name: 'mobile phone',
      description: 'Huawei Honor',
      price: 200,
      ratings: [
        { userId: 'fg12cy', rate: 5 },
        { userId: 'zwf8md', rate: 4.5 }
      ],
      likes: []
    },
    {
      _id: 'aegfal',
      name: 'Laptop',
      description: 'MacPro: System Darwin',
      price: 2500,
      ratings: [],
      likes: ['fg12cy']
    },
    {
      _id: 'hedfcg',
      name: 'TV',
      description: 'Smart TV:Procaster',
      price: 400,
      ratings: [{ userId: 'fg12cy', rate: 5 }],
      likes: ['fg12cy']
    }
  ]
  
  // The products array has three elements and each of them has six properties.
  // Create a function called rateProduct which rates the product
  const rateProduct = function(productId, userId, rating){
    const product = products.find((product) => {
      return product._id === productId;
    });
  
    if(product){
      const {ratings} = product;
      ratings.push({userId, rating});
    }
  }
  
  rateProduct('1234', 'gaurav24', 24);
  
  console.log(products);

  // Create a function called averageRating which calculate the average rating of a product
const averageRating = function(productId){
    const product = products.find((product) => {
      return product._id === productId;
    });
  
    if(product){
      let sumOfRating = 0;
      const {ratings} = product;
      for(const rating of ratings){
        const{rate} = rating;
        sumOfRating += rate;        
      }
       return sumOfRating / ratings.length;
    } 
  }
  console.log(averageRating('1234'));

  // Create a function called likeProduct. 
// This function will helps to like to the product if it is not liked and remove like if it was liked.
const likeProduct = function(productId, userId){
    const product = products.find((product) => {
      return product._id === productId;
    });
  
    if(product){
      const {likes} = product;
      if(likes.includes(userId)){
        const userIndex = likes.indexOf(userId);
        likes.splice(userIndex, 1);
      } else {
        likes.push(userId);
      } 
    } 
  }
  
  likeProduct('1234','gaurav24');
  
  console.log(products);

