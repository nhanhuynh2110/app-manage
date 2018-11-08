import _ from 'lodash'
import CtrlService from './service'
import ControllerProps from './props'

export default function () {
  let self = this
  self.getOwner = () => self
  _.assignIn(self, ControllerProps)
  _.assignIn(self, CtrlService(self.getOwner))
  self.generateDataSetter()

  self.runApplication = (cb) => {
    console.log('LOG: Run application')
    return cb()
  }

  return self
}
