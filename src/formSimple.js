import React,{useState} from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {namePage} from './store/pageActions';

export default function Form(){
    const dispatch = useDispatch();
    {/*const result = useSelector(function (state){
        return state.pagina;
    })*/}
    const result = useSelector(state => state.pagina)
    const [pages, setPages] = useState(result);

    const resultt = useSelector(state => state.pagina)

    return(
        <>
        <input type="text" value={result} placeholder={result}  onChange={(e) => dispatch(namePage(e.target.value,'NAME'))}/>
            <button onClick={() =>{
                dispatch(namePage('T','NAME'))
            }}>
                Chamar</button>
        <div>Resultado {result}</div>

            <div>{resultt}</div>

        </>
    )

}

