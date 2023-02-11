// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G'];
  return dnaBases[Math.floor(Math.random() * 4)];
};

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = [];
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase());
  }
  return newStrand;
};

//create a factory function to create an object with a specimenNum & dna value and mutate method
function pAequorFactory(number, array) {
  return {
  specimenNum: number,
  dna: array,
  //create mutate method
  mutate() {
    let possibleElements = ['A', 'G', 'C', 'T'];
    let indexBase = Math.floor( Math.random() * this.dna.length );
    let randomElement = this.dna[indexBase];
    //create my own RandBase function basically, remove the matching element from possibleElements array, swap that element with a valid base, then restore possibleElements at the end of each switch logic
    switch ( randomElement ) {
      case 'A':
        let aIndex = possibleElements.indexOf('A');
        possibleElements.splice(aIndex, 1);
        randomElement = possibleElements[Math.floor(Math.random() * possibleElements.length)];
        possibleElements.push('A');
        break;
      case 'T':
        let tIndex = possibleElements.indexOf('T');
        possibleElements.splice(tIndex, 1);
        randomElement = possibleElements[Math.floor(Math.random() * possibleElements.length)];
        possibleElements.push('T');
        break;
      case 'C':
        let cIndex = possibleElements.indexOf('C');
        possibleElements.splice(cIndex, 1);
        randomElement = possibleElements[Math.floor(Math.random() * possibleElements.length)];
        possibleElements.push('C');
        break;
      case 'G':
        let gIndex = possibleElements.indexOf('G');
        possibleElements.splice(gIndex, 1);
        randomElement = possibleElements[Math.floor(Math.random() * possibleElements.length)];
        possibleElements.push('G');
        break;
      default:
        console.log('error');
    }
    this.dna[indexBase] = randomElement;
    return this.dna;
  },
  //create a method that the object's dna length with another object's dna length, determines how many indexes each dna strand has are identical, returns a log statement
  compareDNA(pAequor) {
    let totalLength = 0;
    if ( this.dna.length === pAequor.dna.length) {
      totalLength = this.dna.length;
    } else {
      console.log('Error: Lengths do not match.');
    }
    let numIdentical = 0;
    for ( let i = 0; i < this.dna.length; i++ ) {
      if ( this.dna[i] === pAequor.dna[i]) {
        numIdentical += 1;
      }
    }
    let amountSimilar = (numIdentical / totalLength).toFixed(2) * 100;
    console.log('specimen #' + this.specimenNum + ' and specimen #' + pAequor.specimenNum + ' have ' + amountSimilar + '% DNA in common.' );
  },
  //create a method that checks if the dna sequenece is comprised of 60% 'G' or 'C'
  willLikelySurvive() {
    let totLength = this.dna.length;
    let percOfCG = 0;
    for ( let j = 0; j < this.dna.length; j++ ) {
      if ( this.dna[j] === 'C' || this.dna[j] === 'G' ) {
        percOfCG += 1;
      }
    }
    if ( ( ( percOfCG / totLength ) * 100 ) >= 60 ) {
      return true;
    } else {
      return false;
    }
  },
  //extra credit: create a method that returns the complementary DNA strand
  complementStrand() {
    let complementStrand = [];
    for ( k = 0; k < this.dna.length; k++ ) {
      if ( this.dna[k] === 'A') {
        complementStrand.push('T');
        //console.log('pushed T');
      } else if ( this.dna[k] === 'T' ) {
        complementStrand.push('A' );
        //console.log('pushed A');
      } else if ( this.dna[k] === 'G' ) {
        complementStrand.push('C' );
        //console.log('pushed C');
      } else if ( this.dna[k] === 'C' ) {
        complementStrand.push('G');
        //console.log('pushed G');
      } else {
        console.log('Error. Else if statements cant find complementarystrand match.');
      }
    }
    return complementStrand;
  },
 }
}

