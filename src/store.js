import { create } from "zustand";




export const  useStore = create()((set)=>{
    return {
        userSlise:{
            allUsers:[],
            loadUsers:(users)=>{
                return set (state =>({
                    ...state,
                    userSlice:{
                        ...state.userSlice,
                        allUsers:users,

                    }
                }))
            }
        }
    }
})