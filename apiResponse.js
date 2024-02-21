
const dummyUsersUrl = "https://dummyjson.com/users";

usersPromise = fetch(dummyUsersUrl);

usersPromise.then((resolve)=> {
    return resolve.json();
}).then((data)=>{
    console.log(data);
}).catch((error)=>{
    console.log(error);
})


// Read the countries API using fetch and print the name of country, capital, languages, population and area.
const countriesUrl = "https://restcountries.com/v2/all";

const countriesPromise = fetch(countriesUrl);



countriesPromise.then((response)=>{
    return response.json()
}).then(
    (data)=>{
        
        const languagesSet = new Set();

        for(let person1 of data){
            const {name,capital,population,languages } = person1;
            console.log(`Name : ${name}, Capital : ${capital}, Population : ${population}, `);
            const myLanguages = [];
            for(let language of languages){
                const{name } = language;
                myLanguages.push(name);
                languagesSet.add(name);
            }
            console.log(`Languages : ${myLanguages}`);
        }

        // Read the countries api and count total number of languages in the world used as officials.

        const numberOfUniqueLanguages = languagesSet.size;
        console.log(`Number of Official languages : ${numberOfUniqueLanguages}`);
    }
).catch((error)=>{
    console.log(error);
});

// Print out all the cat names in to catNames variable.
//Read the cats api and find the average weight of cat in metric unit.
const catsUrl = "https://api.thecatapi.com/v1/breeds";
const catsPromise = fetch(catsUrl);

const catNames = [];

catsPromise.then((response)=>
    {   
        return response.json();
    }
    ).then((data) => {

    
        
        for(let cat of data){
            const{name,weight:{imperial,metric} } = cat;
            catNames.push(name);
            console.log(metric);
        }
        console.log(catNames);

    }).catch( (error)=> {
        console.log(error);
    })


// Read the countries api and find out the 10 largest countries
const largestCountriesPromise = fetch(countriesUrl);

largestCountriesPromise.then((response)=>{
    return response.json()
}).then((data)=>{

    const areaOfCountries = data
      .sort((a, b) => a.area - b.area)
      .slice(0, 10)
      .map((data) => data.name);
    console.log(`10 largest countires ${areaOfCountries}`);
    
}).catch((error)=>{
    console.log(error);
})


