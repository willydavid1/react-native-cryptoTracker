class Http {
  static instance = new Http()

  request = async (url = null, params = {}) => {
    try {
      const req = await fetch(url, {
        method: 'GET',
        ...params
      })
      const res = await req.json()
      return res 
    } catch (error) {
      console.log('http get method err', err)

      throw Error(err)
    }
  }
}

export default Http
