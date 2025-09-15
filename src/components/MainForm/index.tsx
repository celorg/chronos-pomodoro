

import { PlayCircleIcon } from "lucide-react";
import { Cycles } from "../Cycles";
import { DefaultButton } from "../DefaultButton";
import { DefaultInput } from "../DefaultInput";
import { useState } from "react";
import type { TaskModel } from "../../models/TaskModel";
import { useTaskContext } from "../../contexts/TaskContext/useTaskContext";
import { getNextCycle } from "../../utils/getNextCycle";
import { getNextCycleType } from "../../utils/getNextCycleType";
import { formatSecondForMinutes } from "../../utils/formatSecondsForMinutos";


export function MainForm () {

    const {state,setState} = useTaskContext();

    const [taskName, setTaskName] = useState('');

    const nextCyclo = getNextCycle(state.currentCycle);
    const nextCylcoType = getNextCycleType(nextCyclo);

    function handleCreateNewTask(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if(taskName === null) return;

        const task = taskName.trim();

        if(!task) {
            alert("Digite o nome da tarefa");
            return;
        }

        const newTask: TaskModel = {
            id: Date.now().toString(),
            name: task,
            startDate: Date.now(),
            completeDate: null,
            interruptDate: null,
            duration: state.config[nextCylcoType],
            type: nextCylcoType,
        }

        const secondsRemaing = newTask.duration * 60;

        setState(prevState => {
            return {
                ...prevState,
                config: {...prevState.config},
                activeTask: newTask,
                currentCycle: nextCyclo, 
                secondsRemaing, 
                formattedSecondsRemaing: formatSecondForMinutes(secondsRemaing),
                tasks: [...prevState.tasks, newTask]
            }
        });


    }

    return(
        <form onSubmit={handleCreateNewTask} className='form'>
            <div className='formRow'>
                <DefaultInput type='text' value={taskName} onChange={e => setTaskName(e.target.value)} labelText='Task' id='meuInput' placeholder='Digite algo' />
            </div>
            <div className='formRow'>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='formRow'>
                <Cycles />
            </div>
            <div className='formRow'>
                <DefaultButton icon={<PlayCircleIcon />}   />
                {/* <DefaultButton icon={<StopCircleIcon />} color='red'  /> */}
            </div>
        </form>
    )
} 