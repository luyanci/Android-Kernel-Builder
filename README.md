# Android-Kernel-Builder
Build for Redmi K30 4G /Poco X2(phoenix/phoenixin) kernels by github Action.
<center>

[![Build kernels](https://github.com/luyanci/Android-Kernel-Builder/actions/workflows/build.yml/badge.svg)](https://github.com/luyanci/Android-Kernel-Builder/actions/workflows/build.yml) 

</center>

## 介绍
使用github Action构建，给Redmi k30 4G/Poco X2（phoenix/phoenixin）使用的安卓系统内核
## 刷入方法
1.进入recovery（关机状态下电源+音量加）

2.备份dtbo boot分区

3.下载[**MIUI内核**](https://github.com/luyanci/Android-Kernel-Builder/releases/tag/miui)
或[其他内核](https://github.com/luyanci/Android-Kernel-Builder/releases/latest)

4.刷入（或者在sideload模式下用'adb sideload xxx.zip'刷入）

## 目前已有内核构建

**~~MIUI~~(经测试MIUIV12.5.5.0有刷入后无法进入系统的问题，暂时不再自动上传至releases)**

**PixelExperience(Android 11/Android 12)**

**redcliff**(Android13类原 可自行测试)

**Pure**([这个非官方的PE13](https://github.com/SimpleJony/device_xiaomi_phoenix/releases/tag/PEPlus)似乎用了这个内核)[From](https://github.com/PixelExperience/official_devices/issues/3155)

共5个内核构建(主要是针对类原的构建)

## 构建周期
每周日的早11点(UTC)会自动编译一次内核，每个月会清理一次构建历史

如果有非周日的releases，那可能是我给仓库更新了点什么并构建测试了(也有可能是ksu有新的稳定releases发布了)

# 一些内核源码仓库链接(找到的)
 [MIUI&Redcliff(来自于ksu的wiki)](https://github.com/SlackerState/android_kernel_xiaomi_sm6150)

[PixelExperience](https://github.com/PixelExperience-Devices/kernel_xiaomi_phoenix)

[EvolutionX's kernel(Alza)](https://github.com/jaymistry258/kernel_xiaomi_phoenix)

[Paradox&Pure](https://github.com/Pzqqt/android_kernel_xiaomi_sm6150-1)
