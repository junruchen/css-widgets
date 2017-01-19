<template>
    <div class="tab-box" v-cloak>
        <h1>Tabs</h1>
        <p>使用选项卡组件时, 需设置<span class="point-text"> class="tabs" </span>。</p>
        <h3>简单使用</h3>
        <p>如需使用更小的选项卡, 增设<span class="point-text"> .tabs-sm </span>即可。</p>
        <p>代码示例:</p>
        <div class="code">
            <div class="examples">
                <span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"tabs"</span><span class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;ul&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;li</span> <span class="cn">class=</span><span class="cv">"active"</span><span class="d">&gt;&lt;a</span> <span class="cn">href=</span><span class="cn">"#"</span><span class="d">&gt;</span><span class="v">选项1</span><span class="d">&lt;/a&gt;&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;li&gt;&lt;a</span> <span class="cn">href=</span><span class="cn">"#"</span><span class="d">&gt;</span><span class="v">选项2</span><span class="d">&lt;/a&gt;&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;li&gt;&lt;a</span> <span class="cn">href=</span><span class="cn">"#"</span><span class="d">&gt;</span><span class="v">选项3</span><span class="d">&lt;/a&gt;&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;li&gt;&lt;a</span> <span class="cn">href=</span><span class="cn">"#"</span><span class="d">&gt;</span><span class="v">选项4</span><span class="d">&lt;/a&gt;&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/ul&gt;</span><br>
                <span class="d">&lt;/div&gt;</span>
            </div>
        </div>
        <p>效果图:</p>
        <div class="examples">
            <div class="tabs-widgets">
                <div class="tabs">
                    <ul>
                        <li class="active"><a href="##">选项卡1</a></li>
                        <li><a href="##">选项卡2</a></li>
                        <li><a href="##">选项卡3</a></li>
                        <li><a href="##">选项卡4</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>