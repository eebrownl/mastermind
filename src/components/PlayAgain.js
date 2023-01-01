import styled from "styled-components";

const PlayAgainButton = styled.button`
   background: seaGreen;
   color: white;
   border: none;
   border-radius: 8px;
   padding: .6em 1em;

  
   font-weight: 400;
   font-size: 1rem;
   
   &:hover, 
   &:focus {
    background: #76b591;
   }

   &:active {
      background: #135730;
   }
`

const PlayAgainContainer = styled.div`
    grid-row: 3 / 4;
    grid-column: 2 / 3;
    display: flex;
    align-items: center;
    font-family: 'Karla', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    justify-content: space-around;
    border: 1px solid black;
    padding: .4em;
    border-radius: 3px;
    margin-bottom: .1em;


`

export { PlayAgainButton, PlayAgainContainer }