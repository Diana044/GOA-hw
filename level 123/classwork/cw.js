function Student(StudentsName,joinDate){
    this.name=StudentsName
    this.date=joinDate
    this.func=function(){
        console.log(`my name is ${StudentsName} and i joined GOA in ${joinDate}`)
    }
}

let me=new Student('diana', 'november 2024')
me.func()  