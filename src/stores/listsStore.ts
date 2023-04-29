import { defineStore } from "pinia";
import { MAIN_LISTS } from "../constants";

export const useListsStore = defineStore("lists", {
  state: () => ({
    selectedList: MAIN_LISTS[0],
  }),

  actions: {
    setSelectedList(list: object) {
      this.selectedList = list as selectedList;
    },
  },
});

interface selectedList {
  NAME: string;
  DISPLAY: string;
}
