import style from './style.module.css';

type DefaultInputProps = {
    id: string;
    labelText?: string;
} & React.ComponentProps<'input'>

export function DefaultInput({type,id, labelText, ...rest}: DefaultInputProps) {

    return(
        <>
            { labelText && <span> <label htmlFor={id}> {labelText} </label></span> }
            <input 
                className={style.input} 
                type={type} 
                id={id} 
                
                {...rest} />
        </>
    )

}