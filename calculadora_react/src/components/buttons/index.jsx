import './button.css'

export default function Buttons({label, onClick}) {

    return (
        <button type="button" onClick={onClick}>{label}</button>
    )
}

