<template>
    <div class="dropdown-box" v-cloak>
        <h1>Dropdown menu</h1>
        <p>使用下拉菜单组件, 需包裹在一个设置了<span class="point-text"> class="dropdown" </span>的元素内。</p>
        <h3>常规用法</h3>
        <p>大小由<span class="point-text"> .dropdown-lg </span>以及<span class="point-text"> .dropdown-sm </span>控制。</p>
        <p>菜单展开: 父级元素增设<span class="point-text"> class="dropdown-open" </span>即可查看菜单展开的样式。</p>
        <p>菜单项选中: 元素设置<span class="point-text"> class="active" </span>即可。</p>

        <p>代码示例:</p>
        <div class="code">
            <div class="examples">
                <span class="d">&lt;div</span> <span class="cn">class=</span><span
                    class="cv">"dropdown dropdown-open"</span><span class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"dropdown-btn"</span><span
                    class="d">&gt;</span><span class="v"><span class="d">&lt;span</span> <span
                    class="cn">class=</span><span class="cv">"active"</span><span class="d">&gt;</span>选项3</span><span
                    class="d">&lt;/span&gt;&lt;i&gt;&lt;/i&gt;&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"dropdown-menu"</span><span
                    class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;ul&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    class="d">&lt;li</span><span class="d">&gt;</span><span class="v">选项1</span><span class="d">&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    class="d">&lt;li</span><span class="d">&gt;</span><span class="v">选项2</span><span class="d">&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;li</span>
                <span class="cn">class=</span><span class="cv">"active"</span><span class="d">&gt;</span><span
                    class="v">选项3</span><span class="d">&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    class="d">&lt;li</span><span class="d">&gt;</span><span class="v">选项4</span><span class="d">&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span
                    class="d">&lt;li</span><span class="d">&gt;</span><span class="v">选项5</span><span class="d">&lt;/li&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/ul&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                <span class="d">&lt;/div&gt;</span>
            </div>
        </div>
        <p>效果图:</p>
        <div class="examples">
            <div class="dropdown-widgets" style="float:left;">
                <div class="dropdown">
                    <div class="dropdown-btn">
                        <span>请选择</span>
                        <i></i>
                    </div>
                    <div class="dropdown-menu">
                        <ul>
                            <li>选项1</li>
                            <li>选项2</li>
                            <li>选项3</li>
                            <li>选项4</li>
                            <li>选项5</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div class="dropdown-widgets" style="height: 216px; margin-left: 20px;float: left;">
                <div class="dropdown dropdown-open">
                    <div class="dropdown-btn"><span class="active">选项3</span><i></i></div>
                    <div class="dropdown-menu">
                        <ul>
                            <li>选项1</li>
                            <li>选项2</li>
                            <li class="active">选项3</li>
                            <li>选项4</li>
                            <li>选项5</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>