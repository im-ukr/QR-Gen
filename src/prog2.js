const person = {
    firstName: 'Shubham',
    age: 250,
    country: 'India',
    city:'Mumbai',
    skills: ['HTML', 'CSS', 'JS'],
    title: 'teacher',
    address: {
      street: 'Heitamienkatu 16',
      pobox: 2002,
      city: 'Mumbai'
    },
    getPersonInfo: function() {
      return `I am ${this.firstName} and I live in ${this.city}, ${this.country}. I am ${this.age}.`
    }
  }
  
  //Object methods: Object.assign, Object.keys, Object.values, Object.entries
  //hasOwnProperty
  
  const copyPerson = Object.assign({}, person)
  console.log(copyPerson)