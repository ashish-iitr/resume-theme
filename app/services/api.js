export function loginFunc(data) {
    return fetch('https://httpbin.org/post', {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json'
        },
        credentials: 'include'
    })
    .then((res) => res.json());
}

// export function fetchUser() {
//     return fetch('https://httpbin.org/get', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json'
//         },
//         credentials: 'include'
//     })
//     .then((res) => res.json());
// }

export function fetchUser() {
    return fetch('../app/resume.json')
    .then((res) => res.json());
}

// export function update(data) {
//     console.log('data', data);
//     return fetch('https://httpbin.org/put', {
//         method: 'PUT',
//         body: JSON.stringify(data),
//         headers: {
//             'Accept': 'application/json'
//         },
//         credentials: 'include'
//     })
//     .then((res) => res.json());
// }

export function update(data) {
    return fetch('../app/resume.json', {
        method: 'put',
        body: JSON.stringify(data),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
    .then((res) => res.json());
}