//use factory function to create an array with 30 specimens
//first define 30 specimens
const specimenA = pAequorFactory(1, mockUpStrand());
const specimenB = pAequorFactory(2, mockUpStrand());
const specimenC = pAequorFactory(3, mockUpStrand());
const specimenD = pAequorFactory(4, mockUpStrand());
const specimenE = pAequorFactory(5, mockUpStrand());
const specimenF = pAequorFactory(6, mockUpStrand());
const specimenG = pAequorFactory(7, mockUpStrand());
const specimenH = pAequorFactory(8, mockUpStrand());
const specimenI = pAequorFactory(9, mockUpStrand());
const specimenJ = pAequorFactory(10, mockUpStrand());
const specimenK = pAequorFactory(11, mockUpStrand());
const specimenL = pAequorFactory(12, mockUpStrand());
const specimenM = pAequorFactory(13, mockUpStrand());
const specimenN = pAequorFactory(14, mockUpStrand());
const specimenO = pAequorFactory(15, mockUpStrand());
const specimenP = pAequorFactory(16, mockUpStrand());
const specimenQ = pAequorFactory(17, mockUpStrand());
const specimenR = pAequorFactory(18, mockUpStrand());
const specimenS = pAequorFactory(19, mockUpStrand());
const specimenT = pAequorFactory(20, mockUpStrand());
const specimenU = pAequorFactory(21, mockUpStrand());
const specimenV = pAequorFactory(22, mockUpStrand());
const specimenW = pAequorFactory(23, mockUpStrand());
const specimenX = pAequorFactory(24, mockUpStrand());
const specimenY = pAequorFactory(25, mockUpStrand());
const specimenZ = pAequorFactory(26, mockUpStrand());
const specimenAA = pAequorFactory(27, mockUpStrand());
const specimenAB = pAequorFactory(28, mockUpStrand());
const specimenAC = pAequorFactory(29, mockUpStrand());
const specimenAD = pAequorFactory(30, mockUpStrand());

//create an empty array to push viable specimens into
const specimenArray = [];

//push all specimens, viable or not, into an evaluation array
const evaluationArray = [specimenA, specimenB, specimenC, specimenD, specimenE, specimenF, specimenG, specimenH, specimenI, specimenJ, specimenK, specimenL, specimenM, specimenN, specimenO, specimenP, specimenQ, specimenR, specimenS, specimenT, specimenU, specimenV, specimenW, specimenX, specimenY, specimenZ, specimenAA, specimenAB, specimenAC, specimenAD];

//write a function to push viable specimens into specimenArray and reroll DNA if not viable
const evaluateSpecimenForArray = array => {
  for ( let m = 0; m < array.length; m++ ) {
    while ( array[m].willLikelySurvive() === false ) {
      array[m].mutate();
    }
    specimenArray.push(array[m]);
  }

}

//TEST ALL ABOVE FUNCTIONS WORK PROPERLY

//test complementStrand method
// const testSpecimen = pAequorFactory(999, mockUpStrand());
// console.log(testSpecimen.dna);
// console.log(testSpecimen.complementStrand());

//test specimens in specimenArray are all viable
// evaluateSpecimenForArray(evaluationArray);
// for ( let n = 0; n < specimenArray.length; n++ ) {
//   console.log(specimenArray[n].willLikelySurvive())
// }
// console.log(specimenArray);

//test mutate method
// const specimenA = pAequorFactory(1, mockUpStrand());
// console.log(specimenA.dna);
// specimenA.mutate();
// console.log(specimenA.dna);

//test compareDNA method
// const specimenA = pAequorFactory(1, mockUpStrand());
// const specimenB = pAequorFactory(2, mockUpStrand());
// console.log(specimenA.dna);
// console.log(specimenB.dna);
// specimenA.compareDNA(specimenB);

//test willLikelySurvive method
// const specimenA = pAequorFactory(1, mockUpStrand());
// console.log(specimenA.dna);
// console.log(specimenA.willLikelySurvive());

//extra credit: use compareDNA method to find the two most related instances in our specimenArray -- Unfortunately, I can't figure out how to do this one.
//loop through specimen array and comparedna from first specimen on every other specimen, return a log of most related specimens
//let's make a function for this
// const mostRelated = array => {
//   for ( let n = 1; n < array.length; n++ ) {
//     array[0].compareDNA(array[n]);
//   }
// }
//test mostRelated function
// console.log(mostRelated(specimenArray));
// const testSpecimen1 = pAequorFactory(100, mockUpStrand());
// const testSpecimen2 = pAequorFactory(101, mockUpStrand());
// const testSpecimenArray = [testSpecimen1, testSpecimen2];
// console.log(testSpecimenArray[0].dna);
// console.log(testSpecimenArray[1].dna);



