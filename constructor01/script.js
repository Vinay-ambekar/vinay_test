class Employee {
    login() {
      console.log(`Employee has logged in`);
    }
    logout() {
      console.log(`Employee has logged out`);
    }
    requestLeaves(leaves) {
      console.log(`Employee has requested ${leaves} leaves `);
    }
  }
  
  class Programmer extends Employee {
    requestCoffee(x) {
      console.log(`Employee has requested ${x} coffee`);
    }
    requestLeaves() {
        super.requestLeaves(4)//is used to copy same as it is in the above class
        console.log("one extra leaves is granted")
      //console.log(`Employee has requested ${leaves + 1} leaves (one extra)`);using paranthisis'()' for method  over writing
    }
  }
  
  let p = new Programmer();
  p.login();
  p.requestLeaves(3);
  p.requestCoffee(3);
  