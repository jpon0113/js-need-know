// mock bind
Function.prototype.bind1 = function () {
	const args = Array.prototype.slice.call(arguments);

	const t = args.shift();

	// fn1.bind(...) 中的 fn1
	const self = this;

	// 返回一個函數
	return function () {
		return self.apply(t, args);
	};
};

function fn1(a, b, c) {
	console.log('this', this);
	console.log(a, b, c);
	return 'this is fn1';
}

const fn2 = fn1.bind1({ x: 100 }, 10, 20, 30);
const res = fn2();
console.log(res);
