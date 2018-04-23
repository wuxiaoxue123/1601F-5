import axios from 'axios'
import AxiosMock from 'axios-mock-adapter'
import data from './index'
let Mock = new AxiosMock(axios)
Mock.onGet('list').reply(200,data)
