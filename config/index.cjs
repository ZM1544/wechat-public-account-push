/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx26ad64a3ab6f7bae',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '27db1c0e02cc3bf6f8b221ad95a0d10c
',

  PROVINCE: '福建',
  CITY: '福州',

  USERS: [
    {
      // 想要发送的人的名字
      name: '月月',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oVg9Y6_Z47q7aRkY_BWK1Yen089o',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 'RqJ-9VDCBhd6hMaHQj6HZEg56r3YOMCoAJQyHVWBkXA',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '7-16',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '月月', year: '2003', date: '06-17',
        },
      
      ],
      
  


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'RqJ-9VDCBhd6hMaHQj6HZEg56r3YOMCoAJQyHVWBkXA',

  CALLBACK_USERS: [
    {
      name: 'zm'
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oVg9Y64oO-qfDp1nt5qKRMQKw-L0',
    }
  ],

}

module.exports = USER_CONFIG

