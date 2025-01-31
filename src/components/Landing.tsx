import { ArrowDownRight } from 'lucide-react'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Link } from 'react-router'

const Landing = () => {
  return (
    <section className="py-32">
      <div className="container">
        <div className="grid items-center gap-8 lg:grid-cols-2">
          <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
            <Badge variant="outline">
              New family promotions
              <ArrowDownRight className="ml-2 size-4" />
            </Badge>
            <h1 className="my-6 text-pretty text-4xl font-bold lg:text-6xl">
              <span className="block">Welcome to</span>
              <span className="block">Burger Land</span>
            </h1>
            <p className="mb-8 max-w-xl text-muted-foreground lg:text-xl">
              The ultimate amusement park where every twist, turn, and tantalizing scent is infused
              with pure playfulness!
            </p>
            <div className="flex w-full flex-col justify-center gap-2 sm:flex-row lg:justify-start">
              <Link to="/start">
                <Button className="w-full sm:w-auto">Buy tickets</Button>
              </Link>
            </div>
          </div>
          <img
            src="https://shadcnblocks.com/images/block/placeholder-1.svg"
            alt="placeholder hero"
            className="max-h-96 w-full rounded-md object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Landing
