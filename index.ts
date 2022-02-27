function addApendInList <T>(array:T[], valor: T) 
{
  return array.map(()=> valor);
}

addApendInList([1,2,3],4)