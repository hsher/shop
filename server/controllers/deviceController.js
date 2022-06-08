const uuid = require('uuid')
const path = require('path')
const {Device} = require('../models/models')
const ApiError = require('../error/ApiError')
class DeviceController {
  async create(req, res, next) {
    try {
      const {name, price, brandId, typeId, indo} = req.body
      const {img} = req.files
      let fileName = uuid.v4() + ".jpg"
      img.mv(path.resolve(__dirname, '..', 'static', fileName))

      const devices = await Device.create({name, price, brandId, typeId, img: fileName})

      return res.json(devices)
    } catch {
      next(ApiError.badRequest(e.message))
    }
  }

  async getAll(req, res) {

  }

  async getOne(req, res) {

  }
}

module.exports = new DeviceController()
