

// my generator
function* myGenerator() {
  yield;
  console.log('fizz');
  yield;
  console.log('buzz');
  yield;
  console.log('fizz buzz');
}

> const gen = myGenerator();
> gen.next();
> gen.next();
// fizz
> gen.next();
// buzz
> gen.next();
// fizz buzz
>
