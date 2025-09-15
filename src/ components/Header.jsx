import  Button  from './Button'

export default function Header() {
    return (
        <header>
            <div id="container">
                <h1 id="logo">CarNow</h1>
                <input type="text" placeholder="Поиск автомобилей по локации, модель..." />
                <span id="signin">Sign In</span>
                <Button />
            </div>
        </header>
    )
}

