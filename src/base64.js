var Base64 = {
    encoding: "utf-8",
    encode: function(data){
        return (new Buffer(data)).toString("base64");
    },
    decode: function(data, encoding){
        return (new Buffer(data, "base64")).toString(encoding || this.encoding);
    }
};

module.exports = Base64;
