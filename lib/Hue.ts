import axios from 'axios'

export class Hue {
  username: string
  ip: string
  baseURL: string

  constructor(user: string, ip: string) {
    this.username = user
    this.ip = ip
    this.baseURL = `http://${ip}/api/${this.username}`
  }

  getLights = async () => {
    const res = await axios.get(`${this.baseURL}/lights`)
    return res.data
  }

  getLight = async (id: number) => {
      const res = await axios.get(`${this.baseURL}/lights/${id}`)
      return res.data
  }

  toggleLight = async (id: number) => {
    const light = await this.getLight(id)
    const res = await axios.put(`${this.baseURL}/lights/${id}/state`, {
        "on": light.state.on ? false : true
    })
    return res.data
  }

  changeColor = async (id: number, hue: number, sat: number, bri: number) => {
    const res = await axios.put(`${this.baseURL}/lights/${id}/state`, {
      "on": true,
      "sat": sat,
      "bri": bri,
      "hue": hue
    })
    return res.data
  }
}