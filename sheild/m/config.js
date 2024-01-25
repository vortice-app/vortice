self.__uv$config = {
    prefix: '/sheild/m/',
    bare: 'https://sunburst.sun.2of1.org/v/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/m/handler.js',
    bundle: '/m/bundle.js',
    config: '/m/config.js',
    sw: '/m/sw.js',
};
