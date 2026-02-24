"use client"

import { Github, TrendingUp } from "lucide-react"

import { useCrimeStore } from "@/stores/crimes"

import { CrimeList } from "../CrimeList"
import { Badge } from "../ui/badge"
import { Button } from "../ui/button"
import { Card, CardAction, CardDescription, CardFooter, CardHeader, CardTitle } from "../ui/card"
import { Separator } from "../ui/separator"

export const Sidebar = () => {
  const crimes = useCrimeStore((state) => state.crimes)

  return (
    <div className="flex-1 flex flex-col animate-in slide-in-from-right bg-sidebar">
      <h2 className="text-sm uppercase font-bold opacity-60 px-8 pb-2">Statistics</h2>
      <div className="grid grid-cols-2 gap-4 px-8">
        <Card>
          <CardHeader className="flex flex-col">
            <CardDescription>Total Crimes</CardDescription>
            <CardTitle className="font-semibold tabular-nums text-3xl">{crimes.length}</CardTitle>
            <CardAction>
              <Badge variant="outline">
                <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                +12.5%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>
        <Card>
          <CardHeader className="flex flex-col">
            <CardDescription>Unsolved</CardDescription>
            <CardTitle className="font-semibold tabular-nums text-3xl">
              {crimes.filter((crime) => !crime.outcome_status).length}
            </CardTitle>
            <CardAction>
              <Badge variant="outline">
                <TrendingUp className="mr-2 h-4 w-4 text-red-500" />
                -8.3%
              </Badge>
            </CardAction>
          </CardHeader>
        </Card>
      </div>
      {crimes.length ? (
        <>
          <div className="flex-1 overflow-y-auto py-8">
            <CrimeList />
          </div>
        </>
      ) : (
        <div className="flex-1 flex items-center justify-center">
          <p>No results.</p>
        </div>
      )}
    </div>
  )
}
