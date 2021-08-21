<script>
import listPanel from "@/component/list-panel/list-panel.vue";
import AMapLoader, { load } from "@amap/amap-jsapi-loader";

export default {
  name: "plan",
  data() {
    return {
      MapCtr: null,
      map: null,
    };
  },
  methods: {
    backCenter () {
      this.map.setCenter([116.400274, 39.905812]); // setCenter 和 setZoomCenter 的区别，不传入缩放级别
    },
    useMouseTool (AMap) {
      return new AMap.MouseTool(this.map);
    },
    initMap() {
      const loadOptions = {
        key: "172e1009e7cb82791898756e6d0ba14b",
        version: "2.0",
        plugins: ['AMap.PolyEditor', "AMap.Scale", "AMap.MouseTool"]
      };
      AMapLoader.load(loadOptions).then((AMap) => {
        this.MapCtr = AMap;
        
        this.map = new AMap.Map("map-container", {
          center: [116.400274, 39.905812],
          zoom: 14,
          animateEnable: false
        });
        const path = [
            [116.403322, 39.920255],
            [116.410703, 39.897555],
            [116.402292, 39.892353],
            [116.389846, 39.891365]
        ];

        const mouseTool = this.useMouseTool(AMap);

        const drawPolygon = mouseTool.polygon({
          strokeColor: "#FF33FF",
          fillColor: "#1791fc",
          fillOpacity: 0.4,
          strokeOpacity: 0.2,
        });

        const overlay  = [];
        mouseTool.on("draw", function (e) {
            console.log(e.obj.getPath());
            overlay.push(e.obj);
        });

        mouseTool.on("end", function () {
          console.log("绘制结束");
        });

        // --------------------
        // 构造一个多边形
        const polygon = new AMap.Polygon({
          path: path,
          strokeColor: "#FF33FF",
          strokeWeight: 6,
          strokeOpacity: 0.2,
          fillOpacity: 0.4,
          fillColor: "#1791fc",
          zIndex: 50,
        });

        const polygonEditor = new AMap.PolyEditor(this.map, polygon);

        polygonEditor.open();
        this.map.addControl(new AMap.Scale());

        this.map.add(polygon); // add方法是添加覆盖物, addControl是添加控件
        this.map.setFitView([polygon]);
      });
    },
  },
  mounted() {
    this.initMap();
  },
  beforeDestroy() {
    this.map.destroy();
    this.map = null;
  },
  render() {
    return (
      <div class="map-box">
        <button onClick={this.backCenter}>回到中心</button>
        <div id="map-container"></div>
      </div>
    );
  },
};
</script>

<style scoped lang="scss">
.map-box {
  height: 100%;
  position: relative;
}

button {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 9;
}

#map-container {
  height: 100%;
}
</style>