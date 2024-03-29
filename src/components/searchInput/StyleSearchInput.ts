import styled from "styled-components";


export const StyleSearchInput = styled.div`
    
    svg{
        color: var(--gray-100);
        cursor: pointer;
        display: block;

        &:hover{
            color: var(--secondary-color);
        }
    }
    input {
        display: none;
    }

    @media(min-width: 600px){
        position: relative;

        svg{
            color: var(--gray-700);
            position: absolute;
            right: 10px;
            top: 10px;
        
            &:hover{
                color: var(--secondary-color);
            }
        }

        input{
            display: block;
            padding: 8px 10px;
            width: 200px;
            border: 2px solid var(--secondary-color);
            border-radius: 5px;
            background-color: var(--gray-100);
        
            &:focus{
                outline: none;
            }
        }
    }
`