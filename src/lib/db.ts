import { PrismaClient } from "../generated/prisma/client"
import { PrismaPg } from "@prisma/adapter-pg"
import { Pool } from "pg"

const prismaClientSingleton = () => {
  let url = process.env.DATABASE_URL
  console.log(`[PRISMA_INIT] Initializing with URL protocol: ${url?.split(':')[0]}`)

  if (url?.startsWith("prisma+postgres://")) {
    try {
      const urlObj = new URL(url)
      const apiKey = urlObj.searchParams.get("api_key")
      if (apiKey) {
        const decoded = JSON.parse(Buffer.from(apiKey, 'base64').toString())
        if (decoded.databaseUrl) {
          console.log("[PRISMA_INIT] Decoded underlying database URL from api_key.")
          url = decoded.databaseUrl
        }
      }
    } catch (e) {
      console.error("[PRISMA_INIT] Failed to decode api_key:", e)
    }
  }

  try {
    const pool = new Pool({ connectionString: url })
    const adapter = new PrismaPg(pool)
    console.log("[PRISMA_INIT] Success: Adapter created.")
    return new PrismaClient({ adapter })
  } catch (err: any) {
    console.error("[PRISMA_INIT] Crisis: Failed to create client:", err.message)
    // Fallback to empty client to prevent total crash if possible, or just rethrow
    throw err
  }
}



declare global {
  var prisma: undefined | ReturnType<typeof prismaClientSingleton>
}

// In development, we want to make sure we always have a fresh client if we just updated the code
if (process.env.NODE_ENV !== "production") {
    // Force recreation if it was an old-style client
    // @ts-ignore
    if (globalThis.prisma && !(globalThis.prisma as any).adapter) {
        console.log("[PRISMA_INIT] Clearing old engine-based client from globalThis.")
        globalThis.prisma = undefined
    }
}

const prisma = globalThis.prisma ?? prismaClientSingleton()

export default prisma

if (process.env.NODE_ENV !== "production") globalThis.prisma = prisma
