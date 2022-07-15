// 获得时间
function getData(n) {
    let now = new Date(n),
        y = now.getFullYear(),
        m = now.getMonth() + 1,
        d = now.getDate();
    return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d)
}
// 获得播放量
function getNum(n) {
    let a = parseInt(n / 10000)
    if (a > 10000) {
        return `${parseInt(a / 10000)}亿`
    } else if (a >= 1) {
        return `${a}万`
    } else return n
}
// 拼接序号
function getSerial(n) {
    if (n < 10) {
        return '0' + n
    }
    return n;
}
// 拼接作者
function getAuthorName(arr) {
    let result = arr[0].name
    if (arr.length > 2) {
        for (let i = 1; i < 2; i++) {
            result += (' / ' + arr[i].name)
        }
        result += ' /...'
        return result
    }
    if (arr.length > 1) {
        for (let i = 1; i < arr.length; i++) {
            result += (' / ' + arr[i].name)
        }
        return result
    }
    return result
}
// 获得音乐时长
function getMusicTime(time) {
    const long = new Date(time)
    let m = long.getMinutes() > 10 ? long.getMinutes() : '0' + long.getMinutes()
    let s = long.getSeconds() > 10 ? long.getSeconds() : '0' + long.getSeconds()
    return `${m}: ${s}`
}
export { getData, getNum, getSerial, getAuthorName, getMusicTime }