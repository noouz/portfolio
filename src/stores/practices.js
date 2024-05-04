import { defineStore } from 'pinia'

export const practices = defineStore('practices', {
  state:()=>{
    return{
      projectData: {
        'id': 1,
        'name': '五術研究社',
        'pic': 'bg-wu-img',
        'description': '由小組(6人)共同製作的專題，提供一個購物平台來販售以「五術」為主題的課程及服務。<br>前台功能：註冊及登入會員、編輯會員資料、瀏覽商品、購買商品。<br>後台功能：編輯訂單、編輯會員、新增商品、設定課程開放權限、查看留言板回饋。<br>個人負責功能：<br>前台：商品瀏覽＆購物車＆會員中心切版、購物車功能、會員中心功能、搜尋課程功能<br>後台：會員管理、課程權限修改功能。<br>**購物必須登入才能進行，恕只能提供已設定的前台帳號**<br>帳號：six777@gmail.com<br>密碼：777777<br>該網站主要使用 vue + Laravel 完成。',
        'github': null,
        'view': 'https://nchu-11212-wushu.dev-hub.io',
      },
      practicesData: [
        {
          'id': 1,
          'name': '天氣卡',
          'pic': 'bg-weather-img',
          'description': '提供使用者觀看全台各地區的及時天氣預報。<br>串接中央氣象署開放資料平臺之氣象API來抓取氣象預報資料，可以點擊區域分類來查看該區域的天氣預報卡。<br>該網站主要使用 JavaScript 完成。',
          'github': 'https://github.com/noouz/weatherCard',
          'view': 'https://noouz.github.io/weatherCard/weather.html',
        },
        {
          'id': 2,
          'name': '待辦清單',
          'pic': 'bg-todo-img',
          'description': '提供使用者新增待辦事項，並隨時刪除、修改事項。<br>待辦事項能分類成全部、已完成、待完成，使用者可以點擊分類檢查該狀態有哪些待辦事項，<br>右上角「紀錄資料」按鈕能將該份清單保存在本地電腦，此功能使用LocalStorage來存儲資料。<br>該網站主要使用 vue 完成。',
          'github': 'https://github.com/noouz/vue-todolist',
          'view': 'https://noouz.github.io/vue-todolist',
        },
        {
          'id': 3,
          'name': '色弱測驗',
          'pic': 'bg-colors-img',
          'description': '按下開始遊戲來跳戰你的辨色能力!<br>遊戲提供暫停及重新開始功能，每通關一回合玩家得1分，<br>方塊會隨著關卡倍數增加，顏色也會越來越難分辨。<br>該網站主要使用 JavaScript 完成。',
          'github': 'https://github.com/noouz/ColorGame',
          'view': 'https://noouz.github.io/ColorGame/Game.html',
        },
        {
          'id': 4,
          'name': '猜拳遊戲',
          'pic': 'bg-finger-img',
          'description': '與電腦進行猜拳一決勝負!<br>玩家可以選擇要出什麼拳，按下猜拳即可開始猜拳。<br>該網站主要使用 JavaScript 完成。',
          'github': 'https://github.com/noouz/fingerGuessing',
          'view': 'https://noouz.github.io/fingerGuessing/fingerGuessing.html',
        },
        {
          'id': 5,
          'name': '留言板',
          'pic': 'bg-blog-img',
          'description': '迷你留言板。<br>使用者需要先登入，登入後會進入到自己的主頁，可以新增文章並留言。<br>使用LocalStorage來存儲帳戶資料來核對帳號。<br>帳號：q123456@gmail.com<br>密碼：q123456<br>該網站主要使用 JavaScript 完成。',
          'github': 'https://github.com/noouz/miniBlog',
          'view': 'https://noouz.github.io/miniBlog/logIn',
        },
        {
          'id': 6,
          'name': '反應遊戲',
          'pic': 'bg-reaction-img',
          'description': '點擊圖案測試你的反應能力!<br>圖案的形狀、顏色以及位置為隨機生成，玩家只要點擊圖案便會顯示玩家反應的時間。<br>該網站主要使用 JavaScript 完成。',
          'github': 'https://github.com/noouz/reactiongame',
          'view': 'https://noouz.github.io/reactiongame',
        },
      ],
    };
  },
  
});

