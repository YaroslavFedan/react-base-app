const required = value => (value ? undefined : 'Поле обязательно для заполнения');

const email =  value =>
    value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
        ? 'Не верный формат email адреса'
        : undefined;

const minLength = (length, errorMessage) => value => {
    if(!errorMessage)
    errorMessage = `Длина должна быть не меньше ${length} символа`;

    return value && value.length < length ? errorMessage : undefined;
}

const match = (matches, errorMessage)=> (value, allValues) =>{

    if(!errorMessage)
        errorMessage = `Пароли не совпадают`;

    return value !== allValues[matches] ? errorMessage : undefined;
}

 // don`t use  - big question, how to work it
 // you may need to break it down into three methods        
const minmax = (min, max)=>(value)=>{
    

    /*if(value && value.length > max){
        return `Max length is ${max} symbols`;
    }else if(value && value.length < min){
        return `Min length is ${max} symbols`;
    }else{
        return undefined;
    }*/
}

export {email, required,  match, minLength, minmax};
