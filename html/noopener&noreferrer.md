# noopener & noreferrer
在没有 rel = "noopener noreferrer" 属性的 a 标签使用 target="_blank" 存在一定的风险。

风险主要在于两个地方，第一个是性能问题，第二个是安全问题。性能问题是因为新的页面会和原始页面占用同一个进程。安全问题是因为如果在同一个域内，新打开的页面可以通过 window.opener.document 访问到原始页面的 document 对象。如果打开跨域的页面，也可以访问到 location 对象。

使用 noreferrer 是因为兼容低版本的浏览器，这样处理之后，新打开的页面的 window 对象就没有 opener 和 referrer 对象了。