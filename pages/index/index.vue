<template>
	<view style="overflow-x: hidden;">
		<image class="bg" src="../../static/bg/2.jpg" mode="scaleToFill"></image>
		<view class="center searchDiv">
			<fa-icon type="search" size="22" color="#fff"></fa-icon>
			<input @blur="blur" class="input" type="text" v-model="address" placeholder="请输入城市名,快速查询天气" placeholder-style="color:#fff" />
		</view>
		<view class="center">
			<view class="line"></view>
		</view>
		<view class="center addressDiv">
			<view class="address" @tap="getnow">
				<text>{{basic.location}}</text>
				<fa-icon type="caret-down" size="36" color="#fff" style="margin-left: 10px;"></fa-icon>
			</view>
			<view class="updateTime">{{update.loc}} 更新</view>
		</view>
		<view class="center minhgyandesc">{{minhgyandesc}}</view>
		<view class="center wenduDiv">
			<view class="wendu">
				<text class="wendu-test">{{now.fl}}</text><text class="wendu-icon">℃</text>
			</view>
			<view class="cond_txt">
				<image :src="src" style="width: 50px;height: 50px;" mode=""></image> {{now.cond_txt}}
			</view>
			<view style="display: flex;justify-content: space-between;color: #FFFFFF;font-size: 24px;">
				<view style="font-size: 12px;display: flex;justify-content: center;align-items;align-items:baseline;">
					<view>日出</view>
					<view style="font-size: 18px;margin-left: 5px;">{{ forecast[0].sr}}</view>
				</view>
				<view style="font-size: 12px;display: flex;justify-content: center;align-items:baseline; ">
					<view>日落</view>
					<view style="font-size: 18px;margin-left: 5px;">{{forecast[0].ss}}</view>
				</view>
			</view>
		</view>
		<ad unit-id="adunit-e29d0cd6a28d3b10" ad-type="video" ad-theme="white"></ad>
		<view class="nowinfo">
			<view class="nowinfo-cell">
				<text class="test-desc">体感温度(℃)</text> </br>
				<text class="test-val">{{now.fl}}</text>
			</view>
			<view class="lineCol"></view>
			<view class="nowinfo-cell">
				<text class="test-desc">温度(℃)</text></br>
				<text class="test-val">{{now.tmp}}</text>
			</view>
			<view class="lineCol"></view>
			<view class="nowinfo-cell">
				<text class="test-desc">风向</text></br>
				<text class="test-val">{{now.wind_dir}}</text>
			</view>
			<view class="lineCol"></view>
			<view class="nowinfo-cell">
				<text class="test-desc">风力(级)</text></br>
				<text class="test-val">{{now.wind_sc}}</text>
			</view>
		</view>
		
		<view class="line"></view>
		<view class="nowinfoDiv">
			<view class="nowinfo">
				<view class="nowinfo-cell">
					<text class="test-desc">云量</text></br>
					<text class="test-val">{{now.cloud}}</text>
				</view>
				<view class="lineCol"></view>
				<view class="nowinfo-cell">
					<text class="test-desc">降水量(mm)</text></br>
					<text class="test-val">{{now.pcpn}}</text>
				</view>
				<view class="lineCol"></view>
				<view class="nowinfo-cell">
					<text class="test-desc">能见度(km)</text></br>
					<text class="test-val">{{now.vis}}</text>
				</view>
				<view class="lineCol"></view>
				<view class="nowinfo-cell">
					<text class="test-desc">相对湿度(%)</text></br>
					<text class="test-val">{{now.hum}}</text>
				</view>
			</view>
		</view>
		<ad unit-id="adunit-05dbb4aa11e0f10a"></ad>

		<view class="maxTitle">
			7日天气
		</view>
		<view class="line"></view>
		<view class="day7">
			<template v-for="day in forecast">
				<view v-bind:key="day" class="oneday">
					<view class="">{{day.date}}</view>
					<view class="">{{day.tmp_max}}~{{day.tmp_min}}℃</view>
					<view class="">{{day.cond_txt_d}}
						<image v-bind:src="'../../static/icon/'+day.cond_code_d+'.png'"></image>
					</view>
					<view class="">{{day.wind_dir+day.wind_sc}}级</view>
				</view>
			</template>

		</view>

		<view class="maxTitle">
			生活指数
		</view>
		<view class="line"></view>
		<view class="lifeRowDiv">
			<template v-for="item in lifestyle">
				<view v-bind:key="item" v-if="item.type=='comf'" class="lifeRow lifeRow1">
					<view class="imgDiv">
						<image src="../../static/img/shushidu.png" mode=""></image>
					</view>
					<view class="info">
						<view class="lifeTitle">
							舒适度 {{item.brf}}
						</view>
						<view class="lifeDesc"> {{item.txt}}</view>
					</view>
				</view>
				<view v-bind:key="item" v-else-if="item.type=='cw'" class="lifeRow">
					<view class="imgDiv">
						<image src="../../static/img/xiche.png" mode=""></image>
					</view>
					<view class="info">
						<view class="lifeTitle">
							洗车 {{item.brf}}
						</view>
						<view class="lifeDesc"> {{item.txt}}</view>
					</view>
				</view>
				<view v-bind:key="item" v-else-if="item.type=='drsg'" class="lifeRow">
					<view class="imgDiv">
						<image src="../../static/img/chuanyi.png" mode=""></image>
					</view>
					<view class="info">
						<view class="lifeTitle">
							穿衣 {{item.brf}}
						</view>
						<view class="lifeDesc"> {{item.txt}}</view>
					</view>
				</view>
				<view v-bind:key="item" v-else-if="item.type=='flu'" class="lifeRow">
					<view class="imgDiv">
						<image src="../../static/img/ganmao.png" mode=""></image>
					</view>
					<view class="info">
						<view class="lifeTitle">
							感冒 {{item.brf}}
						</view>
						<view class="lifeDesc"> {{item.txt}}</view>
					</view>
				</view>
				<view v-bind:key="item" v-else-if="item.type=='sport'" class="lifeRow">
					<view class="imgDiv">
						<image src="../../static/img/yundong.png" mode=""></image>
					</view>
					<view class="info">
						<view class="lifeTitle">
							运动 {{item.brf}}
						</view>
						<view class="lifeDesc"> {{item.txt}}</view>
					</view>
				</view>
				<view v-bind:key="item" v-else-if="item.type=='uv'" class="lifeRow">
					<view class="imgDiv">
						<image src="../../static/img/ziwaixian.png" mode=""></image>
					</view>
					<view class="info">
						<view class="lifeTitle">
							紫外线 {{item.brf}}
						</view>
						<view class="lifeDesc"> {{item.txt}}</view>
					</view>
				</view>
				<view v-bind:key="item" v-else-if="item.type=='air'" class="lifeRow">
					<view class="imgDiv">
						<image src="../../static/img/kongqizhiliang.png" mode=""></image>
					</view>
					<view class="info">
						<view class="lifeTitle">
							空气污染 {{item.brf}}
						</view>
						<view class="lifeDesc"> {{item.txt}}</view>
					</view>
				</view>
				<view v-bind:key="item" v-else-if="item.type=='trav'" class="lifeRow">
					<view class="imgDiv">
						<image src="../../static/img/taiyang.png" mode=""></image>
					</view>
					<view class="info">
						<view class="lifeTitle">
							晾晒 {{item.brf}}
						</view>
						<view class="lifeDesc"> {{item.txt}}</view>
					</view>
				</view>
				<view v-bind:key="item" style="margin: 0px 10px;position: relative;">
					<view class="lifeRowLine"></view>
				</view>
			</template>
		</view>

		<view style="height: 20px;width: 100%;">

		</view>

		<view class="gochessclock" @tap="gochessclock">
			点击跳转棋钟小程序
		</view>

		<view class="createby">
			developer：茂茂的帅爸爸
		</view>


	</view>
