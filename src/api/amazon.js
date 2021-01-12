import instance from './index.js'

export function getAmazonBestSellers(params={}){
	return instance.post('/amazon/best_seller_list/',params);
}

export function getAvailableTime(params={}){
	return instance.post('/amazon/best_time/list/',params);
}