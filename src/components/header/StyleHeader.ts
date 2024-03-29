import styled from "styled-components";

export const StyleHeader = styled.header`
    background-color: var(--gray-700);
    height: 90px;

    .header__container {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-between;
        

        figure {
            display: flex;
            max-width: 200px;
            min-width: 100px;
            height: auto;

            img {
                width: 100%;
                height: 100%;
                object-fit: contain;
            }
        }

    }

`;
