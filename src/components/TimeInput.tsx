interface TimeInputProps {
    setTime: (time: string | undefined) => void
    time: string | undefined
}

export const TimeInput: React.FC<TimeInputProps> = ({time, setTime}) => {

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        const newValue = e.currentTarget.value
        setTime(newValue)
    }

    return (
        <input onChange={onChange} />
    )
}
