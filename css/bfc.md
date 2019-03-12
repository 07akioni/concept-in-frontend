Block Formatting Context, BFC 是 Web 页面的可视化 CSS 渲染的一部分，是布局过程中生成块级盒子的区域，也是浮动元素和其他元素的交互限定部分。

下列方式会创建块格式化上下文：
- 根元素或包含根元素的元素
- 浮动元素
- 绝对定位元素
- display: inline-block
- display: table-cell
- display: table-caption
- overflow 不为 visible 的元素
- display: flex, inline-flex
- display: grid, inline-grid

浮动和清除浮动时只会应用于同一个 BFC 内的元素。浮动不会影响其他 BFC 中元素的布局，而清除浮动只能清除同一 BFC 中在它前面的元素的浮动。外边距折叠也只会发生在属于同一 BFC 的块级元素之间。