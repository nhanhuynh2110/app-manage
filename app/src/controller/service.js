import _ from 'lodash'
import eventEmitter from '../event'

const upperCaseFirstChar = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}

export default (getController) => {
  const emitEventChangeAppData = (oldState, newState) => {
    console.log('Change controller field value from:')
    eventEmitter.emit('changeAppCtrl', { oldState, newState })
  }

  return {
    generateDataSetter: () => {
      const controller = getController()
      _.forIn(controller.data, (value, key) => {

        if (key.length) {
          const setterName = 'set' + upperCaseFirstChar(key)
          controller.fn[setterName] = (mutation) => {
            try {
              const self = getController()
              const oldValue = _.cloneDeep(self.data[key])
              let newValue = null
              if (mutation instanceof Function) {
                const returnValue = mutation(oldValue)
                if (returnValue !== undefined) {
                  newValue = _.cloneDeep(returnValue)
                  self.data[key] = newValue
                } else {
                  throw new Error('Setter for ' + 'data.' + key + ' not return new value')
                }
              } else {
                newValue = _.cloneDeep(mutation)
                self.data[key] = newValue
              }

              emitEventChangeAppData( { property: 'data.' + key, value: oldValue }, { property: 'data.' + key, value: newValue })
            } catch (err) {
              console.error(err) // eslint-disable-line
            }
          }
        }

      })
    }
  }
}

