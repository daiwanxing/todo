import AMapLoader from "@amap/amap-jsapi-loader";


class AMap {
    static getBaseLoaderOptions () {
        return {
            key: "172e1009e7cb82791898756e6d0ba14b",
            version: "2.0",
            AMapUI: {
                version: "1.1",
                plugins: ['overlay/SimpleMarker']
            }
        };
    }
    constructor (loaderOptions = {}) {
        this.loaderOptions = loaderOptions;
        this.MapCtr = null;
        this.mapInstance = null;
        this.overlayMap = new Map(); // 覆盖物列表, 用于地图销毁之前解绑事件
    }
    async mountMap (selector, mapOptions) {
        this.MapCtr = await AMapLoader.load(Object.assign(AMap.getBaseLoaderOptions(), this.loaderOptions));


        this.mapInstance = new this.MapCtr.Map(selector, mapOptions);
        new AMapUI.SimpleMarker({
            //前景文字
            iconLabel: {
                innerHTML: "<span style='color: white;font-size: 14px'>热</span>"
            },
            //图标主题
            iconTheme: 'default',
            //背景图标样式
            iconStyle: 'blue',
            position: this.mapInstance.getCenter(),
            map: this.mapInstance,
            showPositionPoint: true
        });
    }
    /**
     * @param { string | {name: string; options: string}[] } control 控件名
     * @param {object} controlOptions
     */
    addControls (control, controlOptions) {
        if (Array.isArray(control)) {
            control.forEach(({ name, options}) => {
                this.mapInstance.addControl(new this.MapCtr[map](options));
            });
        } else {
            this.mapInstance.addControl(new this.MapCtr[control](controlOptions));
        }
    }
    addOverlay () {

    }
    addLayer () {

    }
    unMountMap () {
        for (let [overlay, {name, handler}] of this.overlayMap) {
            overlay.off(name, handler);
        }
        this.mapInstance.clearMap();
        this.mapInstance.destroy();
    }
}

export default AMap;