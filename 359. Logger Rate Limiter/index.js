
var Logger = function() {
    this.messages = {};
    this.TIME_LIMIT = 10;
};

/** 
 * @param {number} timestamp 
 * @param {string} message
 * @return {boolean}
 */
Logger.prototype.shouldPrintMessage = function(timestamp, message) {
    if (!this.messages.hasOwnProperty(message)) {
        this.messages[message] = timestamp;
        return true;
    }
    
    if (this.messages.hasOwnProperty(message) && timestamp - this.messages[message] >= this.TIME_LIMIT) {
       this.messages[message] = timestamp;
        return true;
    }
    
    return false;
};


/** 
 * Your Logger object will be instantiated and called as such:
 * var obj = new Logger()
 * var param_1 = obj.shouldPrintMessage(timestamp,message)
 */
