if(process.env.NODE_ENV === 'production'){ // 배포된 모드면 production, 개발 모드면 development로 뜸
    module.exports = require('./prod');
} else {
    module.exports = require('./dev');
}