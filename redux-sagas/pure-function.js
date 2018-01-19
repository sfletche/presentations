

// non-pure function (non-deterministic and mutable)
function increment(obj) {
	obj.count = obj.count ? object.count + incrementVal : incrementVal;
	return obj;
}

> var incrementVal = 1;
> const myObject = { count: 41 };
> let incrementedObject = increment(myObject);
> console.log(incrementedObject.count); // 42
> console.log(myObject.count); // 42

> incrementVal = 10;
> incrementedObject = increment(myObject);
> console.log(incrementedObject.count); // 52
> console.log(myObject.count); // 52


// still a non-pure function (deterministic but still mutable)
function increment(obj, incrementVal) {
	obj.count = obj.count ? object.count + incrementVal : incrementVal;
	return obj;
}

> const incrementVal = 1;
> const myObject = { count: 41 };
> let incrementedObject = increment(myObject, incrementVal);
> console.log(incrementedObject.count); // 42
> console.log(myObject.count); // 42


// pure function (deterministic and immutable)
function increment(obj, incrementVal) {
	return {
		...obj,
		count: obj.count ? object.count + incrementVal : incrementVal,
	}
}

> const incrementVal = 1;
> const myObject = { count: 41 };
> let incrementedObject = increment(myObject, incrementVal);
> console.log(incrementedObject.count); // 42
> console.log(myObject.count); // 41

> incrementedObject = increment(myObject, incrementVal);
> console.log(incrementedObject.count); // 42
> console.log(myObject.count); // 41
