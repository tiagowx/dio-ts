interface IUsuario {
  id:string;
  email:string;
}

interface IAdmin extends IUsuario {
  cargo:'gerente'| 'coordenador' | 'supervisor';
}


function redirect (user: IUsuario | IAdmin) {
  if ('cargo' in user){
    // redireciona para área administrativa
  }

  // redireciona para area comum
}