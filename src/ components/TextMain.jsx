import '../css-components/TextMain.css'
import '../App.css'

export default function TextMain() {
    return (
        <div className="text-overlay">
            <h1 id="drive" className='h1'>Свобода передвижения</h1>
            <h1 id="future" className='future'>Без границ и обязательств</h1>
            <div id="container-spans">
            <p id="description" className='description'>
                Испытайте премиум-каршеринг нового уровня с безупречным стилем, <br/>
            </p>
                <p id="description-2" className='description-2'>максимальным комфортом и заботой об экологии на каждой дороге.</p><br/>
        </div>
            </div>
    )
}