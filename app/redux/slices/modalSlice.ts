import LogInModal from '@/components/modals/LoginModal';
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
SignUpModalOpen: false,
logInModalOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
  openSignUpModal: (state) => {
    state.SignUpModalOpen = true
  },
  closeSignUpModal: (state) => {
    state.SignUpModalOpen = false
  },
   openLogInModal: (state) => {
    state.logInModalOpen = true
  },
  closeLogInModal: (state) => {
    state.logInModalOpen = false
  },
},
});

export const {openSignUpModal,closeSignUpModal,openLogInModal,closeLogInModal} = modalSlice.actions

export default modalSlice.reducer