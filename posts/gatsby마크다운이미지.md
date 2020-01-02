---
title: Gatsby/마크다운 이미지 표출하기
date: 2020-01-02 15:06:48
path: gatsby-markdownImage
tag: Gatsby
---

# Gatsby Blog 마크다운 내의 이미지 표출하기

github에서의 md파일들은 이미지도 잘 나오는데 gatsby는 이상하게 자꾸 엑박이 떴었다.<br>
그걸 봤지만... 계속 외면하고 미루고 있었다.😭<br>

2020년 새해를 맞이해서 블로그도 조금씩 고쳐나가야겠단 생각에 다시 열심히 구글링을 시작 했다.<br>

## 1. **gatsby-remark-images, gatsby-remark-relative-images 를 설치한다.**<br>

`npm install --save gatsby-remark-images`<br>
`npm install --save gatsby-remark-relative-images`

## 2. **gatsby-config.js 에서 코드 추가**<br>

Image폴더를 지정해 준다.<br>
gatsby-transformer-remark의 plugin으로 gatsby-remark-images를 추가하고 maxwidth도 지정해 준다.

```javascript
module.exports = {
    plugins: [
        // ... other plugins
        {
            resolve: 'gatsby-source-filesystem',
            options: {
                name: 'images',
                path: `${__dirname}/posts/Image`,
            },
        },
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: `gatsby-remark-images`,
                        options: {
                            maxWidth: 590,
                        },
                    },
                ],
            },
        },
        // ... other plugins
    ],
};
```

## 3. .md 파일

posts/Image 파일에 이미지를 한꺼번에 저장 해 놨다.<br>
`![before](/gatsbyPrismBefore.png)` <br>
이렇게 작성 해 주면 이미지를 폴더에서 찾아서 쓰는 것 같다. 그 앞의 경로는 2번에서 처럼 미리 지정 해 놔서 알아서 찾아오는 것 같다. <br>

### 좀 더 찾아 볼 것

원래는 `![image](https://github.com/dud0701/blog/blob/master/posts/Image/after_lifecycle.png)`이렇게 github주소를 써놨었다. 이런식으로 적용 해 놨는데도 계속 엑박이 뜨는 것이다... 사실 어차피 github저장소에 있는 이미지라서 상관은 없는데 나중에 url로 이미지를 가져오고 싶을 때도 있을 것 같으니 해결방법을 찾아봐야 할 것 같다.

참고 : https://www.frontendstumbles.com/using-gatsby-image-with-netlify-cms/
