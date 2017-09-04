'use strict';

module.exports = function connect() {
    const data = new Map();

    return {
        set(key, value) {
            data.set(key, value);
        },

        get(key) {
            if (data.has(key)) {
                return data.get(key);
            }

            return null;
        },
    };
};
