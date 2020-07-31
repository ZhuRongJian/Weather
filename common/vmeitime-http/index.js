import http from './interface'

export const shikuang = (location) => {
	return http.request({
		url: 'weather/now?location='+location,
		dataType: 'text',
		method: 'GET',
	})
}
export const lifestyle = (location) => {
	return http.request({
		url: 'weather/lifestyle?location='+location,
		dataType: 'text',
		method: 'GET',
	})
}

export const dailyForecast = (location) => {
	return http.request({
		url: 'weather/forecast?location='+location,
		dataType: 'text',
		method: 'GET',
	})
}





// 默认全部导出  import api from '@/common/vmeitime-http/'
export default {
	shikuang,
	lifestyle,
	dailyForecast
}
