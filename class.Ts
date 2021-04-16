class Person{
      name:string;
      callFn:Function[]=[];
     constructor(name:string){
       this.name=name
     }
      say(fn: Function) {
           console.log(fn)
      console.log(this.name)
           this.callFn.push(fn)
           for (const iterator of this.callFn) {
              iterator()
           }
       
     }
   }
   let person=new Person('person')
   class User{
   user:string;
     constructor(user:string){
       this.user=user
     }
     sayUser(){
       person.say(()=>{
        this.user;
        this.hi() ;
       })
     }
     hi(){
       console.log(`Hi ${this.user}`)
     }
   }
   let user=new User('Sami');
   user.sayUser()