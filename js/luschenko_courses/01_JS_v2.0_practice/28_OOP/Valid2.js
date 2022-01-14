class Valid2 extends Valid {
  constructor(email, password) {
    super(email, password)
    this.emailError = ''
    this.passwordError = ''
  }
  validate() {
    if (this.password.length < 6) {
      this.isValid = false
      this.passwordError = 'min length 6'
    } else {
      this.isValid = true
    }
    if (this.email === '') {
      this.isValid = false
      this.emailError = 'email empty'
    }
    console.log(this.isValid)
  }
}
