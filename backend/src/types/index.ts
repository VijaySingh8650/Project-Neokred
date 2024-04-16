import {z} from "zod";

export const ZRequestBody = z.object({
    text: z.string()
});

