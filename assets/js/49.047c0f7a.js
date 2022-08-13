(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{390:function(s,t,a){"use strict";a.r(t);var e=a(9),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"十一-网络"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#十一-网络"}},[s._v("#")]),s._v(" 十一.网络")]),s._v(" "),t("h2",{attrs:{id:"_1-配置-ip-地址"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-配置-ip-地址"}},[s._v("#")]),s._v(" 1. 配置 IP 地址")]),s._v(" "),t("h3",{attrs:{id:"_1-1-ifconfig-临时配置-ip"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-1-ifconfig-临时配置-ip"}},[s._v("#")]),s._v(" 1.1 ifconfig 临时配置 IP")]),s._v(" "),t("ul",[t("li",[s._v("查看与配置网络状态")])]),s._v(" "),t("h2",{attrs:{id:"_3-查看网络环境"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看网络环境"}},[s._v("#")]),s._v(" 3. 查看网络环境")]),s._v(" "),t("h3",{attrs:{id:"_3-1-查询网络状态"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-查询网络状态"}},[s._v("#")]),s._v(" 3.1 查询网络状态")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("netstat 选项")]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("选项")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-t")]),s._v(" "),t("td",[s._v("列出 TCP 协议端口")])]),s._v(" "),t("tr",[t("td",[s._v("-u")]),s._v(" "),t("td",[s._v("列出 UDP 协议端口")])]),s._v(" "),t("tr",[t("td",[s._v("-n")]),s._v(" "),t("td",[s._v("不使用域名与服务名，而使用 IP 地址和端口号")])]),s._v(" "),t("tr",[t("td",[s._v("-l")]),s._v(" "),t("td",[s._v("仅列出在监听状态网络服务")])]),s._v(" "),t("tr",[t("td",[s._v("-a")]),s._v(" "),t("td",[s._v("列出所有的网络连接")])])])])])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -tlun\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -an "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("more")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("netstat")]),s._v(" -unt "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("|")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("grep")]),s._v("  ESTABLISHED\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br")])]),t("h2",{attrs:{id:"_4-网络测试命令"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-网络测试命令"}},[s._v("#")]),s._v(" 4. 网络测试命令")]),s._v(" "),t("h3",{attrs:{id:"_4-1-ping"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-ping"}},[s._v("#")]),s._v(" 4.1 ping")]),s._v(" "),t("ul",[t("li",[s._v("ping [选项] ip 或域名")]),s._v(" "),t("li",[s._v("测试指定 IP 或域名的网络状况")]),s._v(" "),t("li",[s._v("选项")]),s._v(" "),t("li",[s._v("-c 次数指定 ping 包的次数")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ping")]),s._v(" www.baidu.com -c "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h3",{attrs:{id:"_4-2-wget"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-wget"}},[s._v("#")]),s._v(" 4.2 wget")]),s._v(" "),t("p",[s._v("下载命令")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://www.baidu.com\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h2",{attrs:{id:"_5-远程登录"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-远程登录"}},[s._v("#")]),s._v(" 5.远程登录")]),s._v(" "),t("h3",{attrs:{id:"_5-1-ssh-协议原理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-ssh-协议原理"}},[s._v("#")]),s._v(" 5.1 SSH 协议原理")]),s._v(" "),t("h4",{attrs:{id:"_5-1-1-对称加密算法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-1-对称加密算法"}},[s._v("#")]),s._v(" 5.1.1 对称加密算法")]),s._v(" "),t("ul",[t("li",[s._v("采用单密钥系统的加密方法，同一个密钥可以同时用作信息的加密和解密，这种加密被称为对称加密。")]),s._v(" "),t("li",[s._v("非对称加密算法 需要公钥和私钥")])]),s._v(" "),t("h4",{attrs:{id:"_5-1-2-ssh-安全外壳协议"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-2-ssh-安全外壳协议"}},[s._v("#")]),s._v(" 5.1.2 SSH 安全外壳协议")]),s._v(" "),t("ul",[t("li",[s._v("ssh 用户名@ip")]),s._v(" "),t("li",[s._v("远程管理指定 Linux 服务器")])]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("root@192-171-207-101-static ~"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# ssh root@192.171.207.101")]),s._v("\nThe authenticity of "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("host")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'192.171.207.101 (192.171.207.101)'")]),s._v(" can"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'t be established.\nRSA key fingerprint is a4:97:52:eb:0a:0b:35:a0:98:7d:4f:c8:3b:dc:f9:0a.\nAre you sure you want to continue connecting (yes/no)? yes\nWarning: Permanently added '")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.171")]),s._v(".207.101' "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("RSA"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" to the list of known hosts.\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("/root/.ssh/known_hosts")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token number"}},[s._v("192.171")]),s._v(".207.101 ssh-rsa AAAAB3NzaC1yc2EAAAABIwAAAQEAomDpQxV3RmjJyKkf7elMTInbdm+/ZLnFpfbAryi5PSb2ewfYbwRaBcVl1lBta6yjFuz0J12p9qy90DBhadvoBsfwTB8lQhmlT8B2eCcHr0bfLa1IdKMcjImxRJiD4v0emCGFquHnHIr41vs8uxQ2Ek28mH/1JC0e/+VPEvylBB4+Kk2789ACdAlmhGTtlu7zgeUoLaWQSl1/6g7zfSLIz+/U8qGiRSPaGT+M40oqx/PZdoGOMTRhHgNIR5qgvcNaJXhlZGYT42fLFSmtzUHJ030hP7JGZ99oXS20/mnc8qvonC9itp0+K/nCj5g6uR/gPFb5B0NmTZCM2/gcLkHumw"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br")])]),t("h4",{attrs:{id:"_5-1-3-scp"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-scp"}},[s._v("#")]),s._v(" 5.1.3 scp")]),s._v(" "),t("ul",[t("li",[s._v("scp 是 secure copy 的缩写, scp 是 linux 系统下基于 ssh 登陆进行安全的远程文件拷贝命令")]),s._v(" "),t("li",[s._v("linux 的 scp 命令可以在 linux 服务器之间复制文件和目录")]),s._v(" "),t("li",[s._v("命令格式 scp [参数] [原路径] [目标路径]\n"),t("table",[t("thead",[t("tr",[t("th",[s._v("参数")]),s._v(" "),t("th",[s._v("含义")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("-r")]),s._v(" "),t("td",[s._v("递归复制整个目录")])]),s._v(" "),t("tr",[t("td",[s._v("-v")]),s._v(" "),t("td",[s._v("详细方式显示输出")])])])])])]),s._v(" "),t("h5",{attrs:{id:"_5-1-3-1-从本地服务器复制到远程服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-1-从本地服务器复制到远程服务器"}},[s._v("#")]),s._v(" 5.1.3.1 从本地服务器复制到远程服务器")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" local_file remote_username@remote_ip:remote_folder\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r local_folder remote_username@remote_ip:remote_folder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])]),t("h5",{attrs:{id:"_5-1-3-2-从远程服务器复制到本地服务器"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-1-3-2-从远程服务器复制到本地服务器"}},[s._v("#")]),s._v(" 5.1.3.2 从远程服务器复制到本地服务器")]),s._v(" "),t("div",{staticClass:"language-sh line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-sh"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" remote_username@remote_ip:remote_folder local_file\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("scp")]),s._v(" -r remote_username@remote_ip:remote_folder local_folder\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br")])])])}),[],!1,null,null,null);t.default=r.exports}}]);