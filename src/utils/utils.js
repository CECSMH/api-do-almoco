function foreach(obj = {}, callback = function () { }) { for (var i in obj) { typeof callback === 'function' && callback(obj[i], i, obj); } };




export { foreach };