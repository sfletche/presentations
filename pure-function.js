

// non-pure function (non-deterministic and mutable)
function increment(obj = {}) {
	obj.count = obj.count ? object.count + incrementVal : incrementVal;
	return obj;
}

> var incrementVal = 1;
> const myObject = { count: 41 };
> const incrementedObject = increment(myObject);
> console.log(incrementedObject.count); // 42
> console.log(myObject.count); // 42

> var incrementVal = 2;
> const myObject = { count: 41 };
> const incrementedObject = increment(myObject);
> console.log(incrementedObject.count); // 43
> console.log(myObject.count); // 43


// still a non-pure function (deterministic but mutable)
function increment(obj = {}) {
	const incrementVal = 1;
	obj.count = obj.count ? object.count + incrementVal : incrementVal;
	return obj;
}

> const myObject = { count: 41 };
> const incrementedObject = increment(myObject);
> console.log(incrementedObject.count); // 42
> console.log(myObject.count); // 42


// pure function (deterministic and mutable)
function increment(obj = {}) {
	const incrementVal = 1;
	return {
		...obj,
		count: obj.count ? object.count + incrementVal : incrementVal,
	}
}

> const myObject = { count: 41 };
> const incrementedObject = increment(myObject);
> console.log(incrementedObject.count); // 42
> console.log(myObject.count); // 41

