import DigitalScroll from './Digital.jsx'
import '../css-components/Window.css'

export default function Window(props) {
    return (
        <div id="window">
            <DigitalScroll value={props.value} suffix={props.suffix} />
            <span>{props.title}</span>
        </div>
    );
}