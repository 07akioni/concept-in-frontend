如果一个元素里只有浮动元素，那么它的高度会是 0。如果你想要它紫石英即包含所有浮动元素，那你需要要让它能自己清除浮动。这种方法叫做 clearfix，即使用 ::after 伪元素设置 clear 作为替代。
```
content: "";
display: block;
clear: both;
```