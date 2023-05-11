import axios from 'axios'

let kobisAxios = new axios.create({
    baseURL: 'http://www.kobis.or.kr/kobisopenapi/webservice/rest/boxoffice',
});

kobisAxios.interceptors.request.use(config => {  
    status.ing = true;
    console.log('kobisAxios.interceptors.request.use 요청시작 s', status.ing);

    return config;
});

kobisAxios.interceptors.response.use(res => {
    status.ing = false;
    console.log('kobisAxios.interceptors.response.use 응답 진행', status.ing);
    return res;
});

let status = {
    ing: false,
}

export { kobisAxios, status }