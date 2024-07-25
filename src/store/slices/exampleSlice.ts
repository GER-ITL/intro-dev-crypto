import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchExampleData = createAsyncThunk(
	'example/fetchData',
	async () => {
		const response = await axios.get('https://api.example.com/data')
		return response.data
	}
)

const exampleSlice = createSlice({
	name: 'example',
	initialState: {
		data: [],
		status: 'idle',
		error: null,
	},
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(fetchExampleData.pending, state => {
				state.status = 'loading'
			})
			.addCase(fetchExampleData.fulfilled, (state, action) => {
				state.status = 'succeeded'
				state.data = action.payload
			})
		// .addCase(fetchExampleData.rejected, (state, action) => {
		//   state.status = 'failed';
		//   state.error = action.error.message;
		// });
	},
})

export default exampleSlice.reducer
