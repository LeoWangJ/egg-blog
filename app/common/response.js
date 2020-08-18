/* eslint-disable strict */
const responseCode = {
  SUCCESS: 0,
  ERROR: 1,
};

module.exports = class Response {
  constructor(status, msg, data) {
    this.status = status;
    this.msg = msg;
    this.data = data;
  }

  static success() {
    return new Response(responseCode.SUCCESS);
  }

  static successMsg(msg) {
    return new Response(responseCode.SUCCESS, msg);
  }

  static successData(data) {
    return new Response(responseCode.SUCCESS, null, data);
  }

  static successMsgAndData(msg, data) {
    return new Response(responseCode.SUCCESS, msg, data);
  }

  static error() {
    return new Response(responseCode.ERROR);
  }

  static errorMsg(msg) {
    return new Response(responseCode.ERROR, msg);
  }

  static errorData(data) {
    return new Response(responseCode.ERROR, null, data);
  }

  static errorMsgAndData(msg, data) {
    return new Response(responseCode.ERROR, msg, data);
  }
};

