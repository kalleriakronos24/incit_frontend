import fetchApi from './rest';


const handle = (promise: Promise<any>) => {
    return promise
         .then(data => [data.data, undefined])
         .catch(error => [{}, error])
}

export {
    fetchApi,
    handle
}