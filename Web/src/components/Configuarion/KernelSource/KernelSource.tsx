'use client';

import React, { useState, useImperativeHandle } from 'react';
import { Card, CardBody } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";

// 获取仓库分支的 API 接口
// fetch(`https://api.github.com/repos/${owner}/${repo}/branches`)
//   .then(response => response.json())
//   .then(data => console.log(data))
//   .catch(error => console.error('Error:', error));

const kernelSourceTemplate = {
    "name": "",
    "repo": "",
    "branch": "",
    "device": "",
    "defconfig": ""
}
const KernelSource = ({ updateKernelSource, template }) => {
    const [_kernelSource, _setKernelSource] = React.useState(kernelSourceTemplate);

    function setKernelSource() {
        if (updateKernelSource && template) {
            updateKernelSource({ ...template, kernelSource: _kernelSource })
        }
    }
    const onKernelNameChange = (s: string) => {
        _kernelSource.name = s
        setKernelSource()
    }
    const onKernelRepoChange = (s: string) => {
        _kernelSource.repo = s
        setKernelSource()
    }
    const onKernelBranchChange = (s: string) => {
        _kernelSource.branch = s
        setKernelSource()
    }
    const onKernelCodeChange = (s: string) => {
        _kernelSource.device = s
        setKernelSource()
    }
    const onKernelDefconfigChange = (s: string) => {
        _kernelSource.defconfig = s
        setKernelSource()
    }
    return (
        <Card>
            <CardBody>
                <Input
                    isClearable
                    labelPlacement='outside-left'
                    label="Name"
                    placeholder="Set it to any name you like"
                    onValueChange={onKernelNameChange} />
                <Divider className="my-2" />
                <Input
                    isClearable
                    labelPlacement='outside-left'
                    label="Repo"
                    placeholder="Set up your repository"
                    onValueChange={onKernelRepoChange} />
                <Divider className="my-2" />
                <Input
                    isClearable
                    labelPlacement='outside-left'
                    label="Branch"
                    placeholder="Set repository's branch"
                    onValueChange={onKernelBranchChange} />
                <Divider className="my-2" />
                <Input
                    isClearable
                    labelPlacement='outside-left'
                    label="Device code"
                    placeholder="Set your device's codename"
                    onValueChange={onKernelCodeChange} />
                <Divider className="my-2" />
                <Input
                    isClearable
                    labelPlacement='outside-left'
                    label="Device code"
                    placeholder="Set your device's defconfig's path"
                    onValueChange={onKernelDefconfigChange} />
            </CardBody>
        </Card>
    );
}

export default KernelSource;