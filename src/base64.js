/**
 * Copyright (c) 2015 Kerem Güneş
 *    <http://qeremy.com>
 *
 * The MIT License
 *    <http://opensource.org/licenses/MIT>
 */

/**
 * Base64 object.
 * @public
 *
 * @type {Object}
 */
var Base64 = {
    /**
     * Encoding.
     * @type {String}
     */
    encoding: "utf-8",

    /**
     * Encoder.
     * @public
     *
     * @param  {String} data
     * @return {String}
     */
    encode: function(data){
        return (new Buffer(data))
            .toString("base64");
    },

    /**
     * Decoder.
     * @public
     *
     * @param  {String} data
     * @param  {String} encoding
     * @return {String}
     */
    decode: function(data, encoding){
        return (new Buffer(data, "base64"))
            .toString(encoding || this.encoding);
    }
};

/**
 * Expose module.
 */
module.exports = Base64;
