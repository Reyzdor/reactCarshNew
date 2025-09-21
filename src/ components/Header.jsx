import  Button  from './Button'
import searchIcon from '/Users/roman/Desktop/reactAndVite/vite-project/src/assets/search1.svg'
import carImage from '/Users/roman/Desktop/reactAndVite/vite-project/src/assets/car.png'
import ImgLogin from './ImgLogin'

export default function Header() {
    return (
            <div id="container">
                <header>
                    <div id="container-inner">
                        <div id="area">
                            <img src={carImage} alt="" style={{
                                zIndex: '1',
                                width: '30px',
                                height: '30px',
                                position: 'relative',
                                top: '8px'
                            }} />
                        </div>
                        <span id="logo">АвтоРядом</span>
                        <div style={{position: 'absolute',  left: '50%',
                            transform: 'translateX(-50%)'}}>
                        <div id="input-container"
                        style={{fontFamily: 'Poppins'}}>
                                <input 
                                    id='input' 
                                    type="text" 
                                    placeholder="Поиск автомобилей по локации, модель..."
                                    style={{paddingLeft: '40px',
                                            width: '450px', fontFamily: 'Poppins',
                                    }} 
                                />
                                <img 
                                    src={searchIcon} 
                                    alt="search" 
                                    style={{
                                        position: 'absolute',
                                        left: '12px',
                                        top: '45%',
                                        transform: 'translateY(-50%)',
                                        width: '15px',
                                        height: '15px',
                                        color: '#888',
                                        pointerEvents: 'none' 
                                    }} 
                                />
                            </div>
                        </div>
                        <div id="button-container">
                        <Button />
                        <ImgLogin />
                        </div>
                    </div>
                </header>
            </div>
    )
}

