<template>
    <div class="progress-box" v-cloak>
        <h1>Progress Bar</h1>
        <p>使用进度条组件时, 需设置<span class="point-text"> class="progress" </span>。</p>
        <h3>简单使用</h3>
        <p>已经过的项可增设<span class="point-text"> .progress-pass </span>来改变样式。</p>
        <p>每一项的进度可在含有<span class="point-text"> class="progress-item-line" </span>的元素上设置,默认长度为<span class="point-text"> 0 </span>。</p>
        <p>代码示例:</p>
        <div class="code">
            <div class="examples">
                <span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"progress"</span><span
                    class="d">&gt;</span><br>

                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"progress-item progress-pass"</span><span
                    class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span> <span class="cn">style=</span><span
                    class="cv">"height: 50%"</span><span class="d">&gt;</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="v">注册</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"progress-item"</span><span
                    class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="v">待买家确认订单</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"progress-item"</span><span
                    class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="v">待买家支付</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"progress-item"</span><span
                    class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="v">发货审核</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"progress-item"</span><span
                    class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="v">待买家确认收货</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span class="cn">class=</span><span class="cv">"progress-item"</span><span
                    class="d">&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;div</span> <span
                    class="cn">class=</span><span class="cv">""progress-item-text</span><span class="d">&gt;</span><span
                    class="v">确认收获</span><span class="d">&lt;/div&gt;</span><br>
                &nbsp;&nbsp;&nbsp;&nbsp;<span class="d">&lt;/div&gt;</span><br>
                <span class="d">&lt;/div&gt;</span>
            </div>
        </div>
        <p>效果图:</p>
        <div class="examples" style="padding: 50px;">
            <div class="progress-widgets">
                <div class="progress">
                    <div class="progress-item progress-pass">
                        <div class="progress-item-line" style="width: 50%"></div>
                        <div class="progress-item-text">注册</div>
                    </div>
                    <div class="progress-item">
                        <div class="progress-item-line"></div>
                        <div class="progress-item-text">待买家确认订单</div>
                    </div>
                    <div class="progress-item">
                        <div class="progress-item-line"></div>
                        <div class="progress-item-text">待买家支付</div>
                    </div>
                    <div class="progress-item">
                        <div class="progress-item-line"></div>
                        <div class="progress-item-text">发货审核</div>
                    </div>
                    <div class="progress-item">
                        <div class="progress-item-line"></div>
                        <div class="progress-item-text">待买家确认收货</div>
                    </div>
                    <div class="progress-item">
                        <div class="progress-item-text">交易成功</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>