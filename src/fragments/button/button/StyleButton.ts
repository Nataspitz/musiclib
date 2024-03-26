import styled, { css } from "styled-components";

interface IpropButton {
    classButton: string,
}

export const StyleButton = styled.button<IpropButton>`
    ${({ classButton }) => {
        if (classButton === "login") {
            return css`
                width: 80%;
                max-width: 260px;
                height: 40px;
                border-radius: 8px;
                position: relative;
                overflow: hidden;
                transition: background-color 0.3s ease, color 0.3s ease;
                
                
                div{
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    gap: 20px;
                    position: relative;
                    z-index: 1;

                    svg{
                        height: 25px;
                        width: 25px;
                        color: var(--green-color); 
                    }

                    p{
                        color: var(--text-color);
                        font-size: var(--text-1);
                        font-weight: 600;
                    }

                }

                &:hover{
                    scale: 1.1;
                }

                &:hover::before{
                    content: '';
                    position: absolute;
                    top: 0px;
                    right: 0px;
                    width: 100%;
                    height: 40px;
                    background-image: linear-gradient(to right, var(--green-color), var(--gray-100));
                    border-radius: 10px;
                    box-sizing: border-box;
                    animation: borderRotate 5s linear infinite;

                }

                &:hover::after{
                    content: "";
                    position: absolute;
                    background-color: var(--background-color);
                    inset: 3px;
                    border-radius: inherit;
                }

                `
        }
    }

    }

`
