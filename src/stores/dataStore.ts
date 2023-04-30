import { defineStore } from "pinia";
import {
  getAPITopRatedList,
  getAPIPopularList,
  getAPIOnTVList,
  getAPIAiringTodayList,
} from "../api.ts";

interface SelectedList {
  NAME: string;
  DISPLAY: string;
  URL: string;
  API_URL: string;
}

interface ListsData {
  topRated: Object | null;
  popular: Object | null;
  onTV: Object | null;
  airingToday: Object | null;
}

export const useDataStore = defineStore("data", {
  state: (): { listsData: ListsData; selectedList: SelectedList } => ({
    listsData: {
      topRated: null,
      popular: null,
      onTV: null,
      airingToday: null,
    },
    selectedList: { NAME: "", DISPLAY: "", URL: "", API_URL: "" },
  }),

  actions: {
    setSelectedList(list: object) {
      this.selectedList = list as SelectedList;
    },

    // this action will be called only for those components that need all the lists (the Homepage for example)
    async getListsData() {
      if (this.listsData.topRated === null) {
        try {
          this.listsData.topRated = await getAPITopRatedList();
        } catch (error) {
          console.log(error);
        }
      }

      if (this.listsData.popular === null) {
        try {
          this.listsData.popular = await getAPIPopularList();
        } catch (error) {
          console.log(error);
        }
      }

      if (this.listsData.onTV === null) {
        try {
          this.listsData.onTV = await getAPIOnTVList();
        } catch (error) {
          console.log(error);
        }
      }

      if (this.listsData.airingToday === null) {
        try {
          this.listsData.airingToday = await getAPIAiringTodayList();
        } catch (error) {
          console.log(error);
        }
      }
    },

    // this action will check if we already have the selected list data in listsData state
    // if we don't have the specific list, will fetch that list specifically
    // and set that lists specifically on listsData state to keep it for later
    async getSelectedListData(listName: string) {
      // cases are the same as from MAIN_LISTS[index].NAME on constants.ts
      switch (listName) {
        case "TOP_RATED":
          if (this.listsData.topRated !== null) {
            return this.listsData.topRated;
          } else {
            try {
              this.listsData.topRated = await getAPITopRatedList();
              return this.listsData.topRated;
            } catch (error) {
              console.error(error);
            }
          }
          break;

        case "POPULAR":
          if (this.listsData.popular !== null) {
            return this.listsData.popular;
          } else {
            try {
              this.listsData.popular = await getAPIPopularList();
              return this.listsData.popular;
            } catch (error) {
              console.error(error);
            }
          }
          break;

        case "ON_TV":
          if (this.listsData.onTV !== null) {
            return this.listsData.onTV;
          } else {
            try {
              this.listsData.onTV = await getAPIOnTVList();
              return this.listsData.onTV;
            } catch (error) {
              console.error(error);
            }
          }
          break;

        case "AIRING_TODAY":
          if (this.listsData.airingToday !== null) {
            return this.listsData.airingToday;
          } else {
            try {
              this.listsData.airingToday = await getAPIAiringTodayList();
              return this.listsData.airingToday;
            } catch (error) {
              console.error(error);
            }
          }
          break;
      }
    },
  },
});
