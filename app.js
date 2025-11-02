// 页面内容定义
const pageContents = {
  'Knowledg': `
    <div class="article">
      <h2 class="article-title">知识分享</h2>
      <!-- 博客内容 -->
      <p class="content-text">Hello World</p>
    </div>
  `,
  'log': `
    <div class="article">
      <h2 class="article-title">日志</h2>
      <!-- 日志内容 -->
      <p class="content-text">个人日志内容</p>
    </div>
  `,
  'about': `
    <div class="article">
      <h2 class="article-title">关于我</h2>
      <!-- 关于我内容 -->
      <p class="content-text">关于我的个人介绍</p>
    </div>
  `,
  'diary': `
    <div class="article">
      <h2 class="article-title">赛博日记</h2>
      <!-- 赛博日记内容 -->
      <p class="content-text">赛博日记内容</p>
    </div>
  `
};

// 初始化函数
function init() {
  // 绑定首页按钮点击事件
  const homeBtn = document.querySelector('.home-btn');
  if (homeBtn) {
    homeBtn.addEventListener('click', function() {
      showContent('index');
    });
  }
  
  // 使用事件委托处理所有导航链接点击
  document.addEventListener('click', function(e) {
    const link = e.target.closest('a[href$=".html"]');
    if (link) {
      // 过滤外部链接
      if (link.hostname === window.location.hostname || link.hostname === '') {
        e.preventDefault();
        
        // 获取页面名称
        const href = link.getAttribute('href');
        const page = href.split('.')[0];
        
        // 显示对应内容
        showContent(page);
        
        // 更新URL（不刷新页面）
        if (window.history && window.history.pushState) {
          window.history.pushState({page: page}, '', href);
        }
      }
    }
  });
}

// 显示页面内容函数
function showContent(page) {
  const mainContainer = document.getElementById('main-container');
  if (!mainContainer) return;
  
  // 获取页面内容
  let content = pageContents[page] || `
    <div class="article">
      <h2 class="article-title">页面不存在</h2>
      <p class="content-text">抱歉，请求的页面不存在</p>
    </div>
  `;
  
  // 简单的过渡效果
  mainContainer.style.opacity = '0';
  
  setTimeout(function() {
    mainContainer.innerHTML = content;
    mainContainer.style.opacity = '1';
  }, 150);
  
  // 更新页面标题
  updatePageTitle(page);
}

// 更新页面标题
function updatePageTitle(page) {
  const titles = {
    'home': 'YueYeBlog',
    'knowledge': '知识 | YueYeBlog',
    'log': '日志 | YueYeBlog',
    'about': '关于我 | YueYeBlog',
    'diary': '赛博日记 | YueYeBlog'
  };
  
  if (titles[page]) {
    document.title = titles[page];
  }
}

// 定义文章内容对象
const articles = {
  knowledge: `
    <div class="article">
      <h2 class="article-title">知识分享</h2>
      <!-- 知识分享内容 -->
      <p class="content-text">1在java中 long float类型定义变量后 在定义时 要在变量后加上l 或 f 表示long 或 float 否则会报错
      2Scanner sc = new Scanner(System.in);  int number = sc.nextInt();  java中录入用户输入数据基本格式 其中sc.nextInt() 表示录入一个整数 其他类型类似</p>
      <p class="content-text">利用js实现页面不改变 而内容改变 优化整体结构 同时避免页面反复刷新function updatePageTitle(page) {
  const titles = {
    'home': 'YueYeBlog',
    'knowledge': '知识 | YueYeBlog',
    }//通过点击更给页面名称 在index结构中  通过 a href="knowledge.html" 实现主体内容的改变
    </p>
         <p class="content-text">Hello World</p>
    </div>
  `,
  diary: `
    <div class="article">
      <h2 class="article-title">赛博日记</h2>
      <!-- diary内容 -->
      <p class="content-text">2025.11.2.23:04 有想法了 但是得先睡觉 这很重要 希望我可以天天开心 不再emo 成为一个真正的man! 早睡 晚安 !!!!!!!!</p>
      <p class="content-text">2025.11.2:16:30 好吧 睡眠真的很重要 决定好好睡觉 JavaScript一定得好好学 重启明日方舟 作为开服老玩家 有种朝花夕拾的感觉 (emo时刻 也许我去年就应该smoking 只是因为你推迟的一年 所以问题不大) 写什么完全取决于我现在听什么类型的歌曲 hhh</p>
      <p class="content-text">2025.10.31:23:28 就离谱 翘水课去校招面试 被校招hr狠狠羞辱 绷不住了 这和被强奸后对面还狠狠不爽有什么区别 感觉一整天大部分时间都被浪费了 就离谱 新火机也是拿到手了 爽飞 现在外面下小雨了 已经想象到了听雨爱抽纯境的爽了 还有yosobi的歌曲真好听!!!! </p>
        <p class="content-text">2025.10.31 发现一个离谱的事 那就是实际日记时间会有一天的偏差 谁叫YueYe是美国作息呢 关于我不想早八直接旷3节高数这件事</p>
        <p class="content-text">2025.10.31 也是又活过一天 日子也是好起来了 接到offer了 让我看看怎么个回事 还有 天若有情真的好听!好吧确实也是挺伤心的 问题不大 在学校机房留下了前辈的足迹 这是传承!</p>
        <p class="content-text">2025.10.30 再也回不去那年的冬 不会再有人等我太久~ 感觉优化空间还很大 问题不大 慢慢来 等我感受到幸福我就戒烟!</p>
        <p class="content-text">2025.10.29 喜欢雨天在窗台看雨 抽烟 雨爱 期待下一个雨天 现在是凌晨12:30 开始e了不过我想我会好起来的 当我点燃纯境 我就知道 我会好起来的 想回到高中(~)</p>
    </div>
  `,
  blog: `
    <div class="article">
      <h2 class="article-title">知识分享</h2>
      <!-- 知识分享内容 -->
            
            <p class="content-text">Hello World</p>
    </div>
  `,
  about: `
    <div class="article">
      <h2 class="article-title">关于我</h2>
      <!-- 关于我内容 -->
      <p class="content-text">姓名:YueYe</p>
      <p class="content-text">性别:男</p>
      <p class="content-text">在校大一学生 喜欢你(哈哈哈)睡觉 吃饭 刷视频</p>
      <p class="content-text">QQ:3448176878</p>
      <p class="content-text">邮箱:3448176878@qq.com</p>
      <p class="content-text">游戏:cs2 Pubg 农 galgame</p>
    </div>
  `,
  log: `
    <div class="article">
      <h2 class="article-title">日志</h2>
      <!-- 日志内容 -->
      <p class="content-text">11.2 0.04版本 修复了中心动态文字不居中的问题 同时分离了home 以及knowledge 页面 分离了js css文件</p>
      <p class="content-text">10.30 0.03版本 添加了主页动态标语 增加了磨砂主题 优化了性能</p>
      <p class="content-text">10.29 0.02版本 固定音乐盒 优化整体结构 添加ui图标</p>
      <p class="content-text">10:28 0.01版本 优化加载 添加音乐盒功能</p>
    </div>
  `
};

