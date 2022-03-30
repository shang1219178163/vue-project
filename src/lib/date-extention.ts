declare global {

    interface Date {
        // 获取当前日期所在周的第一天
        getMonday(): Date;
    }
}
export {}; 


if (!Date.prototype.getMonday) {
    Date.prototype.getMonday = function(): Date {
        const nowDay = this.getDay() || 7;
    
        // let monday = new Date();
        let monday = this;
        monday.setDate(this.getDate() - nowDay + 1);
        return
    }
}

