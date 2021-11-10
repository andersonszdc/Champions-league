import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';
import ChampionsMatches from '../services/ChampionsMatches';
import Match from './Match';

const Wrapper = styled.div`
    display: inline-flex;
    margin: 0 auto;
    flex-direction: column;
`

const DeathGroup = () => {

    const route = useLocation()
    const [matches, setMatches] = useState([])
    const [interval, setInterval] = useState([0, 0])

    useEffect(() => {
        switch (route.pathname) {
            case '/oitavas':
                setInterval([96, 112])
                break
            case '/quartas':
                setInterval([112, 116])
                break
            case '/semi':
                setInterval([116, 118])
                break
            case '/final':
                setInterval([118, 119])
                break   
            default:
                setInterval([0, 0])
                break
        }
    },[route])

    useEffect(() => {
        const FetchData = async () => {
            const res = await ChampionsMatches()
            setMatches(res.data.slice(interval[0], interval[1]))
        }
        FetchData()
    },[interval])

    useEffect(() => {
        console.log(matches)
    },[matches])

    return (
        <Wrapper>
            A definir
            {matches.map((match: any, index: any) => (
                <Match match={match} index={index} />
            ))}
        </Wrapper>
    );
}

export default DeathGroup;