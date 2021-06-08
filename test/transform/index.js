// A unit for each method.
const almostEqual = require('./almostEqual.test')
const create = require('./create.test')
const createFromArray = require('./createFromArray.test')
const createFromPolar = require('./createFromPolar.test')
const epsilon = require('./epsilon.test')
const equal = require('./equal.test')
const getRotation = require('./getRotation.test')
const getScale = require('./getScale.test')
const getTranslation = require('./getTranslation.test')
const inverse = require('./inverse.test')
const multiply = require('./multiply.test')
const mapPoints = require('./mapPoints.test')
const mapVector = require('./mapVector.test')
const toArray = require('./toArray.test')
const toMatrix = require('./toMatrix.test')
const toString = require('./toString.test')
const validate = require('./validate.test')

module.exports = (t) => {
  t.test('nudged.transform.almostEqual', almostEqual)
  t.test('nudged.transform.create', create)
  t.test('nudged.transform.createFromArray', createFromArray)
  t.test('nudged.transform.createFromPolar', createFromPolar)
  t.test('nudged.transform.EPSILON', epsilon)
  t.test('nudged.transform.equal', equal)
  t.test('nudged.transform.getRotation', getRotation)
  t.test('nudged.transform.getScale', getScale)
  t.test('nudged.transform.getTranslation', getTranslation)
  t.test('nudged.transform.inverse', inverse)
  t.test('nudged.transform.multiply', multiply)
  t.test('nudged.transform.mapPoints', mapPoints)
  t.test('nudged.transform.mapVector', mapVector)
  t.test('nudged.transform.toArray', toArray)
  t.test('nudged.transform.toMatrix', toMatrix)
  t.test('nudged.transform.toString', toString)
  t.test('nudged.transform.validate', validate)
}
