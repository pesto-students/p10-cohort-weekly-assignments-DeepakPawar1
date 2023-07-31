import {createSlice , createAsyncThunk } from "@reduxjs/toolkit";
const { Configuration, OpenAIApi } = require("openai");

//create action
export const createWorkoutPlan = createAsyncThunk(
    "createUser",async (data,{rejectWithValue})=>{
        console.log(process.env.OPENAI_API_KEY);
    const configuration = new Configuration({
        apiKey: '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',
      });
    const openai = new OpenAIApi(configuration);

    try {
        const result = await openai.createChatCompletion({
          model: "gpt-3.5-turbo",
          messages: [
            {
              "role": "user",
              "content": data
            }
        ],
          temperature: 1,
          max_tokens: 4000,
          top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        });

       
        const messageContent = result.data.choices[0].message.content;
        console.log(messageContent);
        return messageContent;

      } catch (e) {
        
        return rejectWithValue(e);
      }
}
)

export const userDetail = createSlice({
    name: "userDetail",
    initialState: {
        detail:"",
        loading: false,
        error: null
    },
    extraReducers:{
        [createWorkoutPlan.pending]:(state)=>{
            state.loading = true;
        },
        [createWorkoutPlan.fulfilled]: (state,action) =>{
            state.loading = false;
            state.detail = action.payload
        },
        [createWorkoutPlan.rejected]: (state,action) =>{
          
            state.loading = false;
            state.detail = action

        }
    }
})

export default userDetail.reducer;