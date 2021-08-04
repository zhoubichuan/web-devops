module.exports = {
  // 基础配置
  base: '/Web-devops/', // 部署站点的基础路径
  description: 'devops相关知识点',
  locales: {
    // 默认标题
    '/': {
      title: 'devops笔记',
      description: ''
    }
  },
  markdown: {
    lineNumbers: true // 代码块显示行号
  },
  head: [
    // 添加链接 pwa 的 manifest 如果需要
    [
      'link',
      {
        rel: 'icon',
        href: ''
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-capable',
        content: 'yes'
      }
    ],
    [
      'meta',
      {
        name: 'apple-mobile-web-app-status-bar-style',
        content: 'black'
      }
    ],
    [
      'meta',
      {
        name: 'msapplication-TileColor',
        content: '#000000'
      }
    ]
  ],
  port: 3009,
  dest: 'dist', // 指定 vuepress build 的输出目录
  serviceWorker: true, // pwa

  // 主题配置
  themeConfig: {
    editLinks: true,
    docsDir: 'src', // 假如文档不是放在仓库的根目录下
    locales: {
      '/': {
        docsBranch: 'master', // 假如文档放在一个特定的分支下
        editLinks: true, // 启用编辑
        editLinkText: '在github上编辑此页',
        lastUpdated: '上次更新', // 获取每个文件最后一次 git 提交的时间戳
        nav: [{
            text: '基础知识',
            items: [{
                text: '一.linux',
                link: '/base/linux/1.index'
              },
              {
                text: '二.vi',
                link: '/base/vi/1.index',
              },
              {
                text: '三.user',
                link: '/base/user/1.index',
              },
              {
                text: '四.auth',
                link: '/base/auth/1.index',
              },
              {
                text: '五.shell',
                link: '/base/shell/1.index',
              },
              {
                text: '六.install',
                link: '/base/install/1.index',
              },
              {
                text: '七.system',
                link: '/base/system/1.index',
              },
              {
                text: '八.service',
                link: '/base/service/1.index',
              },
              {
                text: '九.network',
                link: '/base/network/1.index',
              }
            ]
          },
          {
            text: '高级知识',
            items: [{
                text: '一.nginx',
                link: '/senior/nginx/1.index'
              },
              {
                text: '二.docker',
                link: '/senior/docker/1.index'
              },
              {
                text: '三.jenkins',
                link: '/senior/jenkins/1.index'
              },
              {
                text: '四.groovy',
                link: '/senior/groovy/1.index'
              },
              {
                text: '五.php',
                link: '/senior/php/1.index'
              },
              {
                text: '六.java',
                link: '/senior/java/1.index'
              },
              {
                text: '七.node',
                link: '/senior/node/1.index'
              },
              {
                text: '八.k8s',
                link: '/senior/k8s/1.index'
              },
            ]
          },
          // {
          //   text: '源码知识',
          //   items: [{
          //       text: '1.vue源码解析',
          //       link: '/source/vue/1.preparation'
          //     },
          //     {
          //       text: '2.vuex源码解析',
          //       link: '/source/vuex'
          //     },
          //     {
          //       text: '3.vue-router源码解析',
          //       link: '/source/vue-router'
          //     },
          //   ]
          // }
        ],
        sidebar: {
          '/base/linux/': [
            '1.index',
            '2.webpack',
            '3.file',
            '4.single',
            '5.page',
            '7.module',
            '8.project',
            '9.utils',
            '10.ui',
            '11.data',
            '12.skill',
            '13.com',
            '14.data',
            '15.api',
          ],
          '/base/vi/': [
            '1.index', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/user/': [
            '1.index', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/auth/': [
            '1.index', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/shell/': [
            '1.index', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/install/': [
            '1.index', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/system/': [
            '1.index', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/service/': [
            '1.index', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/base/network/': [
            '1.index', 
            '2.Jenkins', 
            '3.gitlab', 
            'vscode', 
            'test', 
            'prem', 
            'i18n'
          ],
          '/senior/nginx/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/senior/docker/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/senior/jenkins/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/senior/groovy/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/senior/php/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/senior/java/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/senior/node/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/senior/k8s/': [
            '1.index', 
            '2.extend', 
            '3.componentCommunication', 
            '4.render', 
            '5.api', 
            '6.form', 
            '7.checkBox', 
            '8.active', 
            '9.alert', 
            '10.table', 
            '11.tree'
          ],
          '/source/vue/': ['1.preparation', '2.dataDriven', '3.componentization', '4.deepResponsePrinciple', '5.compile', '6.extend', '7.vueRouter', '8.vuex'],
        }
      }
    }
  },
}