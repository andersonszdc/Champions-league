export default async function ChampionsMatch() {
    const response = await fetch(`https://app.sportdataapi.com/api/v1/soccer/matches?apikey=${process.env.REACT_APP_API_KEY}&season_id=1959&date_from=2021-09-14`)
    const json = await response.json()
    return json
}