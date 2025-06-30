let footballTeam = {
  team: "Meme deez-ballz",
  year: 2025,
  headCoach: "SniperMothLord",
  players: [
    {
      name: "Teemu Laakkonen",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Kekke Laakkonen",
      position: "forward",
      isCaptain: false
    },
    {
      name: "Jalo Hiltunen",
      position: "midfielder",
      isCaptain: false
    },
    {
      name: "Kikki Kakkonen",
      position: "midfielder",
      isCaptain: true
    },
    {
      name: "Jaska Jokunen",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Miika Eronen",
      position: "defender",
      isCaptain: false
    },
    {
      name: "Mc. Super Pringles Man",
      position: "goalkeeper",
      isCaptain: false
    },
  ]
}
const headCoachEl = document.getElementById("head-coach");
const yearEl = document.getElementById("year");
const teamEl = document.getElementById("team");
const teamMateSelect = document.querySelector("#players");
const playerCardsContainer = document.getElementById("player-cards");

teamEl.textContent = footballTeam.team;
yearEl.textContent = footballTeam.year;
headCoachEl.textContent = footballTeam.headCoach;

teamMateSelect.addEventListener("change", () => {
  let htmlString = "";
  let filteredTeamMates = [];
  let selectedPosition = teamMateSelect.value;

  if(selectedPosition == "all"){
    filteredTeamMates = footballTeam.players.slice();
  }else{
    filteredTeamMates = footballTeam.players.filter(player => player.position == selectedPosition)
  }
  
  htmlString = filteredTeamMates.map(player => {
    let captainIndicator = player.isCaptain ? "(Captain) " : "";
    return `
      <div class="player-card">
        <h2>${captainIndicator}${player.name}</h2>
        <p>Position: ${player.position}</p>
      </div>
    `
  });
  playerCardsContainer.innerHTML = htmlString;

})


