Hello，这是我通过Hexo搭建的个人博客。

> 博客地址为：
>
> <https://giz.ink>

#### 技术细节

1. 评论系统：[Valine](https://valine.js.org/)

2. 博客加密：[hexo-blog-encrypt](https://github.com/MikeCoder/hexo-blog-encrypt)

3. 文章置顶：[解决Hexo博客文章置顶问题](https://www.jianshu.com/p/42a4efcdf8d7)

4. 文章摘要

   > 在`.md`中加入`<!-- more -->`分隔，上方的段落作为文章的摘要保存在`post.excerpt`中

5. 代码高亮`highlight.js`配置

   > 在项目配置`_config.yml`中添加
   >
   > ```yaml
   > highlight:
   >   enable: true
   >   line_number: true
   >   auto_detect: false
   >   hljs: true   # 这一项加上"hljs-"前缀，才能使`highlight.js`正常工作
   >   tab_replace:
   > ```
   >
   > 记得在`js`中初始化
   >
   > ```javascript
   > hljs.initHighlightingOnLoad();
   > ```

6. 回到顶部

   ```javascript
   $(backToTop).on("click", function(){
       $("html").animate({scrollTop: 0}, 600);
   });
   ```

7. 字体：[文鼎特颜楷](http://www.fonts.net.cn/font-35371272269.html)