</template>



<script>
	import faIcon from "@/components/kilvn-fa-icon/fa-icon.vue"
	export default {
		components: {
			faIcon
		},
		data() {
			return {
				title: 'Hello',
				now: {
					fl:0,
				},
				update: {},
				lifestyle: [],
				basic: {},
				forecast: {},
				minhgyan: [
					"目标越接近，困难越增加。",
					"水激石则鸣，人激志则宏。",
					"生活便是寻求新的知识。",
					"友谊是一棵可以庇荫的树。",
					"过去属于死神，未来属于你自己。",
					"自己活着，就是为了使别人活得更美好。",
					"人需要真理，就像瞎子需要明快的引路人一样。",
					"善于利用零星时间的人，才会做出更大的成绩来。",
					"社会犹如一条船，每个人都要有掌舵的准备。",
					"人生不是一种享乐，而是一桩十分沉重的工作。",
				],
				minhgyandesc: "",
				location: "",
				address: "",
				src: ""
			}
		},
		onShow() {
			uni.showShareMenu({})
			let ma = Math.floor(Math.random() * (9 + 1));
			this.minhgyandesc = this.minhgyan[ma];

		},
		onLoad() {
			uni.setNavigationBarColor({
				frontColor: '#ffffff',
				backgroundColor: '#030a1b',
				animation: {
					duration: 400,
					timingFunc: 'easeIn'
				}
			})
			this.getLocation();
			this.showGG()
			
		},
		methods: {
			getLocation() {
				let _this = this;
				uni.getSetting({
					success(res) {
						if (!res.authSetting["scope.userLocation"]) {
							uni.authorize({
								scope: 'scope.userLocation',
								success() {
									uni.getLocation({
										type: 'wgs84',
										success: function(res) {
											_this.location = res.longitude + "," + res.latitude;
											_this.getInfo()
										}
									});
								}
							})
						} else {
							uni.getLocation({
								type: 'wgs84',
								success: function(res) {
									_this.location = res.longitude + "," + res.latitude;
									_this.getInfo()
								}
							});
						}
					}
				})
			},
			getInfo() {
				this.$api.shikuang(this.location).then((d) => {
					let res = JSON.parse(d.data)
					this.basic = res.HeWeather6[0].basic;
					this.update = res.HeWeather6[0].update;
					this.now = res.HeWeather6[0].now;
					this.src = '../../static/icon/' + this.now.cond_code + '.png'
				})
				this.$api.lifestyle(this.location).then((d) => {
					let res = JSON.parse(d.data)
					this.basic = res.HeWeather6[0].basic;
					this.update = res.HeWeather6[0].update;
					this.lifestyle = res.HeWeather6[0].lifestyle;
				})
				this.$api.dailyForecast(this.location).then((d) => {
					let res = JSON.parse(d.data)
					this.basic = res.HeWeather6[0].basic;
					this.update = res.HeWeather6[0].update;
					this.forecast = res.HeWeather6[0].daily_forecast;
				})

			},
			blur() {
				this.location = this.address;
				this.address = "";
				this.getInfo()
			},
			getnow() {
				this.getLocation();
			},
			gochessclock() {
				uni.navigateToMiniProgram({
					appId: 'wxcfad719efe6e6fad'
				})
			},
			showGG(){
				// 在页面中定义插屏广告
				let interstitialAd = null
				
				// 在页面onLoad回调事件中创建插屏广告实例
				if (wx.createInterstitialAd) {
				  interstitialAd = wx.createInterstitialAd({
				    adUnitId: 'adunit-5385a8aecb4c827f'
				  })
				  interstitialAd.onLoad(() => {})
				  interstitialAd.onError((err) => {})
				  interstitialAd.onClose(() => {})
				}
				
				// 在适合的场景显示插屏广告
				if (interstitialAd) {
				  interstitialAd.show().catch((err) => {
				    console.error(err)
				  })
				}
			}
		}
	}
