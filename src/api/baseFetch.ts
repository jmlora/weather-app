
function baseFetch<T>(url:string, method:string):Promise<T> {
    return fetch(url, {
        method
    })
    .then(resp => resp.json())
    .then(resp => resp);
}

function getFetch<T>(url:string):Promise<T> {
    return baseFetch(url, 'get');
}

export {getFetch}