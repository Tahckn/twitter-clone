import store from "@/store"
import {_setCurrentAccount} from "@/store/auth/index.ts";

export const setCurrentAccount = (data: {
    id: number;
    username: string;
    avatarUrl: string;
    fullName: string;
}) => store.dispatch(_setCurrentAccount(data))