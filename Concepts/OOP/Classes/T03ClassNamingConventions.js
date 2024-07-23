class Pizza {
  constructor(pizzaSize) {
    this._size = pizzaSize;
    this._crust = "original";
    this._pieces = { small: 4, medium: 8, large: 12, extraLarge: 16 };

    // JS allow to modify the class properties from out side of class
    // we can use _ to update the other developers that these properties shoud be update just within the calss not from the outside of class
  }
  // get pizzaCrust() {
  //   return this._crust;
  // }
  // set pizzaCrust(pizzaCrust) {
  //   this._crust = pizzaCrust;
  // }
  // OR
  setCrust() {
    return this._crust;
  }
  getCrust(pizzaCrust) {
    this._crust = pizzaCrust;
  }

  // there is another way to fix this problem that do not change properties from out side of class
  // This will be possible with Factory Function
}
