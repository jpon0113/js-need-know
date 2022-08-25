// 類似jquery的開發概念
class jQuery {
	constructor(selector) {
		const result = document.querySelectorAll(selector);
		const length = result.length;
		for (let i = 0; i < length; i++) {
			this[i] = result[i];
		}
		this.length = length;
		this.selector = selector;
	}
	get(index) {
		return this[index];
	}
	each(fn) {
		for (let i = 0; i < this.length; i++) {
			const elem = this[i];
			fn(elem);
		}
	}
	on(type, fn) {
		return this.each((elem) => {
			elem.addEventListener(type, fn, false);
		});
	}
}

jQuery.prototype.dialog = function (info) {
	alert(info);
};

// 擴展
class myJQuery extends jQuery {
	constructor(selector) {
		super(selector);
	}
	// 額外客製的方法
	addClass(className) {}
	style(data) {}
}

// const $p = new jQuery('p')
// $p.get(1)
// $p.each((elem) => console.log(elem.nodeName))
// $p.on('click', () => alert('clicked'))
