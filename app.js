const loadData =()=>{
    const url = 'https://www.themealdb.com/api/json/v1/1/search.php?f=a'
    fetch(url).then(res=>res.json()).then(data=>getData(data));
}

const getData=(data)=>{
    console.log(data);
}

loadData()