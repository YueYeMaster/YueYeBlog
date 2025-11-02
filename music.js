// 音乐数据列表
const musicList = [
  {
    id: 4,
    title: "冬眠2023",
    artist: "阿yueyue",
    src: "./music/冬眠2023.MP3",
    cover: "../imgs/头像48px.png"
  },
  {
    id: 2,
    title: "天若有情",
    artist: "网络歌手",
    src: "./music/天若有情.MP3",
    cover: "../imgs/头像48px.png"
  },
  {
    id: 3,
    title: "罗生门",
    artist: "张子豪",
    src: "./music/罗生门.MP3",
    cover: "../imgs/头像48px.png"
  },
  {
    id: 1,
    title: "我走后",
    artist: "小咪",
    src: "./music/我走后.MP3",
    cover: "../imgs/头像48px.png"
  }
];

// 获取DOM元素
const audio = document.getElementById('myAudio');
const playBtn = document.getElementById('playBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const progress = document.getElementById('progress');
const progressBar = document.querySelector('.progress-bar');
const currentTimeEl = document.getElementById('currentTime');
const totalTimeEl = document.getElementById('totalTime');
const musicTitleEl = document.getElementById('musicTitle');
const musicArtistEl = document.getElementById('musicArtist');
const musicItemsEl = document.getElementById('musicItems');
const alarmEl = document.querySelector('.alarm');

// 当前播放索引
let currentMusicIndex = 0;
// 是否正在播放
let isPlaying = false;

/**
 * 初始化音乐列表
 * 创建音乐列表项并添加点击事件
 */
function initMusicList() {
  musicItemsEl.innerHTML = '';
  musicList.forEach((music, index) => {
    const musicItem = document.createElement('div');
    musicItem.classList.add('music-item');
    if (index === currentMusicIndex) {
      musicItem.classList.add('active');
    }
    musicItem.innerHTML = `
      <div class="music-item-index">${index + 1}</div>
      <div class="music-item-info">
        <div class="music-item-title">${music.title}</div>
        <div class="music-item-artist">${music.artist}</div>
      </div>
    `;
    musicItem.addEventListener('click', () => {
      currentMusicIndex = index;
      loadMusic();
      playMusic();
    });
    musicItemsEl.appendChild(musicItem);
  });
}

/**
 * 加载音乐
 * 设置音频源、更新标题和艺术家信息、重置播放状态
 */
function loadMusic() {
  const music = musicList[currentMusicIndex];
  const globalProgress = document.getElementById('global-progress');
  audio.src = music.src;
  musicTitleEl.textContent = music.title;
  musicArtistEl.textContent = music.artist;
  
  // 重置播放状态和旋转动画
  isPlaying = false;
  playBtn.innerHTML = '<i class="iconfont icon-play"></i>';
  alarmEl.style.animation = 'none';
  alarmEl.classList.remove('rotating');
  // 重置全局进度条
  globalProgress.style.width = '0%';
  
  // 更新当前播放高亮
  document.querySelectorAll('.music-item').forEach((item, index) => {
    if (index === currentMusicIndex) {
      item.classList.add('active');
    } else {
      item.classList.remove('active');
    }
  });
}

/**
 * 播放音乐
 * 开始播放音频，更新播放按钮状态，添加旋转动画
 */
function playMusic() {
  audio.play().then(() => {
    isPlaying = true;
    playBtn.innerHTML = '<i class="iconfont icon-pause"></i>';
    // 添加旋转动画
    alarmEl.style.animation = 'rotate 20s linear infinite';
    alarmEl.classList.add('rotating'); // 添加旋转类
  }).catch(error => {
    console.error('播放失败:', error);
    alert('音乐播放失败，请检查音乐文件路径');
  });
}

/**
 * 暂停音乐
 * 暂停音频，更新播放按钮状态，停止旋转动画
 */
function pauseMusic() {
  audio.pause();
  isPlaying = false;
  playBtn.innerHTML = '<i class="iconfont icon-play"></i>';
  // 停止旋转动画
  alarmEl.style.animation = 'none';
  alarmEl.classList.remove('rotating'); // 移除旋转类
}

/**
 * 播放下一首
 * 更新当前索引，加载并播放下一首歌曲
 */
function nextMusic() {
  currentMusicIndex = (currentMusicIndex + 1) % musicList.length;
  loadMusic();
  if (isPlaying) {
    playMusic();
  }
}

/**
 * 播放上一首
 * 更新当前索引，加载并播放上一首歌曲
 */
function prevMusic() {
  currentMusicIndex = (currentMusicIndex - 1 + musicList.length) % musicList.length;
  loadMusic();
  if (isPlaying) {
    playMusic();
  }
}

/**
 * 更新进度条
 * 根据音频播放进度更新进度条宽度和时间显示
 */
function updateProgress(e) {
  const { duration, currentTime } = e.srcElement;
  const progressPercent = (currentTime / duration) * 100;
  progress.style.width = `${progressPercent}%`;
  
  // 更新全局进度条
  const globalProgress = document.getElementById('global-progress');
  globalProgress.style.width = `${progressPercent}%`;
  
  // 更新时间显示
  currentTimeEl.textContent = formatTime(currentTime);
  if (duration) {
    totalTimeEl.textContent = formatTime(duration);
  }
}

/**
 * 跳转到指定进度
 * 根据点击位置设置音频播放进度
 */
function setProgress(e) {
  const width = this.clientWidth;
  const clickX = e.offsetX;
  const duration = audio.duration;
  audio.currentTime = (clickX / width) * duration;
}

/**
 * 格式化时间
 * 将秒数转换为 mm:ss 格式
 */
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes < 10 ? '0' : ''}${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

/**
 * 初始化函数
 * 添加样式、初始化音乐列表、尝试自动播放
 */
function init() {
  // 添加图标样式（简单的播放控制图标）
  const style = document.createElement('style');
  style.textContent = `
    /* 播放控制图标样式 */
    .icon-play::before { content: '▶'; }
    .icon-pause::before { content: '⏸'; }
    .icon-prev::before { content: '⏮'; }
    .icon-next::before { content: '⏭'; }
    
    /* 音乐信息样式 */
    .music-info {
      text-align: center;
      margin-bottom: 10px;
      padding: 10px;
      background: rgba(255, 255, 255, 0.9);
      border-radius: 10px;
    }
    .music-title {
      font-weight: bold;
      color: #333;
      margin-bottom: 5px;
    }
    .music-artist {
      font-size: 12px;
      color: #666;
    }
    
    /* 进度条样式 - 修改为放在播放按钮下方 */
    .player {
      position: relative;
      margin-bottom: 15px;
    }
    .progress-container {
      margin: 10px 0;
      position: static;
    }
    .progress-bar {
      width: 100%;
      height: 4px;
      background: #ddd;
      border-radius: 2px;
      cursor: pointer;
      margin-bottom: 5px;
    }
    .progress {
      height: 100%;
      background: #42b983;
      border-radius: 2px;
      width: 0%;
      position: relative;
      z-index: 1;
    }
    .time-info {
      display: flex;
      justify-content: space-between;
      font-size: 10px;
      color: #999;
    }
    
    /* 解决绿条遮挡问题 - 确保进度条不会溢出容器 */
    #main-right-wrapper-music {
      position: relative;
      z-index: 10;
    }
    
    /* 确保进度条不会覆盖页面 */
    .progress-container {
      overflow: hidden;
    }
    
    /* 右侧盒子对齐样式 */
    .main-right-wrapper {
      width: var(--mainRightWidth);
      margin-left: auto;
    }
    .main-right-wrapper-music {
      width: 100%;
    }
    
    /* 音乐列表样式 */
    .music-list {
      background: rgba(255, 255, 255, 0.9);
      border-radius: 10px;
      padding: 10px;
      max-height: 200px;
      overflow-y: auto;
      margin-bottom: 15px;
    }
    .music-list-title {
      font-weight: bold;
      margin-bottom: 10px;
      color: #333;
    }
    .music-item {
      display: flex;
      align-items: center;
      padding: 8px 0;
      border-bottom: 1px solid #eee;
      cursor: pointer;
      transition: background 0.2s;
    }
    .music-item:hover {
      background: #f5f5f5;
    }
    .music-item.active {
      color: #42b983;
    }
    .music-item-index {
      width: 20px;
      font-size: 12px;
      margin-right: 10px;
    }
    .music-item-info {
      flex: 1;
    }
    .music-item-title {
      font-size: 14px;
    }
    .music-item-artist {
      font-size: 12px;
      color: #999;
    }
    
    /* 旋转动画 */
    @keyframes rotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    
    /* 按钮样式增强 */
    .control {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      padding: 10px;
    }
    
    /* 调整头像位置使其在左侧 */
    .alarm {
      position: relative;
      top: 0;
      left: 0;
      margin-right: 20px;
    }
    
    /* 确保头像可以自转 */
    .alarm.rotating::before {
      animation: rotate 10s linear infinite;
    }
    
    .buts {
      display: flex;
      align-items: center;
      gap: 15px;
    }
    .prev, .play, .next {
      cursor: pointer;
      font-size: 20px;
      color: #333;
      transition: color 0.3s;
    }
    .prev:hover, .play:hover, .next:hover {
      color: #42b983;
    }
    .play {
      font-size: 24px;
    }
  `;
  document.head.appendChild(style);
  
  // 初始化音乐列表
  initMusicList();
  
  // 页面加载后尝试自动播放音乐
  setTimeout(() => {
      audio.play().then(() => {
          isPlaying = true;
          playBtn.innerHTML = '<i class="iconfont icon-pause"></i>';
          const alarm = document.querySelector('.alarm');
          alarm.style.animation = 'rotate 20s linear infinite';
          alarm.classList.add('rotating'); // 添加旋转动画
      }).catch(error => {
          console.log('自动播放失败，可能受到浏览器限制:', error);
      });
  }, 500);
}

// 事件监听器设置
playBtn.addEventListener('click', () => {
  if (isPlaying) {
    pauseMusic();
  } else {
    // 确保先加载第一首音乐再播放
    if (!audio.src || !audio.src.includes(musicList[currentMusicIndex].src)) {
      loadMusic();
    }
    playMusic();
  }
});

prevBtn.addEventListener('click', prevMusic);
nextBtn.addEventListener('click', nextMusic);

// 进度更新事件
audio.addEventListener('timeupdate', updateProgress);

// 点击进度条跳转事件
progressBar.addEventListener('click', setProgress);

// 音乐播放结束自动播放下一首
audio.addEventListener('ended', nextMusic);

// 页面加载完成后初始化
window.addEventListener('load', init);