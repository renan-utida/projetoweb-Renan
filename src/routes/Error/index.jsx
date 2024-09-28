import EmojiError from '../../assets/error-404.png'
import { MainError } from './error-styled'
import { Link } from 'react-router-dom'

const Error =()=>{

    return(
        <MainError>
            <Link to="/">Eletric Life</Link>
            <h1>Error 404 - Page Not Found!</h1>
            <img src={EmojiError} alt="error-404" />
        </MainError>
    )
}

export default Error