// 显示文章内容的函数
function showArticle(articleKey) {
  const contentArea = document.getElementById('main-container');
  if (contentArea && articles[articleKey]) {
    // 添加简单的过渡效果
    contentArea.style.opacity = '0';
    setTimeout(() => {
      contentArea.innerHTML = articles[articleKey];
      contentArea.style.opacity = '1';
    }, 150);
    console.log('切换到文章:', articleKey);
  } else {
    console.error('找不到main-container元素或文章内容');
  }
}

// 重新实现按钮绑定，使用更简单直接的方法
function setupNavigation() {
  // 添加点击事件委托到document
  document.addEventListener('click', function(e) {
    // 检查是否点击了导航链接
    const link = e.target.closest('a');
    if (link) {
      // 检查链接是否指向我们要处理的页面
      const href = link.getAttribute('href');
      
      // 根据链接确定要显示的文章
      if (href === 'index.html' || href === '/' || href === '') {
        e.preventDefault();
        showArticle('blog');
      } else if (href === 'diary.html') {
        e.preventDefault();
        showArticle('diary');
      } else if (href === 'log.html') {
        e.preventDefault();
        showArticle('log');
      } else if (href === 'about.html') {
        e.preventDefault();
        showArticle('about');
      } else if (href === 'knowledge.html') {
        e.preventDefault();
        showArticle('knowledge');
      }
    }
    
    // 检查是否点击了首页按钮
    if (e.target.closest('.home-btn')) {
      showArticle('blog');
    }
  });
  
  console.log('导航系统已初始化');
}

// 动态文字功能
function initDynamicText() {
  // 定义要展示的文本数组
  const texts = [
      "此情可待成追忆,只是当时已惘然",
      "爱生活,爱自由",
      "天天开心,永远年轻",
      "什么都无法舍弃的人,什么都无法改变"
  ];

  const textElement = document.getElementById('dynamic-text');
  let currentTextIndex = 0;   // 当前显示的文本索引
  let currentCharIndex = 0;   // 当前文本的字符索引
  let isDeleting = false;     // 是否处于"删除"状态
  let isPausing = false;      // 是否处于"暂停"状态

  // 核心动画函数
  function animateText() {
      const currentText = texts[currentTextIndex];
      if (isDeleting) {
          // 删除阶段：逐字减少文本
          textElement.textContent = currentText.slice(0, currentCharIndex);
          currentCharIndex--;
          // 删除完成后，切换到下一行并进入暂停
          if (currentCharIndex < 0) {
              isDeleting = false;
              isPausing = true;
              currentTextIndex = (currentTextIndex + 1) % texts.length; // 循环切换文本
              setTimeout(() => {
                  isPausing = false;
                  currentCharIndex = 0;
              }, 800); // 暂停时间（毫秒）
          }
      } else if (!isPausing) {
          // 打字阶段：逐字增加文本
          textElement.textContent = currentText.slice(0, currentCharIndex + 1);
          currentCharIndex++;
          // 打字完成后，进入删除阶段
          if (currentCharIndex > currentText.length) {
              isDeleting = true;
              setTimeout(() => {
                  animateText();
              }, 1000); // 打完字后暂停的时间（毫秒）
              return;
          }
      }
      // 递归调用，保持动画持续
      setTimeout(animateText, isDeleting ? 80 : 150); // 控制打字/删除速度
  }

  // 启动动画
  animateText();
}

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', () => {
  init();
  setupNavigation();
  initDynamicText();
});