</script>

<style lang="less">
	view {
		z-index: 9;
	}

	.gochessclock {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		height: 50px;
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, 0.4);
	}

	.createby {
		position: relative;
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 16px;
		height: 30px;
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, 0.4);
		padding-bottom: 30px;
	}

	.bg {
		width: 100%;
		height: 100%;
		position: fixed;
	}

	.center {
		width: 85%;
		margin: 0 auto;
		position: relative;
	}

	.searchDiv {
		position: relative;
		display: flex;
		padding: 5px 0px;
		height: 50px;
		align-items: center;
		color: #FFFFFF;
		box-sizing: border-box;
		padding-left: 10px;
	}

	.searchDiv>.input {
		outline: 0;
		padding: 5px;
		padding-left: 15px;
		color: #FFFFFF;
		font-size: 16px;
		width: 80%;
	}

	.line {
		position: relative;
	}

	.line::after {
		content: "";
		width: 200%;
		height: 1px;
		position: absolute;
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
		transform: scale(0.5);
		transform-origin: 0 0;
		box-sizing: border-box;
	}

	.lineCol::after {
		content: "";
		width: 1px;
		height: 200%;
		position: absolute;
		border-left: 1px solid rgba(255, 255, 255, 0.25);
		transform: scale(0.5);
		transform-origin: 0 0;
		box-sizing: border-box;
	}

	.lineRow::after {
		content: "";
		width: 200%;
		height: 1px;
		position: absolute;
		border-bottom: 1px solid rgba(255, 255, 255, 0.25);
		transform: scale(0.5);
		transform-origin: 0 0;
		box-sizing: border-box;
	}


	.addressDiv {
		display: flex;
		justify-content: space-between;
		color: #FFFFFF;
		align-items: center;
		padding: 5px 0px;

		.address {
			font-size: 36px;
		}

		.updateTime {
			font-size: 14px;
		}
	}

	.minhgyandesc {
		color: #FFFFFF;
		font-size: 14px;
	}

	.wenduDiv {
		padding: 50px 0px;
	}

	.wendu {
		color: #FFFFFF;
		text-align: center;
		display: flex;
		align-items: flex-start;
		justify-content: center;

		.wendu-test {
			font-size: 88px;
		}

		.wendu-icon {
			font-size: 30px;
			display: inline-block;
			padding-top: 15px;
			padding-left: 10px;
		}
	}

	.cond_txt {
		color: #FFFFFF;
		margin: auto;
		text-align: center;
		font-size: 24px;
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.day7 {
		position: relative;
		display: flex;
		flex-wrap: nowrap;
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, 0.4);
		font-size: 13px;
		overflow-x: scroll;
		margin-bottom: 30px;
		width: 100%;

		.oneday {
			view {
				width: 100px;
				padding: 3px 0px;
				font-size: 14px;
				display: flex;
				align-items: center;
				justify-content: center;
			}

			image {
				width: 30px;
				height: 30px;
			}
		}
	}

	.nowinfoDiv {
		width: 100%;
		margin-bottom: 30px;
	}

	.nowinfo {
		position: relative;
		display: flex;
		flex-wrap: wrap;
		align-content: space-between;
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, 0.4);
		font-size: 13px;

	}

	.nowinfo-cell {
		flex: 1;
		text-align: center;
		padding: 13px 0px;

		.test-desc {
			margin-bottom: 8px;
			display: inline-block;
		}

		.test-val {
			font-size: 12px;
		}
	}

	.maxTitle {
		position: relative;
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, 0.4);
		font-size: 15px;
		text-align: center;
		line-height: 40px;
	}

	.lifeRowDiv {
		position: relative;
		color: #FFFFFF;
		background-color: rgba(0, 0, 0, 0.4);
		font-size: 14px;

		.lifeRow {
			padding: 10px 10px 10px 10px;
			display: flex;
			height: 90px;
			box-sizing: border-box;
			position: relative;

			.imgDiv {
				width: 70px;
				height: 70px;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-shrink: 0;

				image {
					width: 50px;
					height: 50px;
				}
			}

			.info {
				flex: 1 1 auto;
				display: flex;
				flex-direction: column;
				justify-content: space-between;


				.lifeTitle {
					font-size: 14px;
				}

				.lifeDesc {
					font-size: 12px;
				}
			}
		}

		.lifeRowLine {
			position: relative;
		}

		.lifeRowLine::after {
			content: "";
			width: 200%;
			height: 1px;
			position: absolute;
			bottom: 0;
			left: 0;
			border-bottom: 1px solid rgba(255, 255, 255, 0.25);
			transform: scale(0.5);
			transform-origin: 0 0;
			box-sizing: border-box;
		}
	}
</style>
