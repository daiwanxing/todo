export const baseMenu = [
    {
        id: 1,
        name: "我的一天",
        icon: "sun",
        works: 0
    },
    {
        id: 2,
        name: "重要",
        icon: "bolt",
        works: 0
    },
    {
        id: 3,
        name: "计划内",
        icon: "calendar-alt",
        works: 0
    },
    {
        id: 4,
        name: "已分配给我",
        icon: "clock",
        works: 0
    },
    {
        id: 5,
        name: "任务",
        icon: "tasks",
        works: 0
    }
]


if (localStorage.getItem("baseMenu") === null ) {
    JSON.stringify(baseMenu);
} else {

}