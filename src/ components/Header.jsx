import  Button  from './Button'
import ButtonSign from './ButtonSing'


export default function Header() {
    return (
            <div id="container">
                <header>
                    <div id="container-inner">
                        <div id="area">
                            <img src="" alt="" id="car" />
                        </div>
                        <span id="logo">CarNow</span>
                        <input id='input' 
                        type="text" 
                        placeholder="Поиск автомобилей по локации, модель..."/>
                        <div id="button-container">
                        <ButtonSign />
                        <Button />
                        </div>
                    </div>
                </header>
            </div>
    )
}

