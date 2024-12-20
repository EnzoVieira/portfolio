import { defineEnableDraftMode } from "next-sanity/draft-mode";
import { client } from "@/sanity/lib/client";
import { token } from "@/sanity/lib/token";

// FIXME: For some reason, draft mode is not working

export const { GET } = defineEnableDraftMode({
  client: client.withConfig({ token }),
});
