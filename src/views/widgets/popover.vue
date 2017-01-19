<template>
    <div class="popover-box" v-cloak>
        <h1>Popover</h1>
        <p>使用弹框组件, 需在父级元素设置<span class="point-text"> class="popover" </span>。</p>
        <p>弹窗组件分为默认弹框以及无标题弹框。</p>
        <h3>默认弹框</h3>
        <p>默认弹框的高度不固定, 由内容撑开。</p>
        <p>默认弹框内容区的样式可根据不同需求自由设计。</p>
        <p>代码示例:</p>
        <div class="code">
            <div class="examples">
                <span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover"</span><span class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover-container"</span><span class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover-close"</span><span class="d">&gt;</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover-title"</span><span class="d">&gt;</span><span class="v">标题</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover-content"</span><span class="d">&gt;</span><span class="v">内容区, 具体样式根据需求自行设计</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"btn-group"</span><span class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"btn btn-line"</span><span class="d">&gt;</span><span class="v">取消</span><span class="d">&lt;/div&gt;</span><span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"btn"</span><span class="d">&gt;</span><span class="v">下一步</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                <span class="d">&lt;/div&gt;</span>
            </div>
        </div>
        <p>效果图: </p>
        <div class="examples">
            <div class="popover-examples"></div>
        </div>

        <h3>无标题弹框</h3>
        <p>无标题弹框大小固定。</p>
        <p>代码示例:</p>
        <div class="code">
            <div class="examples">
                <span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover popover-msg"</span><span class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover-container"</span><span class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover-close"</span><span class="d">&gt;</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover-title"</span><span class="d">&gt;</span><span class="v">这是一条通知信息</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"popover-content"</span><span class="d">&gt;</span><span class="v">一些解释文案</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"btn-group"</span><span class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"btn"</span><span class="d">&gt;</span><span class="v">知道了</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                <span class="d">&lt;/div&gt;</span>
            </div>
        </div>
        <p>效果图: </p>
        <div class="examples">
            <div class="popover-msg-examples"></div>
        </div>


        <div class="popover" style="display: none;">
            <div class="popover-container">
                <div class="popover-close"></div>
                <div class="popover-title">标题</div>
                <div class="popover-content" style="font-size: 16px;">内容区, 具体样式根据需求自行设计</div>
                <div class="btn-group">
                    <div class="btn btn-line">取消</div><div class="btn">下一步</div>
                </div>
            </div>
        </div>

        <div class="popover popover-msg" style="display: none">
            <div class="popover-container">
                <div class="popover-close"></div>
                <div class="popover-title"><i></i><span>这是一条通知信息</span></div>
                <div class="popover-content">这里是一些解释文案 这里是一些解释文案 这里是一些解释文案</div>
                <div class="btn-group">
                    <div class="btn">知道了</div>
                </div>
            </div>
        </div>

    </div>
</template>