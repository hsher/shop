import {makeAutoObservable} from 'mobx';

export default class DeviceStore {
  constructor() {
    this._types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Смартфоны'},
    ]
    this._brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
    ]
    this._devices = [
      {id: 1, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://via.placeholder.com/200x100'},
      {id: 2, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://via.placeholder.com/200x100'},
      {id: 3, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://via.placeholder.com/200x100'},
      {id: 4, name: 'Iphone 12 pro', price: 25000, rating: 5, img: 'https://via.placeholder.com/200x100'},
    ]
    makeAutoObservable(this)
  }

  setTypes(types) {
    this._types = types
  }

  setBrands(brands) {
    this._brands = brands
  }

  setDevices(devices) {
    this._devices = devices
  }

  get type() {
    return this._types
  }

  get brand() {
    return this._brands
  }

  get device() {
    return this._devices
  }
}
