import React from 'react'
import { Card, CardBody, CardTitle, CardSubtitle, Badge, CardText, Button, Collapse } from 'react-bootstrap'
import ReactMarkdown from "react-markdown"
const Job = ({job}) => {
    const [open , setOpen] = React.useState(false)
  return (
    <Card className='mb-3'>
        <CardBody>
            <div className='d-flex justify-content-between '>
                <div>
                    <CardTitle>
                        {job.title} - <span className='text-muted
                        font-weight-light'>{job.coompany}</span>
                    </CardTitle>
                    <CardSubtitle className='text-muted mb-2'>
                        {new Date(job.created_at).toLocaleDateString()}
                    </CardSubtitle>
                    <Badge variant="secondary" className='mr-2 '>{job.type}</Badge>
                    <Badge variant="secondary">{job.location}</Badge>
                    <div style={{wordBreak: "break-all"}}>
                        <ReactMarkdown source={job.how_to_apply}/>
                    </div>
                </div>  
                <img className='d -none d-md-block' height="50" src={job.company_logo} alt={job.company}/>
            </div>
            <CardText>
                <Button 
                onClick={()=>setOpen(preOpen =>!preOpen)}
                 variant='primary'
                 >
                {open ? "Hide Details" : "View details"}
                </Button>
            </CardText>
            <Collapse in={open}>
            <div className='mt-4'>
                <ReactMarkdown source={job.description}/>
            </div>
            </Collapse>
        </CardBody>
    </Card>
  )
}

export default Job
