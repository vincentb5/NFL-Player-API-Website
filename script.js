async function getStats() {
    try {

        const player = document.getElementById("slug")
     
        const url = "https://ballranks.com/api/v1/rankings/season?sport=football&scoring_format=ppr&limit=100"
        console.log(player)

        const response = await fetch(url);

        const json = await response.json();
        console.log(JSON.stringify(json));


        //this r => r loops through all the players on the json, it is kind of a brute force way of going about it but works
        const profile = json.rankings.find(r => r.player.slug === player.value)

        document.getElementById("name").textContent = "Name: " + profile.player.name
        document.getElementById("team").textContent = "Team: " + profile.player.team
        document.getElementById("position").textContent = "Position: " + profile.player.position
        document.getElementById("rank").textContent = "Rank: " + profile.rank
        
    } catch (error) {
        console.log(error);
    }
}