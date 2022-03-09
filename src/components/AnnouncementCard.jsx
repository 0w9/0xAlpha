import React from 'react'
import { 
    Card, 
    CardBody, 
    CardTitle, 
    CardSubtitle, 
    CardText  
} from 'reactstrap'


function AnnouncementCard(props) {
    let date = new Date()

  return (
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5"> {props.name} </CardTitle>
          <CardText>{props.announcement}</CardText>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            { date.getMonth() + "-" +  date.getDate() + "-" + date.getFullYear()}
          </CardSubtitle>
        </CardBody>
      </Card>
    </div>
  )
}

export default AnnouncementCard
