import AuthService from "../services/authService.js"

const login = async (req, res, next) => {
  const authService = new AuthService();
  
  const token = await authService.login(req.body);
  
  res.locals["data"] = token;
  
  next();
  
}

const reset = async (req, res, next) => {}

const verify = async (req, res, next) => {}

export { login, reset, verify }
