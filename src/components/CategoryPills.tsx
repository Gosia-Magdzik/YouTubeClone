import { Button } from './Button'

const CategoryPills = () => {
  return (
    <div className='overflow-x-hidden relative'>
      <div className='flex whitespace-nowrap gap-3 transition-transform w-[max-content]'>
        <Button>All</Button>
      </div>
    </div>
  )
}

export default CategoryPills