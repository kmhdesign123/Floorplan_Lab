import Kitchen from './Kitchen'
import Bath from './Bath'
import Bedroom from './Bedroom'
import LivingRoom from './LivingRoom'

const FloorPlan = (props) => {

    <div>
      {props.rooms.map(room =>
        <Bedroom key={room.size} room={room}/>
      )}
      <Kitchen />
      <Bath/>
      <LivingRoom/>
    </div>

}

export default FloorPlan;