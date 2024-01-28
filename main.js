async function get(){
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    console.log(data);
    const result =data.products.map( function(ele){
        return`
        <h2> ${ele.title}</h2>
        <img src="${ele.thumbnail}"`
        
});
document.querySelector(".products").innerHTML=result;
   
}
get();


