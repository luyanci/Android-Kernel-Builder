'use client';

import React, { useState, useRef } from 'react';
import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { Divider } from "@nextui-org/divider";
import { Input } from "@nextui-org/input";
import { CheckboxGroup, Checkbox } from "@nextui-org/checkbox";
import { Accordion, AccordionItem } from "@nextui-org/accordion";
import { Textarea } from "@nextui-org/input";


import './Configuration.css'
import KernelSource from './KernelSource/KernelSource';

const template = {
    "kernelSource": {
        "name": "",
        "repo": "",
        "branch": "",
        "device": "",
        "defconfig": ""
    },
    "withKernelSU": false,
    "toolchains": [
        {
            "repo": "",
            "branch": "",
            "name": "",
            "binPath": []
        }
    ],
    "ccache": false,
    "params": {
        "ARCH": "",
        "CC": "",
        "externalCommand": {}
    },
    "AnyKernel3": {
        "use": false,
        "release": false,
        "repo": "",
        "branch": ""
    }
}

// nextjs中组件事件绑定，父组件点击执行子组件函数，子组件点击执行父组件函数的方法
// https://blog.csdn.net/qq_41211900/article/details/131935745
const Configuration = () => {
    const [output, setOutput] = React.useState(template);
    return (
        <Card className='config-card h-full'>
            <CardBody className='config-panel space-x-1 h-full place-items-center'>
                <Accordion className="config-panel">
                    <AccordionItem key="1" aria-label="Accordion 1" title="Kernel Source">
                        <KernelSource updateKernelSource={setOutput} template={output} />
                    </AccordionItem>
                    <AccordionItem key="2" aria-label="Accordion 2" title="Toolchains">
                        <Card>
                            <CardBody>
                                <Input isClearable labelPlacement='outside-left' label="Email" />
                                <Divider className="my-4" />
                                <Input isClearable labelPlacement='outside-left' label="Email" placeholder="Enter your email" />
                            </CardBody>
                        </Card>
                    </AccordionItem>
                    <AccordionItem key="3" aria-label="Accordion 3" title="Build params">
                        <Card>
                            <CardBody>
                                <Input isClearable labelPlacement='outside-left' label="Email" />
                                <Divider className="my-4" />
                                <Input isClearable labelPlacement='outside-left' label="Email" placeholder="Enter your email" />
                            </CardBody>
                        </Card>
                    </AccordionItem>
                    <AccordionItem key="4" aria-label="Accordion 4" title="AnyKernel3">
                        <Card>
                            <CardBody>
                                <Input isClearable labelPlacement='outside-left' label="Email" />
                                <Divider className="my-4" />
                                <Input isClearable labelPlacement='outside-left' label="Email" placeholder="Enter your email" />
                            </CardBody>
                        </Card>
                    </AccordionItem>
                    <AccordionItem key="5" aria-label="Accordion 5" title='Other Configuration'>
                        <div>
                            <CheckboxGroup
                                label="Select cities"
                                defaultValue={["buenos-aires", "london"]}
                            >
                                <Checkbox value="buenos-aires">Is build with KernelSU</Checkbox>
                                <Checkbox value="sydney">Use ccache</Checkbox>
                            </CheckboxGroup>
                        </div>
                    </AccordionItem>
                </Accordion>
            </CardBody>
            <CardBody className="config-output min-h-full">
                <Textarea
                    isReadOnly
                    label="Output"
                    variant="bordered"
                    placeholder={JSON.stringify({ output }, null, "\t")}
                    value={JSON.stringify(output, null, "\t")}
                    className="min-w-full min-h-full"
                    minRows={30}
                    maxRows={100}
                />
            </CardBody>
        </Card>
    );
}

export default Configuration;