interface TimeInputProps {
    setTime: (time: string) => void
    time: string
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
