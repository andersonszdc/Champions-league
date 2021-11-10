import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ChampionsMatches from '../services/ChampionsMatches';
import Match from './Match';

const Wrapper = styled.div`
    display: inline-flex;
    margin: 0 auto;
    flex-direction: column;

    .label__rodada {
        font-size: 18px;
        font-weight: 700;
        margin-top: 32px;
        margin-bottom: 16px;
    }
`

const GroupStage = () => {

    const [matches, setMatches] = useState([])

    useEffect(() => {
        const FetchData = async () => {
            const res = await ChampionsMatches()
            setMatches(res.data?.slice(0, 96))
            console.log(res)
        }
        FetchData()
    },[])
  return matches && matches[0] ? (
            <Wrapper>
                {matches.map((match: any, index: any) => (
                    [0].includes(index) || index % 16 === 0 ? (
                        <Match first match={match} key={index} index={index} />
                    ) : (
                        <Match match={match} key={index} index={index} />
                    )
                ))}
            </Wrapper>
  ) : (
      <div>Loading...</div>
  )
}

export default GroupStage;