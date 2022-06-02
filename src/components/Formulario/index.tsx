import React, {useState} from "react";
import { ITarefa } from "../../types/tarefa";
import Botao from "../Botao";
import style from './formulario.module.scss'
import {v4 as uuidv4} from 'uuid';

interface Props {
    setTarefas: React.Dispatch<React.SetStateAction<ITarefa[]>>
}

function Formulario ({setTarefas}: Props ){
    const [nome, setNome] = useState("");
    const [tempo, setTempo] = useState("00:00");

    function adicionarTarefa(evento: React.FormEvent<HTMLFormElement>){
        evento.preventDefault();
        setTarefas(tarefasAntigas => [...tarefasAntigas, {
            nome,
            tempo, selecionado: false,
            completado: false,
            id: uuidv4()}
        ])

        setNome("");
        setTempo("00:00");
    }

    return(
        <form className={style.novaTarefa} onSubmit={adicionarTarefa}>
            <div className={style.inputContainer}>
                <label htmlFor="tarefa">O que você vai estudar?</label>
                <input
                    type="text"
                    name="tarefa"
                    id="tarefa"
                    value={nome}
                    onChange={evento => setNome(evento.target.value)}
                    placeholder="O que você vai estudar?"
                    required
                />
            </div>
            <div className={style.inputContainer}>
                <label htmlFor="tempo">Tempo</label>
                <input
                    type="time"
                    name="tempo"
                    id="tempo"
                    step="1"
                    value={tempo}
                    onChange={evento => setTempo(evento.target.value)}
                    min="00:00:00"
                    max="01:30:00"
                    required
                />
            </div>
            <Botao type="submit">
                Adicionar
            </Botao>
        </form>
    )
}

export default Formulario;