var url1 = fetch("https://restcountries.com/v3.1/all");
url1.then((data)=>data.json()).then((data1)=>{
    console.log(data1)
    for(var i=0; i<data1.length; i++){
        console.log(data1[i].name);
        var div = document.createElement("div");
        div.innerHTML = `${data1[i].name}`
        document.body.append(div)
           }
})

