import React from 'react';
import { MatchDiv } from '../styles/components';
import DataConversion from '../utils/DataConversion';

const Match = ({match, index, first}: any) => {
    return (
        <>
            {first && <h2 className="label__rodada">Rodada {index/16 + 1}</h2>}
            <MatchDiv>
                <div className="match__info">{DataConversion(match.match_start)}</div>
                <div className="match__teams">
                    <img className="team__logo" src={match.home_team.logo} alt="" />
                    <span className="team__stats">{match.stats.home_score}</span>
                    <span className="divider">x</span>
                    <span className="team__stats">{match.stats.away_score}</span>
                    <img className="team__logo" src={match.away_team.logo} alt="" />
                </div>
                <div className="match__info">{match.venue.name}</div>
            </MatchDiv>
        </>
    );
}

export default Match;