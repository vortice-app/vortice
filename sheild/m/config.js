self.__uv$config = {
    prefix: '/sheild/m/a/',
    bare: 'https://mathplayground.cloud/v/',
    encodeUrl: Ultraviolet.codec.xor.encode,
    decodeUrl: Ultraviolet.codec.xor.decode,
    handler: '/m/handler.js',
    bundle: '/m/bundle.js',
    config: '/m/config.js',
    sw: '/sheild/m/sw.js',
};