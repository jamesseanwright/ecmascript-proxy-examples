'use strict';

const Buf = new Proxy(Buffer, {
    construct() {
        throw new Error(
            'The Buffer constructor is deprecated! Please use one of the factory methods.'
        );
    }
});

const buf = new Buf('foo');
