<script>
import AMapLoader from "@amap/amap-jsapi-loader";
import AMap from "@/utils/AMap.js";

const map = null;

export default {
  name: "plan",
  data () {
    const data = {};
    Object.defineProperty(data, "map", {
      configurable: false
    });
    return data;
  },
  methods: {
    backCenter () {
      this.map.setCenter([116.400274, 39.905812]); // setCenter 和 setZoomCenter 的区别，不传入缩放级别
    },
    useMouseTool (AMap) {
      return new AMap.MouseTool(this.map);
    },
    async initMap() {
      const map = new AMap({
        plugins: ['AMap.Scale', 'AMap.PolygonEditor', 'AMap.MouseTool']
      });

      this.$once("hook:beforeDestroy", function () {
        map.unMountMap();
      });

      await map.mountMap("map-container", {
          center: [116.400274, 39.905812],
          zoom: 14,
      });
      const { MapCtr, mapInstance } = map;
      this.map = mapInstance;
      const path = [
          [116.403322, 39.920255],
          [116.410703, 39.897555],
          [116.402292, 39.892353],
          [116.389846, 39.891365]
      ];

        const mouseTool = new MapCtr.MouseTool(mapInstance);
        // 用mouseTool.polygon通过传入的options配置绘制的多边形样式
        const drawPolygon = mouseTool.polygon({
          strokeColor: "#FF33FF",
          fillColor: "#1791fc",
          fillOpacity: 0.4,
          strokeOpacity: 0.2,
        });

        const overlay  = [];
        mouseTool.on("draw", function (e) {
            // console.log(e.obj.getPath());
            // overlay.push(e.obj);
            mouseTool.close();
        });

        mouseTool.on("end", function () {
          mouseTool.close();
        });

        mapInstance.on("zoomchange", (e) => {
          // 监听地图缩放
        });
        const polygon = new map.MapCtr.Polygon({
          path: path,
          strokeColor: "#FF33FF",
          strokeWeight: 6,
          strokeOpacity: 0.2,
          fillOpacity: 0.4,
          fillColor: "#1791fc",
          zIndex: 50,
        });

        const handler = () => {
          alert("you are click me");
        };
        polygon.on("click", handler);
        map.overlayMap.set(polygon, {
          name: "click",
          handler
        });

        // const polygonEditor = new map.MapCtr.PolygonEditor(map.mapInstance, polygon);
        // polygonEditor.open();
        map.addControls("Scale");

        map.mapInstance.add(polygon); // add方法是添加覆盖物, addControl是添加控件
        map.mapInstance.setFitView([polygon]);
    },
  },
  mounted() {
    console.log(this.map);
    this.initMap();
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