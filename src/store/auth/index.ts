import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    currentAccount: {
        id: 1,
        username: "tahckn",
        avatarUrl: "https://pbs.twimg.com/profile_images/1261774394222919683/ZU2GC-1e_400x400.png",
        fullName: "taha"
    },
    accounts: [
        {
            id: 1,
            username: "tahckn",
            avatarUrl: "https://pbs.twimg.com/profile_images/1261774394222919683/ZU2GC-1e_400x400.png",
            fullName: "taha"
        },
        {
            id: 2,
            username: "tahckn2",
            avatarUrl: "https://pbs.twimg.com/profile_images/1653447691588993024/_eUs1sVI_400x400.jpg",
            fullName: "taha"
        },
    ],
}

const auth = createSlice({
    name: "auth",
    initialState,
    reducers: {
        // state manipulations
        _addAccount: (state, action) => {
            state.accounts.push(action.payload)
        },
        _removeAccount: (state, action) => {
            state.accounts = state.accounts.filter(account => account.id !== action.payload)
            if (state.currentAccount && action.payload === state.currentAccount.id) {
                _setCurrentAccount(false)
            }
        },
        _setCurrentAccount: (state, action) => {
            state.currentAccount = action.payload
        }
    }
})

export const {_addAccount, _removeAccount, _setCurrentAccount} = auth.actions
export default auth.reducer