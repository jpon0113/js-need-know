// 深拷貝實作

/**
 * 深拷貝
 * @param {Object} obj 拷貝物件
 */
function deepClone(obj = {}) {
	if (typeof obj !== 'object' || obj == null) {
		// null, 或不是物件,陣列直接返回
		return obj;
	}
	// init
	let result;
	if (obj instanceof Array) {
		result = [];
	} else {
		result = {};
	}

	for (let key in obj) {
		// 保證key不是原形的屬性
		if (obj.hasOwnProperty(key)) {
			// 遞迴
			result[key] = deepClone(obj[key]);
		}
	}

	return result;
}

// 測試
const obj1 = {
	age: 37,
	name: 'jpon',
	address: {
		city: 'taipei',
	},
	arr: ['a', 'b', 'c'],
};

const obj2 = deepClone(obj1);
obj2.address.city = 'ilan';
obj2.arr[0] = 'a1';
console.log(obj1.address.city);
console.log(obj1.arr[0]);
