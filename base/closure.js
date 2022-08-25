// 閉包

// fn as return
function create() {
	const a = 100;
	return function () {
		console.log(a);
	};
}

const fn = create();
const a = 200;
fn(); // 100

// fn as param
function print(fn) {
	const b = 200;
	fn();
}
const b = 100;
function fn() {
	console.log(b);
}
print(fn); // 100
/*
  自由變量的解析找尋，是在函數定義的地方, 向上級scope尋找, 不是在fn執行的地方  
*/
