async function getMatchesData(){
    return await fetch("https://api.cricapi.com/v1/currentMatches?apikey=03d37b22-c91a-4dd5-a713-d4f00ec31c8b&offset=0")
        .then(data => data.json())
        .then(data => {
            if(data.status!="success")return;

            const matchesList = data.data;
            if(!matchesList) return [];

            const matchDetailsData = matchesList.map(match=> `${match.name}<br>  ${match.status}`);

            document.getElementById("match").innerHTML = matchDetailsData.map(match => `<li><div class="match-item"><p>${match}</p></div></li>`).join('');

            return matchDetailsData;
        })
        .catch(e=>console.log(e));
}

getMatchesData();