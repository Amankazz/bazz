import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBatteryData = createAsyncThunk(
  "battery/fetchData",
  async () => {
    try {
      const response = await fetch("https://dev.electorq.com/dummy/battery");
      const batteryData = await response.json();
      const data = JSON.parse(batteryData.body);
      return data;
    } catch (error) {
      console.error(error);
    }
  }
);

const batterySlice = createSlice({
  name: "battery",
  initialState: {
    data: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBatteryData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBatteryData.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBatteryData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default batterySlice.reducer;
