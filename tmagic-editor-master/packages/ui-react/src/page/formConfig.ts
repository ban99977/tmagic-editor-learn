/*
 * Tencent is pleased to support the open source community by making TMagicEditor available.
 *
 * Copyright (C) 2021 THL A29 Limited, a Tencent company.  All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export default [
  {
    text: '页面标识',
    name: 'name',
    disabled: true,
    extra: '在多页面的情况下用来指定要打开的页面',
  },
  {
    text: '页面标题',
    name: 'title',
  },
  {
    name: 'layout',
    text: '容器布局',
    type: 'select',
    defaultValue: 'absolute',
    options: [
      { value: 'absolute', text: '绝对定位' },
      { value: 'relative', text: '流式布局' },
    ],
  },
];
