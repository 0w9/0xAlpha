import React from 'react'
import { 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText  
} from 'reactstrap'
import './AnnouncementCard.css'

function AnnouncementCard(props) {
    let date = new Date()

  return (
    <div >
      <Card className='card'>
        <CardBody>
          <CardTitle className="title" tag="h5"> {props.name} </CardTitle>
          <CardText>{props.announcement}</CardText>
          <CardSubtitle className="date mb-2 text-muted" tag="h6">
            { date.getMonth() + "-" +  date.getDate() + "-" + date.getFullYear() + " " + "at" + " " + date.toLocaleTimeString()}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}

export default AnnouncementCard
