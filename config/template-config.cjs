/* eslint-disable */
const TEMPLATE_CONFIG = [
  {
    id: '0001',
    title: '亲爱的, 早上好❤️',
    desc: `
      **{{date.DATA}}**
      
      下个休息日：{{holidaytts.DATA}}
      
      ---
      
      城市🌍：{{city.DATA}}
      
      天气☁️：{{tian_api_weather_weather_0.DATA}}
      
      气温🌡️(最高/最低): {{tian_api_weather_highest_0.DATA}} / {{tian_api_weather_lowest_0.DATA}}
      
      风向🎐: {{wind_direction.DATA}}
      
      风级🍃: {{wind_scale.DATA}}

      每日一句💌：
      
      {{note_en.DATA}}
      
      
      {{comprehensive_horoscope.DATA}}
      
      ---
      
      今天是我们相识的第**{{love_day.DATA}}**天❤️，爱你！
      
      生理期已经过去了{{sl1_day.DATA}}天，注意饮食，多喝水哦~
      
      距离下次生理期还有{{sl2_day.DATA}}天~可别乱吃东西😤
      
      {{birthday_message.DATA}}
      
      
      ---
      
      {{moment_copyrighting.DATA}}
      
      {{poetry_title.DATA}} {{poetry_content.DATA}}
      
      {{lover_prattle.DATA}}
    `
  },
  {
    id: '0002',
    title: '推送完成提醒',
    desc: `
      服务器信息：{{post_time_zone.DATA}} {{post_time.DATA}}
      
      ---
      
      
      共推送 {{need_post_num.DATA}} 人
      
      成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
      
      成功用户: {{success_post_ids.DATA}}
      
      失败用户: {{fail_post_ids.DATA}}
    `
  },
]

module.exports = TEMPLATE_CONFIG
