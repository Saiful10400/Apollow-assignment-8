// interfaces.
interface Tmember{
    title:string,
    genre:string,
    publishedYear:number,
    totalCopies:number,
    availableCopies:number
}





// 1.create
const create=(payload:Tmember)=>{

}


// 2.get all
const get_all=()=>{

}

// 3. get one
const get_one=()=>{

}

// 4. update
const update_one=(payload:Partial<Tmember>)=>{

}

// 5. delete one.
const delete_one=(id:string)=>{

}

export default{
    create,get_all,get_one,update_one,delete_one
}