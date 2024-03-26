import { StyleButton } from "./StyleButton"

interface IpropButton {
    children: React.ReactNode,
    onClick?: () => void,
    classButton: string

}

export function Button({ children, onClick, classButton }: IpropButton) {
    return (
        <StyleButton classButton={classButton} onClick={onClick}>
            {children}
        </StyleButton>
    )
}