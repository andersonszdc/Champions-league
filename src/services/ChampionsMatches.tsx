export default async function ChampionsMatch() {
    const response = await fetch('https://app.sportdataapi.com/api/v1/soccer/matches?apikey=94a9a580-1935-11ec-aaff-575156120311&season_id=1959&date_from=2021-09-14')
    const json = await response.json()
    return json
}