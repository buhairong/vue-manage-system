import Mock from 'mockjs'
import homeApi from './home'

// 设置200-2000毫秒延时请求数据
Mock.setup({
  timeout: '200-2000'
})

Mock.mock(/\/home\/getData/, 'get', homeApi.getHomeData())
