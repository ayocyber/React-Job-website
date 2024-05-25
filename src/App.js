import React from "react";
import UseFetchJobs from "./UseFetchJobs";
import {Container} from "react-bootstrap"
import Job from "./Job";
import JobsPagination from "./JobsPagination";
import SearchForms from "./SearchForms";
function App() {
  const [params , setParams ] = React.useState({})
  const [page , setPage] = React.useState(1 )
  const {jobs , loading , error , hasNextPage} = UseFetchJobs(params , page)
 
 function handleParamChange(e){
  const param = e.target.name
  const value = e.target.value
  setPage(1)
  setParams(prevPrams => {
    return {...prevPrams, [param] : value}
  })
 }
  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs</h1>
      <SearchForms params={params} onParamChange={handleParamChange}/>
      <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
      {loading && <h1>Loading....</h1>}
      {error && <h1>Error. Try Refreshing.</h1>}
      {jobs.map((job)=>{
        return <Job key={job.id} job={job}></Job>
      })}
        <JobsPagination page={page} setPage={setPage} hasNextPage={hasNextPage}/>
    </Container>
  );
}

export default App;