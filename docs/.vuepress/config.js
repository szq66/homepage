module.exports = {
  title: "Hello 亘古不变的誓言",
  dest: "dist",
  description: "szq HomePage",
  theme: "@vuepress/blog",
  themeConfig: {
    nav: [
      { text: "主页", link: "/" },
      { text: "博客", link: "/blog/" },
      { text: "随笔", link: "/writing/" },
      { text: "文摘", link: "/digest/" },
      { text: "标签", link: "/tag/" },
      { text: "阅读", link: "https://weread.qq.com/" },
    ],
    directories: [
      {
        id: "blog",
        dirname: "_blogs",
        path: "/blog/",
        title: "我的博客",
      },
      {
        id: "writing",
        dirname: "_writing",
        path: "/writing/",
        title: "我的随笔",
      },
      {
        id: "digest",
        dirname: "_digest",
        path: "/digest/",
        title: "我的文摘",
      },
    ],
    siderbar: "auto",
    footer: {
      contact: [
        { type: "github", link: "https://github.com/szq66" },
        { type: "mail", link: "https://mail.qq.com" },
        { type: "video", link: "https://space.bilibili.com/342215170" },
        { type: "web", link: "https://blog.csdn.net/weixin_45634185" },
      ],
      copyright: [
        { text: "亘古不变的誓言", link: "https://juejin.cn/user/2278627588713677" },
        { text: "亘古不变的誓言 | Copyright © 2021" },
      ],
    },
  },
};
