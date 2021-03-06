const teams = [
    {
        "id": 1,
        "name": "New Jersey Devils"
    },
    {
        "id": 2,
        "name": "New York Islanders"
    },
    {
        "id": 3,
        "name": "New York Rangers"
    },
    {
        "id": 4,
        "name": "Philadelphia Flyers"
    },
    {
        "id": 5,
        "name": "Pittsburgh Penguins"
    },
    {
        "id": 6,
        "name": "Boston Bruins"
    },
    {
        "id": 7,
        "name": "Buffalo Sabres"
    },
    {
        "id": 8,
        "name": "Montréal Canadiens"
    },
    {
        "id": 9,
        "name": "Ottawa Senators"
    },
    {
        "id": 10,
        "name": "Toronto Maple Leafs"
    },
    {
        "id": 12,
        "name": "Carolina Hurricanes"
    },
    {
        "id": 13,
        "name": "Florida Panthers"
    },
    {
        "id": 14,
        "name": "Tampa Bay Lightning"
    },
    {
        "id": 15,
        "name": "Washington Capitals"
    },
    {
        "id": 16,
        "name": "Chicago Blackhawks"
    },
    {
        "id": 17,
        "name": "Detroit Red Wings"
    },
    {
        "id": 18,
        "name": "Nashville Predators"
    },
    {
        "id": 19,
        "name": "St. Louis Blues"
    },
    {
        "id": 20,
        "name": "Calgary Flames"
    },
    {
        "id": 21,
        "name": "Colorado Avalanche"
    },
    {
        "id": 22,
        "name": "Edmonton Oilers"
    },
    {
        "id": 23,
        "name": "Vancouver Canucks"
    },
    {
        "id": 24,
        "name": "Anaheim Ducks"
    },
    {
        "id": 25,
        "name": "Dallas Stars"
    },
    {
        "id": 26,
        "name": "Los Angeles Kings"
    },
    {
        "id": 28,
        "name": "San Jose Sharks"
    },
    {
        "id": 29,
        "name": "Columbus Blue Jackets"
    },
    {
        "id": 30,
        "name": "Minnesota Wild"
    },
    {
        "id": 52,
        "name": "Winnipeg Jets"
    },
    {
        "id": 53,
        "name": "Arizona Coyotes"
    },
    {
        "id": 54,
        "name": "Vegas Golden Knights"
    }
]

export const getTeam = (teamId) => teams.filter(team => team.id === teamId)[0].name

export const getTeams = () => teams