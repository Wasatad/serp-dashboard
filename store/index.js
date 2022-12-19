import Vuex from "vuex";

const store = () => {
  return new Vuex.Store({
    state: {
      //Состояния (фильтры)
      keysQty: 0,
      visibility: {
        now: 0,
        diff: 0,
      },
      position: 0,
      trend: 0,

      // Список ключей в таблице, группы и теги проекта
      tableData: [
        {
          phrase: "купить",
          // position: "1",
          position: { now: 1, diff: 2 },
          freq: 120000,
          trend: 5,
          commerce: 5,
          impurities: ["yam"],
          url: "exist.ru",
        },
        {
          phrase: "недорого",
          position: { now: 2, diff: -2 },
          freq: 80000,
          trend: -2,
          commerce: 2,
          impurities: ["ozon", "fb"],
          url: "",
        },
        {
          phrase: "москва",
          position: { now: 3, diff: 0 },
          freq: 2400,
          trend: 3,
          commerce: 40,
          impurities: [],
          url: "auto-parts-best-market-super-low-prices-very-very-long-url.ru",
        },
      ],

      groups: [
        { value: "скидки", label: "Скидки" },
        { value: "ремонт", label: "Ремонт" },
        { value: "разное", label: "Разное" },
      ],
      tags: [
        { value: "техобслуживание", label: "техобслуживание" },
        { value: "дтп", label: "дтп" },
        { value: "аналоги", label: "аналоги" },
        { value: "импорт", label: "импорт" },
      ],

      //Данные для графиков
      topThreeData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [30, 70],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 2399,
        keysDiff: "",
        percentDiff: "",
      },
      topFiveData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [27, 73],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 2399,
        keysDiff: 25,
        percentDiff: 1.5,
      },
      topTenData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [28, 72],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 10343,
        keysDiff: -25,
        percentDiff: -1.5,
      },

      topThirtyData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [35, 65],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 122993,
        keysDiff: -2000,
        percentDiff: -2,
      },
      topFiftyData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [15, 85],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 11393,
        keysDiff: 230,
        percentDiff: 4,
      },
      topHundredData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [50, 50],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 443,
        keysDiff: -556,
        percentDiff: -150,
      },
      upHundredData: {
        chartJS: {
          labels: ["0", "0"],
          datasets: [
            {
              data: [25, 75],
              backgroundColor: ["#FF0035", "#EEEEEE"],
            },
          ],
        },
        keysTotal: 123553,
        keysDiff: 1004,
        percentDiff: 16,
      },

      // Индикатор загрузки
      downloadingInProcess: false,
    },
    mutations: {
      dataDownloader(state) {
        // Генерация рандомных значений для демки
        function randomInteger(min, max) {
          let rand = min + Math.random() * (max + 1 - min);
          return Math.floor(rand);
        }

        state.keysQty = randomInteger(1500, 250000);
        state.visibility.now = randomInteger(0, 100);
        state.visibility.diff = randomInteger(-50, 50);
        state.position = randomInteger(0, 100);
        state.trend = randomInteger(-50, 50);
      },
    },
    actions: {
      async getDataFromServer(context) {
        context.state.downloadingInProcess = true;
        return new Promise((resolve, reject) => {
          setTimeout(() => {
            context.commit("dataDownloader");
            context.state.downloadingInProcess = false;
            console.log(context.state.downloadingInProcess);
            resolve();
          }, 3000);
        });
      },
    },
  });
};

export default store;
