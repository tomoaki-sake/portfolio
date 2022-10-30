type Work = {
  title: string
  image: string
  description: string
  url: string
  alt?: string
}

export const workList: Work[] = [
  {
    title: 'Ryo Ogawa Portfolio',
    image: '/assets/ryoogawa.png',
    description: 'ピュアなHTMLとCSSで0から手動で構成しました。レスポンシブ対応を工夫しました。',
    url: 'https://tomoaki-sake.github.io/ryography-portfolio/',
  },
]
