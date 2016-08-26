var detector = require('detector');

module.exports = function(){
    return function(req, res, next) {
        req.env = detector.parse(req.headers['user-agent']);
        req.env.isPC = isPC(req.env);
        req.env.isMobile = isMobile(req.env);
        next();
    }
}

function isPC(env) {
    return [
        'pc',
        'mac',
        'win7',
        'windows7',
        'win8',
        'windows8',
        'win10',
        'windows10',
    ].includes(env.device.name) ||
    [
        'macos',
        'macosx',
        'linux',
        'chromeos',
        'windows'
    ].includes(env.os.name)
}

function isMobile(env) {
    return [
        'iphone',
        'android',
        'ipad',
        'ipod',
        'blackberry',
        'wp',
        'mi',
        'meizu',
        'nexus',
        'nokia',
        'samsung',
        'aliyun',
        'huawei',
        'lenovo',
        'zte',
        'vivo',
        'htc',
        'oppo',
        'konka',
        'sonyericsson',
        'coolpad',
        'lg',

        'noain',
        'huawei-honor',
        'lephone',
        'asus',
        'alcatel',
        '一加',
        '蓝米',
        'E 派',
        'hike',
        'qmi',
        '优米',
        '嘉源',
        "intki",
        "星语",
        "欧奇",
        "海派",
        "广信",
        "nibiru",
        "神州",
        "青橙",
        "海信",
        "金立",
        "eton",
        "bohp",
        "小杨树",
        "语信",
        "nubia",
        "爱讯达",
        "寰宇通",
        "mofut",
        "infocus",
        "大唐",
        "邦华",
        "天迈",
        "大显",
        "博瑞",
        "lingwin",
        "iusai",
        "波导",
        "德赛",
        "蓝魔",
        "美图",
        "opsson",
        "benwee",
        "hosin",
        "smartisan",
        "ephone",
        "佰事讯",
        "newman",
        "konka",
        "haier",
        "moto",
        "tcl",
        "天语",
        "doov",
        "天时达"
    ].includes(env.device.name) ||
    [
        'ios',
        'android',
        'wp',
        'symbian',
        'blackberry',
        'yunos',
        'meego',
        'smartisan'
    ].includes(env.os.name)
}
