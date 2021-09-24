//recebe dados da actional
export default function(state = 0,action) {//obj que retorno na pageActions
    switch(action.type)//retorno com base na actiuon.type
    {
        case 'NAME ':
            return action.payload[0]


        default:
         return state;
    }

}