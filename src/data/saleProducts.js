// 商品情報の入力欄：商品名・画像の説明・通常価格・割引率・リンク先を書き換えてください。
const saleProducts = [
  // お米
  {
    id: 'rice',
    name: '国産米\u00205kg',
    image: `${import.meta.env.BASE_URL}images/products/rice.jpg`,
    imageAlt: '国産米 5kg',
    originalPrice: 5980, // 通常価格（数値のみ。例：5980）
    discount: 50, // 割引率（例：30なら30%OFF。0は非表示）
    category: '食品',
    href: '#',       // 商品詳細ページのURL
  },

  // パスタ
  {
    id: 'pasta',
    name: 'スパゲッティ\u00205kg',
    image: `${import.meta.env.BASE_URL}images/products/pasta.jpg`,
    imageAlt: '袋入りの乾燥スパゲッティと、ペペロンチーノの調理例',
    originalPrice: 3257, // 通常価格（数値のみ。例：5980）
    discount: 30, // 割引率（例：30なら30%OFF。0は非表示）
    category: '食品',
    href: '#',       // 商品詳細ページのURL
  },

  // カレー
  {
    id: 'curry',
    name: 'レトルトビーフカレー\u0020200g\u0020\u00D7\u00203食',
    image: `${import.meta.env.BASE_URL}images/products/curry.jpg`,
    imageAlt: 'レトルトカレー3袋と、ビーフカレーライスの盛り付け例',
    originalPrice: 1480, // 通常価格（数値のみ。例：5980）
    discount: 20, // 割引率（例：30なら30%OFF。0は非表示）
    category: '食品',
    href: '#',       // 商品詳細ページのURL
  },

  // コーヒー
  {
    id: 'coffee',
    name: 'ドリップコーヒー\u00208g\u0020\u00D7\u002030袋',
    image: `${import.meta.env.BASE_URL}images/products/coffee.jpg`,
    imageAlt: '個包装のドリップコーヒーと箱に添えたコーヒーカップ',
    originalPrice: 1980, // 通常価格（仮設定）
    discount: 30, // 割引率
    category: '飲料',
    href: '#', // 商品詳細ページのURL
  },

  // 緑茶
  {
    id: 'tea',
    name: '緑茶\u00202L\u0020\u00D7\u00206本',
    image: `${import.meta.env.BASE_URL}images/products/tea.jpg`,
    imageAlt: '緑茶が入った2Lペットボトル6本',
    originalPrice: 820, // 通販価格を参考にした通常価格（仮設定）
    discount: 20, // 割引率
    category: '飲料',
    href: '#', // 商品詳細ページのURL
  },

  // 水
  {
    id: 'water',
    name: '天然水\u00202L\u0020\u00D7\u00206本',
    image: `${import.meta.env.BASE_URL}images/products/water.jpg`,
    imageAlt: '青いラベルの天然水ペットボトル6本',
    originalPrice: 690, // 通販価格を参考にした通常価格（仮設定）
    discount: 20, // 割引率
    category: '飲料',
    href: '#', // 商品詳細ページのURL
  },

  // ティッシュ
  {
    id: 'tissues',
    name: 'ボックスティッシュ\u0020200組\u0020\u00D7\u00204箱',
    image: `${import.meta.env.BASE_URL}images/products/tissues.jpg`,
    imageAlt: '青と白のボックスティッシュ4箱',
    originalPrice: 378, // LOHACOの200組5箱472円を4箱分に換算した仮価格
    discount: 20, // 作品用の仮の割引率
    category: '消耗品',
    href: '#', // 商品詳細ページのURL
  },

  // 洗濯洗剤
  {
    id: 'detergent',
    name: '衣料用液体洗剤\u0020詰め替え用\u00202kg',
    image: `${import.meta.env.BASE_URL}images/products/detergent.jpg`,
    imageAlt: '持ち手と注ぎ口が付いた衣料用洗濯洗剤の詰め替えパック',
    originalPrice: 1050, // ナフコの液体洗剤2000gを参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '消耗品',
    href: '#', // 商品詳細ページのURL
  },

  // スポンジ
  {
    id: 'sponge',
    name: 'キッチンスポンジ\u00206個入り',
    image: `${import.meta.env.BASE_URL}images/products/sponge.jpg`,
    imageAlt: '黄色と青とピンクのキッチンスポンジ6個入り',
    originalPrice: 217, // コーナンの抗菌スポンジ6個入りを参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '消耗品',
    href: '#', // 商品詳細ページのURL
  },

  // フェイスタオル
  {
    id: 'face-towel',
    name: 'フェイスタオル\u00203枚組',
    image: `${import.meta.env.BASE_URL}images/products/face-towel.jpg`,
    imageAlt: '白とベージュとグレーのフェイスタオル3枚',
    originalPrice: 990, // MARUCHUUのフェイスタオル3枚セットを参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '美容・ケア',
    href: '#', // 商品詳細ページのURL
  },

  // ハンドクリーム
  {
    id: 'hand-cream',
    name: 'ハンドクリーム\u002050g',
    image: `${import.meta.env.BASE_URL}images/products/hand-cream.jpg`,
    imageAlt: '葉のイラストが描かれた50g入りハンドクリーム',
    originalPrice: 590, // LOHACOの無印良品ハンドクリーム50gを参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '美容・ケア',
    href: '#', // 商品詳細ページのURL
  },

  // シャンプー
  {
    id: 'shampoo',
    name: 'シャンプー\u0020ポンプ本体\u0020500mL',
    image: `${import.meta.env.BASE_URL}images/products/shampoo.jpg`,
    imageAlt: '青い花のイラストが描かれた500mL入りシャンプーのポンプボトル',
    originalPrice: 1650, // ハニープラス公式の2026年9月改定価格を参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '美容・ケア',
    href: '#', // 商品詳細ページのURL
  },

  // ケトル
  {
    id: 'kettle',
    name: '電気ケトル\u00201L\u0020ホワイト',
    image: `${import.meta.env.BASE_URL}images/products/kettle.jpg`,
    imageAlt: '白い電気ケトルと給電用の台座',
    originalPrice: 1800, // アイリスプラザの1L電気ケトルを参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '家電',
    href: '#', // 商品詳細ページのURL
  },

  // 卓上ファン
  {
    id: 'usb-fan',
    name: 'USB卓上ファン\u0020ホワイト',
    image: `${import.meta.env.BASE_URL}images/products/usb-fan.jpg`,
    imageAlt: '白い卓上ファンとUSB給電ケーブル',
    originalPrice: 2490, // 無印良品のUSBデスクファンを参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '家電',
    href: '#', // 商品詳細ページのURL
  },

  // ボールペン
  {
    id: 'ballpoint-pen',
    name: 'ノック式ボールペン\u0020ブラック',
    image: `${import.meta.env.BASE_URL}images/products/ballpoint-pen.jpg`,
    imageAlt: '黒い軸と金属製クリップのノック式ボールペン',
    originalPrice: 590, // 無印良品のアルミ六角ボールペンを参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '文房具・雑貨',
    href: '#', // 商品詳細ページのURL
  },

  // ノート
  {
    id: 'notebook',
    name: 'ゴムバンド付きノート\u0020A5',
    image: `${import.meta.env.BASE_URL}images/products/notebook.jpg`,
    imageAlt: 'ベージュの表紙と黒いゴムバンドのA5ノート',
    originalPrice: 650, // 無印良品のA5ゴム留め付きノートを参考にした仮価格
    discount: 20, // 作品用の仮の割引率
    category: '文房具・雑貨',
    href: '#', // 商品詳細ページのURL
  },
].map((product) => ({
  ...product,
  // 通常価格と割引率から販売価格を計算（1円未満は四捨五入）。
  price: Math.round(product.originalPrice * (100 - product.discount) / 100),
}))

export default saleProducts
