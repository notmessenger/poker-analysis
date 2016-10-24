module.exports = class AppError extends Error {
  constructor (message) {
    super(message)

    Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);

    this.name = this.constructor.name
  }
}
