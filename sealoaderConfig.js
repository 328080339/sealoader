module.exports={
	//需要加载依赖的js目录/js文件 运行sealoader指令将会对此目录下的所有js文件进行依赖模块下载 
	"jsPath":"",
	//线上模块仓库地址 比如模块a的地址是:http://xxx.xxx.com/libs/js/a.js 那onlinePath须为"http://xxx.xxx.com"
	"onlinePath":"",
	//后缀路径映射
	//如果不写则默认目录和后缀名一致 就像a.js如果在/libs/js,目录下,那么js文件就无须配置后缀路径映射
	//比如:要加载通用模块a.js,但sealoader只知道模块都在/libs文件夹里，但不知道a.js在libs的具体哪个文件夹里
		// 如果extensionToPath没有对js的文件后缀进行配置，那sealoader就会默认a.js是在/libs/js文件夹里
		// 如果extensionToPath中有js:'myJs',那sealoader就会去/libs/myJs中去加载a.js
	"extensionToPath":{
		// 示例:
		// "flash":"swf",
		// "imgs":["gif","png"]
	},
	//其它非js依赖配置
	//js模块依赖sealoader可以通过源码解析得出,但一些其他的资源文件,比如图片,css还是需要去手工配置一下的
	"otherDeps":{
		//示例:
		//"a":"a.png",
		//"b":["b.css","b.png"],
		//"c":["js/c.png"] 这么写则代表sealoader加载c.png会从/libs/js/中去取
	},
	//如果你们有一个插件目录页面的话 可以将页面地址写在这儿 执行"-menu"命令即会访问
	//默认:http://awei.oss-cn-shenzhen.aliyuncs.com/libs.html
	"libsMenuUrl":""
}