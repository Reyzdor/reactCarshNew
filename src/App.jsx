import Header  from './ components/Header'
import Main from './ components/Main'
import './index.css'
import './css-components/TextMain.css'
import Window from './ components/Window'

export default function App() {
    return (
      <div>
            <Header />
            <Main />
            <div id="big-window">
                <Window value={50000} suffix="+" title="Довольных клиентов" />
                <Window value={1200} suffix="+" title="Автомобилей в парке" />
                <Window value={15} suffix="" title="Городов России" />
                <Window value={99} suffix="%" title="Процент довольных клиентов" />
            </div>
        </div>
    )
}

