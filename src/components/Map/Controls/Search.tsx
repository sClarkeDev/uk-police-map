"use client"

import { Geocoder } from "@mapbox/search-js-react"
import { useState } from "react"

import { useMapStore } from "@/stores/map"

export const Search = () => {
  const map = useMapStore((state) => state.map)
  const [searchInput, setSearchInput] = useState("")

  return (
    <form className="pointer-events-auto">
      <Geocoder
        theme={{
          variables: {
            colorBackground: "var(--background)",
            colorText: "var(--foreground)",
            colorPrimary: "var(--foreground)",
            colorSecondary: "var(--muted-foreground)",
            border: "1px solid var(--input)",
            colorBackgroundHover: "var(--accent)",
            colorBackgroundActive: "var(--muted)",
            colorBackdrop: "var(--background)/0.8",
            boxShadow: undefined,
            fontWeight: "500",
            unit: "16px",
            borderRadius: "0.75rem",
          },
        }}
        placeholder="Search"
        value={searchInput}
        onChange={setSearchInput}
        accessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN as string}
        onRetrieve={(res) =>
          map?.flyTo(
            [Number(res.geometry.coordinates[1]), Number(res.geometry.coordinates[0])],
            17,
            {
              animate: true,
            }
          )
        }
      />
    </form>
  )
}
