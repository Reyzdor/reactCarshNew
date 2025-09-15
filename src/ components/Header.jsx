import  Button  from './Button'
import ButtonSign from './ButtonSing'

export default function Header() {
    return (
            <div id="container">
                <header>
                    <div id="container-inner">
                        <span id="logo">CarNow</span>
                        <input id='input' type="text" placeholder="Поиск автомобилей по локации, модель..." />
                        <ButtonSign />
                        <Button />
                    </div>
                </header>
            </div>
    )
}

