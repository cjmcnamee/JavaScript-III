/* The four principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Implicit Binding - 'this' references the object when you invoke it.
* 2. Explicit Binding - 'this' references the first argument inside the function.
* 3. 'new' Binding - 'this' references 'new' when it creates a new object.
* 4. Window Binding - 'this' is refered to the window/console object in a global scope"
*
* write out a code example of each explanation above
*/

// Principle 1 (Impicit Binding)
  const userProfile = {
    user: 'funkyboy1999',
    pass: 1234,
    favoriteColor: 'purple',
    speak: function(){
      console.log(`Greetings, ${this.user}.`);
    }
  }

  userProfile.speak();

  //In this case, 'this' refers to 'userProfile' aka the object when invoked.

// Principle 2 (Explicit Binding)
  function whatsUp () {
    console.log(`What's up, ${this.name}`);
  }

  const user = {
    name: 'Theodore Sacramento Lombardi III',
    age: '???'
  }

  whatsUp.call(user);

  //In this case, 'this' refers to 'user', which becomes the argument when you invoke the function.


// Principle 3 ('new' Binding)
  function supplies (utensil, drink, attack) {
   this.utensil = utensil
   this.drink = drink
   this.attack = attack
   console.log(`Got my ${this.utensil}, got my ${this.drink}. It's time to ${this.attack} it up!!!`);
  }

  const me = new supplies('knife', 'slurpee', 'karate chop')

  //In this case, 'this' refers to 'new' when the new function is invoked.

// Principle 4 (Window Binding)
  function saySomething(something) {
    console.log(this);
    return something;
  }

  saySomething("I'm giving up on you.");

  //In this case, 'this' refers to the console object;
