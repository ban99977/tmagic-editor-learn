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

import { createApp } from 'vue';
import ElementPlus from 'element-plus';
import zhCn from 'element-plus/es/locale/lang/zh-cn';

import App from './App.vue';

import 'element-plus/dist/index.css';

Promise.all([import('../.tmagic/comp-entry'), import('../.tmagic/plugin-entry')]).then(([components, plugins]) => {
  const magicApp = createApp(App);

  Object.values(components.default).forEach((component: any) => {
    magicApp.component(component.name, component);
  });

  Object.values(plugins.default).forEach((plugin: any) => {
    magicApp.use(plugin);
  });
  magicApp.use(ElementPlus, {
    locale: zhCn,
  });
  magicApp.mount('#app');
});
