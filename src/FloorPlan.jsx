import Kitchen from './Kitchen'
import Bath from './Bath'
import Bedroom from './Bedroom'
import LivingRoom from './LivingRoom'

function FloorPlan(props) {
return(
    <div>
      <Bedroom bedNum={'1st'} />
      <Kitchen />
      <Bath size={'Full'} />
      <Bedroom bedNum={'2nd'} />
      <LivingRoom />
      <Bath size={'Half'} />
      <Bedroom bedNum={'3rd'} />
    </div>
)

}

export default FloorPlan;