import styled from "styled-components";

export const NavBar = styled.nav`
    display: flex;
    gap: 64px;
    margin-bottom: 40px;

    .navbar__item,
    .navbar__item--active {
        font-size: 20px;
        font-weight: 700;
        margin-top: 32px;
        color: #FFF;
        text-decoration: none;
    }

    .navbar__item--active {
        color: #16D3E4;
    }
`

export const MatchDiv = styled.div`
    display: inline-flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 16px 32px;
    margin-bottom: 16px;
    gap: 8px;
    box-shadow: 2px 2px 4px 0px #16D3E4, -2px -2px 4px 0px #16D3E4;
    border-radius: 16px;

    .match__teams {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 32px;
    }

    .match__info {
        font-size: 14px;
        font-weight: 700;
    }

    .team__logo {
        width: 75px;
    }

    .team__stats {
        font-size: 24px;
        font-weight: 700;
    }

    .divider {
        font-size: 14px;
        font-weight: 700;
    }
`