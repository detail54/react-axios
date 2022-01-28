// user information interface
export interface IUser {
  id: number
  email: string
  username: string
  password: string
  name: {
    firstname: string
    lastname: string
  }
  address: {
    city: string
    street: string
    number: number
    zipcode: string
    geolocation: {
      lat: string
      long: string
    }
  }
  phone: string
}

export const initUser = {
  id: 0,
  email: '',
  username: '',
  password: '',
  name: {
    firstname: '',
    lastname: '',
  },
  address: {
    city: '',
    street: '',
    number: 0,
    zipcode: '',
    geolocation: {
      lat: '',
      long: '',
    },
  },
  phone: '',
}

// product
export interface IProduct {
  id: number
  title: string
  price: string
  category: string
  description: string
  image: string
}

export const initProduct = {
  id: 0,
  title: '',
  price: '',
  category: '',
  description: '',
  image: '',
}
