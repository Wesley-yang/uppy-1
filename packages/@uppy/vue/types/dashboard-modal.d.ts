import Vue from 'vue';
import type { Uppy, UIPlugin, BasePlugin } from '@uppy/core';
import type DashboardPlugin from '@uppy/dashboard';

interface Data {
    plugin: DashboardPlugin;
}
interface Props {
    uppy: Uppy;
    props: Object;
    plugins: Array<UIPlugin | BasePlugin>
    open: boolean;
}
interface Methods {
    installPlugin(): void;
    uninstallPlugin(uppy: Uppy): void;
}
declare const _default: import("vue/types/vue").ExtendedVue<Vue, Data, Methods, unknown, Props>;
export default _default;
