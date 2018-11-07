import React, { useState } from 'react'

export const themes = {
  light: {
    foreground: '#000000',
    background: '#eeeeee',
  },
  dark: {
    foreground: '#ffffff',
    background: '#222222',
  }
};

const dfdata = {
  count: 0
}

export { dfdata }

const ThemeContext = React.createContext({})
export { ThemeContext }
