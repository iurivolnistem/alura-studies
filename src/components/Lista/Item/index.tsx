import { ITarefa } from '../../../types/tarefa';
import style from '../lista.module.scss';

interface Props extends ITarefa{
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Item(
    {
        nome,
        tempo,
        selecionado,
        completado,
        id,
        selecionaTarefa
    }: Props){
    return(
        <li className={`${style.item} ${completado && style.itemCompletado} ${selecionado ? style.itemSelecionado : ''}`} onClick={() => !completado && selecionaTarefa({
            nome,
            tempo,
            selecionado,
            completado,
            id
        })}>
            <h3>{nome}</h3>
            <span>{tempo}</span>
            {completado && <span className={style.concluido}></span>}
        </li>
    )
}

export default Item;