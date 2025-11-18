function init() {
  // 基础初始化函数 - 现在导航主要由setupNavigation处理
  console.log('应用初始化完成');
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
  home: `
    <div id="home-content" class="article">
      <h2 class="article-title">星野 アイ</h2>
      <div class="YueYeMaster">
      <span>Y</span>
      <span>u</span>
      <span>e</span>
      <span>Y</span>
      <span>e</span>
      <span>M</span>
      <span>a</span>
      <span>s</span>
      <span>t</span>
      <span>e</span>
      <span>r</span>
      <span>!</span>
      </div>
      <div class="article-home">
      <div class="home-background-link">
        <img src="./imgs2/星野爱.jpg" alt="星野爱" id="img1">
        <div class="photo-text">感悟心得</div>
      </div>
      <div class="home-background-link">
        <img src="./imgs2/伊雷娜.jpg" alt="伊雷娜" id="img2">
        <div class="photo-text">我追的番</div>
      </div>
      <div class="home-background-link">
        <img src="./imgs2/薇尔莉特.jpg" alt="薇尔莉特" id="img3">
        <div class="photo-text">我听的歌</div>
      </div>
      <div class="home-background-link">
        <img src="./imgs2/樱岛麻衣.jpg" alt="樱岛麻衣" id="img4">
        <div class="photo-text">一些工具</div>
      </div>
      </div>
    </div>

     <div id="home-content" class="article">
      <div class="YueYeMaster">
      <span>ゆ</span>
      <span>う</span>
      <span>き</span>
      <span>あ</span>
      <span>す</span>
      <span>な</span>
      </div>
             <div class="article-home">
      <div class="home-background-link">
        <img src="./imgs2/三叶.jpg" alt="三叶" id="img5">
        <div class="photo-text">动漫壁纸</div>
      </div>
      <div class="home-background-link">
        <img src="./imgs2/亚丝娜.jpg" alt="亚丝娜" id="img6">
        <div class="photo-text">生活碎片</div>
      </div>
    <div class="home-background-link" onclick="window.open('https://www.16personalities.com/ch/%E4%BA%BA%E6%A0%BC%E6%B5%8B%E8%AF%95', '_blank')" style="cursor: pointer;">
        <img src="./imgs2/艾拉.jpg" alt="艾拉" id="img7">
        <div class="photo-text">人格测试</div>
      </div>
      <div class="home-background-link" onclick="window.location.href='./tools/loveindex.html'" style="cursor: pointer;">
        <img src="./imgs2/蝶祈.jpg" alt="蝶祈" id="img8">
        <div class="photo-text">表白工具</div>
      </div>
      </div>
      </div>
    </div>
  `,
  knowledge: `
    <div class="article">
      <h2 class="article-title">知识分享</h2>
      <!-- 知识分享内容 -->
      <p class="content-text">switch 穿透问题的应用 在多个case中 若一个case为true后 不写入break 程序会默认后面的代码 均为true 可以利用这个特性 实现一些代码的简写</p>
      <p class="content-text">在路径试题中在标准格子中 最短路径等于 总步数的阶乘 除于 x轴的阶乘 y轴的阶乘

### 单一禁止格子 
使用该格子逆向到终点和起点 用总路径数减去即可
列子:
有一个4*6的方格 那么步数为4+6=10
最短路径就为10!/4!/6!=210
如果挖空一个格子 列如(3,3)
则减去(3.3)到(0.0)的最短路径数量 再减去(4,6)到(3,3)的最短路径数量 即可</p>
      <p class="content-text">动态规划 是算法运行中很重要的环节 它可以将一个复杂的问题分解成多个简单的子问题 从而简化问题的解决过程 它避免了重复计算 以时间换空间的方式 提高了算法的效率 动态规划通常用于解决最优问题 例如 最短路径问题 最大子序列和问题 等</p>
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
      <p class="content-text">2025.11.18 19:27 越想遗忘越是反复挂牵 想要遗忘 怎么反复挂牵 用眼泪把你复习一遍 说这半句再见 已过了多少年 无解 冷死我了 wc vibe小子赛高 今天把歌曲分享做了 nice bro 下个月就元旦了 好快 感觉很对事情都没做 算了 开心一天是一天 这个sbAI提示 我真绷不住了 快乐显得卑微 怎么不放 ......... 好糖的日记</p>
      <p class="content-text">2025.11.17 00:40 不知道更新什么了 往日 你说往日? 写个留言板吧 先 无事发生~</p>
       <p class="content-text">2025.11.16 01:06 平淡的美好生活 pal好玩!!! 突然发现自己是game大师 暧昧情话简直是印刻在基因里面的 离谱 但又坚持寻求幻想中的爱恋 就离谱 问题不大 还是得刻苦求学(一周没写代码这件事)hhh 我永远爱纯境!!! 学校门口的纯境已经被我买完了 wc</p> 
      <p class="content-text">2025.11.13 00:38 pal是世界上最好玩的游戏!!! 无事发生 平平淡淡的一天 今日smoking six 现在听半句再见已经无感了 我又变强了 hhhh</p>
      <p class="content-text">2025.11.12 01:17 想要遗忘 怎么反复挂牵? 用眼泪把你复习一遍 </p>
      <p class="content-text">2025.11.11 10:24 半句再见 他人说的是 再见迟迟开不了口 遗憾的人迟迟放不下 但我的理解是 再见就是得两个人做最后的道别 但有时候 再见不能开口 只能深埋心中 再见是得有两个人的事情 一个人的再见是不完整的 所以是半句再见 而在你心里 要怎么道别 为何不放 即是过往云烟 想要遗忘 怎么反复挂牵 说这半句再见 已过了多少年 无解</p> 
      <p class="content-text">2025.11.9 00:17 无事发生 pal 好玩!!! 好吧只要不工作 其实每天娱乐 我简直爽飞了 我决定好好享受难得的单身时光 不可以放弃对纯爱的憧憬 问题不大 ipad简直是神 确实遥遥领先了 这个没话说 每天坚持吃土 活着!!!! 精神享受明显比物质重要 果然 我还是太佛系了 infp小蝴蝶是这样的 简直是神人 问题不大 深夜刷两道luogu玩玩 代码也是越来越熟练了</p>
      <p class="content-text">2025.11.8 00:28 手牵手一步两步三步四步望着天 看星星一颗两颗三颗四颗连成线 哈哈哈 听什么歌就以什么心情写日记 准备写两个小游戏 最难搞的数据库接口也快实现了 期待期待 爽!!!! 我不配 我听了6000次!!! 288*6000=1728000000ms=20天!!!!!!! 一些些应该体贴的感觉我没给 你嘟嘴许的愿望很卑微在妥协 好吧 每次听 应该是每个阶段听感觉都不一样</p>
      <p class="content-text">2025.11.7 19:51 为什么每天都感觉很累 就离谱 明明什么都没干 难绷 准备写几个小游戏进来 顺便练练手 没什么想说的 别翻旧相册 过来人的忠告 想回归百番计划 现在时间明明很充足来着 不说了 Rust 启动 !!!!!!!!!!</p>
      <p class="content-text">2025.11.7.00:02 也许我就是适合一个人 之前的所有都是一份礼物 准备暂停更新blog 搞搞luogu题目玩玩 有时候活着挺没意思的 有时候有特别 怎么说 就是很奇怪吧 infp-a 无敌了孩子 能开心一天是一天吧 万一明天就死翘翘了呢 最近气胸的症状又犯了 感觉浑身难受 185/60 体脂率15% 总感觉得了癌症一样 我得把我终生收集的好片放在上面 这样也算一种活着 哈哈哈 一个为了精神享受 可以每天不吃不喝的男人 旷课多了 好像也没什么大不了 关键是真的很水啊 不喜欢拘束的感觉</p>
      <p class="content-text">2025.11.6.14:02 爽飞 恩格尔系数拉的最高的一个月 想要成为phigros高手 入了小板子和一个iqoowatchgt 深夜突发奇想 直接熬了个通宵挑选 小旷3节早八高数 问题不大 感觉我是个大帅b</p>
      <p class="content-text">2025.11.5.18:21 感觉有点迷茫 不知道该学啥 学的语法都是半吊子 没有很深入的了解 竞赛也不好找队友 不知道 不知道 不知道 不知道 不知道 活着就好 其他的随缘吧! 我的耳机仓 我日!!!!!! 听了一下2018年的歌单 一种茫然的感觉 好像我一直都在回忆过去 当然可能并非我一个人这样 不过好像严重一些吧 问题不大 基本上所有旧物都会留着 今天是 回忆时刻!</p>
      <p class="content-text">2025.11.4.19.53 今天身体不舒服 暂时不想更新 预计添加一个留言板 这应该说是质的飞跃 估计得有几天 分享一些见闻吧 人这一生最重要的就是不留下遗憾 一切努力其实放在更大的局面来开 都是无关紧要的 自己只需要为自己人生负责 任何人都不会因为你的消失或出现发生太大的变化 除了在乎你的人 和你在乎的人 但生活总得继续 天天开心 宝贝~</p>
      <p class="content-text">2025.11.3.22:31 最近心口老是很痛 不知道还可以活多久 希望可以天天开心呢 等我死了 这就是我的赛博遗产 我要把我的资源全发这上面 狠狠的旷课 人生就是旷野! 爱! 想起来了 我以前的爱是爱!!</p>
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
      <p class="content-text">性别:未公开档案</p>
      <p class="content-text">年龄:19</p>
      <p class="content-text">MBTI:INFP-A</p>
      <p class="content-text">星座:一只双鱼啊!</p>
      <p class="content-text">QQ:3448176878</p>
      <p class="content-text">邮箱:3448176878@qq.com</p>
      <p class="content-text">游戏:Rust Cs2 Pubg 农 galgame 舟舟 bangdream phigros 火</p>
    </div>
  `,
  log: `
    <div class="article">
      <h2 class="article-title">日志</h2>
      <!-- 日志内容 -->
      <p class="content-text">11.7 0.08版本 添加loveindex页面 生日祝福 小子</p>
       <p class="content-text">11.7 0.07版本 全局磨砂 交互效果优化</p>
       <p class="content-text">11.5 0.06版本 home页面迎来大变 优化了悬停效果 YueYeMaster!</p>
      <p class="content-text">11.3 0.05vertion 添加了setting按钮 可以切换雨天 晴天 以及透明主题 隐藏主题 优化了悬停效果 添加了成立时间表</p>
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
        showArticle('home');
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
      showArticle('home');
    }
  });
  
  console.log('导航系统已初始化');
}

// 动态文字功能
function initDynamicText() {
  // 定义要展示的文本数组
  const texts = [
            "'星野 アイ'",
            "YueYeMaster!",
            "'向日葵的花语是 热烈的爱!'",
            "'是你流的泪晕开'",
            "'It's been so long that I can't tell whether it's like or obsession'",
            "'你知道吗？人在难过的时候就会爱上日落'"
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
  
  // 默认显示home页面
  showArticle('home');
});

// 注意：原计划添加的updateTimeDiff函数已移除，因为该功能未在代码中实际使用

function padZero(num) {
      return num < 10 ? `0${num}` : num;
    }

// 下拉菜单交互逻辑
function initDropdown() {
  const dropdown = document.querySelector('.dropdown');
  const dropdownBtn = document.querySelector('.dropdown-btn');
  const dropdownContent = document.querySelector('.dropdown-content');
  
  if (!dropdown || !dropdownBtn || !dropdownContent) return;
  
  // 点击外部区域关闭下拉菜单
  document.addEventListener('click', function(event) {
    if (!dropdown.contains(event.target)) {
      dropdownContent.style.display = 'none';
    }
  });
  
  // 点击下拉按钮切换显示状态
  dropdownBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // 阻止冒泡，避免触发document的click事件
    dropdownContent.style.display = dropdownContent.style.display === 'block' ? 'none' : 'block';
  });
}

// 在DOM加载完成后初始化下拉菜单
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDropdown);
} else {
  initDropdown();
}