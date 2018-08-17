## css3动画

1.transform 变换

|                  |                  |      |
| :--------------: | :--------------: | :--: |
|  translate(x,y)  |       平移       |      |
|  rotate 默认绕Z  |       旋转       | deg  |
|    scale(x,y)    |       缩放       | 倍数 |
|    skew(x,y)     |       倾斜       | deg  |
| transform-origin |       原心       |      |
| transform-style  | flat/preserve-3d |      |

2.transition 过渡

|                            |                 |
| :------------------------: | :-------------: |
|         transition         |                 |
|    transition-property     |      属性       |
|    transition-duration     | 持续时间  “ 0”  |
| transition-timing-function | 时间曲线 “ease” |
|      transition-delay      |    开始时间     |
|                            |                 |

transition-timing-function: linear|ease|ease-in|ease-out|ease-in-out|cubic-bezier(*n*,*n*,*n*,*n*);

3.animation 动画

|                           |                               |
| ------------------------- | ----------------------------- |
| animation                 |                               |
| animation- name           | 名称                          |
| animation-duration        | 完成1周期的时间               |
| animation-timing-function | 速度曲线                      |
| animation-delay           | 延时                          |
| animation-iteration-count | 播放次数 num/ infinite        |
| animation-direction       | 是否逆向                      |
| animation-play-state      | 是否运行或暂停 running/paused |

animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit;



