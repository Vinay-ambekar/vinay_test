class Railwayform{
    constructor (givenname,trainnumber,adrs){
        console.log("constructor called..."+givenname+" "+trainnumber)
        this.name=givenname
        this.trainno=trainnumber
        this.adress=adrs
        
    }
preview(){ //methods
    alert(this.name + " :your form is for train number: "+this.trainno+" and your addre is "+this.adress)
}
submit(){
    alert(this.name + " : your form is submmit for train number : " +this.trainno)
}
cancel(){
    alert(this.name+":this form is cancled for train number: "+this.trainno)
   this.trainno=0
}
}
let harryForm = new Railwayform("harry",13488,"420 specifir ocean bihar-545555")
harryForm.preview()
harryForm.submit()
harryForm.cancel()