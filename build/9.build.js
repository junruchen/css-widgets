webpackJsonp([9,15],{20:function(s,a,p){var n,l,c={};l=p(21),s.exports=n||{},s.exports.__esModule&&(s.exports=s.exports.default);var t="function"==typeof s.exports?s.exports.options||(s.exports.options={}):s.exports;l&&(t.template=l),t.computed||(t.computed={}),Object.keys(c).forEach(function(s){var a=c[s];t.computed[s]=function(){return a}})},21:function(s,a){s.exports=' <div class=pagination-box v-cloak> <h1>pagination</h1> <p>分页组件提供两种样式, 如需使用后台样式, 可增置<span class=point-text> class="pagination-root"</span>。</p> <p>禁用某一项,可在<span class=point-text> li </span>标签增设<span class=point-text> class="disabled"</span>。</p> <p>使用<span class=point-text> .active </span>表示已经选中的页。</p> <h3>简单使用</h3> <p>代码示例:</p> <div class=code> <div class=examples> <span class=d>&lt;div</span> <span class=cn>class=</span><span class=cv>"pagination"</span><span class=d>&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;ul&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;li</span> <span class=cn>class=</span><span class=cv>"page-item disabled"</span><span class=d>&gt;</span><span class=d>&lt;/li&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;li</span> <span class=cn>class=</span><span class=cv>"page-item active"</span><span class=d>&gt;</span><span class=d>&lt;a</span> <span class=cn>href=</span><span class=cv>"#"</span><span class=d>&gt;</span><span class=v>1</span><span class=d>&lt;/a&gt;&lt;/li&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;li</span> <span class=cn>class=</span><span class=cv>"page-item"</span><span class=d>&gt;</span><span class=d>&lt;a</span> <span class=cn>href=</span><span class=cv>"#"</span><span class=d>&gt;</span><span class=v>...</span><span class=d>&lt;/a&gt;&lt;/li&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;li</span> <span class=cn>class=</span><span class=cv>"page-item"</span><span class=d>&gt;</span><span class=d>&lt;a</span> <span class=cn>href=</span><span class=cv>"#"</span><span class=d>&gt;</span><span class=v>97</span><span class=d>&lt;/a&gt;&lt;/li&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;li</span> <span class=cn>class=</span><span class=cv>"page-item"</span><span class=d>&gt;</span><span class=d>&lt;a</span> <span class=cn>href=</span><span class=cv>"#"</span><span class=d>&gt;</span><span class=v>98</span><span class=d>&lt;/a&gt;&lt;/li&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;li</span> <span class=cn>class=</span><span class=cv>"page-item"</span><span class=d>&gt;</span><span class=d>&lt;a</span> <span class=cn>href=</span><span class=cv>"#"</span><span class=d>&gt;</span><span class=v>99</span><span class=d>&lt;/a&gt;&lt;/li&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;li</span> <span class=cn>class=</span><span class=cv>"page-item"</span><span class=d>&gt;</span><span class=d>&lt;/li&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;/ul&gt;</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class=v>到</span><span class=d>&lt;</span> <span class=cn>type=</span><span class=cv>"text"</span><span class=v>&gt;</span><span class=v>页</span><br> &nbsp;&nbsp;&nbsp;&nbsp;<span class=d>&lt;div</span> <span class=cn>class=</span><span class=cv>"page-btn"</span><span class=d>&gt;</span><span class=v>确定</span><span class=d>&lt;/div&gt;</span><br> <span class=d>&lt;/div&gt;</span><br> </div> </div> <p>效果图:</p> <div class=examples> <p>前台使用</p> <div class=pagination-widgets style="background-color: #f1f1f1; border:1px solid #e1e1e1; padding: 20px;margin-bottom: 20px"> <div class=pagination> <ul> <li class="page-item disabled"></li> <li class="page-item active"><a href="">1</a></li> <li class=page-item><a href="">...</a></li> <li class=page-item><a href="">96</a></li> <li class=page-item><a href="">97</a></li> <li class=page-item><a href="">97</a></li> <li class=page-item></li> </ul> 到<input type=text>页 <div class=page-btn>确定</div> </div> </div> <p>后台使用</p> <div class="pagination-widgets pagination-root" style="border:1px solid #e1e1e1; padding: 20px"> <div class=pagination> <ul> <li class="page-item disabled"></li> <li class="page-item active"><a href="">1</a></li> <li class=page-item><a href="">...</a></li> <li class=page-item><a href="">96</a></li> <li class=page-item><a href="">97</a></li> <li class=page-item><a href="">97</a></li> <li class=page-item></li> </ul> 到<input type=text>页 <div class=page-btn>确定</div> </div> </div> </div> </div> '}});
//# sourceMappingURL=9.build.js.map