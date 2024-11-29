import { Link } from 'react-router-dom'


export function Buttonwarning({ label, to, text }) {
    return (
        <>
            <div>
                {label}</div>
            <Link to={to}>{text}</Link>
             </>
    )
}