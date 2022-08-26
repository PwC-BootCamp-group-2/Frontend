// Account info slice
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { CreateSpaceType } from '../../types/form';
import { SpaceType } from '../../types/redux';
import spaceService from './spaceService';

const initialState: SpaceType = {
  // All spaces
  spaces: [],
  // Single Space
  space: [],
  // All Merchant Spaces
  merchantSpaces: [],
  location: "",
  type: "large space",
  price: "0",
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
};

// Create new Space
export const createSpace = createAsyncThunk(
  'space/create',
  async (spaceData: CreateSpaceType, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      
      const response = await spaceService.createSpace(
        spaceData,
        token
      );
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get All Spaces
export const getAllSpaces = createAsyncThunk(
  'space/getspace',
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const response = await spaceService.getAllSpaces(token);
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get All Spaces
export const getSingleSpace = createAsyncThunk(
  'space/getAll',
  async (spaceId: any, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const response = await spaceService.getSingleSpace(spaceId, token);
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// Get Merchant Spaces
export const getMerchantSpaces = createAsyncThunk(
  'space/getspaces',
  async (_, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const id = thunkAPI.getState().auth.user.data.id;
      const response = await spaceService.getMerchantSpaces(id, token);
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// // Update Space
// export const updateSpace = createAsyncThunk(
//   'space/update',
//   async (spaceData: CreateSpaceType, thunkAPI: any) => {
//     try {
//       const token = thunkAPI.getState().auth.user.token;
//       const response = await spaceService.updateMerchantSpace(spaceId, token);
//       return response;
//     } catch (error: any) {
//       const message =
//         (error.response &&
//           error.response.data &&
//           error.response.data.message) ||
//         error.message ||
//         error.toString();
//       return thunkAPI.rejectWithValue(message);
//     }
//   }
// );

// Delete Space
export const deleteSpace = createAsyncThunk(
  'space/delete',
  async (spaceId: string, thunkAPI: any) => {
    try {
      const token = thunkAPI.getState().auth.user.token;
      const response = await spaceService.deleteMerchantSpace(spaceId, token);
      return response;
    } catch (error: any) {
      const message =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

// createSpace,
//   getAllSpaces,
//   getSingleSpace,
//   getMerchantSpaces,
//   updateMerchantSpace,
//   deleteMerchantSpace,
export const spaceSlice = createSlice({
  name: 'space',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = '';
    },
    setType: (state, action) => {
      state.type = action.payload;
      return state;
    },
    setLocation: (state, action) => {
      state.location = action.payload;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(createSpace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createSpace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.spaces.push(action.payload);
      })
      .addCase(createSpace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getAllSpaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getAllSpaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.spaces = action.payload.data;
      })
      .addCase(getAllSpaces.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getSingleSpace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getSingleSpace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.space = action.payload.data;
      })
      .addCase(getSingleSpace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(getMerchantSpaces.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getMerchantSpaces.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.merchantSpaces = action.payload;
      })
      .addCase(getMerchantSpaces.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
      })
      .addCase(deleteSpace.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteSpace.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.spaces = state.spaces.filter(
        //filter using the action.payload.id
          (item: any) => item._id !== action.payload.id
        );
      })
      .addCase(deleteSpace.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        // state.accountInfos = action.payload;
      });
  },
});

export const { reset, setType, setLocation, setPrice } = spaceSlice.actions;
export default spaceSlice.reducer;
