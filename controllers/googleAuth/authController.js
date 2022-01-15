// const { } = require('services/transactions')
const queryString = require("query-string")
const axios=require("axios")
const URL = require("url")

class AuthController {
  constructor() {
    this.googleAuth = this.googleAuth.bind(this)
    this.googleRedirect = this.googleRedirect.bind(this)
   
  }

  async googleAuth(req, res, next) {
      const stringifiedParams = queryString.stringify({
        client_id:process.env.GOOGLE_CLIENT.ID,
        redirect_uri:`${process.env.BASE_URL}/auth/google-redirect`,
        scope:[
            "https://www.googleapis.com/auth/userifo.email",
            "https://www.googleapis.com/auth/userinfo.profile",
        ].join(" "),
        response_type:"code",
        acces_type:"offline",
        promt:"consent",  
      })
      return res.redirect(
          `https://accounts.google.com/o/oauth2/v2/auth?${stringifiedParams}`
      )
   
  }

  async googleRedirect(req, res, next) {
      const fullUrl = ` ${req}`
    
  }

}

module.exports = new AuthController()