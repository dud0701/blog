---
title: 코드 강조하기
date: 2020-01-02 15:56:48
path: gatsby-highlightCode
tag: Gatsby
---

# Gatsby Blog code 강조하기

code를 예쁘게 강조 하기 위해서 PrismJs를 사용했다.

## 1. **gatsby-remark-prismjs를 설치한다.**<br>

`npm install --save gatsby-transformer-remark gatsby-remark-prismjs prismjs`<br>

## 2. **gatsby-config.js 에서 코드 추가**<br>

```javascript
// gatsby-config.js
module.exports = {
    plugins: [
        // ... other plugins
        {
            resolve: `gatsby-transformer-remark`,
            options: {
                plugins: [
                    {
                        resolve: 'gatsby-remark-prismjs',
                        options: {
                            showLineNumbers: true,
                        },
                    },
                ],
                //.. other plugins
            },
        },
        // ... other plugins
    ],
};
```

gatsby공식 문서를 보면 알겠지만 여러 옵션들이 있다. 필요한대로 다양하게 써 보면 좋을 것 같다. <br>
나는 code의 linenumber를 보여주면 좋을 것 같아서 `showLineNumbers`옵션을 추가 했다.

## 3. **gatsby-browser.js에서 원하는 css변경**<br>

prismJs에서 제공 해 주는 [theme](https://github.com/PrismJS/prism/tree/1d5047df37aacc900f8270b1c6215028f6988eb1/themes)이 8개 있는 듯 하다. <br>
그 중 `prism-tomorrow`을 사용 했다.<br>
그리고 line-numbers css도 추가 해 준다.
`javascript // gatsby-browser.js require('prismjs/themes/prism-tomorrow.css'); require('prismjs/plugins/line-numbers/prism-line-numbers.css');`

### 이전

![before](/gatsbyPrismBefore.png)

### 이후

![After](/gatsbyPrismAfter.png)

너무 깔끔하다 😍

참고: https://www.gatsbyjs.org/packages/gatsby-remark-prismjs/
