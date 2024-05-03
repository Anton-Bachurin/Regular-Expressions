export class Validator {
  constructor(name) {
    this.name = name;
  }

  validateUsername() {
    const re = /^[a-z]+[\w|-]+[a-z]+$/i;

    if (re.test(this.name)) {
      const re2 = /\d{4}/;
        if (re2.test(this.name)) {
          return false;
        } else {
          return true;
        }
    } else {
      return false;
    }
  }
}
