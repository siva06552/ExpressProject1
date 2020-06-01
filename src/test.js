const axios = require('axios');
async function getRecipeIds(item){    
    try{
        const qString = `https://forkify-api.herokuapp.com/api/search?q=${item}`;
        const res1 = await axios(qString);//fetch(qString);
        this.recipeIdsList = res1.data.recipes;
        //console.log(this.recipeIdsList);  
        return    this.recipeIdsList;       
    }
    catch(error){
        //alert("no recipe found");
        console.log("error");
    } 
};

module.exports= getRecipeIds;