// BELOW IS ALL MY ATTEMPTS TO MAKE THE ABOVE WORK - Deprecated but left for later review and notes.

//test mutate function using indexBase <--- THIS WORKED
// const mutate = (array) => {
//   let possibleElements = ['A', 'G', 'C', 'T'];
//   let indexBase = Math.floor( Math.random() * array.length );
//   let randomElement = array[indexBase];
//   switch ( randomElement ) {
//     case 'A':
//       let aIndex = possibleElements.indexOf('A');
//       possibleElements.splice(aIndex, 1);
//       array[indexBase] = possibleElements[Math.floor(Math.random() * possibleElements.length)];
//       possibleElements.push('A');
//       break;
//     case 'T':
//       let tIndex = possibleElements.indexOf('T');
//       possibleElements.splice(tIndex, 1);
//       array[indexBase] = possibleElements[Math.floor(Math.random() * possibleElements.length)];
//       possibleElements.push('T');
//       break;
//     case 'C':
//       let cIndex = possibleElements.indexOf('C');
//       possibleElements.splice(cIndex, 1);
//       array[indexBase] = possibleElements[Math.floor(Math.random() * possibleElements.length)];
//       possibleElements.push('C');
//       break;
//     case 'G':
//       let gIndex = possibleElements.indexOf('G');
//       possibleElements.splice(gIndex, 1);
//       array[indexBase] = possibleElements[Math.floor(Math.random() * possibleElements.length)];
//       possibleElements.push('G');
//       break;
//     default:
//       console.log('error');
//   }
//   console.log(possibleElements);
//   return array;

// }
//test mutate function above
// const testArray2 = ['A', 'G', 'C', 'T'];
// console.log(mutate(testArray2));

//test verboten function
// const verbotenLetter = array => {
//   if ( array.includes( 'A' ) ) {
//     let placeHolder = array.indexOf( 'A' );
//     array.splice( placeHolder, 1 );


//   }
// }
//test factory function output and use of mockUpStrand to pass in a random 15 digit dna array of strings
// let sample1 = pAequorFactory(1, mockUpStrand());
// console.log(sample1);

// const mutate = array => {
//   let randomElement1 = array[Math.floor(Math.random() * 15)];
//   //test a different way

//   // switch ( randomElement1 ) {
//   //   case 'A':
//   //     let possibleElements = ['T', 'C', 'G'];
//   //     randomElement1.pop();
//   //     randomElement1.push(possibleElements[Math.floor(Math.random() * 3)]);
//   //     break;  
//   // }
//   // console.log(typeof randomElement1);
//   return typeof(randomElement1);
// }

// const testArray = ['A', 'A','A','A','A','A','A','A','A','A','A','A','A','A','A'];
// //console.log(mutate(testArray));
// const replaceStringInArray = array => {
//   let i = array[Math.random(Math.floor() * 16)];
//   let randomThing = array[i];
//   if ( randomThing === 'A' ) {
//     console.log('Yes!');
//   } else {
//     console.log('no');
//   }
//   }
  // switch ( randomThing) {
  //   case 'A':
  //     randomThing.replace('A', 'B');
  //     break;
  //   case 'C':
  //     randomThing.replace('C', 'D');
  //     break;
  //   default:
  //     console.log('Whoops!');
//   }
// //  for ( let i = 0; i < 1; i++ 

//   return array;
// }
//create a  function that replaces the letter in itself with the verboten letter
// function verbotenLetter(char) {
//   let charArray = ['A', 'T', 'C', 'G']
//   let output = '';
//   output = charArray.toString([Math.random(Math.floor() * charArray.length )]);
//   switch ( char ) {
//     case 'A':
//       let index = charArray.indexOf('A');
//       charArray.splice(index, 1);
//       let output = charArray[Math.random(Math.floor() * charArray.length)];
//       charArray.push('A');
//       break;
//     default:
//       console.log('bad return');
//   }
//   console.log(output);
// }

// verbotenLetter('A');
//console.log(replaceStringInArray(testArray));
// const something1 = ['A', 'B'];
// let something2 = something1[Math.floor(Math.random() * something1.length)];

// console.log(something2);