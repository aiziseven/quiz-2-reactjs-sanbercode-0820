const volumeBalok = (...rest) => {
    if (rest.length === 3) {
        return rest.reduce((previous, current) => {
            return previous * current;
        })
    } else if (rest.length >= 3) {
        return `variabel yang Anda input kelebihan ${rest.length - 3} `;
    }
    else {
        return `variabel yang Anda input kurang ${3 - rest.length} `;
    }
}

const volumeKubus = (...rest) => {
    return rest * rest * rest;
}

console.log(volumeBalok(200, 10, 20));
console.log(volumeKubus(10))