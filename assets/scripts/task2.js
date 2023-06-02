'use strict';

import { listIPv4 } from "./ipv4.js";

const getUniqueIPsNumber = () => {

    return new Set(listIPv4).size;
}

console.log(`Количество уникальных IP-адресов: ${getUniqueIPsNumber()}`);

