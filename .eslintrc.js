module.exports = {
    extends: ['airbnb-base', 'plugin:node/recommended', 'prettier'],

    // env가 추가가 안되면, browser인지 node인지 환경을 알 수 가 없으니 lint error가 발생한다.
    env : {
        "browser": true,
        "node": true
    }
}