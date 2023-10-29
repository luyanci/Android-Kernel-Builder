# Android-Kernel-Builder
Build for Redmi K30 4G /Poco X2(phoenix/phoenixin) kernels by github Action.
## 介绍
使用github Action构建，给Redmi k30 4G/Poco X2（phoenix/phoenixin）使用的安卓系统内核
## 刷入方法
1.进入recovery（关机状态下电源+音量加）

2.备份dtbo boot分区

3.下载[**MIUI内核**](https://github.com/luyanci/Android-Kernel-Builder/releases/tag/miui)
或[其他内核](https://github.com/luyanci/Android-Kernel-Builder/releases/latest)

4.刷入（或者在sideload模式下用'adb sideload xxx.zip'刷入）

## 目前已有内核构建

**~~MIUI~~(经测试MIUIV12.5.5.0有刷入后无法进入系统的问题，暂时不再自动上传至release)**

**PixelExperience(Android 11)**

**redcliff**(Android13类原 可自行测试)

**EvolutionX(Android 13)** (未自测 自行测试)

共4个内核构建(主要是针对类原的构建)

# 内核源码仓库链接
 [MIUI&redcliff](https://github.com/SlackerState/android_kernel_xiaomi_sm6150)

[PixelExperience](https://github.com/PixelExperience-Devices/kernel_xiaomi_phoenix)

[EvolutionX](https://github.com/jaymistry258/kernel_xiaomi_phoenix)