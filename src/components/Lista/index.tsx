import Item from "./Item";
import style from './lista.module.scss';
import { ITarefa } from "../../types/tarefa";

interface Props{
    tarefas: ITarefa[],
    selecionaTarefa: (tarefaSelecionada : ITarefa) => void 
}

function Lista({tarefas, selecionaTarefa} : Props) {
    
    return(
        <aside className={style.listaTarefas}>
            <h2>Estudos do dia</h2>
            <ul>
                {tarefas.map((item) => (
                    <Item 
                        key={item.id}
                        {...item}
                        selecionaTarefa={selecionaTarefa}
                    />
                ))}
            </ul>
        </aside>
    )
}

export default Lista;