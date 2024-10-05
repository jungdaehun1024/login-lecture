const fs = require("fs");
const appRoot = require("app-root-path");

const accessLogStream =  fs.createWriteStream(
    `${appRoot}/log/access.log`, { flags: 'a' });


    /**
     * flags: 'a' 옵션은 로그가 추가 모드로 작성됨을 의미합니다. 즉, 새로운 로그가 쌓일 때마다 기존 로그에 덧붙여 쓰기(append)가 됩니다. 만약 이 옵션을 설정하지 않으면, 로그를 쓸 때마다 기존 파일이 덮어쓰여질 수 있습니다.
     */


module.exports = accessLogStream;
