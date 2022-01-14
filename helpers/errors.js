class AppError extends Error {
    constructor(message) {
      super(message)
      this.status = 400
    }
  }
  
  class ValidationError extends AppError {
    constructor(message) {
      super(message)
      this.status = 400
    }
  }
  
  class NotFoundError extends AppError {
    constructor(message) {
      super(message)
      this.status = 404
    }
  }
  
  class WrongParametersError extends AppError {
    constructor(message) {
      super(message)
      this.status = 400
    }
  }
  
  class RegistrationConflictError extends AppError {
    constructor(message) {
      super(message)
      this.status = 409
    }
  }
  
  class NotAuthorizedError extends AppError {
    constructor(message) {
      super(message)
      this.status = 401
    }
  }
  
  module.exports = {
    AppError,
    ValidationError,
    NotFoundError,
    WrongParametersError,
    RegistrationConflictError,
    NotAuthorizedError
  }