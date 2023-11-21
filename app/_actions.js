'use server'

import { sendEmail } from "@/libs/email"
import { revalidatePath } from "next/cache"

export const sendEmailAction = async (email, message, name, subject) => {
    await sendEmail(email, message, name, subject)
    revalidatePath("/")
}
