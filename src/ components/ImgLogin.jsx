import av from '../assets/av.png'
import '../css-components/ImgLogin.css'

export default function ImgLogin() {
    return (
        <img src={av} id='login' alt="Login" style={{
            width: '30px', height: '30px', cursor: 'pointer'
        }}/>
    )
}