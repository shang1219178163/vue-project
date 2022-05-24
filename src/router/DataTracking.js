import router from './index';

function isEmptyObject(obj) {
	return !obj || !Object.keys(obj).length;
}

const install = () => {
	// 全局只挂在一个实例子
	window.$dt = new DataTracking();
};

/* web数据埋点 */
class DataTracking {
	constructor() {
		this.pageFrom = {}; // 页面从哪里来
		this.pageCurrent = {}; // 当前页面
		this.list = [];
		this.addListenner();
	}

	// 添加全局的埋点监听
	addListenner() {
		this.addViewListener();
		this.addClickListener();
	}

	// 监听页面的路由更改
	addViewListener() {
		const handleViewDT = () => {
			const data = {
				type: 'view',
				page: {
					from: this.pageFrom,
					current: this.pageCurrent,
				},
				data: null,
			}
			this.recordDT(data)
		}
		// 记录路由数据
		router.beforeEach((to, from, next) => {
			this.pageFrom = from;
			this.pageCurrent = to;
			handleViewDT();
			next();
		});
		
		// 推送已存在的埋点数据
		router.afterEach(() => {
			this.list.length && this.pushOrigin();
		});
	}

	// 监听点击事件
	addClickListener() {
		const handleClickDT = (dataset) => {
			const obj = {
				type: 'click',
				page: {
					from: this.pageFrom,
					current: this.pageCurrent,
				},
				data: dataset,
			};
			this.recordDT(obj);
		};
	
		document.onclick = (e) => {
			let i = 0;
			while(i < e.path.length) {
				const data = e.path[i].dataset;
				if (!isEmptyObject(data)) {
					// 如果data-dt-name存在的时候，才进行埋点
					if (data.dtName) {
						i = e.path.length;
						handleClickDT(data);
					}
				}
				i ++;
			}
		};
	}

	// 记录DT数据
	recordDT(obj) {
		if (!obj.data) {
			return;
		}
		console.log(">>>data", JSON.stringify(obj.data));
    const dtParamsObj = JSON.parse(obj.data.dtParams);
    console.log(">>>dtParamsObj", dtParamsObj);

		// console.warn(data)
		// console.log('%c记录数据埋点...', "color: red;")
		this.list.push(obj);
	}

	// 埋点数据推送到远程
	pushOrigin() {
		// console.warn(this.list)
		// console.log('%c推送埋点数据....', "color: red;")
		this.list = [];
	}
}

export default install;