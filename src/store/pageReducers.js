//recebe dados da actional

export default function(state = 'Home',action) {//obj que retorno na pageActions
    //alert('testee'+ action.type)
    switch(action.type)//retorno com base na actiuon.type
    {
        case 'NAME':
            return action.payload


        default:
            //alert('entrou!' + state)
         return state;
    }

}