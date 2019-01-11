var db = require('./db.js');

module.exports.handleSignup = (email, password) => {
    // Check if email already exist
    // Note: In ES6 {email: email, password: password} = {email,password}
    db.saveUser({ email, password});
    // Send welcome email
};