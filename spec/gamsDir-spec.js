'use babel'
import * as util from '../lib/utils/util.js'

describe('The instllation check function', () => {
  const gamsExec = util.getGamsPath()
  it ('should find the install path', () => {
    expect(gamsExec).toEqual('C:/GAMS/win64/25.0/gams.exe') 
  })
})