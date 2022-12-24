import { configureStore } from "@reduxjs/toolkit";

import SpaceApi from "./SpaceApi";

const store = configureStore({
    reducer:{
        api: SpaceApi,
    },
    devTools: false,
})

export default store;