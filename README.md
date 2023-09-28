# Android-Kernel-Builder
Build for Redmi K30 4G Android kernels by github Action.
## 介绍
使用github Action构建，给Redmi k30 4G（Phoenix）使用的安卓系统内核
## 刷入方法
1.进入recovery（关机状态下电源+音量加）
2.备份dtbo boot分区
3.下载[**MIUI内核**](https://github.com/luyanci/Android-Kernel-Builder/releases/tag/miui)
或[其他内核](https://github.com/luyanci/Android-Kernel-Builder/releases/latest)
4.刷入（或者在sideload模式下用'adb sideload xxx.zip'刷入）
## 目前已有内核构建
目前已有--**MIUI(有刷入后无法进入系统的问题，不再自动上传至releases)**--**PixelExperience11,redcliff**3个内核构建
(主要是针对类原的构建)