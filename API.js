
var newele = document.createElement('div');
newele.setAttribute('id','Div1');
document.body.appendChild(newele);
newele.innerHTML ='<form id="form1" class="searchbox">  <input type="text" placeholder="search any movies, shows, series here.." name="search" required><button type="submit"><i class="fa fa-search"></i></button></input></form>';

var form =document.getElementById('form1');
form.addEventListener('submit',async(e)=>{
    e.preventDefault();
    const showname = e.target.search.value
    const url = `https://api.jikan.moe/v3/search/anime?q=${showname}`
    let response;
   
    try {
      response = await fetch(url).then((res) => res.json());
    } catch (error) {
        alert("oops you entered incorrect value")
    }
    var Data = response.results;
    console.log(Data);
});