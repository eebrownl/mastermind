import styled from "styled-components";

const BoardContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr 1fr;
    grid-template-rows: 1fr 4fr 1fr;
    margin: 0 auto;
    max-height: 100vh;

    @media (min-width: 800px) {
        max-width: 75vw;
    }

    @media (min-width: 1200px) {
        max-width: 50vw;
    }

    
`

export default BoardContainer