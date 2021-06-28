interface ButtonProps {
    onClick: () => void
}

export const Button: React.FC<ButtonProps> = ({onClick}) => {
    return (
        <input onClick={onClick} type="button" />
    )
}
