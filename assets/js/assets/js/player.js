const search=document.getElementById("search");

search.addEventListener("input",function(){

  const value=this.value.toLowerCase();

  document.querySelectorAll(".card").forEach(card=>{

    const text=card.innerText.toLowerCase();

    card.style.display=text.includes(value)?"block":"none";

  });

});
