import { StateSchema } from "@/app/providers/store/config/StateSchema";

export const getNewMessage = (state: StateSchema) => state.newMessage.message;